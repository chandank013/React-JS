import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");


  // useRef hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*_";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword])


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999); // For mobile devices
    window.navigator.clipboard.writeText(password)
  }, [password]);


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-65 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3 text-2xl font-bold'>Password Generator</h1>

      <div className=' flex shadow rounded-lg overflow-hidden mb-4 '>
        <input 
        type="text"
        value={password} 
        className='outline-none w-full py-1 px-3  bg-white '
        placeholder='password'
        readOnly
        ref={passwordRef}
         />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      
      <div className='flex text-sm gap-x-2'>
        <div className=' flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultValue={numberAllowed}
          id="numberInput" 
          onChange={()=> {
            setNumberAllowed((prev) => !prev);
          }}
          />
          <label htmlFor="numberInput">Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultValue={charAllowed}
          id="numberInput" 
          onChange={()=> {
            setCharAllowed((prev) => !prev);
          }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
      <button className='bg-blue-700 mt-8 mx-35 px-8 py-2 text-white text-lg rounded-md font-bold cursor-pointer'
      onClick={passwordGenerator}>Generate</button>
     </div>
    </>
  )
}

export default App
