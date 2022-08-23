const btn_toggle = document.getElementById("switch");

btn_toggle.addEventListener("click", (e) => {
  document.body.classList.toggle("dark-mode", e.target.checked);
  if (e.target.checked) {
    document.querySelector("h1").textContent = "Dark Mode";
  } else {
    document.querySelector("h1").textContent = "Light Mode";
  }
});