import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";

function WeatherStatus({ weather }) {
  if (!weather)
    return <p className="text-white text-center">Loading weather details...</p>;

  const { main, wind } = weather;

  return (
    <div className="flex md:flex-row flex-col sm:flex-row text-white gap-4 items-center sm:items-center justify-center">
      {/* Weather icon */}
      <div className="flex justify-center items-center">
        <img
          src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-cloud-and-sun-watercolor-painting-on-transparent-background-png-image_9014942.png"
          alt="weather icon"
          className="h-24 w-24 sm:h-48 sm:w-48 md:h-48 md:w-48 lg:h-64 lg:w-64"
        />
      </div>

      {/* Weather details */}
      <div className="space-y-3 p-2 text-sm flex flex-col justify-center w-full max-w-md">
        {/* Feels like */}
        <div className="flex items-center gap-3 bg-gray-100/20 rounded-lg px-3 py-2 shadow-sm text-gray-900">
          <CiTempHigh className="text-2xl text-red-500" />
          <span className="font-medium">Feels like:</span>
          <span className="ml-auto font-semibold">{main.feels_like}°C</span>
        </div>

        {/* Humidity */}
        <div className="flex items-center gap-3 bg-gray-100/20 rounded-lg px-3 py-2 shadow-sm text-gray-900">
          <WiHumidity className="text-2xl text-blue-500" />
          <span className="font-medium">Humidity:</span>
          <span className="ml-auto font-semibold">{main.humidity}%</span>
        </div>

        {/* Wind */}
        <div className="flex items-center gap-3 bg-gray-100/20 rounded-lg px-3 py-2 shadow-sm text-gray-900">
          <FaWind className="text-2xl text-green-500" />
          <span className="font-medium">Wind:</span>
          <span className="ml-auto font-semibold">{wind.speed} m/s</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherStatus;
