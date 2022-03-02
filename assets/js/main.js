let navToggle = document.querySelector(".nav_toggle");
let navWrapper = document.querySelector(".nav_wrapper");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});

let cartToggle = document.querySelector(".cart_toggle");
let cartWrapper = document.querySelector(".cart_wrapper");

cartToggle.addEventListener("click", function () {
  if (cartWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "cart");
    cartWrapper.classList.remove("active");
  } else {
    cartWrapper.classList.add("active");
    this.setAttribute("aria-label", "close cart");
    this.setAttribute("aria-expanded", "true");
  }
});


