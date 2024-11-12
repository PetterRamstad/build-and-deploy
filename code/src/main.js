import {  getSecondsLeftOfYear, getTimeString, getMinutesLeftOfYear } from "./clock";

const timeContainer = document.getElementById("time");
const timeLeft = document.getElementById("seconds-left");
const minutesLeft = document.getElementById("minutes-left"); // New Element

const render = () => {
  const now = new Date();
  timeLeft.innerText = getSecondsLeftOfYear(now);
  timeContainer.innerText = getTimeString(now);
  minutesLeft.innerText = getMinutesLeftOfYear(now); // Update with minutes left
}

render();
setInterval(render, 1000);