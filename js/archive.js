AOS.init();
const events = document.querySelector(".section-events");
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

function replacePrice(price,i){
  let eventPrice = document.querySelectorAll(".event-price");
  if(price == "płatne") {
    eventPrice[i].textContent = "Płatne";
  } else {
    eventPrice[i].textContent = "Bezpłatne";
  }
}

function addUrl(url){

  window.location.href = url;
}
function createElement(title, organizer, address, hour, i) {
  let my_div = document.querySelector(".section-events-container");
  let cln = my_div.cloneNode(true);
  events.appendChild(cln);
  let content = document.querySelectorAll(".content-wrap");
  // h[1].childNodes[1].textContent = pobrane
    content[i].childNodes[1].textContent = title;
    content[i].childNodes[2].textContent = `Organizatorem jest ${organizer}`
    content[i].childNodes[3].textContent = address;
    content[i].childNodes[4].textContent = `Godzina ${hour}`;

}

fetch("http://s43.mydevil.net:7777/event/getAllArchive")
    .then(resp => resp.json())
    .then(resp => {
      for(let i = 0; i< resp.length; i++) {
        createElement(resp[i].name, resp[i].organizer,resp[i].adress, resp[i].hour, i+1);
        replacePrice(resp[i].price,i+1);
      }
      $('.btn-href').click(function(e){
          e.preventDefault();
          addUrl("details.html"+"?event="+$('.btn-href').index(this))
      });
        events.removeChild(events.childNodes[5]);
    })
    .catch(error=>{console.log(error.message)})
