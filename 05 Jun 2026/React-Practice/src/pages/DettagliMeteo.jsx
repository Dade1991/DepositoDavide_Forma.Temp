import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

function DettagliMeteo() {
    const [city, setCity] = useState(null)

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState("")

    const { selectedCity } = useParams()

    const navigate = useNavigate()

    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY

    useEffect(() => {
        setLoading(true)
        setError("")

        axios
            .get(`https://api.openweathermap.org/data/2.5/weather`, {
                params: {
                    q: `${selectedCity},IT`,
                    appid: apiKey,
                    units: `metric`,
                    lang: `it`,
                },
            })
            .then((res) => {
                setCity(res.data)
                setLoading(false)
            })
            .catch(() => {
                setError(`City not found :/`)
                setLoading(false)
            })
    }, [apiKey, selectedCity])

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

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
