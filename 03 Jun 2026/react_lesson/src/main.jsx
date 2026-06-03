import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Navbar from "./components/Navbar.jsx"
import HeroSection from "./components/HeroSection.jsx"
import CardCustom from "./components/CardCustom.jsx"
// import App from "./App.jsx"
// import ProductCard from "./ProductCard.jsx"
// import Dashboard from "./Dashboard.jsx"
// import AlertBox from "./AlertBox.jsx"

createRoot(document.getElementById("root")).render(
  <>
    <StrictMode>
      {/* <App /> */}
      {/* <ProductCard />
      <Dashboard /> */}
      {/* // <AlertBox /> */}
      <Navbar />
      <HeroSection />
      <CardCustom />
      <CardCustom />
      <CardCustom />
    </StrictMode>
    ,
  </>,
)
