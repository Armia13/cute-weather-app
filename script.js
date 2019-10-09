if (new Date().getHours() >= 6 && new Date().getHours() <= 18) {
  document.body.style.backgroundImage = "url('images/day.jpg')";
} else {
  document.body.style.backgroundImage = "url('images/night.jpg')";
}

function getWeather() {
  const cityName = document.querySelector("input").value;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=5575d2706856280c8e76417f7db98697`)
    .then(function (response) {
      // handle success
      document.querySelector(".weather-card").style.display="block"
      document.querySelector(".cityname").innerHTML = response.data.name;
      document.querySelector(".temperature").innerHTML = `${response.data.main.temp} °C`;
      document.querySelector(".description").innerHTML = response.data.weather[0].main;
      document.querySelector(".humidity").innerHTML = `Humidity: ${response.data.main.humidity}%`;
      document.querySelector(".windspeed").innerHTML = `Windspeed: ${response.data.wind.speed} m/s`;
      let weather = response.data.weather[0].main;
      if(weather ==="Snow"){
        document.body.style.background = "url(images/snow.jpg)"
        document.querySelector("img").src="animated/snowy-6.svg"
      }else if(weather ==="Rain" || weather ==="Drizzle"){
        document.body.style.backgroundImage = "url('images/rain.jpg')"
        document.querySelector("img").src="animated/rainy-6.svg"
      }else if(weather ==="Clouds"){
        document.body.style.backgroundImage = "url('images/cloudy.jpg')"
        document.querySelector("img").src="animated/cloudy.svg"
      }else if(weather ==="Sunny"){
        document.body.style.backgroundImage = "url('images/sunny.jpg')"
        document.querySelector("img").src="animated/day.svg"
      }else if(weather ==="Smoke" || weather ==="Fog" || weather ==="Haze"){
        document.body.style.backgroundImage = "url('images/fog.jpg')"
        document.querySelector("img").src="animated/cloudy.svg"
      }else if(weather ==="Thunder"){
        document.body.style.backgroundImage = "url('images/thunder.jpg')"
        document.querySelector("img").src="animated/thunder.svg"
      }
      else if(weather ==="Clear"){
        document.body.style.backgroundImage = "url('images/clear.jpg')"
        document.querySelector("img").src="animated/day.svg"
      }

    })
   

    .catch(function (error) {
      // handle error
      alert("City not found");
    })
    .finally(function () {
      // always executed
    });
}

