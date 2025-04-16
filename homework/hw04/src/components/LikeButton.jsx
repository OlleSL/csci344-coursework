import React, { useState, useEffect } from "react";
import { postDataToServer, deleteDataFromServer } from "../server-requests";

export default function LikeButton({ post, token, onLikeToggle }) {
    const [liked, setLiked] = useState(false);
    const [likeId, setLikeId] = useState(null);

    useEffect(() => {
        setLiked(post.current_user_like_id !== null);
        setLikeId(post.current_user_like_id);
    }, [post]);

    async function toggleLike() {
        if (!liked) {
            const data = await postDataToServer(token, `/api/posts/${post.id}/likes`);
            if (data.id) {
                setLiked(true);
                setLikeId(data.id);
                onLikeToggle(); // refresh post
            }
        } else {
            await deleteDataFromServer(token, `/api/posts/${post.id}/likes/${likeId}`);
            setLiked(false);
            setLikeId(null);
            onLikeToggle(); // refresh post
        }
    }

    return (
        <button
            onClick={toggleLike}
            aria-label={liked ? "Unlike this post" : "Like this post"}
            role="switch"
            aria-checked={liked}
        >
            {liked ? (
                <i className="fa-solid fa-heart text-red-600 text-xl hover:text-red-400"></i>
            ) : (
                <i className="fa-regular fa-heart text-xl text-gray-500 hover:text-gray-700"></i>
            )}
        </button>
    );
}
