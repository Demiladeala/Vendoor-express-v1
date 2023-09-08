import Image from 'next/image'
import React from 'react'
import image1 from '../assets/shoe-1.png'
import image2 from '../assets/shoe-2.png'
import image3 from '../assets/shoe-3.png'
import image4 from '../assets/shoe-4.png'

const TopShoes = () => {
  return (
    <section className='w-[93%] p-3 bg-white mt-12 md:mt-16 mx-auto flex flex-col gap-5  box-shadow'>
    <div className='flex flex-row items-center justify-between'>
      <h1 className='text-foundation-red-normal font-semibold text-2xl'>Top Shoe Deals</h1>
      <p className='text-black-color-text'>See All</p>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 py-4">
      <div className=''>
        <div className=''>
          <Image alt='product' className='bg-center object-cover w-full h-full' src={image1} width={500} height={300}></Image>
        </div>
        <p className='text-black-color-text mt-5 text-lg'>Men's Casual Sneakers...</p>
        <p className='text-foundation-red-normal mt-1 text-lg sm:text-xl'>₦10,000</p>
      </div>

      <div className=''>
        <div className=''>
        <Image alt='product' className='bg-center object-cover w-full h-full' src={image2} width={500} height={300}></Image>
        </div>
        <p className='text-black-color-text mt-5 text-lg'>Men's Business Shoes</p>
        <p className='text-foundation-red-normal mt-1 text-lg sm:text-xl'>₦6,000</p>
      </div>

      <div className=''>
        <div className=''>
        <Image alt='product' className='bg-center object-cover w-full h-full' src={image3} width={500} height={300}></Image>
        </div>
        <p className='text-black-color-text mt-5 text-lg'>New Female White Sneak...</p>
        <p className='text-foundation-red-normal mt-1 text-lg sm:text-xl'>₦8,000</p>
      </div>

      <div className=''>
        <div className=''>
        <Image alt='product' className='bg-center object-cover w-full h-full' src={image4} width={500} height={300}></Image>
        </div>
        <p className='text-black-color-text mt-5 text-lg'>Pvc Transparent Sandals...</p>
        <p className='text-foundation-red-normal mt-1 text-lg sm:text-xl'>₦5,000</p>
      </div>
    </div>
  </section>
  )
}

export default TopShoes