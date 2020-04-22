// fetch("http://s43.mydevil.net:7777/event/getAllEvents")
//     .then(resp => resp.json())
//     .then(resp => {
//       for(let i = 0; i< 4; i++) {
//         createElement(resp[i].name, resp[i].organizer,resp[i].adress, resp[i].hour, resp[i].date, i+1);
//         replacePrice(resp[i].price,i+1);
//       }
//       if(window.innerWidth<=768){
//         $('.event-container').click(function(){
//           window.open("details.html"+"?event="+$('.event-container').index(this))
//         })
//       }
      // $('.btn-href').click(function(e){
      //     e.preventDefault();
      //     addUrl("details.html"+"?event="+$('.btn-href').index(this))
//       });
//         events.removeChild(events.childNodes[5]);
//     })
//     .catch(error=>{console.log(error.message)})


createElement("Akademia dobrego kodu", "StudentEvent","Online", "12:00",1, 1);
replacePrice("Bezpłatne",1);
createElement("Kurs z ratownictwa medycznego", "Aplikacja112","ul. Medyczna 8", "18:00", 2, 2);
replacePrice("Bezpłatne",2);
createElement("Kurs produkcji muzyki", "MusicApp","ul. Muzyczna 13", "14:00", 3, 3);
replacePrice("Płatne",3);
createElement("Akademia dobrego kodu", "StudentEvent","Online", "16:00", 4, 4);
replacePrice("Bezpłatne",4);
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
