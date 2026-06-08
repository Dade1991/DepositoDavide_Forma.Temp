import { create } from "zustand"
import axios from "axios"

export const useWeatherState = create((set, get) => ({
    apiKey: import.meta.env.VITE_OPENWEATHER_API_KEY,
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
    country: "IT",
    lang: "it",
    units: "metric",

    cities: [],
    city: null,
    loading: true,
    error: "",

    getWeatherByCity: (cityName) => {
        const { apiKey, baseUrl, lang, units } = get()

        return axios.get(baseUrl, {
            params: {
                q: cityName,
                appid: apiKey,
                units,
                lang,
            },
        })
    },

    fetchCities: async () => {
        const cityToShow = [
            "Piacenza",
            "Enna",
            "Bologna",
            "Roma",
            "Milano",
            "Firenze",
        ]

        set({
            loading: true,
            error: "",
        })

        try {
            const { getWeatherByCity } = get()

            const responses = await Promise.all(
                cityToShow.map((cityName) => getWeatherByCity(cityName)),
            )

            const data = responses.map((res) => res.data)

            set({
                cities: data,
                loading: false,
            })
        } catch {
            set({
                error: "Error during weather loading",
                loading: false,
            })
        }
    },

    fetchCityByName: async (cityName) => {
        const { getWeatherByCity, country } = get()

        set({
            loading: true,
            error: "",
            city: null,
        })

        try {
            const response = await getWeatherByCity(`${cityName}, ${country}`)

            set({
                city: response.data,
                loading: false,
            })
        } catch {
            set({
                error: "City not found :/",
                loading: false,
            })
        }
    },
}))
