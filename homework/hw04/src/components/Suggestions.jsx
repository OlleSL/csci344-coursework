import React, { useEffect, useState } from "react";
import { getDataFromServer } from "../server-requests";
import Suggestion from "./Suggestion";

export default function Suggestions({ token }) {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        getDataFromServer(token, "/api/suggestions").then((data) => {
            console.log("Suggestions:", data);
            setSuggestions(data);
        });
    }, [token]);

    return (
        <div className="mt-4">
            <p className="text-base text-gray-400 font-bold mb-4">Suggestions for you</p>
            <section className="flex flex-col gap-2">
                {suggestions.map((s) => (
                    <Suggestion key={s.id} suggestion={s} />
                ))}
            </section>
        </div>
    );
}