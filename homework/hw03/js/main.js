import { getAccessToken } from "./utilities.js";
const rootURL = "https://photo-app-secured.herokuapp.com";
let token = null;
let username = "olle";
let password = "password";

async function initializeScreen() {
  token = await getToken();
  showNav();
  await renderProfile();
  await renderSuggestions();
  await renderStories();
  getPosts();
}

async function getToken() {
  return await getAccessToken(rootURL, username, password);
}

function showNav() {
  document.querySelector("#nav").innerHTML = `
    <nav class="flex justify-between py-5 px-9 bg-white border-b fixed w-full top-0">
            <h1 class="font-Comfortaa font-bold text-2xl">Photo App</h1>
            <ul class="flex gap-4 text-sm items-center justify-center">
                <li><span>${username}</span></li>
                <li><button class="text-blue-700 py-2">Sign out</button></li>
            </ul>
        </nav>
    `;
}

// implement remaining functionality below:

//await / async syntax:
async function getPosts() {
  const response = await fetch(
    "https://photo-app-secured.herokuapp.com/api/posts/?limit=10",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
  renderPosts(data);
}

function renderPost(postJSON) {
  const template = `
        <section class="bg-white border mb-10">
            <div class="p-4 flex justify-between">
                <h3 class="text-lg font-Comfortaa font-bold">${
                  postJSON.user.username
                }</h3>
                <button class="icon-button"><i class="fas fa-ellipsis-h"></i></button>
            </div>
            <img src="${postJSON.image_url}" alt="Photo posted by ${
    postJSON.user.username
  }" width="300" height="300"
                class="w-full bg-cover">
            <div class="p-4">
                <div class="flex justify-between text-2xl mb-3">
                    <div>
                        ${getLikeButton(postJSON)}
                        <button><i class="far fa-comment"></i></button>
                        <button><i class="far fa-paper-plane"></i></button>
                    </div>
                    <div>
                        ${getBookmarkButton(postJSON)}
                    </div>
                </div>
                <p class="font-bold mb-3">${postJSON.likes.length}</p>
                <div class="text-sm mb-3">
                    <p>
                        <strong>${postJSON.user.username}</strong>
                        ${postJSON.caption}
                    </p>
                </div>
                ${showComments(postJSON.comments)}
                <p class="uppercase text-gray-500 text-xs">${
                  postJSON.display_time
                }</p>
            </div>
            <div class="flex justify-between items-center p-3">
                <div class="flex items-center gap-3 min-w-[80%]">
                    <i class="far fa-smile text-lg"></i>
                    <input type="text" aria-label="Add a comment" class="min-w-[80%] focus:ring focus:ring-blue-300" placeholder="Add a comment...">
                </div>
                <button class="text-blue-500 py-2">Post</button>
            </div>
        </section>  `;
  const container = document.querySelector("main");
  container.insertAdjacentHTML("beforeend", template);
}

function renderPosts(postListJSON) {
  postListJSON.forEach(renderPost);
}

function showComments(comments) {
  if (comments.length > 1) {
    const lastComment = comments[comments.length - 1];
    return `
      <div class="text-sm mb-3">
        <button class="text-gray-500">View all ${comments.length} comments</button>
        <p><strong>${lastComment.user.username}</strong> ${lastComment.text}</p>
      </div>
    `;
  }
  if (comments.length === 1) {
    return `
      <div class="text-sm mb-3">
        <p><strong>${comments[0].user.username}</strong> ${comments[0].text}</p>
      </div>
    `;
  }
  return "";
}

function getBookmarkButton(post) {
  if (post.current_user_bookmark_id) {
    // already bookmarked:
    return `
      <button onclick="deleteBookmark(${post.current_user_bookmark_id})" aria-label="Remove bookmark">
        <i class="fa-solid fa-bookmark"></i>
      </button>`;
  } else {
    // not bookmarked:
    return `
      <button onclick="createBookmark(${post.id})" aria-label="Bookmark this post">
        <i class="far fa-bookmark"></i>
      </button>`;
  }
}
function getLikeButton(post) {
  if (post.current_user_like_id) {
    return `<button onclick="unlikePost(${post.current_user_like_id})" aria-label="Unlike this post">
              <i class="fa-solid fa-heart text-red-700"></i>
            </button>`;
  } else {
    return `<button onclick="likePost(${post.id})" aria-label="Like this post">
              <i class="far fa-heart"></i>
            </button>`;
  }
}

window.createBookmark = async function (postID) {
  const postData = {
    post_id: postID,
  };

  //await / async syntax:
  const response = await fetch(
    "https://photo-app-secured.herokuapp.com/api/bookmarks/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postData), //data that is sent to server
    }
  );
  const data = await response.json();
  console.log(data);
  location.reload();
};

window.deleteBookmark = async function (bookmarkID) {
  const response = await fetch(
    `https://photo-app-secured.herokuapp.com/api/bookmarks/${bookmarkID}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
  location.reload();
};

window.likePost = async function (postID) {
  const response = await fetch(
    "https://photo-app-secured.herokuapp.com/api/likes/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ post_id: postID }),
    }
  );
  const data = await response.json();
  console.log("Post liked:", data);
  location.reload();
};

window.unlikePost = async function (likeID) {
  const response = await fetch(
    `https://photo-app-secured.herokuapp.com/api/likes/${likeID}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  console.log("Post unliked:", data);
  location.reload();
};

window.renderProfile = async function () {
  const res = await fetch(
    `https://photo-app-secured.herokuapp.com/api/profile`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const profile = await res.json();

  const profileImg = document.querySelector("aside header img");
  const profileName = document.querySelector("aside header h2");

  if (profileImg && profileName) {
    profileImg.src = profile.image_url;
    profileImg.alt = `${profile.username}'s profile picture`;
    profileImg.classList.add("rounded-full", "w-16", "h-16", "object-cover");
    profileName.textContent = profile.username;
  }
};

window.renderSuggestions = async function () {
  const res = await fetch(
    `https://photo-app-secured.herokuapp.com/api/suggestions`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const suggestions = await res.json();

  const container = document.querySelector("#suggestions-container");
  container.innerHTML = suggestions
    .map(
      (s, index) => `
    <section class="flex justify-between items-center mb-4 gap-2">
      <img src="${s.image_url}" alt="Profile picture of ${s.username}" class="rounded-full w-10 h-10 object-cover" />
      <div class="w-[180px]">
        <p class="font-bold text-sm">${s.username}</p>
        <p class="text-gray-700 text-xs">suggested for you</p>
      </div>
      <button class="text-blue-500 text-sm py-2">follow</button>
    </section>
  `
    )
    .join("");
};

window.renderStories = async function () {
  const res = await fetch(
    `https://photo-app-secured.herokuapp.com/api/stories`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const stories = await res.json();
  const html = stories
    .map(
      (story) => `
    <div class="flex flex-col items-center">
      <img src="${story.user.image_url}" alt="${story.user.username}'s story" class="rounded-full w-16 h-16 object-cover" />
      <span class="text-xs">${story.user.username}</span>
    </div>`
    )
    .join("");
  document.querySelector("#stories").innerHTML = `
    <div class="flex gap-6 px-2">${html}</div>
  `;
};

// after all of the functions are defined, invoke initialize at the bottom:
initializeScreen();
