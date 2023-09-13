import React, { useState } from 'react'

export default function CreateListing() {

  //USE STATE
  const [formData , setFormData]  = useState({
    type : 'sell',
    title : '',
    bedrooms : '',
    bathrooms : '',
    furnished : true,
    parking : false,
    description : '',
    address : '',
    offer : false,
    actualPrice : '',
    discountedPrise : '',
    totalAmount : ''
  });

  //DESTRUCTURING
  const {type , title , bedrooms , bathrooms , parking , furnished , address , description , offer , actualPrice , discountedPrise , totalAmount} = formData;

  function onChange(){
    type : !type
  }

  return (
    <main className='max-w-md px-2 mx-auto'>
      <h1 className='text-3xl text-center mt-6 font-bold'>Create a Lisiting</h1>
      <form className='mt-8'>

        <div className='flex mt-4 '>
          <button type='button' id='type' value="sale" onClick={onChange} className={`px-7 py-3 mr-2 font-medium text-sm uppercase rounded  transition w-full shadow hover:shadow-md text-white ${type === 'rent' ? "bg-white text-black" : "bg-red-500" }`}>SELL</button>
          <button type='button' id='type' value="sale" onClick={onChange} className={`px-7 py-3 ml-2 font-medium text-sm uppercase  rounded  f transition w-full shadow hover:shadow-md text-white ${type === 'sell' ? "bg-white text-black" : "bg-red-500" }`}>RENT</button>
        </div>

        <input type="text" placeholder='Title...' id="title" value={title} className='px-7 py-3 mt-6 rounded border w-full outline-none' onChange={onChange} maxLength="32" minLength="10" required/>

        <div className='flex mt-4'>
          
            
            <input type="number" placeholder='Bedrooms' id='bedrooms'  value={bedrooms}className='w-full mr-2 py-3 px-7 border rounded outline-none' onChange={onChange} min="1" max="50" required/>
          
          
            
            <input type="number" placeholder="Bathrooms" id='bedrooms' value={bathrooms} className='w-full ml-2 px-7 py-3 border rounded outline-none' onChange={onChange} min="1" max="50" required/>
          
        </div>

        <div className='flex mt-4 '>
          <button type='button' id='furnished' value={true} onClick={onChange} className={`px-7 py-3 mr-2 font-medium text-sm uppercase rounded  transition w-full shadow hover:shadow-md text-white ${!furnished ? "bg-white text-black" : "bg-red-500" }`}>Furnished</button>
          <button type='button' id='furnished' value={false} onClick={onChange} className={`px-7 py-3 ml-2 font-medium text-sm uppercase  rounded  transition w-full shadow hover:shadow-md text-white ${ furnished ? "bg-white text-black" : "bg-red-500" }`}>unfurnished</button>
        </div>

        <div className='flex mt-4 '>
          <button type='button' id='parking' value={true} onClick={onChange} className={`px-7 py-3 mr-2 font-medium text-sm uppercase rounded  transition w-full shadow hover:shadow-md text-white ${!parking ? "bg-white text-black" : "bg-red-500" }`}>Parking space</button>
          <button type='button' id='parking' value={true} onClick={onChange} className={`px-7 py-3 ml-2 font-medium text-sm uppercase border rounded  transition w-full shadow hover:shadow-md text-white ${parking ? "bg-white text-black" : "bg-red-500" }`}>No parking space</button>
        </div>

        <textarea type="text" placeholder='Description' id="description" value={description} className='px-7 py-3 mt-6 rounded border w-full outline-none' onChange={onChange} required/>

        <textarea type="text" placeholder='Address' id="address" value={address} className='px-7 py-3 mt-6 rounded border w-full outline-none' onChange={onChange} required/>

        <div className='flex mt-4 '>
          <button type='button' id='offer' value={true} onClick={onChange} className={`px-7 py-3 mr-2 font-medium text-sm uppercase rounded  transition w-full shadow hover:shadow-md text-white ${!offer ? "bg-white text-black" : "bg-red-500" }`}>Offer</button>
          <button type='button' id='offer' value={false} onClick={onChange} className={`px-7 py-3 ml-2 font-medium text-sm uppercase  rounded  transition w-full shadow hover:shadow-md text-white ${ offer ? "bg-white text-black" : "bg-red-500" }`}>No Offer</button>
        </div>
        
        { offer && (
          <div className='flex mt-4'>
          
            
          <input type="number" placeholder='Actual price in &#8377;' id='actualPrice'  value={actualPrice} className='w-full mr-2 py-3 px-4 border rounded outline-none' onChange={onChange}  />
        
          { type === 'rent' && (
            <p className='text-sm'>&#8377; / months</p>
          )
          }
          
          <input type="number" placeholder="Discounted price" id='discountedPrice' value={discountedPrise} className='w-full ml-2 px-4 py-3 border rounded outline-none' onChange={onChange} />

        
         </div>
        )
        
        }

        { !offer && (
          <input type="number" placeholder={(type === 'sell' ? "Total Amount " : 'Amount / months' ) } id="totalAmount" value={totalAmount} className='px-7 py-3 mt-6 rounded border w-full outline-none' onChange={onChange} required/>
        )
        }

        <div className='mt-6'>
          <input type="file" id='images' onChange={onChange} accept='.jpg , .png , .jpeg' multiple required/>
          <p className='text-sm mt-2 text-red-500'>Note : the first image will be the cover and maximum 6 images are allowed</p>
        </div>

        <button type='button' id='type' value="sale" onClick={onChange} className={`px-7 py-3 mt-6 font-medium text-sm uppercase rounded  transition w-full shadow bg-gray-900 hover:shadow-md text-white`}>ADD</button>

      </form>
    </main>
  )
}
