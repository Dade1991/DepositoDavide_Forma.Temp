import { Outlet } from "react-router-dom"
import Hello from "../components/Hello"
import HelloAbout from "../components/HelloAbout"

function About() {
    return (
        <>
            <div>
                <Hello />
                <Outlet></Outlet>
                <HelloAbout />
            </div>
        </>
    )
}

export default About
