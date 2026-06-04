import axios from "axios"

function PostCalls(props) {
    // Inizializzo la funzione che eseguirà la chiamata POST.

    const createPost = () => {
        axios
            .post("https://jsonplaceholder.typicode.com/posts", {
                title: "new post",
                body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem maxime ullam, ab impedit non sequi cupiditate, repellendus ipsam voluptatem architecto inventore dicta molestiae cum vero a facilis, fuga esse? Reprehenderit!",
                userId: 1,
            })
            .then((res) => {
                // Settiamo tutti i posts del payload all'interno dell'array posts precedenti (... spread operator)

                props.setPosts((prevPosts) => [res.data, ...prevPosts])
                // Dimostrazione di chiamata tramite alert con server response code

                props.setMessage(`Post duly POSTed. Status code: ${res.status}`)
            })
    }

    return (
        <div>
            <button onClick={createPost}>Create post</button>
        </div>
    )
}

export default PostCalls
