function getPublicationId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id") || "default";
  }
  
  function saveComments() {
    try {
      const publicationId = getPublicationId();
      const comments = Array.from(document.querySelectorAll(".comment")).map(
        (comment) => ({
          text: comment.querySelector(".comment-text").textContent,
          date: comment.dataset.date,
          author: comment.dataset.author || "Anonymous",
        })
      );
  
      const allPostsComments = JSON.parse(
        localStorage.getItem("postsComments") || "{}"
      );
      allPostsComments[publicationId] = comments;
      localStorage.setItem("postsComments", JSON.stringify(allPostsComments));
    } catch (error) {
      console.error("Error saving comments:", error);
    }
  }
  
  function loadComments() {
    try {
      const publicationId = getPublicationId();
      const commentsList = document.querySelector(".comments-list");
      if (!commentsList) {
        console.error("Element .comments-list not found");
        return;
      }
  
      const allPostsComments = JSON.parse(
        localStorage.getItem("postsComments") || "{}"
      );
      const comments = allPostsComments[publicationId] || [];
  
      commentsList.innerHTML = "";
  
      comments.forEach((comment) => {
        const commentElement = document.createElement("div");
        commentElement.className = "comment";
        commentElement.dataset.date = comment.date;
        commentElement.dataset.author = comment.author;
  
        const commentHeader = document.createElement("div");
        commentHeader.className = "comment-header";
  
        const authorName = document.createElement("span");
        authorName.className = "comment-author";
        authorName.textContent = comment.author;
  
        const commentDate = document.createElement("span");
        commentDate.className = "comment-date";
        commentDate.textContent = new Date(comment.date).toLocaleString();
  
        commentHeader.appendChild(authorName);
        commentHeader.appendChild(commentDate);
  
        const commentText = document.createElement("p");
        commentText.className = "comment-text";
        commentText.textContent = comment.text;
  
        commentElement.appendChild(commentHeader);
        commentElement.appendChild(commentText);
        commentsList.appendChild(commentElement);
      });
    } catch (error) {
      console.error("Error loading comments:", error);
    }
  }
  
  function toggleBlockTheme(isLiked, blockElement) {
    if (blockElement) {
      blockElement.classList.toggle("dark-theme", isLiked);
    }
  }
  
  function saveLike() {
    try {
      const publicationId = getPublicationId();
      const likeCheckbox = document.getElementById("publicationLike");
      const publicationContainer = document.querySelector(".publication-container");
  
      if (!likeCheckbox || !publicationContainer) {
        console.error("Required elements not found");
        return;
      }
  
      const likes = JSON.parse(localStorage.getItem("articleLikes") || "{}");
      likes[`heart${publicationId}`] = likeCheckbox.checked;
      localStorage.setItem("articleLikes", JSON.stringify(likes));
  
      toggleBlockTheme(likeCheckbox.checked, publicationContainer);
    } catch (error) {
      console.error("Error saving like:", error);
    }
  }
  
  function loadLike() {
    try {
      const publicationId = getPublicationId();
      const likeCheckbox = document.getElementById("publicationLike");
      const publicationContainer = document.querySelector(".publication-container");
  
      if (!likeCheckbox || !publicationContainer) {
        console.error("Required elements not found");
        return;
      }
  
      const likes = JSON.parse(localStorage.getItem("articleLikes") || "{}");
      const isLiked = likes[`heart${publicationId}`] || false;
  
      likeCheckbox.checked = isLiked;
  
      toggleBlockTheme(isLiked, publicationContainer);
    } catch (error) {
      console.error("Error loading like:", error);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const likeCheckbox = document.getElementById("publicationLike");
  
    if (likeCheckbox) {
      likeCheckbox.addEventListener("change", saveLike);
    }
  
    loadLike();
  });  
  
  document.addEventListener("DOMContentLoaded", () => {
    const commentForm = document.querySelector(".comment-form");
    if (commentForm) {
      commentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const textarea = event.target.querySelector("textarea");
        const commentText = textarea.value.trim();
  
        if (commentText) {
          const commentsList = document.querySelector(".comments-list");
          if (!commentsList) {
            console.error("Element .comments-list not found");
            return;
          }
  
          const commentElement = document.createElement("div");
          commentElement.className = "comment";
          commentElement.dataset.date = new Date().toISOString();
  
          const commentHeader = document.createElement("div");
          commentHeader.className = "comment-header";
  
          const authorName = document.createElement("span");
          authorName.className = "comment-author";
  
          const commentDate = document.createElement("span");
          commentDate.className = "comment-date";
          commentDate.textContent = new Date().toLocaleString();
  
          commentHeader.appendChild(authorName);
          commentHeader.appendChild(commentDate);
  
          const commentTextElement = document.createElement("p");
          commentTextElement.className = "comment-text";
          commentTextElement.textContent = commentText;
  
          commentElement.appendChild(commentHeader);
          commentElement.appendChild(commentTextElement);
          commentsList.appendChild(commentElement);
  
          saveComments();
          textarea.value = "";
        }
      });
    } else {
      console.error("Comment form not found");
    }
  
    const likeCheckbox = document.getElementById("publicationLike");
    if (likeCheckbox) {
      likeCheckbox.addEventListener("change", () => {
        document.body.classList.toggle("dark-theme", likeCheckbox.checked);
        saveLike();
      });
    } else {
      console.error("Element publicationLike not found");
    }
  
    loadComments();
    loadLike();
  });
  
