fetch("http://s43.mydevil.net:7777/event/getAllArchive")
    .then(resp => resp.json())
    .then(resp => {
      for(let i = 0; i< 4; i++) {
        createElement(resp[i].name, resp[i].organizer,resp[i].adress, resp[i].hour, resp[i].date, i+1);
        replacePrice(resp[i].price,i+1);
      }
      $('.btn-href').click(function(e){
          e.preventDefault();
          addUrl("details.html"+"?event="+$('.btn-href').index(this))
      });
        events.removeChild(events.childNodes[5]);
    })
    .catch(error=>{console.log(error.message)})
