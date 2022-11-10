// var url =
//   "https://api.open-meteo.com/v1/forecast?latitude=48.28&longitude=35.01&current_weather=true&hourly=temperature_2m,relativehumidity_2m,surface_pressure";
var city = document.getElementById("city");
var temp = document.getElementById("temp");
var weather = document.getElementById("weather");
var wind = document.getElementById("wind");
var options = document.getElementsByTagName("option");

window.onload = () => {
  RequestWeather({
    value: "latitude=48.450001&longitude=34.983334",
    selectedIndex: 0,
  });
};
function RequestWeather(e) {
  let url = `https://api.open-meteo.com/v1/forecast?${e.value}&current_weather=true`;

  fetch(url, {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      city.innerHTML = "city: " + options[e.selectedIndex].innerHTML;
      temp.innerHTML =
        "temperature: " + result.current_weather.temperature + " C";
      weather.innerHTML =
        "weather: " + GetWeather(result.current_weather.weathercode);
      wind.innerHTML = "wind: " + result.current_weather.windspeed + "km/h";
    });
}
function GetWeather(code) {
  codes = {
    0: "Clear sky",
    1: "Partly cloudy",
    2: "Partly cloudy",
    3: "Partly cloudy",
    45: "Fog",
    48: "Fog",
    51: "Drizzle",
    53: "Drizzle",
    55: "Drizzle",
    56: "Freezing Drizzle",
    57: "Freezing Drizzle",
    61: "Rain",
    63: "Rain",
    65: "Rain",
    66: "Freezing Rain: light intensity",
    67: "Freezing Rain: heavy intensity",
    71: "Snow fall: slight intensity",
    73: "Snow fall: moderate intensity",
    75: "Snow fall: heavy  intensity",
    77: "Snow grains",
    80: "Rain showers",
    81: "Rain showers",
    82: "Rain showers",
    85: "Snow showers: light",
    86: "Snow showers: heavy",
    95: "Thunderstorm",
    96: "Thunderstorm: slight hail",
    99: "Thunderstorm: heavy hail",
  };
  return codes[code];
}
