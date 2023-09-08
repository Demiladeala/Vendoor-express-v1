import React from 'react'
import Image from 'next/image'
import image1 from '../assets/shopByStore-1.png'
import image2 from '../assets/shopByStore-2.svg'
import image3 from '../assets/shopByStore-3.png'
import image4 from '../assets/shopByStore-4.png'
import image5 from '../assets/shopByStore-5.png'
import image6 from '../assets/shopByStore-6.png'
import image7 from '../assets/shopByStore-7.png'
import image8 from '../assets/shopByStore-8.png'

const ShopByStore = () => {
  return (
    <section className='w-[93%] p-3 bg-white mt-12 md:mt-16 mx-auto flex flex-col gap-5  box-shadow'>
    <div className='flex flex-row items-center justify-between'>
      <h1 className='text-foundation-red-normal font-semibold text-2xl'>Shop By Stores</h1>
      <p className='text-black-color-text'>See All</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-4">
      <div className='text-center'>
        <div className='h-[200px] bg-center object-cover flex items-center justify-center px-4'>
          <Image width={500} height={300} alt='seller brand image' className='object-contain bg-center w-full h-full' src={image1}></Image>
        </div>
        <p className='text-black-color-text mt-3 text-lg font-semibold text-center'>Kiddily Store</p>
      </div>

      <div className='text-center'>
        <div className='h-[200px] bg-center object-cover flex items-center justify-center px-4'>
        <Image width={500} height={300} alt='seller brand image' className='object-contain bg-center w-full h-full' src={image2}></Image>
        </div>
        <p className='text-black-color-text mt-3 text-lg font-semibold text-center'>Destiny Jewelry</p>
      </div>

      <div className='text-center'>
        <div className='h-[200px] bg-center object-cover flex items-center justify-center px-4'>
        <Image width={500} height={300} alt='seller brand image' className='object-contain bg-center w-full h-full' src={image3}></Image>
        </div>
        <p className='text-black-color-text mt-3 text-lg font-semibold text-center'>JIH Sandwich Bar</p>
      </div>

      <div className='text-center'>
        <div className='h-[200px] bg-center object-cover flex items-center justify-center px-4'>
        <Image width={500} height={300} alt='seller brand image' className='object-contain bg-center w-full h-full' src={image4}></Image>
        </div>
        <p className='text-black-color-text mt-3 text-lg font-semibold text-center'>WUM Pizza</p>   
      </div>

      <div className='text-center'>
        <div className='h-[200px] bg-center object-cover flex items-center justify-center px-4'>
        <Image width={500} height={300} alt='seller brand image' className='object-contain bg-center w-full h-full' src={image5}></Image>
        </div>
        <p className='text-black-color-text mt-3 text-lg font-semibold text-center'>Shawarma Plug</p>
      </div>

      <div className='text-center'>
        <div className='h-[200px] bg-center object-cover flex items-center justify-center px-4'>
        <Image width={500} height={300} alt='seller brand image' className='object-contain bg-center w-full h-full' src={image6}></Image>
        </div>
        <p className='text-black-color-text mt-3 text-lg font-semibold text-center'>Goodness Clothes</p>
      </div>

      <div className='text-center'>
        <div className='h-[200px] bg-center object-cover flex items-center justify-center px-4'>
        <Image width={500} height={300} alt='seller brand image' className='object-contain bg-center w-full h-full' src={image7}></Image>
        </div>
        <p className='text-black-color-text mt-3 text-lg font-semibold text-center'>Ohana Jewels</p>
      </div>

      <div className='text-center'>
        <div className='h-[200px] bg-center object-cover flex items-center justify-center px-4'>
        <Image width={500} height={300} alt='seller brand image' className='object-contain bg-center w-full h-full' src={image8}></Image>
        </div>
        <p className='text-black-color-text mt-3 text-lg font-semibold text-center'>LGS Store</p>
      </div>

    </div>
  </section>
  )
}

export default ShopByStore