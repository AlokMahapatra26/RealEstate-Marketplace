import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';
import {getAuth , sendPasswordResetEmail} from 'firebase/auth'
import {toast} from 'react-toastify';

export default function ForgotPassword() {

  const [formData , setFormData] = useState({
    email : '',
  })

  //NAVIGATE
  const navigate = useNavigate();

  //DESTRUCTRUING
  const {email} = formData;

   const onChange = (e) =>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id] : e.target.value,
    }))
   }

  //FIREBASE_AUTH
  async function onSubmit(e){
    e.preventDefault();
    try{
      const auth = getAuth();
      await sendPasswordResetEmail(auth , email);
      toast.success("Check your email")
    }catch(error){
      toast.error("Could not send reset password");
    }
  }

  return (
    <section className='flex-1 h-[calc(100vh-3rem)]  flex justify-center items-center' >
   
   <form className='bg-white flex flex-col items-center justify-center border p-4 rounded' onSubmit={onSubmit}>
    <h1 className='text-2xl m-2'>Forgot passoword</h1>

    <input type="text" placeholder='email' id='email' value={email} className='p-2 my-4 border rounded' onChange={onChange}/>

   

    <button className='my-2 bg-red-400 hover:bg-red-500 transition w-full p-2 rounded text-white ' type='submit'>Send Email</button>
    

   </form>

    </section>
    )
}
