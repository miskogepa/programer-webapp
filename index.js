document.addEventListener("DOMContentLoaded", () => {
    // uzimanje id elementa iz HTML-a
    const cityInput = document.getElementById("city-input");
    const getWeatherButton = document.getElementById("get-weather-button");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const erorMessage = document.getElementById("error-message");

    const API_KEY = "5f56d525d1619d0a2cd2eac4ce55588e";

    getWeatherButton.addEventListener("click", () => {
        const city = cityInput.value.trim(); // uzimanje vrednosti iz input polja
        if (city === "") {

            return;
        }






    })

    function fetchWeatherData(city) {
        //get the weather data from the API
    }

    function displayWeatherData(weatherData) {
        //display the weather data on the page
    }


});