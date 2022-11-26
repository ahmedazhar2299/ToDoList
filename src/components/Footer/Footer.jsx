import React from 'react'

export default function Footer({length}) {
  return (
    <div  className={`w-full flex bottom-0 ${length<5?"absolute":"relative"} top-auto justify-between px-10 py-5 bg-slate-800 text-white text-sm mt-4`}>
      <div>
        <p>Copyright © 2022 | Assignment 3 WEB 7A</p>
      </div>
      <div className='gap-4 flex'>
        <i className="fa-brands fa-facebook-f cursor-pointer"></i>
        <i className="fa-brands fa-github cursor-pointer"></i>
        <i className="fa-brands fa-twitter cursor-pointer"></i>
        <i className="fa-brands fa-instagram cursor-pointer" ></i>
        <i></i>
      </div>
    </div>
  )
}
