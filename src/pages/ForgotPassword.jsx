import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';




export default function ForgotPassword() {

  const [fromData , setFormData] = useState({
    
    email : ""
  });

  const { email} = fromData;

  function onChange(e){
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id] : e.target.value,
    }));
  }

  async function onSubmit(e){
    e.preventDefault();

    try{
      const auth = getAuth()
      await sendPasswordResetEmail(auth , email)
      toast.success("Email was sent");
    }catch(error){
      toast.error("could not sent rest password");
    }
  }

 
  return (
    
    <section>
      <div className='mt-40'>
      <h1 className='text-3xl text-center font-bold p-6'>Forgot Password</h1>
      <div className='flex flex-col lg:w-1/4 md:w-2/4 w-3/4 mx-auto item-center justify-center mt-4'>
      
        <form onSubmit={onSubmit}>
          <div className='flex flex-col'>
          <input type="email"
           placeholder='Email'
           id="email" 
           value={email} 
           onChange={onChange}
           className='border my-2 p-2  outline-none rounded-lg shadow' 
           
           />
         
          </div>
          
          <button type='submit' className='w-full mx-auto bg-rose-500 mt-8 p-2 shadow-md  text-white rounded-lg hover:bg-rose-600 transition duration-150 ease-in-out hover:shadow-lg'>Send Reset Mail</button>

            
          
         
        </form>
      
      </div>
      </div>
    </section>
  )
}
