import React, { useEffect, useState } from "react";
import { getDataFromServer } from "../server-requests";

export default function Stories({ token }) {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        if (token) {
            getDataFromServer(token, "/api/stories").then(setStories);
        }
    }, [token]);

    return (
        <div className="flex gap-4 overflow-x-auto mb-4 p-2 bg-white border rounded">
            {stories.map((story) => (
                <div
                    key={story.id}
                    className="flex flex-col items-center text-center text-sm"
                    style={{ minWidth: "60px" }}
                >
                    <img
                        src={story.user.thumb_url}
                        className="w-14 h-14 rounded-full"
                        alt={`${story.user.username}'s story`}
                    />
                    <span className="mt-1 truncate max-w-[60px]">{story.user.username}</span>
                </div>
            ))}
        </div>
    );
}
