/* eslint-disable no-unused-vars */
import React from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import Carousels from '../carousel/index'


const Advert = () => {
  return (
    <section className='p-5'>
        <div className="container flex md:flex-row flex-col md:h-56 h-60 justify-between gap-2">
          {/* AdvertCarousel */}
          <div className="md:w-3/4 w-full h-full text-white">
            <Carousels className="h-full"/>
          </div>
          {/* AdvertNew */} 
          <div className="cursor-pointer bg-orange-400  rounded-md text-white flex flex-col justify-center items-center md:gap-4 gap-1 md:w-1/4 w-full p-2">
            <p className='md:text-xl text-sm font-bold text-center'>Got something to sell?</p>
            <FaCirclePlus className='md:h-32 h-10 md:w-32 w-10'/>
            <p className='md:text-xl text-sm font-bold text-center'>Post an advert for free!</p>
          </div>
        </div>
    </section>
  )
}

export default Advert