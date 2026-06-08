import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useWeatherState } from "../store/useWeatherStore"

function DettagliMeteo() {
    // ==========  ==========

    const city = useWeatherState((state) => state.city)
    const loading = useWeatherState((state) => state.loading)
    const error = useWeatherState((state) => state.error)
    const fetchCityByName = useWeatherState((state) => state.fetchCityByName)

    // ==========  ==========

    const navigate = useNavigate()

    const { selectedCity } = useParams()

    // ==========  ==========

    useEffect(() => {
        if (selectedCity) {
            fetchCityByName(selectedCity)
        }
    }, [selectedCity, fetchCityByName])

    // ==========  ==========

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    if (!city) return null

    // ==========  ==========

    return (
        <>
            <div>
                <h2>City Name: {city.name}</h2>
                <p>Temperature: {city.main.temp}</p>
                <p>Weather: {city.weather[0].description}</p>
                <p>Humidity: {city.main.humidity} %</p>
                <p>Wind: {city.wind.speed} m/s</p>
                <button onClick={() => navigate(-1)}>Go back</button>
            </div>
        </>
    )
}

export default DettagliMeteo
