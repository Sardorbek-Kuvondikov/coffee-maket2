const menuBtn = document.querySelector(".js-menu-btn");

const mainMenuBtnFn = () => {
  menuBtn.closest(".site-header").classList.toggle("open-menu");
  document.body.classList.toggle("unscrol");
};

menuBtn.addEventListener("click", mainMenuBtnFn);
