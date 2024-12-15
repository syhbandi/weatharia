import { City } from "../utils/types";
import { useCityStore } from "../zustand/useCityStore";

type Props = {
  city: City;
};

const CityCard = ({ city }: Props) => {
  const updateCity = useCityStore((state) => state.updateCity);

  return (
    <li
      className="px-3 py-2 cursor-pointer bg-white hover:bg-neutral-100 border-b border-neutral-200"
      onClick={() => updateCity(city)}
    >
      <p className="font-semibold text-neutral-800 text-base">{city.name}</p>
      <p className="text-neutral-400 text-sm">
        {city.admin1}, {city.country}
      </p>
    </li>
  );
};

export default CityCard;
