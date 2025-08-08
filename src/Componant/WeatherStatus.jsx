import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";

function WeatherStatus({ weather }) {
  if (!weather)
    return <p className="text-white">Loading weather details...</p>;

  const { main, wind } = weather;

  return (
    <div className="flex text-white gap-4">
      <div className="z-50 flex justify-center items-center">
        <img
          src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-cloud-and-sun-watercolor-painting-on-transparent-background-png-image_9014942.png"
          alt="weather icon"
          className="h-16 sm:h-64 md:h-48 lg:h-72 xl:h-72"
        />
      </div>
      <div className="space-y-2 p-2 text-sm flex flex-col justify-center">
        <div className="flex items-center gap-3 bg-gray-100/20 rounded-lg px-3 py-1 shadow-sm text-gray-900">
          <CiTempHigh className="text-xl text-red-500" />
          <span className="font-medium">Feels like:</span>
          <span className="ml-auto font-semibold">{main.feels_like}°C</span>
        </div>
        <div className="flex items-center gap-3 bg-gray-100/20 rounded-lg px-3 py-1 shadow-sm text-gray-900">
          <WiHumidity className="text-xl text-blue-500" />
          <span className="font-medium">Humidity:</span>
          <span className="ml-auto font-semibold">{main.humidity}%</span>
        </div>
        <div className="flex items-center gap-3 bg-gray-100/20 rounded-lg px-3 py-1 shadow-sm text-gray-900">
          <FaWind className="text-xl text-green-500" />
          <span className="font-medium">Wind:</span>
          <span className="ml-auto font-semibold">{wind.speed} m/s</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherStatus;
