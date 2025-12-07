const sessions = [
  {
    title: "Session-0",
    topics:
      "Intro to the Web, HTTP Vs HTTPS, IP Address, Domain, Hosting, URL, SEO, Accessibility, Inspect, Essential References.",
    img: "img/html/html-0.jpg",
    url: "https://appflowy.com/90507d36-0c51-4ff3-8366-1318cada01ae/HTML5-Session-0",
    category: "html",
    icon: "fa-solid fa-globe",
  },
  {
    title: "Session-1",
    topics:
      "What is HTML, Basic Structure, Headings, comments, paragraphs, Block Vs Inline Elements, Formatting Elements, Links",
    img: "img/html/html-1.png",
    url: "https://appflowy.com/90507d36-0c51-4ff3-8366-1318cada01ae/HTML5-Session_1",
    category: "html",
    icon: "fa-solid fa-code",
  },
  {
    title: "Session-2",
    topics:
      "Images, Lists(ordered, unordered, description), Div, Span, tables, Entities",
    img: "img/html/html-2.png",
    url: "https://appflowy.com/90507d36-0c51-4ff3-8366-1318cada01ae/HTML5-Session-2",
    category: "html",
    icon: "fa-solid fa-laptop-code",
  },
  {
    title: "Session-3&4",
    topics:
      "Semantic Elements, Multimedia Elements, Forms Structure, Input Types, Advanced Form Elements, Form Attributes & Validation",
    img: "img/html/html-3&4.png",
    url: "https://appflowy.com/90507d36-0c51-4ff3-8366-1318cada01ae/HTML-Session-3-4",
    category: "html",
    icon: "fa-solid fa-file-code",
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
