import React, { useState, useEffect } from "react";
import { postDataToServer, deleteDataFromServer } from "../server-requests";

export default function BookmarkButton({ post, token, onBookmarkToggle }) {
    const [bookmarked, setBookmarked] = useState(false);
    const [bookmarkId, setBookmarkId] = useState(null);

    useEffect(() => {
        setBookmarked(post.current_user_bookmark_id !== null);
        setBookmarkId(post.current_user_bookmark_id);
    }, [post]);

    async function toggleBookmark() {
        if (!bookmarked) {
            const data = await postDataToServer(token, `/api/bookmarks`, {
                post_id: post.id,
            });
            if (data.id) {
                setBookmarked(true);
                setBookmarkId(data.id);
                onBookmarkToggle();
            }
        } else {
            await deleteDataFromServer(token, `/api/bookmarks/${bookmarkId}`);
            setBookmarked(false);
            setBookmarkId(null);
            onBookmarkToggle();
        }
    }

    return (
        <button
            onClick={toggleBookmark}
            aria-label={bookmarked ? "Unbookmark this post" : "Bookmark this post"}
            role="switch"
            aria-checked={bookmarked}
        >
            {bookmarked ? (
                <i className="fa-solid fa-bookmark text-xl text-gray-700"></i>
            ) : (
                <i className="far fa-bookmark text-xl text-gray-700"></i>
            )}
        </button>
    );
}
