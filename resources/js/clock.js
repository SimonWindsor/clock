const slider = document.getElementById('slider'); // Slider for toggling 24 hour mode
const clockContainer = document.getElementById('clock-container'); // Contains clock elements
let twentyFourHours = false; // For using 24 hour mode

// For displaying current day
const days = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

// Fro displaying current month
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// Event listener for toggling 24 hour mode
slider.addEventListener('click', () => {
  twentyFourHours = slider.checked ? true : false;
});

// Displays either AM, PM or 24 depending on time or 24 hour toggle
function getAmPm(hours) {
  if(!twentyFourHours)
    return hours > 11 ? 'PM' : 'AM';
  else
    return '24';
}

// In 12 hour mode, converts 24 hour time to 12 hour time
function formatHours(hours) {
  if(hours === 0)
    return 12;
  else
    return hours > 12 ? hours - 12 : hours;
}

// Puts 0 in front of current minutes if less than 10
function formatMinutes(minutes) {
  return minutes < 10 ? `0${minutes}` : minutes;
}

// Uses days and months arrays for diplaying current day, date and month
function getDayAndDate(date) {
  const day = days[date.getDay()];
  const month = months[date.getMonth()];

  return `${day}, ${date.getDate()} ${month}`;
}

// Runs all time display logic
function showTime() {
  const date = new Date;
  const amPm24 = getAmPm(date.getHours());
  const hours = twentyFourHours ? date.getHours() : formatHours(date.getHours());
  const minutes = formatMinutes(date.getMinutes());

  document.getElementById('time').innerHTML = `${hours}:${minutes}`;
  document.getElementById('am-pm-24').innerHTML = amPm24;
  document.getElementById('day-date').innerHTML = getDayAndDate(date);
}

// Updates time by the second, keeping it live
const update = setInterval(showTime, 1000)