// fetch("http://s43.mydevil.net:7777/event/getAllEvents")
//     .then(resp => resp.json())
//     .then(resp => {
//       for(let i = 0; i< 4; i++) {
//         createElement(resp[i].name, resp[i].organizer,resp[i].adress, resp[i].hour, resp[i].date, i+1);
//         replacePrice(resp[i].price,i+1);
//       }
      // replaceContent(resp[evPar].name, resp[evPar].organizer,resp[evPar].date, resp[evPar].adress, resp[evPar].hour, resp[evPar].price, resp[evPar].link, resp[evPar].description);
      // if(window.innerWidth<=768){
      //   $('.event-container').click(function(){
      //     window.open("details.html"+"?event="+$('.event-container').index(this))
      //   })
      // }
//       $('.btn-href').click(function(e){
//           e.preventDefault();
//           addUrl("details.html"+"?event="+$('.btn-href').index(this))
//       });
//         events.removeChild(events.childNodes[5]);
//     })
//     .catch(error=>{console.log(error.message)})
//


createElement("Akademia dobrego kodu", "StudentEvent","Online", "12:00",1, 1);
replacePrice("Bezpłatne",1);
createElement("Kurs z ratownictwa medycznego", "Aplikacja112","ul. Medyczna 8", "18:00", 2, 2);
replacePrice("Bezpłatne",2);
createElement("Kurs produkcji muzyki", "MusicApp","ul. Muzyczna 13", "14:00", 3, 3);
replacePrice("Płatne",3);
createElement("Akademia dobrego kodu II", "StudentEvent","Online", "16:00", 4, 4);
replacePrice("Bezpłatne",4);
if(evPar == 0) {
  replaceContent("Akademia dobrego kodu", "StudentEvent",1, "Online", "12:00", "Bezpłatne", "www.rybinski.dev.minda.pl/StudentEvent/", "brak opisu");
} else if(evPar == 1) {
  replaceContent("Kurs z ratownictwa medycznego", "Aplikacja112",2, "ul. Medyczna 8", "18:00", "Bezpłatne", "http://www.rybinski.dev.minda.pl/App/", "brak opisu");
} else if(evPar == 2) {
  replaceContent("Kurs produkcji muzyki", "MusicApp",3, "ul. Muzyczna 13", "14:00", "Płatne", "http://www.rybinski.dev.minda.pl/MusicApp/", "brak opisu");
} else {
  replaceContent("Akademia dobrego kodu II", "StudentEvent",4, "Online", "16:00", "Bezpłatne", "www.rybinski.dev.minda.pl/StudentEvent/", "brak opisu");
}
if(window.innerWidth<=768){
  $('.event-container').click(function(){
    window.open("details.html"+"?event="+$('.event-container').index(this))
  })
}
$('.btn-href').click(function(e){
    e.preventDefault();
    addUrl("details.html"+"?event="+$('.btn-href').index(this))
  });
events.removeChild(events.childNodes[5]);
