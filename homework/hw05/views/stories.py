import json

from flask import Response
from flask_restful import Resource

from models.story import Story
from views import get_authorized_user_ids


class StoriesListEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user


    def get(self):
        user_ids = get_authorized_user_ids(self.current_user)
        stories = Story.query.filter(Story.user_id.in_(user_ids)).all()
        data = [s.to_dict() for s in stories]
        return Response(
            json.dumps(data),
            mimetype="application/json",
            status=200
        )



def initialize_routes(api, current_user):
    api.add_resource(
        StoriesListEndpoint,
        "/api/stories",
        "/api/stories/",
        resource_class_kwargs={"current_user": current_user},
    )
