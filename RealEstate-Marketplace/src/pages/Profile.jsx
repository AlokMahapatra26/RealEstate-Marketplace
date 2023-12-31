import { getAuth } from 'firebase/auth';
import { orderBy, query , collection , where , doc , updateDoc , getDocs , deleteDoc} from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';
import {Link} from  'react-router-dom'
import { db } from '../firebase';
import ListingItem from '../components/ListingItem';


export default function Profile() {

  const navigate = useNavigate();

  //FIREBASE AUTH
  const auth = getAuth()

  //FORM STATE
  const [formData , setFormData] = useState({
    name : auth.currentUser.displayName,
    email : auth.currentUser.email
  })
  const [listings , setListings] = useState(null);
  const [loading , setLoading] = useState(true);

  //LOGOUT FUNTION
  function onLogout(){
    auth.signOut();
    navigate('/sign-in')
  }

  const {name , email} = formData;


  //FETCHING LISTING DATA FROM DATABASE
  useEffect(()=>{
    async function fetchUserListings(){
      
      const listingRef = collection(db , "listings");
      const q = query(listingRef , where("userRef" , "==" , auth.currentUser.uid), orderBy("timestamp", "desc"));
      const querySnap = await getDocs(q);
      let listings = [];
      querySnap.forEach((doc)=>{
        return listings.push({
          id: doc.id,
          data : doc.data(),
        })
      })
      setListings(listings);
      setLoading(false);
    }
    fetchUserListings();
  },[auth.currentUser.uid])       

  async function onDelete(listingID){
    if(window.confirm("Are you sure?")){
      await deleteDoc(doc(db , "listings" , listingID))
      const updatedListing = listings.filter(
        (listing) => listing.id != listingID
      )
      setListings(updatedListing)
      toast.success("Deleted Sucessfully")
    }
  }

  function onEdit(listingID){
    navigate(`/edit-listing/${listingID}`)
    
  }

  
  return (
    <>
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold '>Profile</h1>
      <div className=' flex flex-col justify-center'>
        
        
          <div className=' flex flex-col justify-center items-center mt-4'>
          <input type="text" id='name' value={name} disabled className='p-2'/><br />
          
          
          <input type="email" id='email' value={email} disabled
          className='p-2'/>
          
          
         
            <button type='submit' className=' border hover:bg-gray-200 transition p-2 rounded mt-4'>
              <Link to={"/create-listing"}>
              Add Your Property on Sale or Rent
              </Link>
              </button>

            <p onClick={onLogout} className='cursor-pointer border inline  rounded  hover:bg-red-500 hover:text-white transition p-2 mt-4'>Sign out</p>
          
            </div>
          </div>
    </section>
    <div className=' max-w-6xl px-3 mt-6 mx-auto'>
      {!loading && listings.length > 0 && (
        <>
        <h2 className='text-2xl text-center font-semibold'>My Listing</h2>
          <ul className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl-grid-cols-5 mt-6 mb-6'>
            {listings.map((listing)=>(
              <ListingItem id={listing.id} key={listing.id} listing={listing.data} 
              onDelete={()=>onDelete(listing.id)}
              onEdit={()=>onEdit(listing.id)}
              />
            ))}
          </ul>
        </>
      )}
    </div>
    </>
  )
}


