import { useState, useEffect } from "react";

function CityName({ cityname }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const weekday = now.toLocaleString("en-IN", { weekday: "long" });
  const date = now.getDate();
  const month = now.toLocaleString("en-IN", { month: "long" });
  const year = now.getFullYear();
  const time = now.toLocaleString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="flex justify-around items-start flex-col gap-2">
      <h1 className="text-5xl text-white font-bold">{cityname}</h1>
      <hr />
      <div className="uppercase text-white">
        {weekday}, {date} {month} {year} | {time}
      </div>
    </div>
  );
}

export default CityName;
