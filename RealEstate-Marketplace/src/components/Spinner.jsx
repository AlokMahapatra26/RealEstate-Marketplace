import React from 'react'
import spinner from "../assets/svg/spinner.svg";

export default function Spinner() {
  return (
    <div>
        <div className='h-screen flex justify-center items-center'>
            <img src={spinner} alt="loading..." className='h-24' />
        </div>
    </div>
  )
}
