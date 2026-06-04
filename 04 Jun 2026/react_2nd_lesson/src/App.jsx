import { useState } from "react"
import "./App.css"
import CounterTwo from "./components/CounterTwo"

function App() {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount((count) => count + 1)
  }

  const handleCountMinus = () => {
    setCount((count) => count - 1)
  }

  return (
    <>
      <section id="center">
        <button type="button" className="counter" onClick={handleCount}>
          Add - Count is {count}
        </button>
        <button type="button" className="counter" onClick={handleCountMinus}>
          Decrese - Count is {count}
        </button>
        <CounterTwo />
      </section>
    </>
  )
}

export default App
