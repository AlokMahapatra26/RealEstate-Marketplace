import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';

export default function ForgotPassword() {

  const [formData , setFormData] = useState({
    email : '',
  })

  //NAVIGATE
  const navigate = useNavigate();

  const {email} = formData;

   const onChange = (e) =>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id] : e.target.value,
    }))
   }

  return (
    <section className='flex-1 h-[calc(100vh-3rem)]  flex justify-center items-center' >
   
   <form className='bg-white flex flex-col items-center justify-center border p-4 rounded'>
    <h1 className='text-2xl m-2'>Forgot passoword</h1>

    <input type="text" placeholder='email' id='email' value={email} className='p-2 my-4 border rounded' onChange={onChange}/>

   

    <button className='my-2 bg-red-400 hover:bg-red-500 transition w-full p-2 rounded text-white '>Send Email</button>
    

   </form>

    </section>
    )
}
