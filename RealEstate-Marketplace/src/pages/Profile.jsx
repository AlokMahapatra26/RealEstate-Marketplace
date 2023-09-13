import { getAuth } from 'firebase/auth';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';
import {Link} from  'react-router-dom'

export default function Profile() {

  const navigate = useNavigate();

  //FIREBASE AUTH
  const auth = getAuth()

  //FORM STATE
  const [formData , setFormData] = useState({
    name : auth.currentUser.displayName,
    email : auth.currentUser.email
  })

  //LOGOUT FUNTION
  function onLogout(){
    auth.signOut();
    navigate('/sign-in')
  }

  const {name , email} = formData;
  return (
    <>
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold '>Profile</h1>
      <div className=' flex flex-col justify-center'>
        
        
          <div className=' flex flex-col justify-center items-center mt-4'>
          <input type="text" id='name' value={name} disabled className='p-2'/><br />
          
          
          <input type="email" id='email' value={email} disabled
          className='p-2'/>
          
          
         
            <button type='submit' className=' border hover:bg-gray-200 transition p-2 rounded mt-4'>
              <Link to={"/create-listing"}>
              Add Your Property on Sale or Rent
              </Link>
              </button>

            <p onClick={onLogout} className='cursor-pointer border inline  rounded  hover:bg-red-500 hover:text-white transition p-2 mt-4'>Sign out</p>
          
            </div>
          </div>
    </section>
    </>
  )
}
