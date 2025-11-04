//  DATA SECTION
const bestTasks = [
  {
    category: "html",
    session: "Session 1",
    tasks: [
      { name: "Task 1 by Ahmed Ali", url: `img\\html\\html-1.png` },
      { name: "Task 2 by Mariam Hassan", url: "#" },
    ],
  },
  {
    category: "html",
    session: "Session 2",
    tasks: [{ name: "Task 1 by Sara Ahmed", url: "#" }],
  },
  {
    category: "css",
    session: "Session 1",
    tasks: [{ name: "Task 1 by Omar Khaled", url: "#" }],
  },
  {
    category: "js",
    session: "Session 1",
    tasks: [
      { name: "Task 1 by Hossam Adel", url: "#" },
      { name: "Task 2 by Yara Tarek", url: "#" },
    ],
  },
  {
    category: "bootstrap",
    session: "Session 1",
    tasks: [{ name: "Task 1 by Omar Khaled", url: "#" }],
  },
  {
    category: "react",
    session: "Session 1",
    tasks: [{ name: "Task 1 by Mostafa Nasser", url: "#" }],
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
      a.textContent = task.name;
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
