// Dark mode
function darkmode() {
    document.getElementById('theme').setAttribute('href', '../assets/css/dark.css'); 
    document.getElementById('toggle').className='fa-solid fa-toggle-off toggleon';
    document.getElementById('firstimg').src='../assets/images/shape-top-black-80.png';
    document.getElementById('secimg').src='../assets/images/shape-top-dark-grey-80.png';
    document.getElementById('topgrey2').src='../assets/images/shape-top-dark-grey-80.png';
}

// Light Mode
function lightmode() {
    document.getElementById('theme').setAttribute('href', '../assets/css/light.css'); 
    document.getElementById('toggle').className='fa-solid fa-toggle-on toggleon';
    document.getElementById('firstimg').src='../assets/images/shape-top-white-80.png';
    document.getElementById('secimg').src='../assets/images/shape-top-grey-80.png';
    document.getElementById('topgrey2').src='../assets/images/shape-top-grey-80.png';
}


var countDownDate = new Date("Nov 5, 2024 23:59:59").getTime();
  
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the countdown date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  // document.getElementById("countdownBar").innerHTML = days + ":" + hours
  // + ":" + minutes + ":" + seconds;
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
    
    
  // If the count down is over, write some text 
  if (distance <= 0) {
    clearInterval(x);
    document.getElementById("countdownBar").innerHTML = "EXPIRED";
  }
}, 1000);