const startMinute = 20;
let time = startMinute * 60;

const countdown = document.querySelector('p');
// const countdown1Min = document.getElementById("60-sec");
// console.log(countdown1Min)

function updateCountdown(){
  if(time <= 0) {
    clearInterval(setCountdown)
  }
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdown.innerText = minutes + ':' + seconds;
  time--;
}

updateCountdown()
const setCountdown = setInterval(updateCountdown, 1000);