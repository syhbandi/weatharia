import { create } from "zustand";
import { City } from "../utils/types";

type State = {
  city: City;
};

type Actions = {
  updateCity: (city: State["city"]) => void;
};

export const useCityStore = create<State & Actions>((set) => ({
  city: {
    id: 1635882,
    name: "Mataram",
    latitude: -8.58333,
    longitude: 116.11667,
    elevation: 24,
    feature_code: "PPLA",
    country_code: "ID",
    admin1_id: 1633792,
    timezone: "Asia/Makassar",
    population: 318674,
    country_id: 1643084,
    country: "Indonesia",
    admin1: "West Nusa Tenggara",
  },
  updateCity(city) {
    return set(() => ({ city }));
  },
}));
