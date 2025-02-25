// Your code here.
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("active"); // Change button style
  navLinks.classList.toggle("active"); // Show/hide nav links
});
