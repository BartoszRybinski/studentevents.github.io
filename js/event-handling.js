const urlParams = new URLSearchParams(window.location.search);
const urlParam = urlParams.get('event');
const events = document.querySelector(".section-events");
const link = document.querySelectorAll(".btn-href");
let eventContainer = document.querySelectorAll(".section-events")

let evPar = parseInt(urlParam);

function createElement(title, organizer, address, hour, date, i) {
  let days = ["Niedziela","Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek","Sobota","Niedziela","Poniedziałek","Wtorek","Środa"];
  let my_div = document.querySelector(".section-events-container");
  let eventDate = document.querySelector(".event-date");
  let cln = my_div.cloneNode(true);
  let cln2 = eventDate.cloneNode(true);
  let myDate = new Date();
  let day = myDate.getDate()+date;
  let month = myDate.getMonth()+1;
  if(day<10){
    day = "0"+day
  }
  if(month<10){
    month = "0"+month
  }
  cln2.textContent= `${day}.${month} ${days[myDate.getDay()+date]}`;
  events.appendChild(cln2);
  events.appendChild(cln);
  let content = document.querySelectorAll(".content-wrap");
  // h[1].childNodes[1].textContent = pobrane
    content[i].childNodes[1].textContent = title;
    content[i].childNodes[2].textContent = `Organizatorem jest ${organizer}`
    content[i].childNodes[3].textContent = address;
    content[i].childNodes[4].textContent = `Godzina ${hour}`;
}
// function replacePrice(price,i){
//   let eventPrice = document.querySelectorAll(".event-price");
//   if(price == "Płatne") {
//     eventPrice[i].textContent = "Płatne";
//   } else {
//     eventPrice[i].textContent = "Bezpłatne";
//   }
// }
function replacePrice(price,i){
  let eventPrice = document.querySelectorAll(".event-price");
    eventPrice[i].textContent = price;
}

function replaceContent(respName, respOrganizer,respDate, respAddress, respHour, respPrice, respLink, respDescription){
  let name = document.querySelector(".details-name"),
      organizer = document.querySelector(".details-organizer"),
      address = document.querySelector(".details-address"),
      hour = document.querySelector(".details-hour"),
      price = document.querySelector(".details-price"),
      link = document.querySelector(".details-link"),
      description = document.querySelector(".details-description");
      newDate = new Date();
  name.textContent = respName;
  organizer.textContent = respOrganizer;
  address.textContent = respAddress;
  hour.textContent = newDate.getDate()+respDate+"/"+newDate.getMonth()+"/"+newDate.getFullYear()+" "+respHour;
  price.textContent = respPrice;
  link.textContent = respLink;
  link.href = respLink;
  description.textContent = respDescription;
}

function addUrl(url){
  window.location.href = url;
}
