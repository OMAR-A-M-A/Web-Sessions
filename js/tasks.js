//  DATA SECTION
const bestTasks = [
  {
    category: "html",
    session: "Session-0",
    tasks: [
      {
        name: "Best Task: Adham Nabil ",
        url: `docs\\session-0\\Web Fundamentals Report-Adham-Nabil.pdf`,
        icon: "fa-solid fa-star",
      },
      {
        name: "Ali Mohamed",
        url: `docs\\session-0\\Ali_Mohamed_Task0.pdf`,
      },
      {
        name: "Nesma Hesham",
        url: `docs\\session-0\\Session-0-Nesma-Hesham-Fathy.pdf`,
      },
    ],
  },
];

//  DISPLAY FUNCTION
function displayBestTasks() {
  const categories = ["html", "css", "js", "bootstrap", "react"];
  const categoriesWithTasks = new Set();

  bestTasks.forEach((group) => {
    const container = document.getElementById(`${group.category}-accordion`);
    if (!container) return;

    // add buttons
    const button = document.createElement("button");
    button.classList.add("accordion-button");
    button.textContent = group.session;

    // add panel
    const panel = document.createElement("div");
    panel.classList.add("panel");

    const ul = document.createElement("ul");
    group.tasks.forEach((task) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = task.url;
      a.target = "_blank";
        if (task.icon) {
          const icon = document.createElement("i");
          icon.className = task.icon;
          icon.style.color = "gold";
          a.appendChild(icon);
          a.insertAdjacentText("beforeend", " ");
        }
      a.append(task.name);
      li.appendChild(a);
      ul.appendChild(li);
    });

    panel.appendChild(ul);
    container.appendChild(button);
    container.appendChild(panel);

    categoriesWithTasks.add(group.category);
  });

  // Hide sections with no sessions
  categories.forEach((cat) => {
    const section = document.getElementById(`${cat}-section`);
    if (!categoriesWithTasks.has(cat)) {
      section.style.display = "none";
    }
  });

  //   ACCORDION BEHAVIOR
  const buttons = document.querySelectorAll(".accordion-button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      const panel = btn.nextElementSibling;
      panel.classList.toggle("open");
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
}

displayBestTasks();
