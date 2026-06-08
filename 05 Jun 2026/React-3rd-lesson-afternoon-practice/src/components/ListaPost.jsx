import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function ListaPost() {
    const [posts, setPosts] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => setPosts(res.data.slice(0, 6))) // Con il meotodo .slice() definisco da quale a quale post indicizzato voglio renderizzare
    })
    return (
        <>
            <ul>
                {posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        {/* Con il meotodo .substring() definisco da quale a quale carattare voglio renderizzare */}
                        <p>{post.body.substring(0, 50)}...</p>
                        <button onClick={() => navigate(`/posts/${post.id}`)}>
                            Leggi di più
                        </button>
                    </div>
                ))}
            </ul>
        </>
    )
}

export default ListaPost
