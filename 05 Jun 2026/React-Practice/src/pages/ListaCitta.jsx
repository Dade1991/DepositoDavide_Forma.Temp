import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useWeatherState } from "../store/useWeatherStore"

function ListaCitta() {
    // ==========  ==========

    const cities = useWeatherState((state) => state.cities)
    const loading = useWeatherState((state) => state.loading)
    const error = useWeatherState((state) => state.error)
    const fetchCities = useWeatherState((state) => state.fetchCities)

    // ==========  ==========

    const navigate = useNavigate()

    // ==========  ==========

    useEffect(() => {
        fetchCities()
    }, [fetchCities])

    // ==========  ==========

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    // ==========  ==========

    return (
        <>
            <ul>
                {cities.map((city) => (
                    <div key={city.id}>
                        <h3>City Name: {city.name}</h3>
                        <p>Temperature: {city.main.temp} °C</p>
                        <p>Weather: {city.weather[0].description}</p>
                        <button onClick={() => navigate(`/meteo/${city.name}`)}>
                            More info
                        </button>
                    </div>
                ))}
            </ul>
        </>
    )
}

export default ListaCitta
