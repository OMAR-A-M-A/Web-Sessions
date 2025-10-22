// ====== TOGGLE MOBILE MENU ======
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const dropdowns = document.querySelectorAll(".dropdown");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  navLinks.classList.toggle("active");
});

// ====== MOBILE DROPDOWN TOGGLE ======
dropdowns.forEach((drop) => {
  drop.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.stopPropagation();
      drop.classList.toggle("open");
    }
  });
});
// Get the necessary elements from the DOM
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Function to apply the saved theme on page load
const applySavedTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  
  // If a theme is saved in localStorage
  if (savedTheme) {
    body.classList.add(savedTheme);
    // If the saved theme is dark, check the toggle
    if (savedTheme === 'dark-mode') {
      darkModeToggle.checked = true;
    }
  }
};

// Function to toggle the theme and save the preference
const toggleTheme = () => {
  // Toggle the 'dark-mode' class on the body
  body.classList.toggle('dark-mode');

  // Check if dark mode is currently active
  if (body.classList.contains('dark-mode')) {
    // If yes, save 'dark-mode' to localStorage
    localStorage.setItem('theme', 'dark-mode');
  } else {
    // If no, remove the theme from localStorage
    localStorage.removeItem('theme');
  }
};
// Add event listener for the toggle switch
darkModeToggle.addEventListener('change', toggleTheme);

// Apply the saved theme when the page loads
document.addEventListener('DOMContentLoaded', applySavedTheme);

const sessions = [
  {
    title: "Session-0",
    topics: "Intro to the Web, HTTP Vs HTTPS, IP Address, Domain, Hosting, URL, SEO, Accessibility, Inspect, Essential References.",
    img: "img\\html\\html-0.jpg",
    url: "https://appflowy.com/90507d36-0c51-4ff3-8366-1318cada01ae/HTML5-Session-0",
    category: "html",
    icon: "fa-solid fa-globe",
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
