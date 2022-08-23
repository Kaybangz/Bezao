//NAVBAR TOGGLE ON MOBILE DEVICES
const navToggle = () => {
  const hamburger = document.querySelector(".menu_icon");

  const closeBtn = document.querySelector(".close");

  const nav = document.querySelector(".nav_links");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  closeBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
};



navToggle();

