let longitude;
let latitude;
const KEY = 'b4b50fa9d856ed5d7b99c2266a8300e8';   // OpenWeatherMap key

const weatherData = {};

const temperatureDescription = document.querySelector('.temperature-description');
const feelsLikeTemp = document.querySelector('.feels-like-temp');
const degreeNumber = document.querySelector('.degree-number');
const locationTimezone = document.querySelector('.location-timezone');
const notificationBlock = document.querySelector('.notification');
const weatherIcon = document.querySelector('.weather-icon');
const weatherType = document.querySelector('.weather-type p');
const backgroundKeyframes = document.querySelector('#background-keyframes');

// Get the user's location when page first loads
window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition, showError);
    }
    else {
        notificationBlock.style.display = "block";
        notificationBlock.innerHTML = "<p>Geolocation not available.</p>";
    }
})

let setPosition = (position) => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    getData(latitude, longitude);
}

let showError = (error) => {
    notificationBlock.style.display = "block";
    notificationBlock.innerHTML = `<p>${error.message}</p>`;
}

// Use fetch API to get all necessary data from OpenWeather
let getData = (latitude, longitude) => {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}`;

    fetch(api)
    .then(response => response.json())
    .then(data => {
        weatherData.temperature = getCelsiusTemp(data.main.temp);
        weatherData.feelsLike = getFeelsLikeTemp(data.main.feels_like);
        weatherData.city = data.name;
        weatherData.country = data.sys.country;
        weatherData.icon = data.weather[0].icon;
        weatherData.type = data.weather[0].description;
    })
    .then(() => displayData())
}

let getCelsiusTemp = (temperature) => {
    let celsiusTemp = temperature - 273.15;    // temperature from API is in Kelvin.
    return Math.round((celsiusTemp + Number.EPSILON) * 100) / 100;
}

let getFeelsLikeTemp = (temperature) => {
    let feelsLikeTemp = temperature - 273.15;
    return Math.round((feelsLikeTemp + Number.EPSILON) * 100) / 100;
}

let displayData = () => {
    degreeNumber.textContent = weatherData.temperature;
    feelsLikeTemp.textContent = weatherData.feelsLike;
    locationTimezone.textContent = weatherData.city + ', ' + weatherData.country;
    weatherIcon.src = 'icons/' + weatherData.icon + '.png';
    weatherType.textContent = weatherData.type;
    setBackground(weatherData.icon);
}

// Change page background's CSS properties according to the current weather icon data from the APIs
let setBackground = (currentWeather) => {
    console.log(currentWeather);
    switch(currentWeather) {
        case "01d":
            document.body.style.background = "linear-gradient(-45deg, rgb(132, 179, 201), rgb(78, 126, 170), rgb(48, 62, 143))";
            document.body.style.backgroundSize = "400% 400%";
            document.body.style.animation = "gradient 10s ease 0s infinite";
            break;
        case "01n":
            document.body.style.background = "linear-gradient(-45deg, rgb(39, 45, 105), rgb(27, 30, 56), rgb(50, 51, 56))";
            document.body.style.backgroundSize = "400% 400%";
            document.body.style.animation = "gradient 10s ease 0s infinite";
            break;
        case "02d":
            document.body.style.background = "linear-gradient(-45deg, rgb(169, 176, 182), rgb(140, 156, 186), rgb(76, 128, 170))";
            document.body.style.backgroundSize = "400% 400%";
            document.body.style.animation = "gradient 10s ease 0s infinite";
            break;
        case "02n":
            document.body.style.background = "linear-gradient(-45deg, rgb(130, 133, 157), rgb(27, 30, 56), rgb(50, 51, 56))";
            document.body.style.backgroundSize = "400% 400%";
            document.body.style.animation = "gradient 10s ease 0s infinite";
            break;
        case "03d":
            document.body.style.background = "linear-gradient(-45deg, rgb(132, 179, 201), rgb(91, 123, 138), rgb(69, 105, 122))";
            document.body.style.backgroundSize = "400% 400%";
            document.body.style.animation = "gradient 10s ease 0s infinite";
        case "03n":
            document.body.style.background = "linear-gradient(-45deg, rgb(87, 89, 107), rgb(27, 30, 56), rgb(50, 51, 56))";
            document.body.style.backgroundSize = "400% 400%";
            document.body.style.animation = "gradient 10s ease 0s infinite";
        case "04d":
            document.body.style.background = "linear-gradient(-45deg, rgb(132, 179, 201), rgb(91, 123, 138), rgb(69, 105, 122))";
            document.body.style.backgroundSize = "400% 400%";
            document.body.style.animation = "gradient 10s ease 0s infinite";
            break;
        case "04n":
            document.body.style.background = "linear-gradient(-45deg, rgb(87, 89, 107), rgb(27, 30, 56), rgb(50, 51, 56))";
            document.body.style.backgroundSize = "400% 400%";
            document.body.style.animation = "gradient 10s ease 0s infinite";
            break;
        case "09d":
            document.body.style.background = "linear-gradient(-45deg, rgb(169, 176, 182), rgb(140, 156, 186), rgb(81, 100, 119))";
            document.body.style.backgroundSize = "400% 400%";
            document.body.style.animation = "gradient 10s ease 0s infinite";
            break;
        case "09n":
            document.body.style.background = "linear-gradient(-45deg, rgb(87, 89, 107), rgb(27, 30, 56), rgb(50, 51, 56))";
            document.body.style.backgroundSize = "400% 400%";
            document.body.style.animation = "gradient 10s ease 0s infinite";
            break;
        case "10d":
            document.body.style.background = "linear-gradient(-45deg, rgb(169, 176, 182), rgb(140, 156, 186), rgb(104, 129, 153))";
            document.body.style.backgroundSize = "400% 400%";
            document.body.style.animation = "gradient 10s ease 0s infinite";
            break;
        case "10n":
            document.body.style.background = "linear-gradient(-45deg, rgb(87, 89, 107), rgb(27, 30, 56), rgb(50, 51, 56))";
            document.body.style.backgroundSize = "400% 400%";
            document.body.style.animation = "gradient 10s ease 0s infinite";
            break;
        case "11d":
            document.body.style.background = "linear-gradient(-45deg, rgb(169, 176, 182), rgb(140, 156, 186), rgb(81, 100, 119))";
            document.body.style.backgroundSize = "400% 400%";
            document.body.style.animation = "gradient 10s ease 0s infinite";
            break;
        case "11n":
            document.body.style.background = "linear-gradient(-45deg, rgb(87, 89, 107), rgb(27, 30, 56), rgb(50, 51, 56))";
            document.body.style.backgroundSize = "400% 400%";
            document.body.style.animation = "gradient 10s ease 0s infinite";
            break;
        case "13d":
            document.body.style.background = "linear-gradient(-45deg, rgb(233, 233, 233), rgb(203,212,219), rgb(203,229,255));";
            document.body.style.backgroundSize = "400% 400%";
            document.body.style.animation = "gradient 10s ease 0s infinite";
            break;
        case "13n":
            document.body.style.background = "linear-gradient(-45deg, rgb(108, 108, 108) , rgb(92, 104, 113), rgb(56, 63, 70));";
            document.body.style.backgroundSize = "400% 400%";
            document.body.style.animation = "gradient 10s ease 0s infinite";
            break;
        case "50d":
            document.body.style.background = "linear-gradient(-45deg, rgb(233, 233, 233), rgb(203,212,219), rgb(203,229,255));";
            document.body.style.backgroundSize = "400% 400%";
            document.body.style.animation = "gradient 10s ease 0s infinite";
            break;
        case "50n":
            document.body.style.background = "linear-gradient(-45deg, rgb(108, 108, 108) , rgb(92, 104, 113), rgb(56, 63, 70));";
            document.body.style.backgroundSize = "400% 400%";
            document.body.style.animation = "gradient 10s ease 0s infinite";
            break;
    }

}