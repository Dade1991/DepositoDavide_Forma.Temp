import { create } from "zustand"

const useWeatherStore = create(() => ({
    apiKey: import.meta.env.VITE_OPENWEATHER_API_KEY,
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
    country: "IT",
    lang: "it",
    units: "metric",
}))

export default useWeatherStore
