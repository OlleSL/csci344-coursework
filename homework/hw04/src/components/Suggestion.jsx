import React from "react";

export default function Suggestion({ suggestion }) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <img src={suggestion.thumb_url} className="w-10 h-10 rounded-full" />
                <div>
                    <p className="font-semibold">{suggestion.username}</p>
                    <p className="text-xs text-gray-500">{suggestion.name}</p>
                </div>
            </div>
            <button className="text-blue-500 text-sm font-bold">Follow</button>
        </div>
    );
}
