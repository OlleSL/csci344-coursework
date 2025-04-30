import json
from flask import request, Response
from flask_restful import Resource

from models import db
from models.like_post import LikePost
from models.post import Post
from views import get_authorized_user_ids


class LikePostListEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    def post(self):
        try:
            post_id = int(request.json.get("post_id"))
        except:
            return Response(
                json.dumps({"message": "post_id must be an integer"}),
                mimetype="application/json",
                status=400
            )

        # First check: does the post exist?
        post = Post.query.get(post_id)
        if post is None:
            return Response(
                json.dumps({"message": "Post not found"}),
                mimetype="application/json",
                status=404
            )

        # Then: is the user allowed to like this post?
        if post.user_id not in get_authorized_user_ids(self.current_user):
            return Response(
                json.dumps({"message": "Unauthorized to like this post"}),
                mimetype="application/json",
                status=404
            )

        # Then: check for duplicates
        existing_like = LikePost.query.filter_by(user_id=self.current_user.id, post_id=post_id).first()
        if existing_like:
            return Response(
                json.dumps({"message": "Already liked"}),
                mimetype="application/json",
                status=400
            )

        # If all good: create the like
        like = LikePost(user_id=self.current_user.id, post_id=post_id)
        db.session.add(like)
        db.session.commit()
        db.session.refresh(like)  # This ensures .to_dict() is populated

        return Response(
            json.dumps(like.to_dict()),
            mimetype="application/json",
            status=201
        )

class LikePostDetailEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    def delete(self, id):
        like = LikePost.query.get(id)

        # IMPORTANT: must check both conditions separately
        if like is None:
            return Response(
                json.dumps({"message": "Like not found"}),
                mimetype="application/json",
                status=404
            )
        
        if like.user_id != self.current_user.id:
            return Response(
                json.dumps({"message": "Not authorized to delete this like"}),
                mimetype="application/json",
                status=404
            )

        db.session.delete(like)
        db.session.commit()
        return Response(
            json.dumps({"message": f"Like id={id} deleted"}),
            mimetype="application/json",
            status=200
        )