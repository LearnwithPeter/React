import React, { useContext, useState } from 'react'
import Usercontext from '../Context/Usercontext'

function Login() {
  const [username,setusername]=useState('')
  const [password,setpassword]=useState('')
  const {setuser}=useContext(Usercontext)

  const handlesubmit=(e)=>{
     e.preventDefault();
     setuser([{username,password}])
  }
  return (
    <div>
      <h2>Login</h2>
      <input type="text"
      value={username}
      onChange={(e)=>{setusername(e.target.value)}}
      placeholder='User Name' />
      {" "}
      <input type="password"
      placeholder='Password'
      value={password}
      onChange={(e)=>{setpassword(e.target.value)}}/>
      {" "}
      <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login
