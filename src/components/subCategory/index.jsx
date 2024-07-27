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
                <div className='flex justify-between gap-7'>
                    {categories.map((category, index) => (
                        <div className="w-1/4 bg-white rounded-md cursor-pointer shadow">
                            <div>
                                <img src={category.image} className='rounded-t-lg w-full h-52'/>
                            </div>
                            <div className='border border-transparent border-t-gray-100'>
                                <h3 className='p-2 text-sm font-semibold'>{category.desp}</h3>
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