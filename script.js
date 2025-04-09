const articlesData = [
    {
      id: 1,
      title: "My travel to Japan",
      description: "I really love this trip, especially all the desserts I tried there ...",
      date: "2025-01-01",
      other: "absd",
      link: "publication.html"
    },
    {
        id: 2,
        title: "My travel to Japan",
        description: "I really love this trip, especially all the desserts I tried there ...",
        date: "2025-01-01",
        other: "absd",
        link: "publication.html"
    },
    {
        id: 3,
        title: "My travel to Japan",
        description: "I really love this trip, especially all the desserts I tried there ...",
        date: "2025-01-01",
        other: "absd",
        link: "publication.html"
    },
    {
        id: 4,
        title: "My travel to Japan",
        description: "I really love this trip, especially all the desserts I tried there ...",
        date: "2025-01-01",
        other: "absd",
        link: "publication.html"
    },
    {
        id: 5,
        title: "My travel to Japan",
        description: "I really love this trip, especially all the desserts I tried there ...",
        date: "2025-01-01",
        other: "absd",
        link: "publication.html"
    },
    {
        id: 6,
        title: "My travel to Japan",
        description: "I really love this trip, especially all the desserts I tried there ...",
        date: "2025-01-01",
        other: "absd",
        link: "publication.html"
    },
    {
        id: 7,
        title: "My travel to Japan",
        description: "I really love this trip, especially all the desserts I tried there ...",
        date: "2025-01-01",
        other: "absd",
        link: "publication.html"
    },
    {
        id: 8,
        title: "My travel to Japan",
        description: "I really love this trip, especially all the desserts I tried there ...",
        date: "2025-01-01",
        other: "absd",
        link: "publication.html"
    },
    {
        id: 9,
        title: "My travel to Japan",
        description: "I really love this trip, especially all the desserts I tried there ...",
        date: "2025-01-01",
        other: "absd",
        link: "publication.html"
    },
    {
        id: 10,
        title: "My travel to Japan",
        description: "I really love this trip, especially all the desserts I tried there ...",
        date: "2025-01-01",
        other: "absd",
        link: "publication.html"
    },
    {
        id: 11,
        title: "My travel to Japan",
        description: "I really love this trip, especially all the desserts I tried there ...",
        date: "2025-01-01",
        other: "absd",
        link: "publication.html"
    },
    {
        id: 12,
        title: "My travel to Japan",
        description: "I really love this trip, especially all the desserts I tried there ...",
        date: "2025-01-01",
        other: "absd",
        link: "publication.html"
    }
  ];
  
  const articlesList = document.querySelector('.articles');

  let i = 0;
  while (i < articlesData.length) {
    const article = articlesData[i];
  
    const li = document.createElement('li');
    li.className = 'article';
    li.innerHTML = `
      <a href="${article.link}">
        <article class="article-content">
          <div class="article-info">
            <div class="heart-container">
              <input type="checkbox" id="heart${article.id}" class="heart-checkbox">
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
  
    const form = document.createElement('form');
    form.innerHTML = `
      <textarea placeholder="Leave a comment..." required></textarea>
      <button type="submit">Add Comment</button>
    `;
    li.appendChild(form);
  
    const commentsSection = document.createElement('div');
    commentsSection.className = 'comments-section';
    li.appendChild(commentsSection);
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const commentText = form.querySelector('textarea').value;
      if (commentText.trim()) {
        const comment = document.createElement('p');
        comment.textContent = commentText;
        commentsSection.appendChild(comment);
        form.querySelector('textarea').value = '';
      }
    });
  
    const checkbox = li.querySelector('.heart-checkbox');
    checkbox.addEventListener('change', (event) => {
      li.style.backgroundColor = event.target.checked ? '#FFD700' : '';
    });
  
    i++;
  }
  
