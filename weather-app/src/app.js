import { getWeather } from './api/weather.js';

const cityInput = document.getElementById('city-input');
const getWeatherBtn = document.getElementById('get-weather-btn');
const weatherResult = document.getElementById('weather-result');

getWeatherBtn.addEventListener('click', async () => {
    const city = cityInput.ariaValueMax.trim();

    if (!city) {
        weatherResult.textContent = 'Введите город!';
        return;
    }


});