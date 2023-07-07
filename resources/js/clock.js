const slider = document.getElementById('slider');
const clockContainer = document.getElementById('clock-container');

slider.addEventListener('click', () => {
  clockContainer.style.color = slider.checked ? 'hsla(155, 98%, 50%, 50%)' : 'hsla(155, 98%, 50%, 100%)';
  clockContainer.style.textShadow = slider.checked ? 'none' : '0.2em 0.2em 0.2em hsla(155, 98%, 50%, 50%)';
});

function getAmPm(hours) {
  return hours > 11 ? 'PM' : 'AM';
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
  let day;
  let month;
  
  switch(date.getDay()) {
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;
  }

  switch(date.getMonth()) {
    case 0:
      month = 'January';
      break;
    case 1:
      month = 'February';
      break;
    case 2:
      month = 'March';
      break;
    case 3:
      month = 'April';
      break;
    case 4:
      month = 'May';
      break;
    case 5:
      month = 'June';
      break;
    case 6:
      month = 'July';
      break;
    case 7:
      month = 'August';
      break;
    case 8:
      month = 'September';
      break;
    case 9:
      month = 'October';
      break;
    case 10:
      month = 'November';
      break;
    case 11:
      month = 'December';
      break;
  }

  return `${day}, ${date.getDate()} ${month}`;
}

function showTime() {
  const date = new Date;
  const amPm = getAmPm(date.getHours());
  const hours = formatHours(date.getHours());
  const minutes = formatMinutes(date.getMinutes());

  document.getElementById('time').innerHTML = `${hours}:${minutes}`;
  document.getElementById('am-pm').innerHTML = amPm;
  document.getElementById('day-date').innerHTML = getDayAndDate(date);
  //document.getElementById('full-date').innerHTML = date;
}

const update = setInterval(showTime, 1000)