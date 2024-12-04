const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

app.use(express.static('public'));

app.get('/api/weather', async (req, res) => {
    const city = req.query.city;
    console.log(city,"CITY")
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`;
    console.log(url)
    try {
        const response = await axios.get(url);
        console.log(response)
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching weather data', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
