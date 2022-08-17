window.addEventListener('scroll', function () {
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active-header', windowPosition);
});

function fechar_menu() {
    document.getElementById('check').checked = false;
}
function rotate_pulley() {
  document.getElementByClass('timer').active = true;
}

var header = document.querySelector('header');

// Set CountDown
var countDownDate = new Date("14:00 May 14, 2021").getTime();

var rotateS = 0;
var rotateM = 0
var rotateH = 0
var rotateD = 0

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  rotateS += 30;

  // Display the result in the element with id="demo"

  if (hours === 23 && minutes === 59 && seconds === 59) {
    rotateD += 30;
    document.getElementById("timerD").style.transform = "rotate("+rotateD+"deg)";
    document.getElementById("timer-d").style.transform = "rotate("+(-rotateD)+"deg)";
  }

  document.getElementById("timer-d").innerHTML = days

  if (minutes === 59 && seconds === 59) {
    rotateH += 30;
    document.getElementById("timerH").style.transform = "rotate("+rotateH+"deg)";
    document.getElementById("timer-h").style.transform = "rotate("+(-rotateH)+"deg)";
  }

  document.getElementById("timer-h").innerHTML = hours

  if (seconds === 59) {
    rotateM += 30;
    document.getElementById("timerM").style.transform = "rotate("+rotateM+"deg)";
    document.getElementById("timer-m").style.transform = "rotate("+(-rotateM)+"deg)";
  }

  document.getElementById("timer-m").innerHTML = minutes
  document.getElementById("timerS").style.transform = "rotate("+rotateS+"deg)";
  document.getElementById("timer-s").style.transform = "rotate("+(-rotateS)+"deg)";
  document.getElementById("timer-s").innerHTML = seconds

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer-d").innerHTML = 0
    document.getElementById("timer-h").innerHTML = 0
    document.getElementById("timer-m").innerHTML = 0
    document.getElementById("timer-s").innerHTML = 0
  }
}, 1000);