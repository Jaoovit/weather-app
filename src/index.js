import "./style.css";

// Get weather

function getWeather(location) {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=84540330684148b78fe151345242704&q=${location}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
    });
}

// Set a location

let location = "guimarães";
const searchLocation = document.querySelector("#searchLocation");
const searchBtn = document.querySelector("#searchBtn");

function setLocation() {
  location = searchLocation.value;
}

searchBtn.addEventListener("click", () => {
  setLocation();
  getWeather(location);
});
