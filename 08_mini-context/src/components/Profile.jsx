import React from 'react'
import Usercontext from '../Context/Usercontext';
import { useContext } from 'react';

function Profile() {
  const {User}=useContext(Usercontext)
  
  if(!User) return <div> please login</div>
  
  return  <div>Welcome {User[0].username}</div>
}

export default Profile;
