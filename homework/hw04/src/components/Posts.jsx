import Post from "./Post"; // add at the top
import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

export default function Posts({ token }) {
    const [posts, setPosts] = useState([]);

    async function getPosts() {
        const data = await getDataFromServer(token, "/api/posts");
        setPosts(data);
    }

    useEffect(() => {
        if (token) getPosts();
    }, [token]);
    

    return (
        <section className="flex flex-col gap-6">
            {posts.map((post) => (
                <Post key={post.id} post={post} token={token} />
            ))}
        </section>
    );
}