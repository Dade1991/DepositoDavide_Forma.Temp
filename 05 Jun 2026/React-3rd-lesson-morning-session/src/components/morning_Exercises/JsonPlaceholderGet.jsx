import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import CreatePostButton from "./CreatePostButton"
import axios from "axios"

function JsonPlaceholderGet() {
    // ========== VARIABLES, OBJ, UTLITIES ==========

    // Inizializzo stato che contiene tutti i post recuperati dalla GET

    const [posts, setPosts] = useState([])

    // Inizializzo react-hook-form ed inserisco funzioni utili

    const {
        register, // CollegO gli input allo stato interno del form
        handleSubmit, // Wrapper che gestisce il submit e passa i dati
        reset, // Resetta i campi dopo l'invio
    } = useForm()

    // ========== API CALLs ==========

    // useEffect esegue la GET quando il componente viene montato la prima volta

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            // Salvo nello stato l'array di post restituito dalla chiamata API GET

            setPosts(res.data)
        })
    }, []) // Array vuoto = lO useEffect parte solo una volta al mount

    // Al submit del form, si eseguirà la seguente funzione che recupererà i dati definiti al suo interno

    const onSubmit = (data) => {
        // Inizializzo un oggetto che definisce la struttura del post come da JsonPlaceholder

        const postToSend = {
            title: data.title,
            body: data.body,
            userId: Number(data.userId), // converto in numero con Number(..)
        }

        // Qui parte la chiamata API POST vera e propria

        axios.post("https://jsonplaceholder.typicode.com/posts", postToSend).then((res) => {
            // "res.data" contiene i dati dell'oggetto post creato dal server
            // "...prevPosts" aggiunge il post in testa alla lista dei posts

            setPosts((prevPosts) => [res.data, ...prevPosts])
            // svuota i campi del form

            reset()
        })
    }

    // ========== HTML MOUNT ==========

    // Ritorno l'HTML con struttura: Form + Bottone "Figlio" + Posts

    return (
        <>
            <div>
                <h2>JSONPlaceholder Posts</h2>

                {/* === FORM === */}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Titolo:</label>

                        {/* Registro il campo "title" nel form tramite "register", do anche required */}

                        <input type="text" {...register("title", { required: true })} />
                    </div>
                    <div>
                        <label>Contenuto:</label>

                        {/* Registro il campo "body" nel form tramite "register", do anche required */}

                        <textarea type="text" {...register("body", { required: true })} />
                    </div>
                    <div>
                        <label>User ID:</label>

                        {/* Registro il campo "userId" nel form tramite "register", do anche required */}

                        <input type="number" {...register("userId", { required: true })} />
                    </div>

                    {/* === BOTTONE "FIGLIO" === */}

                    {/* Sotto al post, inserisco bottone figlio che farà la chiamata API POST */}

                    {/* Visionare componente per ulteriori commenti ma: il bottone (Figlio) sarà un
                    semplice bottone. I dati verranno tutti gestiti da questo attuale componente
                    "Padre" */}

                    <CreatePostButton />
                </form>

                {/* === POSTS === */}

                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <h3>
                                ID: {post.id} - Title: {post.title}
                            </h3>
                            <p>{post.body}</p>
                            <p>User ID: {post.userId}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default JsonPlaceholderGet
