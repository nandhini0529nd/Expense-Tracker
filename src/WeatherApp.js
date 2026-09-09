import { useState} from "react";
import "./WeatherApp.css";
function WeatherApp()
{
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");
    const SearchWeather = async () => {
        if (city === "") {
    setError("Please enter a city");
    return;
}
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  if (!response.ok) {
    setError("City not found");
    setWeather(null);
    return;
}

setError("");

  const data = await response.json();
  setWeather(data);
};
    return(
        <div className="weather">
            <h1>WeatherApp</h1>
            <input
            type="text"
            placeholder="Enter the city"
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            />
            <button onClick={SearchWeather}>Search</button>
            <h2>{city}</h2>
            {error && <p>{error}</p>}
            {weather && (
    <div>
        <h2>{weather.name}</h2>
        <p>☀️</p>
        <p>Temperature: {weather.main.temp} °C</p>
        <p>Weather: {weather.weather[0].description}</p>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
)}


        </div>
    );
}
export default WeatherApp;