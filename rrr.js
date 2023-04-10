document.addEventListener('DOMContentLoaded', () => {

const now = new Date();
const month = now.getMonth();
const day = now.getDate();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const today = document.getElementById("today");
const tomorrow = document.getElementById("tomorrow");
const hours = now.getHours(); 
const timings = [10.00, 14.00, 17.00, 21.00];
let timingshow = [];
let screentime = document.getElementById("screentime");

// Get the available timings for the day
for (let i of timings) {
  if (i > hours) {
    timingshow.push(`${i.toFixed(2)}`);
  }
}

// Set the screen timings for display
if (timingshow.length === 0) {
  screentime.innerText = "No timings available for today";
} else if (timingshow.length === 1) {
  screentime.innerText = `${timingshow[0]}`;
} else if (timingshow.length === 2) {
  screentime.innerText = `${timingshow[0]} ${timingshow[1]}`;
} else {
  screentime.innerText = `${timingshow[0]}-${timingshow[timingshow.length - 1]}`;
}

today.innerText = `${months[month]} ${day}`;
tomorrow.innerText = `${months[month]} ${day + 1}`;

today.onclick = () => {
  today.classList.remove("tomorrow");
  today.classList.add("today");
  tomorrow.classList.remove("today");
  tomorrow.classList.add("tomorrow");
}

tomorrow.onclick = () => {
  tomorrow.classList.remove("tomorrow");
  tomorrow.classList.add("today");
  today.classList.remove("today");
  today.classList.add("tomorrow");
}



});