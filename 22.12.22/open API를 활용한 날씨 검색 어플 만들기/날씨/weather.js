const API_KEY = "8703ba4d99d642cb7d438ce084623ccb"
const feelLikeDisplay = document.querySelector(".feel-like > span");
const windDisplay = document.querySelector(".wind > span");
const weatherDisplay = document.querySelector(".weather > img");
const locationDisplay = document.querySelector(".location");
const temperatureDisplay = document.querySelector(".temperature > span");
const weatherSelest = document.querySelector("#weather-select");
const info = document.querySelector(".info");
const weatherInput = document.querySelector("#weather-input");

weatherSelest.addEventListener("change", (e)=>{
    getWeather(e.target.value);
})
weatherInput.addEventListener("keypress", (e)=>{//미션
    if(e.keyCode === 13){
        getWeather(weatherInput.value)
    }
})

const getWeather = async (city = 'seoul')=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    const response = await axios.get(url);
    const { name, main, weather, wind } = response.data;
    locationDisplay.innerText = name;
    temperatureDisplay.innerText = transferTemperature(main.temp);
    weatherDisplay.setAttribute('src',`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`);
    feelLikeDisplay.innerText = transferTemperature(main.feels_like);
    windDisplay.innerText = wind.speed;
    /*.then(res => console.log(res))
    .catch(err => console.log(err)) */
}

const transferTemperature = (temp) =>{
    return (temp-273.15).toFixed(1);
}
getWeather();