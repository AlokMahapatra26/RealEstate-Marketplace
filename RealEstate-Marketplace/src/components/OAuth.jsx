import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";


export default function OAuth() {

  const navigate = useNavigate();

  async function onGoogleClick(){
    console.log("Google Clicked")
    try{
      const auth = getAuth()
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth , provider);
      const user = result.user;

      //check for user
      const docRef = doc(db , "users" , user.uid)
      const docSnap = await getDoc(docRef)

      if(!docSnap.exists()){
        await setDoc(docRef ,{
          name : user.displayName,
          email : user.email,
          timestamp : serverTimestamp(),
        }
        )
      }
      navigate('/');
      toast.success("Signup successfull")
    }
    catch(error){
      console.log("Couldn't authorize by google")
      toast.error("something went wrong")
    }
  }

  return (
    <>
    <button type="button" onClick={onGoogleClick} className='my-2 bg-blue-400 hover:bg-blue-500 transition w-full p-2 rounded text-white '>Continue with Google</button>
    </>
  )
}
