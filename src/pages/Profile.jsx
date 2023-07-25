import React, { useState } from 'react'
import {getAuth} from "firebase/auth";
import { useNavigate } from 'react-router';
import {Link} from "react-router-dom"

export default function Profile() {

  const auth =  getAuth();
  const navigate = useNavigate();

  const [data , setData] = useState({
    fullname : auth.currentUser.displayName,
    email : auth.currentUser.email,
    
  });

  const {fullname , email } = data;

  function onLogout(){
    auth.signOut()
    navigate("/sign-in");
  }

  return (
    <>
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>My Profile</h1>

      <div className='flex flex-col items-center mt-6'>
      <p>Name : {fullname}</p>
      <p> Email : {email}</p>  
      
        <div className="flex align-center mt-8 bg-red-400 p-2 px-8 text-white rounded shadow hover:bg-red-500  hover:shadow-lg transition">
        <Link to="/create-listing">
        <button type='submit'>
        Add your Room or House 
      </button>
        </Link>
      </div>

      </div>

      <div>
        <p onClick={onLogout} className=' shadow  rounded text-center mt-8  w-20 mx-auto p-1 text-red-500 cursor-pointer select-none hover:shadow-md transition hover:text-white hover:bg-red-400'>Sign Out</p>
      </div>
    </section>
    </>
  )
}
