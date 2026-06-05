import { useState } from "react"
import Figlio from "./Figlio"

function Padre() {
    const [userName, setUserName] = useState("Marco")

    function gestisciUpdateNome(nomeRicevuto) {
        setUserName(nomeRicevuto)
    }

    return (
        <>
            <div>
                <p>Sono il Component: PADRE</p>
                <Figlio userName={userName} onUpdateNome={gestisciUpdateNome} />
            </div>
        </>
    )
}

export default Padre
