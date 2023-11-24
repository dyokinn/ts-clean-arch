import React from "react"
import { useState } from "react"

const LoginPage = () => {
    const [count, setCount] = useState(0)

    return (
      <div>
          <p>count: {count}</p>
          <button onClick={() => setCount(count + 1)} >teste</button>
      </div>
    )
}

export default LoginPage