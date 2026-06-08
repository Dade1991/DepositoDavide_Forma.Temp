import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

function DettaglioPost() {
    const { id } = useParams()

    const navigate = useNavigate()

    const [post, setPost] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                setPost(res.data)
                setLoading(false)
            })
    }, [id])

    if (loading) return <h2>Caricamento in corso</h2>

    return (
        <>
            <button onClick={() => navigate(-1)}>Torna indietro</button>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>Id autore: {post.userId}</p>
        </>
    )
}

export default DettaglioPost
