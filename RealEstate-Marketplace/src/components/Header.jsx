import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { useNavigate } from 'react-router';

export default function Header() {

    //USESTATE

    const [pageState , setPageState] = useState("Sign in");

    const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(()=>{
        onAuthStateChanged(auth , (user)=>{
            if(user){
                setPageState("Profile");
            }else{
                setPageState("Sign in")
            }
        })
    },[auth])

    //PATH MATCHING FUNC
    function pathMatchRoute(route){
        if(route === location.pathname){
            return true;
        }
    }

  return (
    <div className='bg-white border-b shadow-sm sticky top-0 x-50 '>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <h2 className='cursor-pointer' onClick={()=>{navigate("/")}}>Stay</h2>
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li className={` cursor-pointer py-3 text-sm font-semibold border-b-[3px]   ${pathMatchRoute("/") && "border-b-red-500"}`}  onClick={()=>navigate("/")}>Home</li>

                    <li className={` cursor-pointer py-3 text-sm font-semibold border-b-[3px]   ${pathMatchRoute("/offers") && "border-b-red-500"}`}  onClick={()=>navigate("/offers")}>Offers</li>

                    <li className={` cursor-pointer py-3 text-sm font-semibold border-b-[3px]   ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&"border-b-red-500"}`}  onClick={()=>navigate("/profile")}>{pageState}</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
