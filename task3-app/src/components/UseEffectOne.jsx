import React, { useState, useEffect } from 'react'

const UseEffectOne = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  console.log('rendering component')

  // This effect only depends on `count`, so it runs whenever
  // count changes — but NOT when count2 changes.
  useEffect(() => {
    if (count > 0) {
      alert('count button clicked')
    }
  }, [count])

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="counter-demo">
      <h1>Count 1: {count}</h1>
      <h1>Count 2: {count2}</h1>

      <div className="button-row">
        <button className="pill active" onClick={handleClick}>
          Button 1
        </button>
        <button className="pill" onClick={() => setCount2(count2 + 1)}>
          Button 2
        </button>
      </div>
    </div>
  )
}

export default UseEffectOne
