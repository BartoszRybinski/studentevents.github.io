AOS.init();
let btnClose = document.querySelector(".btn-close-container");
let hamburgerBtn = document.querySelector(".hamburger-btn");
let hamburgerContainer = document.querySelector(".hamburger-menu-container");
let hamburgerMenuClose = ()=>{
  hamburgerContainer.style.visibility="hidden";
  hamburgerContainer.style.opacity="0";
  window.removeEventListener('scroll', noScroll);
}
let hamburgerMenuOpen = ()=>{
  hamburgerContainer.style.visibility="visible";
  hamburgerContainer.style.opacity="1";
  hamburgerContainer.style.height="100%";
  window.addEventListener('scroll', noScroll);
}

btnClose.addEventListener("click",hamburgerMenuClose);
hamburgerBtn.addEventListener("click",hamburgerMenuOpen);

function noScroll() {
  window.scrollTo(0, 0);
  }
