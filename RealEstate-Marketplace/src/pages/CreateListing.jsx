import React, { useState } from 'react'

export default function CreateListing() {

  //USE STATE
  const [formData , setFormData]  = useState({
    type : 'sell',
    title : '',
    bedrooms : '',
    bathrooms : '',
    furnished : false,
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

  function onChange(e){
    let boolean = null;

    if(e.target.value === "true"){
      boolean = true;
    }

    if(e.target.value === "false"){
      boolean = false;
    }

    if(e.target.files){
      setFormData((prevState)=>({
        ...prevState,
        images : e.target.files
      }))
    }

    if(!e.target.files){
      setFormData((prevState)=>({
        ...prevState,
        [e.target.id] : boolean ?? e.target.value,
      }))
    }
  }

  return (
    <main className='max-w-md px-2 mx-auto'>
      <h1 className='text-3xl text-center mt-6 font-bold'>Create a Lisiting</h1>
      <form className='mt-8'>

        <div className='flex mt-4 '>
          <button type='button' id='type' value="sell" onClick={onChange} className={`px-7 py-3 mr-2 font-medium text-sm uppercase rounded  transition w-full shadow  ${type === 'rent' ? "bg-white " : "bg-red-500 text-white" }`}>SELL</button>
          <button type='button' id='type' value="rent" onClick={onChange} className={`px-7 py-3 ml-2 font-medium text-sm uppercase  rounded  f transition w-full shadow  ${type === 'sell' ? "bg-white " : "bg-red-500 text-white" }`}>RENT</button>
        </div>

        <input type="text" placeholder='Title...' id="title" value={title} className='px-7 py-3 mt-6 rounded border w-full outline-none' onChange={onChange} maxLength="32" minLength="10" required/>

        <div className='flex mt-4'>
          
            
            <input type="number" placeholder='Bedrooms' id='bedrooms'  value={bedrooms} className='w-full mr-2 py-3 px-7 border rounded outline-none' onChange={onChange} min="1" max="50" required/>
          
          
            
            <input type="number" placeholder="Bathrooms" id='bathrooms' value={bathrooms} className='w-full ml-2 px-7 py-3 border rounded outline-none' onChange={onChange} min="1" max="50" required/>
          
        </div>

        <div className='flex mt-4 '>
          <button type='button' id='furnished' value={true} onClick={onChange} className={`px-7 py-3 mr-2  font-medium text-sm uppercase rounded  transition w-full shadow hover:shadow-md ${!furnished ? "text-black"  : "bg-red-500 text-white" }`}>Furnished</button>
          <button type='button' id='furnished' value={false} onClick={onChange} className={`px-7 py-3 ml-2 font-medium text-sm uppercase  rounded  transition w-full shadow hover:shadow-md ${ furnished ? " text-black" : "bg-red-500 text-white" }`}>unfurnished</button>
        </div>

        <div className='flex mt-4 '>
          <button type='button' id='parking' value={true} onClick={onChange} className={`px-7 py-3 mr-2 font-medium text-sm uppercase rounded  transition w-full shadow hover:shadow-md  ${!parking ? " text-black" : "bg-red-500 text-white" }`}>Parking space</button>
          <button type='button' id='parking' value={false} onClick={onChange} className={`px-7 py-3 ml-2 font-medium text-sm uppercase  rounded  transition w-full shadow hover:shadow-md  ${parking ? "text-black" : "bg-red-500 text-white" }`}>No parking space</button>
        </div>

        <textarea type="text" placeholder='Description' id="description" value={description} className='px-7 py-3 mt-6 rounded border w-full outline-none' onChange={onChange} required/>

        <textarea type="text" placeholder='Address' id="address" value={address} className='px-7 py-3 mt-6 rounded border w-full outline-none' onChange={onChange} required/>

        <div className='flex mt-4 '>
          <button type='button' id='offer' value={true} onClick={onChange} className={`px-7 py-3 mr-2 font-medium text-sm uppercase rounded  transition w-full shadow hover:shadow-md  ${!offer ? " text-black" : "bg-red-500 text-white" }`}>Offer</button>
          <button type='button' id='offer' value={false} onClick={onChange} className={`px-7 py-3 ml-2 font-medium text-sm uppercase  rounded  transition w-full shadow hover:shadow-md  ${ offer ? " text-black" : "bg-red-500 text-white" }`}>No Offer</button>
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
