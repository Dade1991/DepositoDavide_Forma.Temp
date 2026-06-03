// import { useState } from "react"
// import reactLogo from "./assets/react.svg"
// import viteLogo from "./assets/vite.svg"
// import heroImg from "./assets/hero.png"
import "./App.css"
import Navbar from "./components/Navbar.jsx"
import HeroSection from "./components/HeroSection.jsx"
import CardCustom from "./components/CardCustom.jsx"
import Welcome from "./components/Welcome.jsx"
import ProfileCard from "./components/ProfileCard.jsx"
import ProductDisplay from "./components/ProductDisplay.jsx"
import AlertButton from "./components/AlertButton.jsx"
import AvatarComponent from "./components/AvatarComponent.jsx"

function App() {
  // Qui definisco sempre le variabili (prima del return della funzione "padre")

  // const [count, setCount] = useState(0)

  const userData = { firstName: "Anna", lastName: "Rossi", role: "Developer" }
  const userSkills = ["React", "JavaScript", "CSS"]

  const handleAlert = () => {
    alert("Azione rilevata dal componente principale!")
  }

  return (
    <>
      <section id="center">
        <h1>Get started</h1>

        <Navbar />
        <HeroSection />
        <CardCustom />
        <CardCustom />
        <CardCustom />

        <div>
          {/* Nome è una stringa statica, messageCount è un numero passato tra graffe */}
          <Welcome name="Mario" messageCount={5} />
          <Welcome name="Luigi" messageCount={0} />
        </div>

        <ProfileCard user={userData} skills={userSkills} />

        <ProductDisplay name={"Nintendo SP"} price={120} />

        <div className="control-panel">
          {/* Passiamo il riferimento alla funzione handleAlert */}
          <AlertButton label="Avvia Processo" onAction={handleAlert} />
        </div>

        <AvatarComponent
          // image={}
          size={200}
          isRound={false}
        />
      </section>
    </>
  )
}
export default App
