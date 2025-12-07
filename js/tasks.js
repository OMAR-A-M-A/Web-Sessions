//  DATA SECTION
const bestTasks = [
  {
    category: "html",
    session: "Session-0",
    tasks: [
      {
        name: "Best Task: Adham Nabil ",
        url: `https://drive.google.com/file/d/1aAoMRlQDOrxLc7jKfZ4kS8vOmcSY_-Eq/view?usp=sharing`,
        icon: "fa-solid fa-star",
      },
      {
        name: "Ali Mohamed",
        url: `https://drive.google.com/file/d/1sk3FORs7afzsqSdZpEsFthYMRmeJ-tBA/view?usp=sharing`,
      },
      {
        name: "Nesma Hesham",
        url: `https://drive.google.com/file/d/1XgUfdhSY2e3Hgy61ofxIPgaLpTT4Tj1v/view?usp=sharing`,
      },
    ],
  },
  {
    category: "html",
    session: "Session-1",
    tasks: [
      {
        name: "Best Task: Huda-Magdy",
        url: `https://drive.google.com/file/d/12SpYW2tEKS5Hc1skw835jqvdODwFw-HZ/view?usp=sharing`,
        icon: "fa-solid fa-star",
      },
      {
        name: "Adham Nabil",
        url: `https://drive.google.com/file/d/1WNk0DTZg_OPleEt2c1ipL8exzDaKvPZM/view?usp=sharing`,
        icon: "fa-solid fa-star",
      },
      {
        name: "Mohamed Kasem",
        url: `https://drive.google.com/file/d/1KOMNP5y81Mogo7lmlmN_keWBYO95xuBl/view?usp=sharing`,
        icon: "fa-solid fa-star",
      },
      {
        name: "Habiba Eslam",
        url: `https://drive.google.com/file/d/1_lg_pyqXM3HiI6rjFkanrsRQ7U6APogh/view?usp=sharing`,
      },
      {
        name: "Abdelrahman Samir",
        url: `https://drive.google.com/file/d/1_rCIc5V7RXUiH1MSdvPmvmiGgcn_oD8f/view?usp=sharing`,
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
      buttons.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          otherBtn.classList.remove("active");
          const otherPanel = otherBtn.nextElementSibling;
          otherPanel.classList.remove("open");
          otherPanel.style.maxHeight = null;
        }
      });

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
