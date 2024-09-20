const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const isVisible = primaryNav.getAttribute("data-visible") === "true";

    primaryNav.setAttribute("data-visible", !isVisible);
    navToggle.setAttribute("aria-expanded", !isVisible);
});


