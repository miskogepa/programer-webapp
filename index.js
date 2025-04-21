document.addEventListener("DOMContentLoaded", () => {
    // uzimanje id elementa iz HTML-a
    const cityInput = document.getElementById("city-input");
    const getWeatherButton = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const erorMessage = document.getElementById("error-message");

    const API_KEY = "5f56d525d1619d0a2cd2eac4ce55588e";

    getWeatherButton.addEventListener("click", async () => {
        const city = cityInput.value.trim(); // uzimanje vrednosti iz input polja
        if (city === "") {

            return;
        } // ako je polje prazno, ne radi nista, moze da se kod napise 
        // i ovako :
        // if (!city) return;

        // server je uvek na drugom mestu, pa je potrebno da budemo
        //svesni da ce odgovor biti sporiji
        // moze da se desi da server ne odgovara, pa izbaci gresku
        //dve stvari koje treba da zapamtimo:
        // it may trow an error
        // server/database is always in another country

        // radimo na prvom slucaju it may trow an error
        // koristimo try-catch blok

        try {
            const weatherData = await fetchWeatherData(city) // zato sto cekamo odgovor od servera koristimo await
            //await i async funkcija su dodate u komitu async function i await
            displayWeatherData(weatherData);


        } catch (error) {
            showError("An error occurred while fetching the weather data. Please try again later.");

        }

    });

    async function fetchWeatherData(city) {
        //get the weather data from the API
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        //sada dodajemo fetch funkciju koja ce da vrati podatke ili takozvani request

        const response = await fetch(url);
        console.log(typeof response);
        console.log('RESPONSE:', response);

        if (!response.ok) {
            throw new Error("City not found"); // ako je odgovor od servera greska, izbaci gresku city not found takodje ako korisnik pogresi u imenu grada
        }
        const data = await response.json(); // ako je sve u redu, vrati podatke u json formatu
        return data; // vrati podatke
    }

    function displayWeatherData(data) {
        //display the weather data on the page
        const { name, main, weather } = data; 
        cityNameDisplay.textContent = name; // uzimamo ime grada iz podataka

        // otkljucavamo elemente koji su bili sakriveni
        weatherInfo.classList.remove("hidden"); // otkljucavamo elemente koji su bili sakriveni sa klasom hidden
        erorMessage.classList.add("hidden"); // sakrivamo gresku ako je bila prikazana
        temperatureDisplay.textContent = `Temperatura: ${Math.round(main.temp)}°C`; // uzimamo temperaturu iz podataka i zaokruzujemo je na ceo broj
        descriptionDisplay.textContent = `Vreme: ${weather[0].description}`; // uzimamo opis vremena iz podataka

    }

    function showError(message) {
        //display error message
        weatherInfo.classList.add("hidden");
        erorMessage.classList.remove("hidden");
    }


});