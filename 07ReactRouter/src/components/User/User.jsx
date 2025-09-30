import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
  const {id}=useParams()
  return (
    <div className='w-full flex justify-center'>
    <div className='text-center bg-gray-600 text-3xl text-white p-4 pl-100 pr-100 '>
      User:{id}
    </div>
    </div>
  )
}

export default User
