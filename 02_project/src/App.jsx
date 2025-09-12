import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter,setcounter]=useState(15);
  
  const addvalue=()=>{
    setcounter(counter+1); 
    if(counter>=20){
      counter=5
      setcounter(counter)
    }else{
      setcounter(counter+1)
    }

  }
  
  const decvalue=()=>{
    if(counter<=0){
      counter=5
      setcounter(counter)
    }else{
      setcounter(counter-1)
    }

  }
  return (
    <>
      <h1>Earnest</h1>
      <h2>Counter Value:{counter}</h2>
      <button
      onClick={addvalue}
      >Add Value</button>
      <br /><br />
      <button
      onClick={decvalue}
      >Remove Value</button>
    </>
  )
}

export default App
