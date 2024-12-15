import { FiDroplet, FiMapPin, FiWind } from "react-icons/fi";
import SearchInput from "./components/SearchInput";
import useFetch from "./hooks/useFetch";
import { dateFormat, timeFormat } from "./utils/utils";
import { WeatherData } from "./utils/types";
import { weatherCode } from "./components/Weather";
import Navbar from "./components/Navbar";
import { ImSpinner2 } from "react-icons/im";
import { useCityStore } from "./zustand/useCityStore";
function App() {
  const city = useCityStore((state) => state.city);
  const { data, loading } = useFetch<WeatherData>(
    `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,showers,snowfall,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&models=best_match`
  );

  if (loading)
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <ImSpinner2 className="animate-spin text-5xl text-blue-600" />
      </div>
    );

  if (!data)
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-lg">
          Something happend in server, please try again
        </h1>
        <button className="h-11 flex items-center justify-center px-5 rounded bg-blue-600 text-white">
          Refresh
        </button>
      </div>
    );

  return (
    <div className="h-screen overflow-hidden flex relative">
      <Navbar />
      <img
        src={
          weatherCode(data.current.is_day).find(
            (w) => w.code === data.current.weather_code
          )?.bg
        }
        className="fixed top-0 left-0 -z-10 w-full h-screen object-cover"
      />
      <div className="flex-1 p-5 flex flex-col w-3/4">
        <h3 className="inline-flex items-center justify-end gap-2 font-medium mt-auto text-white">
          <FiMapPin /> {city.name}, {city.country}
        </h3>
        <h2 className="text-right text-white">
          {dateFormat(data.current.time)} | {timeFormat(data.current.time)}
        </h2>
        <h1 className="text-right text-white font-medium text-7xl mb-5">
          {
            weatherCode(data.current.is_day).find(
              (w) => w.code === data.current.weather_code
            )?.text
          }
        </h1>
        <div className="flex gap-3 max-w-full overflow-auto p-3 no-scrollbar">
          {data.hourly.time.slice(0, 24).map((time, index) => (
            <div
              key={time}
              className=" rounded-lg bg-white text-white bg-opacity-10 backdrop-blur flex flex-col gap-2 items-center p-3"
            >
              <p>{timeFormat(time)}</p>
              <div className="text-3xl">
                {
                  weatherCode(data.current.is_day).find(
                    (w) => w.code === data.hourly.weather_code[index]
                  )?.icon
                }
              </div>
              <p>
                {data.hourly.temperature_2m[index]}
                {data.hourly_units.temperature_2m}
              </p>
            </div>
          ))}
        </div>
      </div>
      <aside className="overflow-auto w-1/4 backdrop-blur px-5 py-5 bg-white bg-opacity-15 text-white border-l border-neutral-400 ">
        <SearchInput />
        <h1 className="text-6xl font-semibold text-center my-10 px-5">
          {data.current.temperature_2m}
          {data.current_units.temperature_2m}
        </h1>
        <div className="flex items-center justify-center gap-5">
          <div className="h-14 w-15 flex flex-col items-center gap-3">
            <FiWind className="text-xl" />
            <span>
              <span>{data.current.wind_speed_10m}</span>{" "}
              <span>{data.current_units.wind_speed_10m}</span>
            </span>
          </div>
          <div className="h-14 w-15 flex flex-col items-center gap-3">
            <FiDroplet className="text-xl" />
            <span>
              {data.current.relative_humidity_2m}
              {data.current_units.relative_humidity_2m}
            </span>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-center font-semibold text-white text-lg">
            Daily Forecast
          </h2>
          {data.daily.time.map((time, index) => (
            <div key={time} className="flex gap-4 items-center py-3">
              <div className="bg-white bg-opacity-15 rounded-lg p-3 text-white text-lg">
                {
                  weatherCode().find(
                    (w) => w.code === data.daily.weather_code[index]
                  )?.icon
                }
              </div>
              <div className="flex-1 border-r border-neutral-400">
                <p className="text-white text-sm font-semibold">
                  {dateFormat(time).split(",")[0]}
                </p>
                <p className="text-neutral-300 text-xs">
                  {
                    weatherCode().find(
                      (w) => w.code === data.daily.weather_code[index]
                    )?.text
                  }
                </p>
              </div>
              <div>
                <p className="text-sm text-white">
                  {data.daily.temperature_2m_max[index]}°
                </p>
                <p className="text-sm text-white">
                  {data.daily.temperature_2m_min[index]}°
                </p>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}

export default App;
