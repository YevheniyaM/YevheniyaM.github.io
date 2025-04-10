const articlesData = [
  {
    id: 1,
    title: "My travel to Japan",
    description:
      "I really love this trip, especially all the desserts I tried there ...",
    date: "2025-01-01",
    other: "absd",
    link: "publication.html",
  },
  {
    id: 2,
    title: "My travel to Japan",
    description:
      "I really love this trip, especially all the desserts I tried there ...",
    date: "2025-01-01",
    other: "absd",
    link: "publication.html",
  },
  {
    id: 3,
    title: "My travel to Japan",
    description:
      "I really love this trip, especially all the desserts I tried there ...",
    date: "2025-01-01",
    other: "absd",
    link: "publication.html",
  },
  {
    id: 4,
    title: "My travel to Japan",
    description:
      "I really love this trip, especially all the desserts I tried there ...",
    date: "2025-01-01",
    other: "absd",
    link: "publication.html",
  },
  {
    id: 5,
    title: "My travel to Japan",
    description:
      "I really love this trip, especially all the desserts I tried there ...",
    date: "2025-01-01",
    other: "absd",
    link: "publication.html",
  },
  {
    id: 6,
    title: "My travel to Japan",
    description:
      "I really love this trip, especially all the desserts I tried there ...",
    date: "2025-01-01",
    other: "absd",
    link: "publication.html",
  },
  {
    id: 7,
    title: "My travel to Japan",
    description:
      "I really love this trip, especially all the desserts I tried there ...",
    date: "2025-01-01",
    other: "absd",
    link: "publication.html",
  },
  {
    id: 8,
    title: "My travel to Japan",
    description:
      "I really love this trip, especially all the desserts I tried there ...",
    date: "2025-01-01",
    other: "absd",
    link: "publication.html",
  },
  {
    id: 9,
    title: "My travel to Japan",
    description:
      "I really love this trip, especially all the desserts I tried there ...",
    date: "2025-01-01",
    other: "absd",
    link: "publication.html",
  },
  {
    id: 10,
    title: "My travel to Japan",
    description:
      "I really love this trip, especially all the desserts I tried there ...",
    date: "2025-01-01",
    other: "absd",
    link: "publication.html",
  },
  {
    id: 11,
    title: "My travel to Japan",
    description:
      "I really love this trip, especially all the desserts I tried there ...",
    date: "2025-01-01",
    other: "absd",
    link: "publication.html",
  },
  {
    id: 12,
    title: "My travel to Japan",
    description:
      "I really love this trip, especially all the desserts I tried there ...",
    date: "2025-01-01",
    other: "absd",
    link: "publication.html",
  },
];

const articlesList = document.querySelector(".articles");

function getCommentsForPublication(publicationId) {
  const allComments = JSON.parse(localStorage.getItem("allComments") || "{}");
  return allComments[publicationId] || [];
}

function saveLikes() {
  const likes = {};
  document.querySelectorAll(".heart-checkbox").forEach((checkbox) => {
    likes[checkbox.id] = checkbox.checked;
  });
  localStorage.setItem("articleLikes", JSON.stringify(likes));
}

function loadLikes() {
  const savedLikes = localStorage.getItem("articleLikes");
  if (savedLikes) {
    const likes = JSON.parse(savedLikes);
    Object.entries(likes).forEach(([id, isLiked]) => {
      const checkbox = document.getElementById(id);
      if (checkbox) {
        checkbox.checked = isLiked;
        const li = checkbox.closest("li");
        if (li) {
          li.style.backgroundColor = isLiked ? "#FFD700" : "";
        }
      }
    });
  }
}

let i = 0;
while (i < articlesData.length) {
  const article = articlesData[i];

  const li = document.createElement("li");
  li.className = "article";
  li.innerHTML = `
      <a href="${article.link}?id=${article.id}">
        <article class="article-content">
          <div class="article-info">
            <div class="heart-container">
              <input type="checkbox" id="heart${
                article.id
              }" class="heart-checkbox">
              <label for="heart${article.id}" class="heart-label">♥</label>
            </div>
            <h2 class="article-header">${article.title}</h2>
            <p class="arcticle-description">${article.description}</p>
            <p class="article-other">${article.other}</p>
          </div>
        </article>
        <time class="article-date" datetime="${article.date}">
          ${new Date(article.date).toLocaleDateString()}
        </time>
      </a>
    `;
  articlesList.appendChild(li);

  const checkbox = li.querySelector(".heart-checkbox");
  checkbox.addEventListener("change", (event) => {
    li.style.backgroundColor = event.target.checked ? "#FFD700" : "";
    saveLikes();
  });

  i++;
}

document.addEventListener("DOMContentLoaded", loadLikes);
