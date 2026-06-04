import "./App.css"

import DeleteCalls from "./components/DeleteCalls"
import GetPosts from "./components/GetPosts"
import PostCalls from "./components/PostCalls"

import { useState } from "react"

// RIGHE "SPENTE" ----------------------------------

// import { useState } from "react"
// import CounterTwo from "./components/CounterTwo"
// import JsonPlaceHolder from "./components/JsonPlaceHolder"

// RIGHE "SPENTE" ----------------------------------

function App() {
    // Inizializzo stato dei post che inizialmente è vuoto

    const [posts, setPosts] = useState([])

    // Inizializzo stato del messaggio delle varie chiamate con i relativi stati HTTP a vuoto ""

    const [message, setMessage] = useState("")

    // Inizializzo stato dell'eventuale post da eliminare a vuoto "", verrà settato dall'utente

    const [deleteId, setDeleteId] = useState("")

    // RIGHE "SPENTE" ----------------------------------

    // const [count, setCount] = useState(0)

    // const handleCount = () => {
    //     setCount((count) => count + 1)
    // }

    // const handleCountMinus = () => {
    //     setCount((count) => count - 1)
    // }

    // RIGHE "SPENTE" ----------------------------------

    return (
        <>
            <section id="center">
                {/* 
                
                // RIGHE "SPENTE" ----------------------------------

                <button type="button" className="counter" onClick={handleCount}>
          Add - Count is {count}
        </button>
        <button type="button" className="counter" onClick={handleCountMinus}>
          Decrese - Count is {count}
        </button>
        <CounterTwo />
        <JsonPlaceHolder /> 
        
        // RIGHE "SPENTE" ----------------------------------
        
        */}

                {/* Mostro il messaggio che inizialmente è "" (vuoto) e, all'avvio di una chiamata, ritorna un messaggio con la sua risposta HTTP */}

                {message && <p className="messageOnTop">{message}</p>}

                <GetPosts posts={posts} setPosts={setPosts} setMessage={setMessage} />
                <PostCalls setPosts={setPosts} setMessage={setMessage} />
                <div className="deleteCallsContainer">
                    <input
                        type="number"
                        placeholder="Insert ID to be DELETEd"
                        // Valore da considerare all'interno dell'input

                        value={deleteId}
                        // Ascolto l'evento e recupero il valore di quell'evento (l'id nel ns caso) che setterà l'id inserito

                        onChange={(event) => {
                            setDeleteId(event.target.value)
                        }}
                    ></input>

                    <DeleteCalls id={deleteId} setPosts={setPosts} setMessage={setMessage} />
                </div>
            </section>
        </>
    )
}

export default App
