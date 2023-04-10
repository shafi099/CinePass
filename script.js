document.addEventListener('DOMContentLoaded', () => {
  const citybtns = document.querySelectorAll(".citybtn");
  const moviehead = document.getElementById("moviehead");
  const submit=document.getElementById("submit");
  const moviesubmit= document.getElementById("inputmoviesubmit");
  const nowshowing= document.getElementById("nowshowing");
  const comingsoon= document.getElementById("comingsoon");
  const browsebtns=document.querySelectorAll(".browsebtns");
  const bookingbox = document.getElementById("bookingbox");
  const bookingboxdupli=bookingbox.innerHTML;

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
      var usesearch = document.getElementById("usesearch")
      //var section = document.getElementById("toggles")
      moviehead.scrollIntoView({behavior: "smooth"});
      usesearch.innerText=""
      bookingbox.innerHTML= `<div style="padding:100px 12px 100px 12px;color:#f2f2f2;font-family:quicksand;"><p> '${movieinput}' is not found!</p><p>To view the list of movies being screened in your city, please click on the "Now Showing" tab.</p> </div>`;
    }
  }

  nowshowing.onclick = () => {
    var togglemsg= document.getElementById("usesearch");
    togglemsg.innerText="**FIND YOUR FAVORITE MOVIE NAME or USE THE SEARCH BAR OR BROWSE THE OPTIONS BELOW **"
    bookingbox.innerHTML= bookingboxdupli;
    nowshowing.classList.remove("comingsoon");
    nowshowing.classList.add("nowshow");
    comingsoon.classList.remove("nowshow");
    comingsoon.classList.add("comingsoon");
  }
  
  comingsoon.onclick = () => {

    var togglemsg= document.getElementById("usesearch");
    togglemsg.innerText="These movies are yet to be released. To view the currently showing movies, click on the 'Now Showing' button above"
    bookingbox.innerHTML= `  
    <div class="box1" id="adipurush">
      <img src="adipurush.jpg" alt="adipurush">
      <span class="movietitle">Adipurush</span>
      <span class="movieruntime">JAN 2024</span>
      <button class="booknow">Soon</button>
    </div>
    <div class="box1" id="jawan">
      <img src="jawan.jpg" alt="jawan">
      <span class="movietitle">Jawan</span>
      <span class="movieruntime">OCT 2023</span>
      <button class="booknow">Soon</button>
    </div>
    <div class="box1" id="NTR30">
      <img src="NTR30.jpg" alt="NTR30">
      <span class="movietitle">NTR30</span>
      <span class="movieruntime">APRIL 2024</span>
      <button class="booknow">soon</button>
    </div>
  `;
  nowshowing.classList.remove("nowshow");
  nowshowing.classList.add("comingsoon");
  comingsoon.classList.remove("comingsoon");
  comingsoon.classList.add("nowshow");;
  }


  browsebtns.forEach(btn => {
    btn.onclick = () => {
      moviehead.innerHTML = `MOVIES AT ${btn.value.toUpperCase()} <hr>`;
      moviehead.scrollIntoView({behavior: "smooth"});
    }; 
  });


});
