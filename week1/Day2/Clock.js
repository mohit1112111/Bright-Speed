
function updateClock() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // Convert hours to 12-hour format and determine AM/PM
  var meridiem = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // Convert midnight (0) to 12 AM

  // Pad single digit minutes and seconds with a leading zero
  minutes = (minutes < 10 ? '0' : '') + minutes;
  seconds = (seconds < 10 ? '0' : '') + seconds;

  var timeString = hours + ':' + minutes + ':' + seconds + ' ' + meridiem;
  document.getElementById('clock').innerText = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Run updateClock once immediately to avoid delay
updateClock();

  

  