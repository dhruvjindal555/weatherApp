console.log("Welcome Here!");

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const btn = document.querySelector(".top button");
const searchBox = document.querySelector(".top input");
const mid = document.querySelector(".mid")
const bottom = document.querySelector(".bottom")
const card = document.querySelector(".card")

const apiBox = document.querySelector("#apiId")
const apiInput = document.querySelector("#apiId input")
const apiButton = document.querySelector("#apiId button")
const invalid = document.querySelector("#invalid")
let apiId;
invalid.style.display = "none";
card.style.height = "13vh";
mid.style.display = "none";
bottom.style.display = "none";
btn.addEventListener("click", () => {
    console.log("hello")
    checkWeather(searchBox.value);
})

apiButton.addEventListener("click",()=>{
    apiId=apiInput.value;
    apiBox.style.display="none"
})


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&apikey=${apiId}`);
    var data = await response.json();
    
    if (data.message=='city not found') {
        card.style.height = "20vh";
        mid.style.display = "none";
        bottom.style.display = "none";
        invalid.style.display = "block";
    }else{
        card.style.height = "35vw";
        invalid.style.display = "none";
        mid.style.display = "flex";
    bottom.style.display = "flex";

    }
    console.log(data);
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector("#humidityAge").innerHTML = data.main.humidity + "%";
    document.querySelector("#windSpeedAge").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".placeName").innerHTML = data.name;
    if (data.weather[0].main == "Clouds") {
        document.querySelector(".weatherLogo img").src = "clouds.png"
    } else if (data.weather[0].main == "rain") {
        document.querySelector(".weatherLogo img").src = "rain.png"
    } else if (data.weather[0].main == "drizzle") {
        document.querySelector(".weatherLogo img").src = "drizzle.png"
    } else if (data.weather[0].main == "clear") {
        document.querySelector(".weatherLogo img").src = "clear.png"
    } else if (data.weather[0].main == "mist") {
        document.querySelector(".weatherLogo img").src = "mist.png"
    } else if (data.weather[0].main == "snow") {
        document.querySelector(".weatherLogo img").src = "snow.png"
    }
}