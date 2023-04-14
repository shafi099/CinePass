document.addEventListener('DOMContentLoaded', () => {

const now = new Date();
const month = now.getMonth();
const day = now.getDate();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const today = document.getElementById("today");
const tommorrow = document.getElementById("tommorrow");
const hours = now.getHours(); 
const timings = [10.00, 14.00, 18.00, 21.00];
let timingshow = [];
const screentimes = document.getElementsByClassName("screentime");

for (let i of timings) {
  if (i > hours) {
    timingshow.push(`${i}`);
  }
}
  todayshowtimings();

today.innerText = `${months[month]} ${day}`;
tommorrow.innerText = `${months[month]} ${day + 1}`;

today.onclick = () => {
  today.classList.remove("tommorrow");
  today.classList.add("today");
  tommorrow.classList.remove("today");
  tommorrow.classList.add("tommorrow");
  todayshowtimings();
  const selecttext = document.getElementById("selecttext");
  selecttext.innerText="Select your screen and show timings from below. Book tickets for tommorrow";
}

tommorrow.onclick = () => {
  tommorrow.classList.remove("tommorrow");
  tommorrow.classList.add("today");
  today.classList.remove("today");
  today.classList.add("tommorrow");
  const showtimings= `<a href="theatre.html">10.00AM</a> <a href="theatre.html">2.00PM</a> <a href="theatre.html">4.00PM</a> <a href="theatre.html">6.00PM</a>`;
  for (let i = 0; i < screentimes.length; i++) {
    screentimes[i].innerHTML=showtimings;
  }
  const selecttext = document.getElementById("selecttext");
  selecttext.innerText="You selected tommorow screening movies";
}


  function todayshowtimings() {
    for (let i = 0; i < screentimes.length; i++) {
      if (timingshow.length === 0) {
        screentimes[i].innerHTML = "\tNo timings available for today";
      } else if (timingshow.length === 1) {
        screentimes[i].innerHTML = ` <span class="nillshow" style="border: none;">10.00AM</span><span class="nillshow" style="border: none;">2.00PM</span><span class="nillshow" style="border: none;">6.00PM</span><a href="theatre.html">${timingshow[0] - 12}.00PM</a>`;
      } else if (timingshow.length === 2) {
        screentimes[i].innerHTML = `<span class="nillshow" style="border: none;">10.00AM</span><span class="nillshow" style="border: none;">2.00PM</span><a href="theatre.html">${timingshow[0] - 12}.00PM</a> <a href="theatre.html">${timingshow[1] - 12}.00PM</a>`;
      } else if (timingshow.length === 3) {
        screentimes[i].innerHTML = `<span class="nillshow" style="border: none;">10.00AM</span><a href="theatre.html">${timingshow[0] - 12}.00PM</a> <a href="theatre.html">${timingshow[1] - 12}.00PM</a> <a href="theatre.html">${timingshow[2] - 12}.00PM</a>`;
      } else {
        screentimes[i].innerHTML = `<a href="theatre.html">${timingshow[0]}.00AM</a> <a href="theatre.html">${(timingshow[1] - 12)}.00PM</a> <a href="theatre.html">${timingshow[2] - 12}.00PM</a> <a href="theatre.html">${timingshow[3] - 12}.00PM</a>`;
      }
    };
  }
});
