import { useParams } from "react-router-dom"

function DettaglioNome() {
    const { nome } = useParams()
    return (
        <>
            <div>
                <h3>Ciao {nome}!</h3>
            </div>
        </>
    )
}

export default DettaglioNome
