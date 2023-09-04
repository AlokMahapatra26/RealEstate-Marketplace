import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';
import OAuth from '../components/OAuth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {toast} from 'react-toastify';

export default function Signin() {

  //STATE
  const [formData , setFormData] = useState({
    email : '',
    password : ''
  })

  //NAVIGATE
  const navigate = useNavigate();

  //DESTRUCTURING
  const {email , password} = formData;

  //ONCHNAGE FUNC
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
      const auth = getAuth()
      const userCredential = await signInWithEmailAndPassword(auth , email , password)
      if(userCredential.user){
        navigate("/")
      }
      toast.success("Signin Successful");
    }
    catch(error){
      toast.error("Something went wrong")
    }
   }

  return (
    <section className='flex-1 h-[calc(100vh-3rem)]  flex justify-center items-center' >
   
   <form onSubmit={onSubmit} className='bg-white flex flex-col items-center justify-center border p-4 rounded'>
    <h1 className='text-2xl m-2'>Sign in</h1>

    <input type="text" placeholder='email' id='email' value={email} className='p-2 my-4 border rounded' onChange={onChange}/>

    <input type="password" placeholder='password'id='password' value={password} className='p-2 my-4 border rounded' onChange={onChange}/>

    <div className='flex  w-full justify-between  my-2'>
      <p className='text-red-500 cursor-pointer underline' onClick={()=>{
        navigate("/forgot-password")
      }}>Forgot password</p>
      <p className='cursor-pointer underline' onClick={()=>{
        navigate('/sign-up')
      }}>Sign up</p>
    </div>
    <button type="submit"  className='my-2 bg-red-400 hover:bg-red-500 transition w-full p-2 rounded text-white '>Login</button>
    <OAuth/>

   </form>

    </section>
    )
}
