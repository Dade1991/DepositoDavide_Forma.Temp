import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function ListaCitta() {
    // ==========  ==========
    const [cities, setCities] = useState([])

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState("")

    const navigate = useNavigate()

    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY

    // ==========  ==========

    useEffect(() => {
        const cityToShow = [
            `Piacenza`,
            `Enna`,
            `Bologna`,
            `Roma`,
            `Milano`,
            `Firenze`,
        ]

        const req = cityToShow.map((cityName) =>
            axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
                params: {
                    q: `${cityName}`,
                    appid: apiKey,
                    units: `metric`,
                    lang: `it`,
                },
            }),
        )

        Promise.all(req)
            .then((res) => {
                const data = res.map((res) => res.data)
                setCities(data)
                setLoading(false)
            })
            .catch(() => {
                setError(`Error during weather loading`)
                setLoading(false)
            })
    }, [apiKey])

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
