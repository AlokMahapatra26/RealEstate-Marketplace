import React from 'react'
import { toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { db } from '../firebase';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';

function OAuth() {

  const navigate = useNavigate();

  async function onGoogleClick(){
    try{
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      const result = await signInWithPopup(auth , provider)
      const user = result.user
      
      //check for the user exist
      const docRef = doc(db , "users" , user.uid)
      const docSnap = await getDoc(docRef)

      if(!docSnap.exists()){
        await setDoc(docRef , {
          fullname : user.displayName,
          email: user.email,
          timestamp : serverTimestamp(),
        });
        
      }

      navigate("/");
     
    }catch(error){
      toast.error("Something went wrong")
    }
  }

  return (
    <button type="button" onClick={onGoogleClick} className='w-full mx-auto bg-blue-500  p-2 shadow-md  text-white rounded-lg hover:bg-blue-600 transition duration-150 ease-in-out hover:shadow-lg'>
        Continue with Google
    </button>
  )
}

export default OAuth