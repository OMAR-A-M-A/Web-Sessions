const sessions = [
  {
    title: "Session-0",
    topics:
      "Intro to the Web, HTTP Vs HTTPS, IP Address, Domain, Hosting, URL, SEO, Accessibility, Inspect, Essential References.",
    img: "img/html/html-0.jpg",
    url: "https://generated-fibre-c3a.notion.site/HTML-Session-0-2d22b43457f3803cbeb1f1b8c44db683?pvs=73",
    category: "html",
    icon: "fa-solid fa-globe",
  },
  {
    title: "Session-1",
    topics:
      "What is HTML, Basic Structure, Headings, comments, paragraphs, Block Vs Inline Elements, Formatting Elements, Links",
    img: "img/html/html-1.png",
    url: "https://generated-fibre-c3a.notion.site/HTML-Session-1-2d22b43457f3803880a4e8a0fe1f64e2?pvs=73",
    category: "html",
    icon: "fa-solid fa-code",
  },
  {
    title: "Session-2",
    topics:
      "Images, Lists(ordered, unordered, description), Div, Span, tables, Entities",
    img: "img/html/html-2.png",
    url: "https://generated-fibre-c3a.notion.site/HTML-Session-2-2d22b43457f38026a863d9c8faf124c3?pvs=73",
    category: "html",
    icon: "fa-solid fa-laptop-code",
  },
  {
    title: "Session-3&4",
    topics:
      "Semantic Elements, Multimedia Elements, Forms Structure, Input Types, Advanced Form Elements, Form Attributes & Validation",
    img: "img/html/html-3&4.png",
    url: "https://generated-fibre-c3a.notion.site/HTML-Session-3-4-2d22b43457f3800ba901cc4208fb110e?pvs=73",
    category: "html",
    icon: "fa-solid fa-file-code",
  },
  {
    title: "Session-1",
    topics:
      "Introduction to CSS, CSS Syntax & Selectors, Ways to Insert CSS, Colors & Backgrounds, Box Model (Padding, Borders, Margins), Text Formatting",
    img: "img/css/css-1.png",
    url: "https://generated-fibre-c3a.notion.site/CSS-Session-1-2d22b43457f38076b315f402ed0b2452?pvs=73",
    category: "css",
    icon: "fa-brands fa-css",
  },
  {
    title: "Session-2",
    topics:
      "Units, Root & CSS Variables, Typography (Fonts, Google Fonts, @font-face), Font Awesome (CDN & Self-Hosted), Pseudo-Classes, Pseudo-Elements",
    img: "img/css/css-2.png",
    url: "https://generated-fibre-c3a.notion.site/CSS-Session-2-2db2b43457f3807a96aaf409d701e450?pvs=74",
    category: "css",
    icon: "fa-brands fa-fonticons",
  },
  {
    title: "Session-3",
    topics:
      "Position, Flexbox Fundamentals (Flex Container vs Items, Main & Cross Axis), Flex Container Properties, Flex Item Properties",
    img: "img/css/css-3.png",
    url: "https://generated-fibre-c3a.notion.site/CSS-Session-3-2e02b43457f3802cae0befdda956f8bf?pvs=74",
    category: "css",
    icon: "fa-solid fa-layer-group",
  },
  {
    title: "Session-4",
    topics:
      "CSS Grid Fundamentals, Grid Container Properties, Grid Alignment, Grid Template Areas & Page Layout Mapping, Grid Item Positioning",
    img: "img/css/css-4.png",
    url: "https://generated-fibre-c3a.notion.site/CSS-Session-4-2ff2b43457f38016aa36e8f42f3471d5",
    category: "css",
    icon: "fa-solid fa-border-top-left",
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
