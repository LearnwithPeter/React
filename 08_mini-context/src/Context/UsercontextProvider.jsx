import React from 'react'
import Usercontext from './Usercontext'

const Usercontextprovider=({children})=>{
  const [User,setuser]=React.useState(null)
  return(
    <Usercontext.Provider value={{User,setuser}}>
    {children}
    </Usercontext.Provider>
  )
}
export default Usercontextprovider;