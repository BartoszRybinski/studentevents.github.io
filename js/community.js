AOS.init();
let btnClose = document.querySelector(".btn-close-container");
let hamburgerBtn = document.querySelector(".hamburger-btn");
let hamburgerContainer = document.querySelector(".hamburger-menu-container");
let hamburgerMenuClose = ()=>{
  hamburgerContainer.style.visibility="hidden";
  hamburgerContainer.style.opacity="0";
}
let hamburgerMenuOpen = ()=>{hamburgerContainer.style.visibility="visible"; hamburgerContainer.style.opacity="1"; hamburgerContainer.style.height="100%"; }

btnClose.addEventListener("click",hamburgerMenuClose);
hamburgerBtn.addEventListener("click",hamburgerMenuOpen);
