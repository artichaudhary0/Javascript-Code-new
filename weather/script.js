apikey = "e83fc483177d662e1c12ff57a07b8382";

fetch("cities.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to load data");
    } else {
      return response.json();
    }
  })
  .then((cities) => {
    const cityDropdown = document.getElementById("cityDropdown");
    cities.forEach((city) => {
      const option = document.createElement("option");
      option.value = city.name;
      option.text = `${city.name}, ${city.country}`;
      cityDropdown.appendChild(option);
    });
  })
  .catch((error) => {
    console.error("Error loading data", error);
    alert("Failed to load data");
  });

// button weather
document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const city = document.getElementById("cityDropdown").value;

  if (city) {
    getWeather(city);
  } else {
    alert("Please select an city from dropdown");
  }
});

function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("weatherDeatils").style.display = "block";

      document.getElementById("cityName").innerText = `${data.name}`;
      document.getElementById("temperature").innerText = `Temperature : ${
        data.main.temp - 273.15
      }°C`;

      document.getElementById(
        "description"
      ).innerText = `Description : ${data.weather[0].description}`;
      document.getElementById(
        "humidity"
      ).innerText = `Humidity : ${data.main.humidity}%`;
    })
    .catch((error) => {
      console.error("Error fetching data");
      alert("Error fetching data. please try again later " + error);
    });
}
