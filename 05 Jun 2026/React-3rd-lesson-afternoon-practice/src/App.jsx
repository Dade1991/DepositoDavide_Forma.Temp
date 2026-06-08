import { Routes, Route, NavLink } from "react-router-dom"
import "./App.css"
import ListaPost from "./components/ListaPost"
import DettaglioPost from "./components/DettaglioPost"

function App() {
    const showActiveStyle = ({ isActive }) => ({
        color: isActive ? "gold" : "white",
        fontWeight: isActive ? "bold" : "normal",
    })

    return (
        <div id="center">
            <nav>
                <NavLink to="/" style={showActiveStyle}>
                    Home
                </NavLink>
            </nav>
            <Routes>
                <Route>
                    <Route path="/" element={<ListaPost />} />
                    <Route path="/posts/:id" element={<DettaglioPost />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
