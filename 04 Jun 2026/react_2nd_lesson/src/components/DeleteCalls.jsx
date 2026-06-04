import axios from "axios"

function DeleteCalls(props) {
    // Inizializzo la funzione che eseguirà la chiamata DELETE.

    const deletePost = () => {
        console.log(props)
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${props.id}`).then((res) => {
            // Interveniamo con un controllo sulla lista di posts precendente dove confronteremo l'id del post con l'id ricevuto dalle props. Tutti quelli NON uguali, sarenno Settati nella lista dei posts.

            props.setPosts((prevPosts) => prevPosts.filter((post) => post.id !== props.id))

            // Dimostrazione di chiamata tramite alert con server response code

            props.setMessage(`Post with ID: ${props.id} duly DELETEd. Status code: ${res.status}`)
        })
    }
    return (
        <div>
            <button onClick={deletePost}>Delete Post n° {props.id}</button>
        </div>
    )
}

export default DeleteCalls
