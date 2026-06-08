import { NavLink } from "react-router-dom"

function CustomNavbar() {
    const showActiveStyle = ({ isActive }) => ({
        color: isActive ? "gold" : "white",
        fontWeight: isActive ? "bold" : "normal",
    })
    return (
        <>
            <nav>
                <NavLink to="/" style={showActiveStyle}>
                    Home
                </NavLink>
            </nav>
        </>
    )
}

export default CustomNavbar
