const btnGo = document.getElementById("start");
const input = document.getElementById("choice");
const injection = document.getElementById("countdownDisplay");

let timer, totalSeconds, secondes, minutes;

input.addEventListener("input", (e) => {
  timer = e.target.value;
  totalSeconds = timer * 60;
});

btnGo.addEventListener("click", (e) => {
  e.preventDefault();
  let interval = setInterval(() => {
    totalSeconds--;
    minutes = Math.floor(totalSeconds / 60);
    secondes = totalSeconds % 60;
    injection.innerHTML = `Il reste ${minutes} minute(s) et ${secondes} seconde(s) `;
    if (totalSeconds <= 0) {
      clearInterval(interval);
      timer = "";
      input.value = "";
      injection.innerHTML = "";
    }
  }, 100);
});
