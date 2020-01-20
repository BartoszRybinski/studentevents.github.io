AOS.init();
const urlParams = new URLSearchParams(window.location.search);
const urlParam = urlParams.get('event');
const events = document.querySelector(".section-events");
let evPar = parseInt(urlParam);

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

function replaceContent(respName, respOrganizer,respDate, respAddress, respHour, respPrice, respLink, respDescription){
  let name = document.querySelector(".details-name"),
      organizer = document.querySelector(".details-organizer"),
      address = document.querySelector(".details-address"),
      hour = document.querySelector(".details-hour"),
      price = document.querySelector(".details-price"),
      link = document.querySelector(".details-link"),
      description = document.querySelector(".details-description");

  name.textContent = respName;
  organizer.textContent = respOrganizer;
  address.textContent = respAddress;
  hour.textContent = respDate+" "+respHour;
  price.textContent = respPrice;
  link.textContent = respLink;
  link.href = respLink;
  description.textContent = respDescription;
}



function createElement(title, organizer, address, hour, date, i) {
  let days = ["Niedziela","Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek","Sobota"];
  let my_div = document.querySelector(".section-events-container");
  let eventDate = document.querySelector(".event-date");
  let cln = my_div.cloneNode(true);
  let cln2 = eventDate.cloneNode(true);
  let myDate = new Date(date);
  let day = myDate.getDate();
  let month = myDate.getMonth()+1;
  if(day<10){
    day = "0"+day
  }
  if(month<10){
    month = "0"+month
  }
  cln2.textContent= `${day}.${month} ${days[myDate.getDay()]}`;
  events.appendChild(cln2);
  events.appendChild(cln);
  let content = document.querySelectorAll(".content-wrap");
  // h[1].childNodes[1].textContent = pobrane
    content[i].childNodes[1].textContent = title;
    content[i].childNodes[2].textContent = `Organizatorem jest ${organizer}`
    content[i].childNodes[3].textContent = address;
    content[i].childNodes[4].textContent = `Godzina ${hour}`;

}
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
fetch("http://s43.mydevil.net:7777/event/getAllEvents")
    .then(resp => resp.json())
    .then(resp => {
      for(let i = 0; i< 4; i++) {
        createElement(resp[i].name, resp[i].organizer,resp[i].adress, resp[i].hour, resp[i].date, i+1);
        replacePrice(resp[i].price,i+1);
      }
      replaceContent(resp[evPar].name, resp[evPar].organizer,resp[evPar].date, resp[evPar].adress, resp[evPar].hour, resp[evPar].price, resp[evPar].link, resp[evPar].description);
      $('.btn-href').click(function(e){
          e.preventDefault();
          addUrl("details.html"+"?event="+$('.btn-href').index(this))
      });
        events.removeChild(events.childNodes[5]);
    })
    .catch(error=>{console.log(error.message)})
