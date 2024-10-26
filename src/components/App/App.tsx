import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React</h1>
      <div className="card">
        <button className= "bg-teal-700" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          test tesxt
        </p>
      </div>
    </>
  )
}

export { App }
