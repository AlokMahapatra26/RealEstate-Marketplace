import React from 'react'

export default function Header() {
  return (
    <>
    <header className='flex justify-between items-center px-4 bg-green-400'>
        <div>
            <h2 className='text-xl'>Vintage Vault</h2>
        </div>
        <div>
            <input type="text" placeholder='search item' className='p-1 m-2 border rounded'/>
        </div>
        <div>
           <p>Sign in</p>
        </div>
    </header>
    </>
  )
}
