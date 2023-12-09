function attachEvents() {
  const baseURL = "http://localhost:3030/jsonstore/blog/";

  const loadPostsBtn = document.getElementById("btnLoadPosts");
  const selectPost = document.getElementById("posts");
  const viewPostBtn = document.getElementById("btnViewPost");
  const postTitle = document.getElementById("post-title");
  const postBody = document.getElementById("post-body");
  const postComments = document.getElementById("post-comments");

  let posts = {};

  loadPostsBtn.addEventListener("click", loadPosts);

  async function loadPosts() {
    selectPost.innerHTML = "";

    const response = await fetch(baseURL + "posts");
    posts = await response.json();

    for (const [postID, postObj] of Object.entries(posts)) {
      const option = document.createElement("option");
      option.value = postID;
      option.textContent = postObj.title;

      selectPost.appendChild(option);
    }
  }

  viewPostBtn.addEventListener("click", viewPost);

  async function viewPost() {
    postBody.innerHTML = "";
    postComments.innerHTML = "";

    const postID = selectPost.value;

    postTitle.textContent = posts[postID].title;
    postBody.textContent = posts[postID].body;

    const response = await fetch(baseURL + "comments");
    const comments = await response.json();

    const filteredComments = Object.values(comments).filter(
      (e) => e.postId === postID
    );

    for (const comment of filteredComments) {
      const listItem = document.createElement("li");
      listItem.id = comment.id;
      listItem.textContent = comment.text;

      postComments.appendChild(listItem);
    }
  }
}

attachEvents();
