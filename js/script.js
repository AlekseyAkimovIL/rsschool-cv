const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");
const NAV_OPEN_CLASS = "sidebar__nav--open";

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle(NAV_OPEN_CLASS);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      siteNav.classList.remove(NAV_OPEN_CLASS);
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      siteNav.classList.remove(NAV_OPEN_CLASS);
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
    }
  });
}
