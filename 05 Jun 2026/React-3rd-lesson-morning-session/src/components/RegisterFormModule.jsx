import { useForm } from "react-hook-form"

function RegisterFormModule() {
    // Estraiamo la funzione register dal modulo useForm

    const { register, handleSubmit } = useForm()

    const handleFormSubmit = (data) => {
        // I dati contengono le chiavi registrate nei campi

        console.log("Dati del form:", data)
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            {/* Registriamo l'input con la chiave 'email' */}

            <input {...register("email")} placeholder="Inserisci email" />
            <input {...register("firstName")} placeholder="Nome" />
            <input {...register("lastName")} placeholder="Cognome" />
            <button type="submit">Conferma</button>
        </form>
    )
}

export default RegisterFormModule
