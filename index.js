const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById ("seconds");
const ampmEl = document.getElementById("ampm");
const dateEl = document.getElementById("date");
const dayEl = document.getElementById("day");

function updateClock() {
  let d = new Date().getUTCMonth();
  let day = new Date().getDate();
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if(h > 12) {
    h = h - 12;
    ampm = "PM"
  }

  h = h<10 ? "0" + h : h;
  s = s<10 ? "0" + s : s;
  m = m<10 ? "0" + m : m;
  d = d<10 ? "0" + d : d;
  day = day<10 ? "0" + day : day;

  dateEl.innerText = d;
  dayEl.innerText = day;
  hourEl.innerText = h;
  minutesEl.innerText = m;
  secondsEl.innerText = s;
  ampmEl, (innerText = ampm);
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
