/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import { categories } from "../../data/database";

const SubCategory = () => {
  return (
    <>
        <section className="py-5">
            <div className="container flex flex-col gap-5">
                <div>
                    <h1 className='text-2xl font-semibold'>Good Finds, Guides and Articles</h1>
                </div>
                <div className='flex md:flex-row flex-col justify-between gap-7'>
                    {categories.map((category, index) => (
                        <div className="md:w-1/4 w-full bg-white rounded-md cursor-pointer shadow flex md:flex-col flex-row items-center">
                            <div className='md:w-full w-1/2 md:h-52 h-40'>
                                <img src={category.image} className='md:rounded-t-lg rounded-lg w-full h-full'/>
                            </div>
                            <div className='border border-transparent md:border-t-gray-100 md:w-full w-1/2'>
                                <h3 className='p-2 text-sm font-medium'>{category.desp}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default SubCategory