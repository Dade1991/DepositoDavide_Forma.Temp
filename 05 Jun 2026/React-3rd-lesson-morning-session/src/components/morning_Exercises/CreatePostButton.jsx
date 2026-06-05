// Ora che siamo arrivati al figlio, possiamo notare come non debbano essere passati dati
// è un semplice bottone di submit (è importante che sia presente: type="submit" come attributo del tag button)
// Il submit vero però è stato definito nell'altro componente "Padre" di questo grazie a react-hook-form

function CreatePostButton() {
    return (
        <>
            <button type="submit">Invia nuovo Post</button>
        </>
    )
}

export default CreatePostButton
