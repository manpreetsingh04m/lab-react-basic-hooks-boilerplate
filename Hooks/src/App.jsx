import { useState } from 'react'
import React from 'react'
import './App.css'
import Counter from './Components/Counter'
import Counter1 from './Components/Counter1'
import Counter2 from './Components/Counter2'
import Counter3 from './Components/Counter3'
import Effects from './Components/Effects/Effects'

function App() {

  const [show,setShow]=useState(true)
  return (
    <>
    <button onClick={()=>{
      setShow(!show)
    }}>
      C H A N G E
    </button>

    {!show ? (
      <>
    <Counter3/>
    <Counter2/>
    <Counter1/>
    <Counter/>
      </>
    ):( <Effects/>)
   
    }
    </>
  )
}

export default App
