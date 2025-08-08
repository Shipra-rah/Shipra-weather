function Searchbar({ setCity }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const cityName = e.target.elements.city.value.trim();
    if (cityName) setCity(cityName);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-80 h-12 rounded-full bg-white/80 shadow-md px-2 gap-2"
    >
      <input
        type="text"
        name="city"
        placeholder="Enter City..."
        className="flex-grow px-4 py-2 text-sm text-gray-700 placeholder-gray-400 bg-transparent border-none focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-1 text-lg font-medium text-white bg-green-500 rounded-full hover:bg-green-600 transition-all"
      >
        Search
      </button>
    </form>
  );
}

export default Searchbar;
