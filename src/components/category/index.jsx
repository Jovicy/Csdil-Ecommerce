/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import { features } from "../../data/database";


export default function Category() {
  return (
    <>
        <section className='bg-gray-50 py-10'>
            <div className="container flex flex-col gap-5 justify-center">
                {/* category title */}
                <div>
                    <h1 className="font-semibold text-2xl">Featured Categories</h1>
                </div>
                {/* category products */}
                <div className='flex md:flex-nowrap flex-wrap justify-between md:gap-5 gap-y-5'>
                {features.map((feature) => (
                    <div className='shadow-md flex flex-col items-center justify-center gap-1 bg-white rounded-sm md:w-1/4 w-49'>
                        <img src={feature.image} className="w-full h-64"/>
                        <p className='text-base font-bold p-2'>{feature.title}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    </>
  )
}