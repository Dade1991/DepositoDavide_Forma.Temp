import { Route, Routes } from "react-router-dom"
import "./App.css"
import CustomNavbar from "./components/CustomNavbar"
import ListaCitta from "./pages/ListaCitta"
import DettagliMeteo from "./pages/DettagliMeteo"

function App() {
    return (
        <>
            <CustomNavbar />
            <Routes>
                <Route path="/" element={<ListaCitta />} />
                <Route
                    path="/meteo/:selectedCity"
                    element={<DettagliMeteo />}
                />
            </Routes>
        </>
    )
}

export default App
