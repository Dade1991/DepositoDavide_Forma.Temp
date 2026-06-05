function Figlio({ userName, onUpdateNome }) {
    return (
        <>
            <div>
                <p>Username ricevuto dal PADRE: {userName}</p>
                <button onClick={() => onUpdateNome("Luigi")}>Cambia il nome in Luigi</button>
            </div>
        </>
    )
}

export default Figlio
