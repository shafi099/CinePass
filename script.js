document.addEventListener('DOMContentLoaded', () => {
    const citybtns = document.querySelectorAll(".citybtn");
    const moviehead = document.getElementById("moviehead");
    const submit=document.getElementById("submit");
    const moviesubmit= document.getElementById("inputmoviesubmit");
    const nowshowing= document.getElementById("nowshowing");
    const browsebtns=document.querySelectorAll(".browsebtns");


    citybtns.forEach(btn => {
      btn.onclick = () => {
        moviehead.innerHTML = `MOVIES AT ${btn.value.toUpperCase()} <hr>`;
      }; 
    });


    submit.onclick = () => {
        const inputval = document.getElementById("myinput").value;
        if(inputval!=0){
        moviehead.innerHTML = `MOVIES AT ${inputval.toUpperCase()} <hr>`;
        var section=moviehead
        section.scrollIntoView({behavior: "smooth"});
        }
        else{
            moviehead.innerHTML = `MOVIES <hr>`
        }};    

        
    moviesubmit.onclick = () => {
      var movieinput = document.getElementById("movienameinput").value;
      var section = document.getElementById(movieinput.toLowerCase());
      if (section) {
        section.scrollIntoView({behavior: "smooth"});
      }
      else{
        var bookingbox = document.getElementById("bookingbox");
        var usesearch = document.getElementById("usesearch")
        //var section = document.getElementById("toggles")
        moviehead.scrollIntoView({behavior: "smooth"});
        usesearch.innerText=""
        bookingbox.innerHTML= `<div style="padding:200px 12px 200px 12px;"><p> '${movieinput}' is not found</p><p>To view the list of movies being screened in your city, please click on the "Now Showing" tab.</p> </div>`;
      }
    }

    nowshowing.onclick = () => {
      moviehead.scrollIntoView({behavior: "smooth"});
      location.reload();
    }

    browsebtns.forEach(btn => {
      btn.onclick = () => {
        moviehead.innerHTML = `MOVIES AT ${btn.value.toUpperCase()} <hr>`;
        moviehead.scrollIntoView({behavior: "smooth"});
      }; 
    });
/*    function moviesection() {
      var section = document.getElementById("bookingbox");
      section.scrollIntoView({behavior: "smooth"});
    }*/
  });
  