let now = new Date();
let todayDate = document.querySelector("#current-date");

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes().toString().padStart(2, "0");

todayDate.innerHTML = `${day} ${hour}:${minute}`;

function showCity(event) {
    event.preventDefault();

    let cityName = document.querySelector("#city-name");
    let searchInput = document.querySelector("#search-input");
    cityName.innerHTML = searchInput.value;
}

let citySearch = document.querySelector("form");
citySearch.addEventListener("submit", showCity);

function convertToCel(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature-value");

    temperatureElement.innerHTML = 19;
}

function convertToFah(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature-value");

    temperatureElement.innerHTML = 66;
}

let fahrenheitLink = document.querySelector("#f-link");
fahrenheitLink.addEventListener("click", convertToFah);

let celsiusLink = document.querySelector("#c-link");
celsiusLink.addEventListener("click", convertToCel);

