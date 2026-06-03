import "./App.css"
import CustomFooter from "./components/CustomFooter"
import CustomHeader from "./components/CustomHeader"
import TeamCard from "./components/TeamCard"

import Giacomino from "./assets/Giacomino.jpg"
import Giovanni from "./assets/Giovanni.jpg"
import Aldo from "./assets/Aldo.jpg"

import { LightSwitch } from "./components/LightSwtich"

function App() {
  const teamCardUserData = [
    {
      name: "Giacomo",
      surname: "Poretti",
      role: "Front End Developer",
      bio: "Porca di quella pu..",
      imageUrl: Giacomino,
      isPresent: true,
    },
    {
      name: "Giovanni",
      surname: "Storti",
      role: "Back End Developer",
      bio: "Subaru baracca",
      imageUrl: Giovanni,
      isPresent: true,
    },
    {
      name: "Aldo",
      surname: "Baglio",
      role: "Full Stack Web Developer",
      bio: "Buona questa cadrega!",
      imageUrl: Aldo,
      isPresent: false,
    },
  ]

  return (
    <>
      <section id="center">
        <CustomHeader />
        <h1>REACT - Exercises</h1>
        {teamCardUserData.map((userCard) => (
          <TeamCard
            name={userCard.name}
            surname={userCard.surname}
            role={userCard.role}
            bio={userCard.bio}
            imageUrl={userCard.imageUrl}
            isPresent={userCard.isPresent}
          />
        ))}
        <LightSwitch />
        <CustomFooter />
      </section>
    </>
  )
}

export default App
