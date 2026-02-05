const toggle = document.getElementById("themeToggle");
const body = document.body;

function setTheme(theme) {
  body.className = theme;
  localStorage.setItem("theme", theme);
  toggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

toggle.addEventListener("click", () => {
  setTheme(body.classList.contains("dark") ? "light" : "dark");
});

const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);
