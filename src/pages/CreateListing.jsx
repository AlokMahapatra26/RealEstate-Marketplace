import React from 'react'
import { useState } from 'react';

export default function createListing() {


  const [formData , setFormData] = useState({
    type:"house",
    title : "",
    bedrooms : 1,
    bathrooms : 1,
    parking : false,
    furnished : false,
    address : "",
    description : "",
    offer: false,
    regularPrise : 0,
    discountedPrise : 0

  });

  const {type , title , bedrooms , bathrooms , parking , furnished , address , description , offer , regularPrise , discountedPrise} = formData;

  function onChange(){
    
  }

  return (
    <main>
      <h1 className='text-3xl text-center mt-6 font-bold'>Create Listing</h1>
      <form className='w-3/4 mx-auto flex flex-col'>
        <div className='flex w-2/3 lg:w-2/4 mx-auto mt-8'>
          <button type='button' id='type' value="flat" onChange={onChange} className={`mr-3 px-2 py-3 font-medium text-sm uppercase shadow rounded hover:shadow-md focus:shadow-md transition w-full ${type === "house" ? "bg-white" : "bg-red-500"
           }`}>
            Apartment / Flat
          </button>
          <button type='button' id='type' value="house" onChange={onChange} className={`px-2 py-3 font-medium text-sm uppercase shadow rounded hover:shadow-md focus:shadow-md transition w-full ${type === "flat" ? "bg-white" : "bg-red-500 text-white"
           }`}>
           House
          </button>
        </div>
        <input type="text" id='title' value={title} onChange={onChange} placeholder='Title..' maxLength="32" minLength="10" required className={` mt-8  mx-auto px-2 py-2 outline-none border rounded w-2/3 lg:w-2/4`}/>
        <div className='flex mt-6 w-2/3 lg:w-2/4 mx-auto justify-between items-center'>
          <p>Bedroom : </p>
            <input type="number" className='w-20 border rounded p-2' id="bedrooms" value={bedrooms} onChange={onChange} min="1" max="50" required/>
          
          <p>Bathroom : </p>
            <input type="number" className='w-20 border rounded p-2' id='bathrooms' value={bathrooms} onChange={onChange}  min="1" max="50" required/>
          
        </div>

        <div className='flex w-2/3 lg:w-2/4 mx-auto mt-8'>
          <button type='button' id='parking' value={true} onChange={onChange} className={`mr-3 px-2 py-3 font-medium text-sm uppercase shadow rounded hover:shadow-md focus:shadow-md transition w-full ${!parking ? "bg-white" : "bg-red-500"
           }`}>
            Parking Space
          </button>
          <button type='button' id='parking' value={false} onChange={onChange} className={`px-2 py-3 font-medium text-sm uppercase shadow rounded hover:shadow-md focus:shadow-md transition w-full ${parking ? "bg-white" : "bg-red-500 text-white"
           }`}>
           No Parking Space
          </button>
        </div>



          <div className='flex w-2/3 lg:w-2/4 mx-auto mt-8'>
          <button type='button' id='furnished' value={true} onChange={onChange} className={`mr-3 px-2 py-3 font-medium text-sm uppercase shadow rounded hover:shadow-md focus:shadow-md transition w-full ${!furnished ? "bg-white" : "bg-red-500"
           }`}>
            Furnished
          </button>
          <button type='button' id='furnished' value={false} onChange={onChange} className={`px-2 py-3  font-medium text-sm uppercase shadow rounded hover:shadow-md focus:shadow-md transition w-full ${furnished ? "bg-white" : "bg-red-500 text-white"
           }`}>
           UnFurnished
          </button>
          </div>

          <div className='flex w-2/3 lg:w-2/4 mx-auto mt-8'>
            <textarea name="address" id="address" value={address} placeholder='Enter Address..' className=' w-screen mx-auto px-2 py-2 outline-none border rounded  '></textarea>
          </div>
          <div className='flex w-2/3 lg:w-2/4 mx-auto mt-8'>
            <textarea name="description" id="description" value={description} placeholder='Enter Description...' className=' w-screen mx-auto px-2 py-2 outline-none border rounded  '></textarea>
          </div>

          {/* offer */}
          <div className='flex w-2/3 lg:w-2/4 mx-auto mt-8'>
          <button type='button' id='offer' value={true} onChange={onChange} className={`mr-3 px-2 py-3 font-medium text-sm uppercase shadow rounded hover:shadow-md focus:shadow-md transition w-full ${!offer? "bg-white" : "bg-red-500 text-white"
           }`}>
            Offer
          </button>
          <button type='button' id='offer' value={true} onChange={onChange} className={`px-2 py-3 font-medium text-sm uppercase shadow rounded hover:shadow-md focus:shadow-md transition w-full ${offer ? "bg-white" : "bg-red-500 text-white"
           }`}>
           No Offer
          </button>
          </div>

          <p className='text-center mt-6'>( Prices are in rupee / day )</p>
          <div className='flex mt-6 w-2/3 lg:w-2/4 mx-auto justify-between items-center'>
          <p>Regular :  </p>
            <input type="number" className='w-20 border rounded p-2' id="regularPrice" value={regularPrise} onChange={onChange} required/>
          
          <p>Discounted : </p>
            <input type="number" className='w-20 border rounded p-2' id='discountedPrice' value={discountedPrise} onChange={onChange} required={offer}/>
          </div>

          <div className='flex mt-6 w-2/3 lg:w-2/4 mx-auto border p-4'>
            <p className='mr-4'>Images:  </p>
           <input type="file" id="images" onChange={onChange} accept='.jpg , .png , .jpeg' multiple required/>
          </div>

          <div className='flex mt-6 mb-6  w-2/3 lg:w-2/4 mx-auto '>
            <input type="submit" className='bg-black text-white px-2 py-3 rounded mx-auto w-full cursor-pointer hover:shadow-lg' />
          </div>
          

          
      </form>
    </main>
  )
}
