const sessions = [
  {
    title: "Session-0",
    topics:
      "Intro to the Web, HTTP Vs HTTPS, IP Address, Domain, Hosting, URL, SEO, Accessibility, Inspect, Essential References.",
    img: "img\\html\\html-0.jpg",
    url: "https://appflowy.com/90507d36-0c51-4ff3-8366-1318cada01ae/HTML5-Session-0",
    category: "html",
    icon: "fa-solid fa-globe",
  },
  {
    title: "Session-1",
    topics:
      "What is HTML, Basic Structuer, Headings, comments, paragraphs, Block Vs Inline Elements, Formatting Elements, Links",
    img: "img\\html\\html-1.png",
    url: "https://appflowy.com/90507d36-0c51-4ff3-8366-1318cada01ae/HTML5-Session_1",
    category: "html",
    icon: "fa-solid fa-code",
  },
];

function displaySessions() {
  const categoriesWithSessions = new Set();

  sessions.forEach((session) => {
    const card = document.createElement("div");
    card.classList.add("session-card");

    card.innerHTML = `
          <div class="imgs">
          <img src="${session.img}" alt="${session.title}">
          </div>
          <div class="session-content">
            <h3><i class="${session.icon}"></i> ${session.title}</h3>
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
