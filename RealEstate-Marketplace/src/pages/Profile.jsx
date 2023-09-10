import { getAuth } from 'firebase/auth';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';

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
      <div>
        <form>
          <input type="text" id='name' value={name} disabled />
          <input type="email" id='email' value={email} disabled/>
          <div>
            <p>Edit
              <span>Edit logo</span>
            </p>
            <p onClick={onLogout} className='pointer-cursor'>Sign out</p>
          </div>
        </form>
      </div>
    </section>
    </>
  )
}
