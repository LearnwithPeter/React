import React, { useEffect, useState ,  } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github () {
  const data=useLoaderData()
  // const [data,setdata]=useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/Learnwithpeter')
  //   .then(res=>res.json())
  //   .then(data=>{
  //     console.log(data);
  //     setdata(data)
      
  //   })
  // },[])
  return (
    <>
    
    <div className='text-center text-3xl bg-gray-800 text-white p-3'>
      Github Followers:{data.followers}
   <div className='m-auto max-w-xs max-h-xs'>
    <div className='flex justify-center mb-4'><img width={200}src={data.avatar_url} alt="Github pic" /></div>
    </div>
    </div> 
    </>
  )
}

export default  Github
export const Gitinfo=async()=>{
  const res = await fetch('https://api.github.com/users/Learnwithpeter')
  return res.json()
}