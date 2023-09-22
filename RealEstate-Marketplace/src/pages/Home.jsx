import React, { useState } from 'react'
import { useEffect } from 'react';
import {collection , query , orderBy , limit , getDocs , where} from "firebase/firestore"
import {db} from "../firebase";
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import ListingItem from '../components/ListingItem';

export default function Home() {
 const [listings , setListings] = useState(null);
const [loading , setLoading] = useState(true)

    //Offers
    const [offerListings , setOfferListings] = useState(null);

  useEffect(() => {
    async function fetchListings(){
     try{
      const listingsRef = collection(db , "listings");
      const q = query(listingsRef , where("offer" , "==" , true) , orderBy("timestamp" , "desc"), limit(4));
      const querySnap = await getDocs(q);
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setOfferListings(listings);
      setLoading(false);
      console.log(listings)
     }catch(error){
      console.log(error)
     }
    }
    fetchListings();
  } , [])

  //Places for rent
  const [rentListings , setRentListings] = useState(null);

  useEffect(() => {
    async function fetchListings(){
     try{
      const listingsRef = collection(db , "listings");
      const q = query(listingsRef , where("type" , "==" , "rent") , orderBy("timestamp" , "desc"), limit(4));
      const querySnap = await getDocs(q);
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setRentListings(listings);
      setLoading(false);
      console.log(listings)
     }catch(error){
      console.log(error)
     }
    }
    fetchListings();
  } , [])

  //Offers
  const [sellListings , setSellListings] = useState(null);

  useEffect(() => {
    async function fetchListings(){
     try{
      const listingsRef = collection(db , "listings");
      const q = query(listingsRef , where("type" , "==" , "sell") , orderBy("timestamp" , "desc"), limit(4));
      const querySnap = await getDocs(q);
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setSellListings(listings);
      setLoading(false);
      console.log(listings)
     }catch(error){
      console.log(error)
     }
    }
    fetchListings();
  } , [])

  if(loading) {
    return <Spinner />
  }

  // if(listings.length === 0){
  //   return <></>
  // }

  return (
    <div>
      <div className='max-w-6xl mx-auto pt-4 space-y-6'>
        {offerListings && offerListings.length > 0 && (
          <div className='m-2 mb-6'>
            <h2 className='px-3 text-2xl mt-6 font-semibold'>Recent Offer</h2>
            <Link to="/offers">
              <p className='px-3 text-sm text-blue-600 hover:text-blur-800 transition '>Show more offers</p>
            </Link>
            <ul className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {offerListings.map((listing)=>(
                <ListingItem key={listing.id} listing={listing.data} id={listing.id}/>
              ))}
            </ul>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className='m-2 mb-6'>
            <h2 className='px-3 text-2xl mt-6 font-semibold'>Property on Rent</h2>
            <Link to="/category/rent">
              <p className='px-3 text-sm text-blue-600 hover:text-blur-800 transition '>Show more property on rent</p>
            </Link>
            <ul className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {rentListings.map((listing)=>(
                <ListingItem key={listing.id} listing={listing.data} id={listing.id}/>
              ))}
            </ul>
          </div>
        )}
        {sellListings && sellListings.length > 0 && (
          <div className='m-2 mb-6'>
            <h2 className='px-3 text-2xl mt-6 font-semibold'>Property on Sale</h2>
            <Link to="/category/sell">
              <p className='px-3 text-sm text-blue-600 hover:text-blur-800 transition '>Show more property on sale</p>
            </Link>
            <ul className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {sellListings.map((listing)=>(
                <ListingItem key={listing.id} listing={listing.data} id={listing.id}/>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
