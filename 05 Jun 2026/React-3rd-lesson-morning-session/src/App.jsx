import "./App.css"
import CreatePostButton from "./components/morning_Exercises/CreatePostButton"
import JsonPlaceholderGet from "./components/morning_Exercises/JsonPlaceholderGet"

// import Padre from "./components/Padre"
// import RegisterFormModule from "./components/RegisterFormModule"
// import RegisterFormModuleUpdate from "./components/RegisterFormModuleUpgrade"

function App() {
    return (
        <>
            <section id="center">
                {/* <RegisterFormModule />
                <RegisterFormModuleUpdate /> */}
                {/* <Padre /> */}

                <JsonPlaceholderGet />
                <CreatePostButton />
            </section>
        </>
    )
}

export default App
