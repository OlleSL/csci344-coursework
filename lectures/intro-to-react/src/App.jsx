import React, { useState, useEffect } from "react";
import Profile from "./Profile.jsx";
import ButtonCount from "./ButtonCount.jsx";
import { getPosts } from "./data-functions.js";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const posts = await getPosts();
        console.log("Fetched posts:", posts);
        setPosts(posts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    })();
  }, []);

  return (
    <>
      <header>
        <h1>My First App</h1>
      </header>
      <main>
        <p>Hello React!</p>
        {posts.map((item) => (
          <Profile
            key={item.id}
            name={item.caption}
            picture={item.image_url}
          />
        ))}

        <ButtonCount initial={0} />
        <ButtonCount initial={5} />
        <ButtonCount initial={10} />
        <ButtonCount initial={2} />
        <ButtonCount initial={8} />
        <ButtonCount initial={100} />
      </main>
    </>
  );
}
