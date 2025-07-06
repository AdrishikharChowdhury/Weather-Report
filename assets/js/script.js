let city=document.querySelector("#city");
let submit=document.querySelector("#submit");
let latitude=document.querySelector("#lat");
let longitude=document.querySelector("#lon");
let currentInfo=document.querySelector("#current-info");
let weatherInfo=document.querySelector("#weather-info");
let forecastInfo=document.querySelector("#forecast-info");
let menu=document.querySelector("#weather-menu");
const BASE_URL1=`https://api.openweathermap.org/`
const BASE_URL2=`https://openweathermap.org/img/wn/`;

submit.addEventListener("click",async (e) => {
    try {
        weatherInfo.style.backgroundImage = "";
        weatherInfo.style.backgroundPosition = "";
        weatherInfo.style.backgroundRepeat = "";
        weatherInfo.style.backgroundSize = "";
        weatherInfo.style.height = "";
        if(!city.value)
        {
            return;
        }
        e.preventDefault();
        const WEATHER_URL=`${BASE_URL1}data/2.5/weather?q=${city.value}&appid=${API_KEY}`;
        const FORECAST_URL=`${BASE_URL1}data/2.5/forecast?q=${city.value}&appid=${API_KEY}`;
        let response1=await fetch(WEATHER_URL);
        let data1=await response1.json();
        let response2=await fetch(FORECAST_URL);
        let data2=await response2.json();
        currentWeather(data1);
        forecastWeather(data2);
        
    } catch (error) {
        currentInfo.innerHTML=""
        forecastInfo.innerHTML=""
        weatherInfo.style.backgroundImage=`url(./assets/images/20064239_6199763.svg)`;
        weatherInfo.style.backgroundPosition= "center";
        weatherInfo.style.backgroundRepeat= "no-repeat";
        weatherInfo.style.backgroundSize= "cover";
        weatherInfo.style.height="20rem";
        weatherInfo.style.width="100%";
    }
})

const currentWeather=(data1)=>{
    weatherInfo.style.display="flex";
    currentInfo.innerHTML="";
    let url=`${BASE_URL2}${data1.weather[0].icon}@4x.png`;
    let icon=document.createElement("div");
    let temp=document.createElement("p");
    let location=document.createElement("p");
    let state=document.createElement("p");
    icon.id="icon";
    icon.style.backgroundImage=`url(${url})`;
    temp.id="temp";
    temp.innerText=`${tempConvert(data1.main.temp)}°C`;
    location.id="location";
    location.innerText=`${data1.name}`;
    state.id="state";
    state.innerText=`${data1.weather[0].main}`
    currentInfo.append(icon,temp,location,state);
}

const forecastWeather=(data2)=>{
    let forecasts=data2.list;
    forecasts.length=6;
    forecastInfo.innerHTML="";
    for(let forecast of forecasts)
    {
        let forecastBox=document.createElement("div")
        forecastBox.className="forecast-box";
        let foreIcon=document.createElement("div");
        let foreTemp=document.createElement("p");
        let foreTime=document.createElement("p");
        let foreDate=document.createElement("p");
        let url=`${BASE_URL2}${forecast.weather[0].icon}@4x.png`;
        foreIcon.className="fore-icon";
        foreTemp.className="fore-temp";
        foreTime.className="fore-time";
        foreTime.innerText=forecast.dt_txt.slice(10,16);
        foreIcon.style.backgroundImage=`url(${url})`;
        foreTemp.innerText=`${tempConvert(forecast.main.temp)}°C`;
        forecastBox.append(foreTime,foreIcon,foreTemp);
        forecastInfo.append(forecastBox);
    }
}

const tempConvert=(number)=>{
    return Math.round((parseFloat(`${number}`)-273.15).toFixed(2))
}

if (window.location.hostname === "adrishikharchowdhury.github.io") {
    const baseTag = document.createElement("base");
    baseTag.href = "/Weather Report/";
    document.head.appendChild(baseTag);
  }