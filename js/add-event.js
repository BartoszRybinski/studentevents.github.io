let btnClose = document.querySelector(".btn-close-container");
let hamburgerBtn = document.querySelector(".hamburger-btn");
let hamburgerContainer = document.querySelector(".hamburger-menu-container");
let hamburgerMenuClose = ()=>{
  hamburgerContainer.style.visibility="hidden";
  hamburgerContainer.style.opacity="0";
}
let hamburgerMenuOpen = ()=>{
  hamburgerContainer.style.visibility="visible";
  hamburgerContainer.style.opacity="1";
  hamburgerContainer.style.height="100%";
}

const btnAdd = document.querySelector(".btn-add-photo");
const checkbox = document.querySelector(".checkbox");
const checkbox2 = document.querySelector(".checkbox2");
btnAdd.addEventListener('click', (e) =>{
  e.preventDefault();
})
checkbox.addEventListener('click', ()=>{
  checkbox2.checked = false;
})
checkbox2.addEventListener('click',()=>{
  checkbox.checked = false;
  checkbox.removeAttribute("required");
})

form.addEventListener('submit', (e)=>{
  let messages = [];
  if(checkbox.checked == false && checkbox2.checked == false){
    messages.push("Empty checkbox");

  }
  if(messages.length > 0) {
    e.preventDefault();
  }
})



btnClose.addEventListener("click",hamburgerMenuClose);
hamburgerBtn.addEventListener("click",hamburgerMenuOpen);
