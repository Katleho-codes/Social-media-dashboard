const checkbox = document.querySelector(".checkbox");
var element = document.body;
checkbox.addEventListener("click", () => {
  if (checkbox.classList.contains("on")) {
    element.classList.toggle("dark-mode");

    checkbox.setAttribute("aria-checked", "false");
  } else {
    checkbox.setAttribute("aria-checked", "true");
    element.classList.toggle("dark-mode");
  }
  checkbox.classList.toggle("on");
});
