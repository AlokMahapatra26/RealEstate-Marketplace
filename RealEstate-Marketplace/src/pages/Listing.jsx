import { doc } from 'firebase/firestore';
import { db } from '../firebase';
import { getDoc } from 'firebase/firestore';
import React from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import Spinner from '../components/Spinner';
import { FaMapMarkerAlt , FaBed , FaBath , FaParking , FaChair} from "react-icons/fa";

export default function Listing() {

    const params = useParams();
    const [listing , setListing] = useState(true);
    const [loading , setLoading] = useState(true);
    
    useEffect(()=>{
        async function fetchListing(){
            const docRef = doc(db , "listings" , params.listingId);
            const docSnap  = await getDoc(docRef)
            if(docSnap.exists()){
                setListing(docSnap.data())
                setLoading(false);
                console.log(listing)
            }
        }
        fetchListing();
        
    },[params.listingId])

    if(loading){
        return <Spinner/>
    }

  return (
    <main className=''>
        <div className='flex flex-col md:flex-row max-w-6xl lg:mx-auto m-4 p-8 rounded-lg border-3 shadow-lg bg-white'>
            
            <div className=' w-full  ' >
                
                
                <p className='text-xl  mb-3 font-semibold text-gray-700'>{listing.title} -  	₹ {listing.offer ? (listing.actualPrice , listing.discountedPrice) : listing.totalAmount} {listing.type === "rent" ? "/ months" : " " }</p>

                {listing.offer ? (<div className='flex'>
                <p>Actual Price : </p>
                <p  className='line-through'> ₹ {listing.actualPrice}</p>
                </div>) : ""}



                <p className='flex items-center mt-6 mb-3 '>
                     
                    <FaMapMarkerAlt className='text-red-600 mr-2 text-2xl mb-4'/>
                    {listing.address}
                </p>

                <div className=' flex items-center'>
                    
                    <p className=' p-2 bg-green-500 text-white rounded shadow-md'> {listing.type} </p>

                   {listing.offer? ( <p className=' ml-2 p-2 bg-red-500 text-white rounded shadow-md'>  {listing.offer? ( `${+listing.actualPrice - +listing.discountedPrice}  Discount 🤩 `)  : ""} 
                    </p>) : ""}


                </div>

                <p className="mt-4">Description - <span className='opacity-70 '>{listing.description}</span></p>

                <ul className='mt-4 flex items-center space-x-6 text-sm'>
                    <li>
                    <FaBed className='text-xl'/>
                        {+listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : " 1 Bed" }</li>
                    <li>
                    <FaBath className='text-xl'/>                        
                        {+listing.bathrooms > 1 ? `${listing.bathrooms} Baths` : " 1 Bath" }</li>

                        <li>
                    <FaParking className='text-xl'/>                        
                        {listing.parking ? "Parking" : "No Parking" }</li>
                    <li>   
                    <FaChair className='text-xl'/>                        
                        {listing.furnished ? "Unfurnished" : ""}</li>      
                </ul>

                <h2 className='text-xl font-semibold text-gray-700 mt-8'>Images</h2>

                <div className='img-board mt-8'>
                    <img src={listing.imgUrls[0]} alt="" className='adsImages' />
                    <img src={listing.imgUrls[1]} alt="" className='adsImages'/>
                    <img src={listing.imgUrls[2]} alt="" className='adsImages'/>
                    <img src={listing.imgUrls[3]} alt="" className='adsImages'/>
                    <img src={listing.imgUrls[4]} alt="" className='adsImages'/>
                    <img src={listing.imgUrls[5]} alt="" className='adsImages'/>
                
               
                    
                </div>
                
               

            </div>


            
        </div>
       
    </main>
  )
}
