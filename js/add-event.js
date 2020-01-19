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
  // checkbox.removeAttribute("required");
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

$("form").submit(function(event){
  event.preventDefault();
  const url = "http://s43.mydevil.net:7777/event/addEvent";

  function checkPrice(){
    if(document.querySelector(".checkbox2").checked == true) {
      return "płatne";
    } else {
      return "bezpłatne";
    }
  }

  const data = {
    "name": document.querySelector(".form-name").value,
    "organizer": document.querySelector(".form-organizer").value,
    "date": document.querySelector(".form-date").value,
    "adress": document.querySelector(".form-address").value,
    "hour": document.querySelector(".form-hour").value,
    "link": document.querySelector(".form-link").value,
    "price": checkPrice(),
    "description": document.querySelector(".form-description").value,
    "imgToByteArray": [],
    "categoryDtos": []
  };

  const other_params = {
    headers : { "content-type" : "application/json"},
    body : JSON.stringify(data),
    method : "POST",
    mode : "cors"
  };
  fetch(url, other_params)
      .then(resp => resp.json())
      .then(data=>{
        console.log("Success: ", data);
      })
      .catch(error=>{
        console.log(error.message);
      })
      return false
});

$(".btn-primary").click(()=>{
  let req = 0;
  for(let i = 0; i<form.length; i++) {
    if(form[i].required == true){
      if(form[i].value == ""){
        console.log(form[i].value)
        req++;
      }
    }
  }
  console.log(req);
  if(req==0){
    window.location.href = "index.html";
  }
})
