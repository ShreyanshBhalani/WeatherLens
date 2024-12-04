const cityInput = document.getElementById('cityInput');
console.log(cityInput,"CITYYY IN APP JS")
const citySuggestions = document.getElementById('citySuggestions');
const searchBtn = document.getElementById('searchBtn');

const darkModeToggle = document.getElementById('darkModeToggle');
const modeIcon = document.getElementById('modeIcon');

// Check if the user has a saved preference in localStorage
const currentMode = localStorage.getItem('mode') || 'light';
if (currentMode === 'dark') {
    document.body.classList.add('dark-mode');
    modeIcon.className = 'fas fa-sun'; // Change to sun icon for dark mode
}

// Dark Mode Toggle Event
darkModeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    if (isDarkMode) {
        modeIcon.className = 'fas fa-sun'; // Sun icon for dark mode
        localStorage.setItem('mode', 'dark'); // Save mode to local storage
    } else {
        modeIcon.className = 'fas fa-moon'; // Moon icon for light mode
        localStorage.setItem('mode', 'light'); // Save mode to local storage
    }
});
// Replace with your Geonames username
const geonamesUsername = 'shreyanshbh24';


// Fetch city suggestions as the user types
cityInput.addEventListener('input', async () => {
    const query = cityInput.value.trim();
    if (query.length < 3) return; // Fetch suggestions only for 3+ characters

    try {
        const response = await fetch(`http://api.geonames.org/searchJSON?q=${query}&maxRows=5&featureClass=P&username=${geonamesUsername}`);
        if (!response.ok) throw new Error('Failed to fetch city suggestions.');

        const data = await response.json();
        populateCitySuggestions(data.geonames);
    } catch (error) {
        console.error('Error fetching city suggestions:', error);
    }
});


// Populate the datalist with suggestions
function populateCitySuggestions(cities) {
    citySuggestions.innerHTML = ''; // Clear previous suggestions

    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city.name; // Set city name as the value
        option.textContent = `${city.name}, ${city.countryName}`;
        citySuggestions.appendChild(option);
    });
}

// Fetch weather data for the selected city
searchBtn.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    if (!city) {
        alert('Please select or enter a city!');
        return;
    }

    try {
        const response = await fetch(`/api/weather?city=${city}`);
        if (!response.ok) throw new Error('Failed to fetch weather data.');

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert('Error fetching weather data. Please try again.');
        console.error(error);
    }
});

// Display the weather data
function displayWeather(data) {
    document.getElementById('cityName').innerText = `Weather in ${data.name}`;
    document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;

    document.getElementById('weatherDisplay').classList.remove('hidden');
}
