function Temperture({ weather }) {
  if (!weather) return <p className="text-white">Loading temperature...</p>;

  return (
    <div className="text-center text-white">
      <h1 className="text-6xl font-bold">{Math.round(weather.main.temp)}°C</h1>
      <p className="text-lg capitalize">{weather.weather[0].description}</p>
    </div>
  );
}

export default Temperture;
