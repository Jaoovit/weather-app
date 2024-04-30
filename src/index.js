import "./style.css";

// Set a location

let address = "Guimarães";

const searchLocation = document.querySelector("#searchLocation");

function setLocation() {
  address = searchLocation.value;
}

// display weather DOM

const location = document.querySelector("#location");
const image = document.querySelector("#image");
const temperature = document.querySelector("#temperature");
const condition = document.querySelector("#condition");
const wind = document.querySelector("#wind");
const humidity = document.querySelector("#humidity");
const precipitation = document.querySelector("#precipitation");

// Get weather

function getWeather(address) {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=84540330684148b78fe151345242704&q=${address}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      location.textContent = `${response.location.name} / ${response.location.country}`;
      image.src = response.current.condition.icon;
      temperature.textContent = `${response.current.temp_c}ºC`;
      condition.textContent = response.current.condition.text;
      wind.textContent = `Wind: ${response.current.wind_kph} Km/h`;
      humidity.textContent = `Humidity: ${response.current.humidity}`;
      precipitation.textContent = `Precipitation: ${response.current.precip_mm} mm`;
    });
}

getWeather(address);

// search button

const searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", () => {
  setLocation();
  getWeather(address);
});
