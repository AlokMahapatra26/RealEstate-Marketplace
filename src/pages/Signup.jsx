import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';


export default function Signup() {

  const [fromData , setFormData] = useState({
    fullname : "",
    email : "",
    password : "",
  });

  const {fullname ,email , password} = fromData;

  function onChange(e){
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id] : e.target.value,
    }));
  }

  console.log(email);
  console.log(password);

  return (
    <section className=''>
      <div className='mt-40'>
      <h1 className='text-3xl text-center font-bold p-6'>Sign Up</h1>
      <div className='flex flex-col lg:w-1/4 md:w-2/4 w-3/4 mx-auto item-center justify-center mt-4'>
      
        <form >
          <div className='flex flex-col'>
          <input type="text"
           placeholder='Full Name'
           id="fullname" 
           value={fullname} 
           onChange={onChange}
           className='border my-4 p-2  outline-none rounded-lg shadow' 
           />
          <input type="email"
           placeholder='Email'
           id="email" 
           value={email} 
           onChange={onChange}
           className='border my-4 p-2  outline-none rounded-lg shadow' 
           
           />
          <input type="password" 
           placeholder='Password'
           id="password" 
           value={password} 
           onChange={onChange}
           className='border my-4 p-2  outline-none rounded-lg shadow'
           />
          </div>
          <div className='flex flex-col mt-6 '>
            <p className='text-md opacity-50'>
              Have an account? 
              <Link to="/sign-in" className='text-sky-600 text-md ml-2 '>Sign in</Link>
            </p>
            <p className='text-sm text-red-500'>
              <Link to="/forgot-password">Forgot password?</Link>
            </p>
           
          </div>
          <button type='submit' className='w-full mx-auto bg-rose-500 mt-8 p-2 shadow-md  text-white rounded-lg hover:bg-rose-600 transition duration-150 ease-in-out hover:shadow-lg'>Sign up</button>
          <div className='flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
            <p className='text-center font-semibold mx-4'>OR</p>
            </div>
          <OAuth/>
         
        </form>
      
      </div>
      </div>
    </section>
  )
}
