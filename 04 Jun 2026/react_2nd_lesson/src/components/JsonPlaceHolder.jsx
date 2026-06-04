import { useState, useEffect } from "react"
import axios from "axios"

function JsonPlaceHolder() {
    // Dichiaro useState per inizializzare lo stato dei posts a vuoto

    const [posts, setPosts] = useState([])

    // Inizializzo useEffect che scritto cosi " useEffect(() => {}, []) " farà partire la funzione che racchiuderà i dati che devono essere lanciati all'avvio le parentisi quadre alla fine, vuote, si attivano solo una volta: la prima, quando crea la pagina, all'avvio

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            setPosts(res.data)
        })
    }, [])

    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default JsonPlaceHolder
