let date = new Date(),
  normalDate = getNormal(date.getHours()) + ":" + getNormal(date.getMinutes()) + ":" + getNormal(date.getSeconds()) + " " + getNormal(date.getDay()) + "." + getNormal(date.getMonth()) + "." + date.getFullYear();
const content = document.querySelector('#content');

const fullDate = document.createElement('div');
fullDate.textContent = normalDate;
fullDate.style.color = '#aa00f8';
content.appendChild(fullDate);
function getNormal(number) {
  if (number < 10) {
    return '0' + number;
  } else {
    return number;
  }
}
function getUnNormal(number) {
  if (number[0] == 0) {
    return number[1];
  } else {
    return number;
  }
}
function printRusDayWeek() {
  let date = new Date(),
    weekDay = date.getDay(),
    weekPrint = document.createElement('div');
  weekPrint.style.color = 'green';
  switch (weekDay) {
    case 0:
      weekPrint.textContent = 'Воскресение';
      break;
    case 1:
      weekPrint.textContent = 'Понедельник';
      break;
    case 2:
      weekPrint.textContent = 'Вторник';
      break;
    case 3:
      weekPrint.textContent = 'Среда';
      break;
    case 4:
      weekPrint.textContent = 'Четверг';
      break;
    case 5:
      weekPrint.textContent = 'Пятница!';
      break;
    case 6:
      weekPrint.textContent = 'Суббота';
      break;
    default:
      weekPrint.textContent = 'Произошла ошибка!';
      break;
  }
  content.appendChild(weekPrint);
}

printRusDayWeek();

const startDate = document.querySelector('#start'),
  stopDate = document.querySelector('#stop'),
  result = document.querySelector('#result'),
  getResult = document.querySelector('button');
let start, stop;
start = new Date(Date.parse(startDate.value)).getTime();
stop = new Date(Date.parse(stopDate.value)).getTime();
startDate.addEventListener('change', () => {
  start = new Date(Date.parse(startDate.value)).getTime();
});
stopDate.addEventListener('change', () => {
  stop = new Date(Date.parse(stopDate.value)).getTime();
});
getResult.addEventListener('click', () => {
  result.value = (stop - start) / (24 * 60 * 60 * 1000);
});