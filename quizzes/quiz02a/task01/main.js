// your function here
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector("button");

  btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
});
