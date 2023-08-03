function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let conditionsElement = document.querySelector("#conditions");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  conditionsElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "107f301285cb6tcc0f0b30ab311aao4a";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Lisbon&key=107f301285cb6tcc0f0b30ab311aao4a&units=metric";

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
