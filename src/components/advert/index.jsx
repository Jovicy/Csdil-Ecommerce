/* eslint-disable no-unused-vars */
import React from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import Carousels from '../carousel/index'


const Advert = () => {
  return (
    <section className='p-5'>
        <div className="container flex h-56 justify-between gap-2">
            {/* AvertCarousel */}
            <div className="w-3/4 h-full text-white">
                <Carousels className="h-full"/>
            </div>
            {/* AdvertNew */} 
            <div className="cursor-pointer bg-orange-400  rounded-md text-white flex flex-col justify-center items-center gap-4 w-1/4 p-2">
                <p className='text-xl font-bold'>Got something to sell?</p>
                <FaCirclePlus className='h-32 w-32'/>
                <p className='text-xl font-bold'>Post an advert for free!</p>
            </div>
        </div>
    </section>
  )
}

export default Advert