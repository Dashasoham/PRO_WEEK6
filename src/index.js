let now = new Date();
console.log(new Date());
let days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

let day = days[now.getDay()];
let hours = now.getHours();
hours = hours <= 9 ? '0' + hours : hours;

let minutes = now.getMinutes();
minutes = minutes <= 9 ? '0' + minutes : minutes;

let currentDay = document.querySelector('#dateTime');
let currentTime = document.querySelector('#timeDate');
currentDay.innerHTML = `${day}`;
currentTime.innerHTML = `${hours}:${minutes}`;
console.log(now.getMinutes());

//2

function cityName(event) {
  event.preventDefault();
  let searchE = document.querySelector('#searchEngine');
  let myCity = document.querySelector('#typeCity');
  myCity.innerHTML = searchE.value;
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
  let searchE = document.querySelector('#searchEngine');
  let apiKey = '7d2f7439094688bc9a2723b3273f8711';
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchE.value}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);

  axios.get(apiUrl).then(showWeather);
}

function showWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  document.querySelector('#typeCity').innerHTML = response.data.name;
  let degrees = document.querySelector('#typeTemp');
  degrees.innerHTML = `${temperature}`;
}
let form = document.querySelector('form');
form.addEventListener('submit', cityName);
console.log(form);

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showCurrentPosition);
}
function showCurrentPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let apiKey = '7d2f7439094688bc9a2723b3273f8711';
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
}

let button = document.querySelector('#button-2');
button.addEventListener('click', getCurrentPosition);
