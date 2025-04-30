from dotenv import load_dotenv

load_dotenv()
import os

from flask import Flask, render_template, request
from flask_cors import CORS
from flask_restful import Api

from models import db
from models.api_navigator import ApiNavigator
from models.user import User
from views import initialize_routes
from views.likes import LikePostListEndpoint, LikePostDetailEndpoint


app = Flask(__name__)


cors = CORS(app, resources={r"/api/*": {"origins": "*"}}, supports_credentials=True)

app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DB_URL")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False


db.init_app(app)
api = Api(app)


# order matters here (needs to come after DB init line)
with app.app_context():
    current_user = User.query.filter_by(id=12).one()


# Initialize routes for all of your API endpoints:
initialize_routes(api, current_user)

api.add_resource(
    LikePostListEndpoint,
    "/api/posts/likes",
    "/api/posts/likes/",
    resource_class_kwargs={"current_user": current_user},
)

api.add_resource(
    LikePostDetailEndpoint,
    "/api/posts/likes/<int:id>",
    "/api/posts/likes/<int:id>/",
    resource_class_kwargs={"current_user": current_user},
)



@app.route("/")
def home():
    return "Your API!"


@app.route("/api")
@app.route("/api/")
def api_docs():

    navigator = ApiNavigator(current_user)
    return render_template(
        "api/api-docs.html",
        user=current_user,
        endpoints=navigator.get_endpoints(),
        access_token="<YOUR_ACCESS_TOKEN>",  # to be done later
        csrf="<YOUR_CSRF>",  # to be done later
        url_root=request.url_root[0:-1],  # trim trailing slash
    )


# enables flask app to run using "python3 app.py"
if __name__ == "__main__":
    app.run()
