import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <div className="flex items-center justify-center min-h-screen mx-auto h-[200px] w-[500px]">
        <h1 className="text-3xl font-bold text-center text-white">Welcome In the Mini Project Of Background Changer</h1>
        </div>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button
            onClick={() => {setColor("red")}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "red"}}
            >Red</button>
            <button onClick={() => {setColor("green")}} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "green"}}
            >Green</button>
            <button onClick={() => {setColor("blue")}} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "blue"}}
            >Blue</button>
            <button onClick={() => {setColor("orange")}} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "orange"}}
            >Orange</button>
            <button onClick={() => {setColor("#FF1493")}} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "#FF1493"}}
            >Pink</button>
            <button onClick={() => {setColor("#BA55D3")}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "#BA55D3"}}
            >Orchid</button>
            <button onClick={() => {setColor("#8B008B")}} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "#8B008B"}}
            >Magenta</button>
            <button onClick={() => {setColor("#4B0082")}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "#4B0082"}}
            >Indigo</button>
            <button onClick={() => {setColor("#2E8B57")}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "#2E8B57"}}
            >SeaGreen</button>
            <button onClick={() => {setColor("#008080")}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "#008080"}}
            >Teal</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
