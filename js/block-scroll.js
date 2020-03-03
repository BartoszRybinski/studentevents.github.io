
    window.addEventListener('scroll', noScroll);
    setTimeout(()=>{window.removeEventListener('scroll', noScroll);},2700);

    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
