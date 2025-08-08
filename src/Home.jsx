import { useState, useEffect } from "react";
import CityName from "./Componant/CityName";
import Searchbar from "./Componant/Searchbar";
import Temperture from "./Componant/Temperture";
import WeatherStatus from "./Componant/WeatherStatus";
import NextDays from "./Componant/NextDays";
import Shipralogo from "./assets/Shipralogo.svg";

function Home() {
  const API_KEY = "22b5a573c1cd2fdadf9dab2a1dd4a520"; // Your API key here

  const [city, setCity] = useState("Noida");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async (cityName) => {
    try {
      setError("");
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error(`City not found or API error: ${response.status}`);
      }
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
      setWeather(null);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  return (
    <div className="h-screen md:h-4/5 w-screen md:w-4/6 bg-gray-400/50 rounded-lg filter backdrop-blur-lg px-6
     md:px-10  flex flex-col justify-center items-center md:items-start md:justify-start shadow-xl">
      {/* Header */}
      <div className="h-16 sticky top-0 z-50 bg-transparent flex items-center justify-center">
        <img src={Shipralogo} alt="hello" className="h-full" />
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 mb-3 md:mb-0">
        <CityName cityname={city} />
        <Searchbar setCity={setCity} />
      </div>

      {/* Main info */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 ">
        <Temperture weather={weather} />
        <WeatherStatus weather={weather} />
      </div>

      {/* Forecast days */}

      {/* Error message */}
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
}

export default Home;
