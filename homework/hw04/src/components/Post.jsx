import React, { useEffect, useState } from "react";
import LikeButton from "./LikeButton";
import BookmarkButton from "./BookmarkButton";
import AddComment from "./AddComment";
import { getDataFromServer } from "../server-requests";

export default function Post({ post, token }) {
    const [currentPost, setCurrentPost] = useState(post);

    async function refreshPost() {
        const updated = await getDataFromServer(token, `/api/posts/${post.id}`);
        setCurrentPost(updated);
    }

    useEffect(() => {
        setCurrentPost(post);
    }, [post]);

    const { user, image_url, caption, comments, likes } = currentPost;

    return (
        <article className="bg-white border rounded-md">
            <header className="flex items-center gap-4 p-4">
                <img
                    src={user.thumb_url}
                    alt={`${user.username}'s avatar`}
                    className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold">{user.username}</span>
            </header>

            <img src={image_url} alt="post content" className="w-full" />

            <div className="px-4 py-2 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <LikeButton post={currentPost} token={token} onLikeToggle={refreshPost} />
                    <p className="text-sm text-gray-600">
                        {likes.length} like{likes.length !== 1 ? "s" : ""}
                    </p>
                </div>
                <div>
                    <BookmarkButton post={currentPost} token={token} onBookmarkToggle={refreshPost} />
                </div>
            </div>

            <div className="px-4 pb-4">
                <p className="font-semibold">{user.username}</p>
                <p>{caption}</p>

                {comments.length > 0 && (
                    <p className="text-sm text-gray-500">
                        Last comment: {comments[comments.length - 1].text}
                    </p>
                )}

                <AddComment postId={currentPost.id} token={token} onCommentAdded={refreshPost} />
            </div>
        </article>
    );
}
