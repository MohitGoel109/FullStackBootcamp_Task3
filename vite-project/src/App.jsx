import React from 'react'
import UseEffectOne from './UseEffectOne'
import Timer from './Timer'
import WindowResize from './WindowResize'
import Routing from './Routing'

const App = () => {
  return (
    <div>
      <Routing/>
      <UseEffectOne/> 
      <Timer/> 
      <WindowResize/> 
    </div>
  )
}

export default App