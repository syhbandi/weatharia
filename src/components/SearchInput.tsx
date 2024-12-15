import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import useFetch from "../hooks/useFetch";
import { FiSearch } from "react-icons/fi";
import { ImSpinner2 } from "react-icons/im";
import { City } from "../utils/types";
import CityCard from "./CityCard";

type ResultType = {
  results: City[];
};

const SearchInput = () => {
  const [input, setInput] = useState("");
  const debounced = useDebounce(input, 1000);

  const { loading, data, error } = useFetch<ResultType>(
    debounced
      ? `https://geocoding-api.open-meteo.com/v1/search?name=${debounced}&count=10&language=en&format=json`
      : ""
  );
  return (
    <div className="relative py-2 flex items-center border-b border-neutral-400 focus-within:border-neutral-100 gap-2">
      <input
        className="outline-none flex-1 peer bg-transparent placeholder:text-neutral-300 text-white"
        placeholder="Search City"
        type="search"
        onChange={(e) => setInput(e.target.value)}
      />
      <FiSearch className="text-xl text-neutral-300 peer-focus:text-neutral-100" />
      <div
        className={`absolute bg-white top-0 left-0 translate-y-14 w-full max-h-[300px] rounded-lg border border-neutral-300 shadow overflow-y-auto ${
          !debounced ? "hidden" : ""
        }`}
      >
        {loading ? (
          <div className="flex items-center justify-center py-3">
            <ImSpinner2 className="animate-spin text-xl text-blue-600" />
          </div>
        ) : error ? (
          <div className="flex items-center justify-center py-3">
            <p className="text-red-700">{error.message}</p>
          </div>
        ) : data?.results ? (
          <ul className="w-full">
            {data.results.map((city) => (
              <CityCard city={city} key={city.id} />
            ))}
          </ul>
        ) : (
          <div className="flex items-center justify-center py-3">
            <p className="text-neutral-700">Cannot find the city</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
