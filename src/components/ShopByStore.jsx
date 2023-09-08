import React from 'react'
import Image from 'next/image'
import image1 from '../assets/shopByStore-1.png'
import image2 from '../assets/shopByStore-2.svg'
import image3 from '../assets/shopByStore-3.png'
import image4 from '../assets/shopByStore-4.png'
import image5 from '../assets/shopByStore-6.png'
import image6 from '../assets/shopByStore-6.png'
import image7 from '../assets/shopByStore-7.png'
import image8 from '../assets/shopByStore-8.png'

const ShopByStore = () => {
  return (
    <section className='w-[93%] p-3 bg-white mt-12 md:mt-16 mx-auto flex flex-col gap-5  box-shadow'>
      <div className='flex flex-row items-center justify-between'>
        <h1 className='text-foundation-red-normal font-semibold text-2xl'>Top Fast Food Deals</h1>
        <p className='text-black-color-text'>See All</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-4">
        <div className='text-center'>
        <div className=''>
            <Image alt='product' className='bg-center object-cover w-full h-full' src={image1} width={500} height={300}></Image>
          </div>
          <p className='text-black-color-text mt-5 text-lg'>Ham burger and Fries</p>
        </div>

        <div className='text-center'>
          <div className=''>
          <Image alt='product' className='bg-center object-cover w-full h-full p-8' src={image2} width={500} height={300}></Image>
          </div>
          <p className='text-black-color-text mt-5 text-lg'>Stir-fry noodles with fried...</p>
        </div>

        <div className='text-center'>
          <div className=''>
          <Image alt='product' className='bg-center object-cover w-full h-full' src={image3} width={500} height={300}></Image>
          </div>
          <p className='text-black-color-text mt-5 text-lg'>Veggie and Cheese pizza...</p>
        </div>

        <div className='text-center'>
          <div className=''>
          <Image alt='product' className='bg-center object-cover w-full h-full' src={image4} width={500} height={300}></Image>
          </div>
          <p className='text-black-color-text mt-5 text-lg'>Jollof Rice and Peppered ...</p>
        </div>
      </div>
    </section>
  )
}

export default ShopByStore