import { useState } from 'react'
import './App.css'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <p>count: {count}</p>
        <button onClick={() => setCount(count + 1)} >teste</button>
    </div>
  )
}

export default App
