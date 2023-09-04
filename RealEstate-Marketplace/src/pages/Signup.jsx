import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import OAuth from '../components/OAuth';
import {getAuth , createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import {doc , serverTimestamp , setDoc} from 'firebase/firestore'
import { db } from '../firebase';
import {toast} from "react-toastify";

export default function Signup() {


  const [formData , setFormData] = useState({
    name : '',
    email : '',
    password : ''
  })

  //NAVIGATOR
  const navigate = useNavigate();

  const {name , email , password} = formData;

   const onChange = (e) =>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id] : e.target.value,
    }))
   }

   //FIREBASE_AUTH_CODE
   async function onSubmit(e){
    e.preventDefault();
    
      try{
        const auth = getAuth()
        const userCredential = await createUserWithEmailAndPassword(auth , email , password);

        updateProfile(auth.currentUser , {
          displayName : name,
        })

        const user = userCredential.user;
        const formDataCopy = {...formData};
        delete formDataCopy.password;
        formDataCopy.timestamp = serverTimestamp();

        await setDoc(doc(db,"users" , user.uid) , formDataCopy);
        navigate('/');
        toast.success("Signup successfull")
        
      }catch(error){
        toast.error("Something went wrong");
        
      }
   }

  return (
    <section className='flex-1 h-[calc(100vh-3rem)]  flex justify-center items-center' >
   
   <form className='bg-white flex flex-col items-center justify-center border p-4 rounded' onSubmit={onSubmit}>
    <h1 className='text-2xl m-2'>Create Your Account</h1>

    <input type="text" placeholder='Name' id='name' value={name} className='p-2 my-4 border rounded' onChange={onChange}/>

    <input type="text" placeholder='email' id='email' value={email} className='p-2 my-4 border rounded' onChange={onChange}/>

    <input type="password" placeholder='password'id='password' value={password} className='p-2 my-4 border rounded' onChange={onChange}/>

    <div className='flex  w-full justify-between  my-2'>
      
      <p className='cursor-pointer underline m-auto' onClick={()=>{
        navigate('/sign-in')
      }}>Sign in instead</p>
    </div>
    
    <button type="submit" className='my-2 bg-red-400 hover:bg-red-500 transition w-full p-2 rounded text-white '>Create</button>
    <OAuth/>
   </form>

    </section>
    )
}
