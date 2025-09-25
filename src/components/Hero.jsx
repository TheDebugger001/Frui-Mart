import React from 'react'
import heroImg from '../assets/noback/1.png'
import heroImgCe from '../assets/noback/12.png'
import heroImgBa from '../assets/back/c.jfif'

const Hero = () => {
  return (
    <div className='w-full h-full bg-[rgb(18,18,25)] flex flex-col items-center overflow-hidden justify-evenly relative top-27'>
      <div className='w-full h-20 flex items-center justify-between'>
        <div className='w-2/12 h-full ml-30 text-2xl text-gray-300 flex items-center justify-center'>
          Premium Restaurant
        </div>
        <div className='w-2/12 h-full flex items-center justify-center mr-20'>
          <button className='w-2/5 h-8/12 rounded bg-orange-500 text-gray-300 font-semibold hover:bg-transparent hover:text-orange-500 hover:border-2 hover:border-orange-500 hover:transition hover:duration-150 ease-in transition duration-150'> Sign In </button>
        </div>
      </div>

      <div className='w-full h-9/11 flex items-center'>
        <div className='w-2/5 h-11/12 ml-36'>
          <p className='font-extrabold text-8xl w-1/2 text-gray-300'>Anida Dedelay</p>
          <p className='font-medium text-2xl text-gray-300 w-3/4 mt-14'>BEST HEALTH SALAD SERVER IN OUR RESTAURANT</p>
          <button className='w-2/7 h-14 rounded-md relative mt-10 text-gray-300 text-lg font-semibold bg-orange-500 hover:bg-transparent hover:text-orange-500 hover:border-2 hover:border-orange-500 hover:transition hover:duration-150 ease-in transition duration-150'> Learn More </button>
        </div>
        <img src={heroImgCe} alt="" className='w-[60em] relative right-60 -top-10' />
      </div>
    </div>
  )
}

export default Hero