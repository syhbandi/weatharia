import {
  FiCloud,
  FiCloudDrizzle,
  FiCloudLightning,
  FiCloudRain,
  FiCloudSnow,
  FiSun,
} from "react-icons/fi";
import { LuCloudFog, LuCloudSun } from "react-icons/lu";

import sky from "../assets/sky.avif";
import nightSky from "../assets/night sky.jpg";
import cloud from "../assets/overcast.webp";
import rain from "../assets/rainy-sky.jpeg";

export const weatherCode = (isDay?: number) => [
  {
    code: 0,
    text: "Clear Sky",
    icon: <FiSun />,
    bg: isDay ? sky : nightSky,
  },
  {
    code: 1,
    text: "Mainly Clear",
    icon: <FiSun />,
    bg: isDay ? sky : nightSky,
  },
  {
    code: 2,
    text: "Partly Cloud",
    icon: <LuCloudSun />,
    bg: isDay ? sky : nightSky,
  },
  {
    code: 3,
    text: "Overcast",
    icon: <FiCloud />,
    bg: cloud,
  },
  {
    code: 45,
    text: "Fog",
    icon: <LuCloudFog />,
    bg: cloud,
  },
  {
    code: 48,
    text: "Depositing Rime Fog",
    icon: <LuCloudFog />,
    bg: cloud,
  },
  {
    code: 51,
    text: "Light Drizzle",
    icon: <FiCloudDrizzle />,
    bg: rain,
  },
  {
    code: 53,
    text: "Moderate Drizzle",
    icon: <FiCloudDrizzle />,
    bg: rain,
  },
  {
    code: 55,
    text: "Dense Intensity  Drizzle",
    icon: <FiCloudDrizzle />,
    bg: rain,
  },
  {
    code: 61,
    text: "Slight Rain",
    icon: <FiCloudDrizzle />,
    bg: rain,
  },
  {
    code: 63,
    text: "Moderate Rain",
    icon: <FiCloudRain />,
    bg: rain,
  },
  {
    code: 65,
    text: "Heavy Rain",
    icon: <FiCloudRain />,
    bg: rain,
  },
  {
    code: 66,
    text: "Slight Freezing Rain",
    icon: <FiCloudRain />,
    bg: rain,
  },
  {
    code: 67,
    text: "Heavy Freezing Rain",
    icon: <FiCloudRain />,
    bg: rain,
  },
  {
    code: 71,
    text: "Slight Snow",
    icon: <FiCloudSnow />,
    bg: rain,
  },
  {
    code: 73,
    text: "Moderate Snow",
    icon: <FiCloudSnow />,
    bg: rain,
  },
  {
    code: 75,
    text: "Heavy Snow",
    icon: <FiCloudSnow />,
    bg: rain,
  },
  {
    code: 77,
    text: "Snow Grains",
    icon: <FiCloudSnow />,
    bg: rain,
  },
  {
    code: 80,
    text: "Slight Rain Showers",
    icon: <FiCloudDrizzle />,
    bg: rain,
  },
  {
    code: 81,
    text: "Moderate Rain Showers",
    icon: <FiCloudDrizzle />,
    bg: rain,
  },
  {
    code: 82,
    text: "Violent Rain Showers",
    icon: <FiCloudDrizzle />,
    bg: rain,
  },
  {
    code: 85,
    text: "Slight Snow Showers",
    icon: <FiCloudSnow />,
    bg: rain,
  },
  {
    code: 86,
    text: "Heavy Snow Showers",
    icon: <FiCloudSnow />,
    bg: rain,
  },
  {
    code: 95,
    text: "Thunderstrom",
    icon: <FiCloudLightning />,
    bg: rain,
  },
  {
    code: 96,
    text: "Thunderstrom",
    icon: <FiCloudLightning />,
    bg: rain,
  },
  {
    code: 99,
    text: "Thunderstrom",
    icon: <FiCloudLightning />,
    bg: rain,
  },
];
