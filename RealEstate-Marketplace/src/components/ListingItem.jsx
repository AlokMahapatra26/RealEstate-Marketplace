import React from 'react'
import { Link } from 'react-router-dom'
import {MdLocationOn} from "react-icons/md"



export default function ListingItem({listing , id}) {
  return <li className='bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md transition m-[10px] overflow-hidden'>
    <Link to={`/category/${listing.type}/${id}`} className='contents'>
        <img src={listing.imgUrls[0]} alt="" className='h-[170px] w-full object-cover hover:scale-105 transition' loading='lazy'/>
        <div className='w-full p-[10px]'>
            <div className='flex items-center space-x-1'>
            <MdLocationOn className='h-4 w-4 text-red-600'/>
            <p className='font-semibold text-sm mb-[2px] text-black truncate'>{listing.address}</p>
            </div>
            <p className='font-bold mt-2 text-lg m-0 truncate '>{listing.title}</p>
            <p >₹{listing.offer ? listing.discountedPrice : listing.regularPrice}
            {listing.type === "rent" && "/ month"}
            </p>
            <div className='flex items-center mt-[10px] space-x-3 '>
                <div className='flex items-center space-x-1' >
                    <p className='text-xs font-bold'>{listing.bedrooms > 1 ? `${listing.bedrooms} Bedrooms` : "1 Bedroom"}</p>
                </div>
                <div>
                    <p className='text-xs font-bold'>{listing.bathrooms > 1 ? `${listing.bathrooms} Bathrooms` : "1 Bathrooms"}</p>
                </div>
            </div>
            
        </div>
      
    </Link>
  </li>
}
