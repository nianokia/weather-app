// ⏰Feature #1
// In your project, display the current date and time
// using JavaScript: Tuesday 16:00

function formatDate(currentDate) {
  let now = new Date();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[now.getMonth()];
  let day = now.getDate();
  let year = now.getFullYear();
  let date = document.querySelector("#current-date");
  date.innerHTML = `${month} ${day}, ${year}`;
}

function formatTime(currentTime) {
  let now = new Date();
  let hours = [
    12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11,
  ];
  let hour = hours[now.getHours()];
  let amPmSpread = [
    "am",
    "am",
    "am",
    "am",
    "am",
    "am",
    "am",
    "am",
    "am",
    "am",
    "am",
    "am",
    "pm",
    "pm",
    "pm",
    "pm",
    "pm",
    "pm",
    "pm",
    "pm",
    "pm",
    "pm",
    "pm",
    "pm",
  ];
  let amPm = amPmSpread[now.getHours()];
  let time = document.querySelector("#current-time");
  time.innerHTML = `${hour} ${amPm}`;
}

formatDate();
formatTime();

// 🕵️‍♀️Feature #2
// Add a search engine, when searching for a city
// (i.e. Paris), display the city name on the page
// after the user submits the form.

function displayWeatherCondition(response) {
  document.querySelector("h5").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#current-condition").innerHTML =
    response.data.weather[0].main;
  console.log(response.data);
}

function searchCity(city) {
  let apiKey = "7fbc4204c23b04814101fc2bf335b695";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function enterCity(event) {
  debugger;
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "7fbc4204c23b04814101fc2bf335b695";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

searchCity("New York");
let place = document.querySelector("#search-form");
place.addEventListener("submit", enterCity);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);
