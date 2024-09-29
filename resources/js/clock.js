const slider = document.getElementById('slider');
const clockContainer = document.getElementById('clock-container');
let twentyFourHours = false;

const days = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

slider.addEventListener('click', () => {
  twentyFourHours = slider.checked ? true : false;
});

function getAmPm(hours) {
  if(!twentyFourHours)
    return hours > 11 ? 'PM' : 'AM';
  else
    return '24';
}

function formatHours(hours) {
  if(hours === 0)
    return 12;
  else
    return hours > 12 ? hours - 12 : hours;
}

function formatMinutes(minutes) {
  return minutes < 10 ? `0${minutes}` : minutes;
}

function getDayAndDate(date) {
  const day = days[date.getDay()];
  const month = months[date.getMonth()];

  return `${day}, ${date.getDate()} ${month}`;
}

function showTime() {
  const date = new Date;
  const amPm24 = getAmPm(date.getHours());
  const hours = twentyFourHours ? date.getHours() : formatHours(date.getHours());
  const minutes = formatMinutes(date.getMinutes());

  document.getElementById('time').innerHTML = `${hours}:${minutes}`;
  document.getElementById('am-pm-24').innerHTML = amPm24;
  document.getElementById('day-date').innerHTML = getDayAndDate(date);
}

const update = setInterval(showTime, 1000)