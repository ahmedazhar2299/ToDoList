import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full'>
      <ul className='flex gap-28 p-5 pl-10 font-bold bg-slate-800 text-white'>
        <li className='cursor-pointer hover:text-green-500'>TO DO LIST</li>
        <li className='cursor-pointer hover:text-green-500'>Home</li>
      </ul>
    </div>
  )
}
