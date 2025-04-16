import React, { useEffect, useState } from "react";
import { getDataFromServer } from "../server-requests";

export default function Profile({ token }) {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        getDataFromServer(token, "/api/profile").then(setProfile);
    }, []);

    if (!profile) return <p>Loading profile...</p>;

    return (
        <div className="flex items-center gap-4">
            <img src={profile.thumb_url} className="w-10 h-10 rounded-full" />
            <div>
                <p className="font-bold">{profile.username}</p>
                <p className="text-sm text-gray-400">{profile.name}</p>
            </div>
        </div>
    );
}
