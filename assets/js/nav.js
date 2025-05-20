document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  navToggle.addEventListener("click", function () {
    if (navMenu.classList.contains("active")) {
      navMenu.classList.add("removing");
      navMenu.classList.remove("active");
      setTimeout(() => {
        navMenu.classList.remove("removing");
      }, 500);
    } else {
      navMenu.classList.add("active");
    }
  });
});