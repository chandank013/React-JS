import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './compnents/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Chandan",
    age: 21,
  }

  let newArr = [1,2,3]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
    <Card userName = 'codeWithcoffee' btnText = 'click me' />
    <Card userName = 'Quality Jacket' btnText = 'visit me' />
    </>
  )
}

export default App
