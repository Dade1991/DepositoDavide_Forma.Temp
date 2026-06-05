// Questo componente è il FIGLIO: contiene un solo bottone
// Non legge direttamente i dati del form, ma riceve dal PADRE una funzione via props
// La funzione props.onCreatePost, quando chiamata, esegue la POST con i dati compilati nel form

function CreatePostButton(props) {
    // Quando l'utente clicca il bottone, il figlio chiama la funzione ricevuta dal padre
    // In questo modo è il bottone del FIGLIO a "far partire" la chiamata POST

    const handleClick = () => {
        props.onCreatePost()
    }
    return (
        <>
            {/* Quando l'utente clicca il bottone, il figlio chiama la funzione ricevuta dal padre */}
            {/* In questo modo è il bottone del FIGLIO a "far partire" la chiamata POST */}

            <button type="button" onClick={handleClick}>
                Invia nuovo Post
            </button>
        </>
    )
}

export default CreatePostButton
