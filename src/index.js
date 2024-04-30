import { add } from "lodash";
import "./style.css";

// Set a location

let address = "";

const searchLocation = document.querySelector("#searchLocation");

function setLocation() {
  address = searchLocation.value;
}

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
    });
}
/*
// display weather DOM

const container = document.querySelector("#container");

function displayWeather() {
  container.innerHTML = "";
  const name = document.createElement("p");
  name.setAttribute("id", "name");
  container.appendChild(name);
  name.textContent = weatherInfo.then;
}
*/
// search button

const searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", () => {
  setLocation();
  getWeather(address);
  //displayWeather();
});
