import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {

const [length,setlength]=useState(8)
const [numberAllowed,setnumberAllowed]=useState(false)
const [charAllowed,setcharAllowed]=useState(false)
const [password,setPassword]=useState("")
//useRef 
const Passwordref=useRef(null)
const passwordGennerator=useCallback(()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (numberAllowed) str+="0123456789";
  if (charAllowed) str+="!@#$%^&*(){}[]|?~";
  for (let i = 1; i <=length; i++){
    let char=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char);

}
setPassword(pass)
},[length,numberAllowed,charAllowed,setPassword]);
const copypasswordtoclipboard=useCallback(()=>{
  Passwordref.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])
useEffect(()=>{passwordGennerator()},[length,numberAllowed,charAllowed,passwordGennerator])
  return (
    <>
    <div className='w-full max-w-md max- mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white justify-center flex text-center pt-5'>Password Generator</h1>
      <div className='flex rounded-lg overflow-hidden mb-4 pt-10 pb-5 '>
        <input 
          type="text"
          value={password}
          placeholder='Password'
          className='outline-none w-full py-1 px-3 bg-amber-50 rounded-l-3xl' 
          readOnly
          ref={Passwordref}
        />
        <button
          onClick={copypasswordtoclipboard}
         className='bg-blue-600 hover:bg-blue-800 active:bg-blue-700 px-3 py-0.5 outline-none shrink-0  rounded-r-3xl text-white '>Copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
        <input 
        type="range" 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setlength(e.target.value)}}
        />
        <label>Length {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={numberAllowed}
          id='numberinput'
          onChange={()=>{
            setnumberAllowed((prev)=>!prev)
          }}
          />
          <label htmlFor='numberinput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={numberAllowed}
          id='charinput'
          onChange={()=>{
            setcharAllowed((prev)=>!prev)
          }}
          />
          <label htmlFor='charinput'>Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
