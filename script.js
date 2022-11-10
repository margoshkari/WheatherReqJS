var key = "01dab5a04bf0098b0bbb9941e02d13aa";
var url =
  "https://api.open-meteo.com/v1/forecast?latitude=48.28&longitude=35.01&current_weather=true&hourly=temperature_2m,relativehumidity_2m,surface_pressure";

function RequestWeather(e) {
  console.log(e.value);
  fetch(url, {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      //console.log(result);
      console.log(result.current_weather.temperature);
      //SearchImage(result.hits);
    });
}
