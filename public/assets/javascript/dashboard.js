document.getElementById('weather-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const city = event.target.city.value;

    try {
        const response = await axios.get(`/api/profile/weather?city=${city}`);
        const data = response.data;
        document.getElementById('weather-result').innerHTML = `
            <p>Weather in ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-result').textContent = 'Error fetching weather data.';
    }
});

document.getElementById('currency-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const base = event.target.base.value;
    const target = event.target.target.value;

    try {
        const response = await axios.get(`/api/profile/currency?base=${base}&target=${target}`);
        const rate = response.data.rate;
        document.getElementById('currency-result').innerHTML = `
            <p>Exchange rate from ${base} to ${target}: ${rate}</p>
        `;
    } catch (error) {
        console.error('Error fetching exchange rate data:', error);
        document.getElementById('currency-result').textContent = 'Error fetching exchange rate data.';
    }
});
