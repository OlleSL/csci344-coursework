import React, { useState } from "react";
import { postDataToServer } from "../server-requests";

export default function AddComment({ postId, token, onCommentAdded }) {
    const [text, setText] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        if (!text.trim()) return;

        await postDataToServer(token, "/api/comments", {
            post_id: postId,
            text: text.trim(),
        });

        setText("");
        onCommentAdded(); // re-fetch updated post
    }

    return (
        <form onSubmit={handleSubmit} className="flex justify-between items-center p-3 mt-2">
            <div className="flex items-center gap-3 w-full">
                <i className="far fa-smile text-lg"></i>
                <input
                    type="text"
                    className="w-full focus:ring focus:ring-blue-300 rounded px-2 py-1 text-sm"
                    placeholder="Add a comment..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    autoFocus
                    aria-label="Add a comment"
                />
            </div>
            <button
                type="submit"
                className="text-blue-500 font-semibold ml-2"
            >
                Post
            </button>
        </form>
    );
}
