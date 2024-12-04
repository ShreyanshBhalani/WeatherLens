Weather Dashboard
A weather dashboard that displays real-time weather data based on user input using the OpenWeather API. Users can search for cities to see current weather, temperature, humidity, wind speed, and a 3-day forecast.

Features
City Search: Search cities by name.
Weather Info: Shows current weather, temperature, humidity, wind speed, and a 3-day forecast.
Error Handling: Displays error messages for invalid city names or API issues.
Caching: Stores recent searches in localStorage for faster access.
Responsive Design: Mobile and desktop friendly.

Technologies Used
Frontend: HTML, CSS, JavaScript
Libraries:
Fetch API for API calls.

Setup
1. Clone the Repo
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
2. Install Dependencies
npm install
3. Set Up API Key
Create a .env file and add your OpenWeather API key:
OPENWEATHER_API_KEY=your-api-key-here
4. Run the Project
npm start
Access the app at http://localhost:3000.

API
This app uses the OpenWeather API to fetch weather data:
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric

Error Handling
The app shows appropriate error messages for:
Invalid city names.
Failed API calls.

Contributing
Fork the repo.
Create a new branch.
Commit your changes and push.
Open a pull request.

License
This project is open-source under the MIT License.