import Image from 'next/image'
import React from 'react'
import image1 from '../assets/fast-food-1.png'
import image2 from '../assets/fast-food-2.png'
import image3 from '../assets/fast-food-3.png'
import image4 from '../assets/fast-food-4.png'


const TopFastFood = () => {
  return (
    <section className='w-[93%] p-3 bg-white mt-12 md:mt-16 mx-auto flex flex-col gap-5  box-shadow'>
      <div className='flex flex-row items-center justify-between'>
        <h1 className='text-foundation-red-normal font-semibold text-2xl'>Top <span className='hidden sm:inline'>Fast</span> Food Deals</h1>
        <p className='text-black-color-text'>See All</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-4">
        <div className=''>
          <div className=''>
            <Image alt='product' className='bg-center object-cover w-full h-full' src={image1} width={500} height={300}></Image>
          </div>
          <p className='text-black-color-text mt-5 text-lg'>Ham burger and Fries</p>
          <p className='text-foundation-red-normal mt-1 text-lg sm:text-xl'>₦5,000</p>
        </div>

        <div className=''>
          <div className=''>
          <Image alt='product' className='bg-center object-cover w-full h-full' src={image2} width={500} height={300}></Image>
          </div>
          <p className='text-black-color-text mt-5 text-lg'>Stir-fry noodles with fried...</p>
          <p className='text-foundation-red-normal mt-1 text-lg sm:text-xl'>₦3,000</p>
        </div>

        <div className=''>
          <div className=''>
          <Image alt='product' className='bg-center object-cover w-full h-full' src={image3} width={500} height={300}></Image>
          </div>
          <p className='text-black-color-text mt-5 text-lg'>Veggie and Cheese pizza...</p>
          <p className='text-foundation-red-normal mt-1 text-lg sm:text-xl'>₦5,000</p>
        </div>

        <div className=''>
          <div className=''>
          <Image alt='product' className='bg-center object-cover w-full h-full' src={image4} width={500} height={300}></Image>
          </div>
          <p className='text-black-color-text mt-5 text-lg'>Jollof Rice and Peppered ...</p>
          <p className='text-foundation-red-normal mt-1 text-lg sm:text-xl'>₦2,000</p>
        </div>
      </div>
    </section>
  )
}

export default TopFastFood