const weatherApi={
    key:"5dd05135782ee46fa634370a2f4b7178",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

 //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const searchInputBox=document.getElementById('box');
searchInputBox.addEventListener('keypress',(event)=>{
    if(event.key=="Enter" && searchInputBox.value!=""){
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display="block";
    }
});

// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

 // Show Weather Report

function showWeatherReport(weather){
    console.log(weather);
let city = document.getElementById('city');
city.innerText = `${weather.name}, ${weather.sys.country}`;
let temperature = document.getElementById('temp');
temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
let minMaxTemp = document.getElementById('min-max');
minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C [min] / ${Math.ceil(weather.main.temp_max)}&deg;C [max] `;
let weatherType = document.getElementById('weather');
weatherType.innerText = `${weather.weather[0].main}`;
let date = document.getElementById('date');
let todayDate = new Date();
date.innerText = dateManage(todayDate);
if(weatherType.textContent == 'Clear') {
    document.body.style.backgroundImage = "url('sunny.jpg')";
} else if(weatherType.textContent == 'Clouds') {
    document.body.style.backgroundImage = "url('cloud.jpg')";
} else if(weatherType.textContent == 'Haze') {
document.body.style.backgroundImage = "url('haze.jpg')";
} else if(weatherType.textContent == 'Rain') {
    document.body.style.backgroundImage = "url('rain.jpg')";
} else if(weatherType.textContent == 'Snow') {
    document.body.style.backgroundImage = "url('snow.jpg')";
} else if(weatherType.textContent == 'Thunderstorm') {
    document.body.style.backgroundImage = "url('thunder.jpg')";
} else if(weatherType.textContent == 'Mist') {
    document.body.style.backgroundImage = "url('mist.jpg')";
} else if(weatherType.textContent == 'Drizzle') {
    document.body.style.backgroundImage = "url('drizzle.jpg')";
} 
}

 //date

function dateManage(dateArg) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "Febru ary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];
    return `${date} ${month},${year} (${day})`;

}
