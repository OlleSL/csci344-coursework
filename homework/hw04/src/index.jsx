import React from "react";
import { createRoot } from "react-dom/client";
import { getAccessToken, getDataFromServer } from "./server-requests.jsx";
import App from "./components/App.jsx";

async function main() {
    const token = await getAccessToken("olle", "password");

    const username = "olle";

    const rootEl = document.getElementById("app");
    const root = createRoot(rootEl);
    root.render(<App token={token} username={username} />);
}

main();
