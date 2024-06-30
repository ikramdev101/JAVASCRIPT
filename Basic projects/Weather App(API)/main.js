//working on it ....
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>Weather</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .container {
            max-width: 300px;
            margin: auto;
            text-align: center;
        }
        input, button {
            margin: 5px 0;
            padding: 10px;
            width: 100%;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Weather App</h2>
        <input type="text" id="city"  />
        <button onclick="getWeather()">Get Weather</button>
        <h3 id="result"></h3>
    </div>

    <script>
        async function getWeather() {
            const city = document.getElementById('city').value;
            const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

         //still work on it ......hh
        }
    </script>
</body>
</html>

