import Image from 'next/image'
import React from 'react'
import image1 from '../assets/top-selling-item-img1.png'
import image2 from '../assets/top-selling-item-img2.png'
import image3 from '../assets/top-selling-item-img3.png'
import image4 from '../assets/top-selling-item-img4.png'

const TopSelling = () => {
  return (
    <section className='w-[93%] p-3 bg-white mt-12 md:mt-16 mx-auto flex flex-col gap-5  box-shadow'>
      <div className='flex flex-row items-center justify-between'>
        <h1 className='text-foundation-red-normal font-semibold text-xl md:text-2xl'>Top Selling Items</h1>
        <p className='text-black-color-text'>See All</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-4">
        <div className=''>
          <div className='sm:h-60'>
            <Image alt='product' className='bg-center object-cover w-full h-full' src={image1} width={500} height={300}></Image>
          </div>
          <p className='text-black-color-text mt-5 text-lg sm:text-xl'>Men's Casual Sneakers</p>
          <p className='text-foundation-red-normal mt-1 text-lg sm:text-xl'>₦10,000</p>
        </div>

        <div className=''>
          <div className='sm:h-60'>
          <Image alt='product' className='bg-center object-cover w-full h-full' src={image2} width={500} height={300}></Image>
          </div>
          <p className='text-black-color-text mt-5 text-lg sm:text-xl'>Gold Layering Necklace</p>
          <p className='text-foundation-red-normal mt-1 text-lg sm:text-xl'>₦3,000</p>
        </div>

        <div className=''>
          <div className='sm:h-60'>
          <Image alt='product' className='bg-center object-cover w-full h-full' src={image3} width={500} height={300}></Image>
          </div>
          <p className='text-black-color-text mt-5 text-lg sm:text-xl'>Thermocool Double Door...</p>
          <p className='text-foundation-red-normal mt-1 text-lg sm:text-xl'>₦100,000</p>
        </div>

        <div className=''>
          <div className='sm:h-60'>
          <Image alt='product' className='bg-center object-cover w-full h-full' src={image4} width={500} height={300}></Image>
          </div>
          <p className='text-black-color-text mt-5 text-lg sm:text-xl'>Mama Gold Parboiled Rice</p>
          <p className='text-foundation-red-normal mt-1 text-lg sm:text-xl'>₦10,000</p>
        </div>
      </div>
    </section>
  )
}

export default TopSelling