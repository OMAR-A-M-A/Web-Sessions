const sessions = [
  {
    title: "HTML Basics",
    topics: "Introduction to tags, elements, attributes, and structure.",
    img: "img/html5S1.png",
    url: "https://appflowy.com/90507d36-0c51-4ff3-8366-1318cada01ae/HTML5-Session-1-copy",
    category: "html",
  },
  {
    title: "HTML Basics",
    topics: "Introduction to tags, elements, attributes, and structure.",
    img: "img/html5S1.png",
    url: "https://appflowy.com/90507d36-0c51-4ff3-8366-1318cada01ae/HTML5-Session-1-copy",
    category: "html",
  },
  {
    title: "HTML Basics",
    topics: "Introduction to tags, elements, attributes, and structure.",
    img: "img/html5S1.png",
    url: "https://appflowy.com/90507d36-0c51-4ff3-8366-1318cada01ae/HTML5-Session-1-copy",
    category: "html",
  },
];

function displaySessions() {
  const categoriesWithSessions = new Set();

  sessions.forEach((session) => {
    const card = document.createElement("div");
    card.classList.add("session-card");

    card.innerHTML = `
          <img src="${session.img}" alt="${session.title}">
          <div class="session-content">
            <h3>${session.title}</h3>
            <p>${session.topics}</p>
          </div>
          <button>View Session</button>
        `;

    card
      .querySelector("button")
      .addEventListener("click", () => window.open(session.url, "_blank"));

    const container = document.getElementById(`${session.category}-sessions`);
    if (container) {
      container.appendChild(card);
      categoriesWithSessions.add(session.category);
    }
  });

  // Hide sections with no sessions
  const allSections = ["html", "css", "bootstrap", "js", "git"];
  allSections.forEach((cat) => {
    const section = document.getElementById(`${cat}-section`);
    if (!categoriesWithSessions.has(cat)) {
      section.style.display = "none";
    }
  });
}

displaySessions();
