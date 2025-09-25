import React from 'react'
import logo from '/whole_logo.png'
import { FaUser , FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='w-full h-27 bg-gray-900 flex gap-70 items-center justify-evenly fixed z-100'>
      <div className='w-1/5 h-full flex items-center justify-center'>
        <img src={logo} alt="" className='w-2/5' />
      </div>
      <div className='w-4/7 h-full flex items-center justify-center'>
        <div className='w-8/10 h-full 400 flex items-center gap-2'>
          <div className='w-30 h-9/14 flex items-center justify-center text-gray-200 font-semibold text-lg'> Home </div>
          <div className='w-30 h-9/14 flex items-center justify-center text-gray-200 font-semibold text-lg'> Menu  </div>
          <div className='w-30 h-9/14 flex items-center justify-center text-gray-200 font-semibold text-lg'> Pages </div>
          <div className='w-30 h-9/14 flex items-center justify-center text-gray-200 font-semibold text-lg'> Blogs </div>
          <div className='w-30 h-9/14 flex items-center justify-center text-gray-200 font-semibold text-lg'> Contact Us </div>
        </div>
        <div className='w-2/10 h-9/14 flex items-center justify-evenly relative left-5'>
          <div className='w-15 h-15 bg-gray-600/40 flex items-center justify-center'>
            <FaUser className='text-gray-300 text-2xl'/>
          </div>
          <div className='w-15 h-15 bg-gray-600/40 flex items-center justify-center'>
            <FaShoppingCart className='text-gray-300 text-2xl'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar