import { useEffect } from "react"
import axios from "axios"

function GetPosts(props) {
    // Dichiaro useState per inizializzare lo stato dei posts a vuoto

    // Inizializzo useEffect che scritto cosi " useEffect(() => {}, []) " farà partire la funzione che racchiuderà i dati che devono essere lanciati all'avvio le parentisi quadre alla fine, vuote, si attivano solo una volta: la prima, quando crea la pagina, all'avvio
    // Al contempo, eseguirà una chiamata GET per il recupero dei posts indicati

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            // Inizializzo varibile in cui salvare momentaneamente i posts che desidero filtrare

            const filteredPosts = res.data.filter((post) => [1, 2, 3].includes(post.id))

            // Setto i posts precedentemente filtrati e salvati in varibile dalla chiamata API

            props.setPosts(filteredPosts)

            // Dimostrazione di chiamata tramite alert con server response code

            props.setMessage(`Posts duly GETted. Status code: ${res.status}`)
        })

        // Questo serve a renderizzare i post al primo avvio e rieseguirlo se cambia la lista
    }, [props.setPosts])

    // Renderizzerà l'elemento div ed ul e mappando ciascun post (li) in modo dinamico

    return (
        <div>
            <ul>
                {props.posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GetPosts
