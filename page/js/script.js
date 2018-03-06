/* Main Navigation */
// get the main-nav, menu-toggle button, main-header
var mainNav = document.getElementById("main-nav");
var navToggle = document.getElementById("nav-toggle");
var mainHeader = document.getElementById("main-header");


// toggle Navigation
function toggleNav() {
  mainNav.classList.toggle("opened");
}

// collapse navigation bar if navigation greater that normal height
function navResize() {
  if (screen.width < 810) {
    mainHeader.classList.add("collapsed");
  } else {
    mainHeader.classList.remove("collapsed");
    mainNav.classList.remove("opened");
  }
}

// run navResize on startup
navResize();

// add a way to track if this is clicked
navToggle.addEventListener("click", toggleNav);

// track if screen size changed
window.addEventListener("resize", navResize);
