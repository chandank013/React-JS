import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] =useState(5)

  // let counter = 5

  const addValue = () => {
    counter = counter+=1
    setCounter(counter)

    if(counter>=20)
    {
      setCounter(0)
    }
  }

  const removeValue = () => {
    console.log("clicked", counter)
    counter = counter-=1
    setCounter(counter)
    // if value is less than 0 , reset to 20
    if(counter<0)
    {
      setCounter(20)
    }
  }

  return (
    <>
     <h1>Code with Coffee</h1>
     <h2>Counter valu {counter}</h2>

     <button
     onClick={addValue}
     >Add value {counter}</button>
     <br />
     <button
     onClick={removeValue}
     >remove value {counter}</button>

     <footer>footer {counter}</footer>
    </>
  )
}

export default App
