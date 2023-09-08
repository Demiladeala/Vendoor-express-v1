import Image from 'next/image'
import React from 'react'
import image1 from '../assets/phones-1.png'
import image2 from '../assets/phones-2.png'
import image3 from '../assets/shoes.png'
import image4 from '../assets/s&bag1.png'
import image5 from '../assets/s&bag2.png'
import image6 from '../assets/computing.png'
import image7 from '../assets/fashion1.png'
import image8 from '../assets/fashion2.png'
import image9 from '../assets/bag.png'
import image10 from '../assets/bag2.png'
import image11 from '../assets/fast-food.png'
import image12 from '../assets/jlry1.png'
import image13 from '../assets/jlry2.png'
import image14 from '../assets/jlry3.png'
import image15 from '../assets/home1.png'
import image16 from '../assets/home2.png'

const ShopByCategory = () => {
  return (
    <section className='w-[93%] p-3 bg-white mt-12 md:mt-16 mx-auto flex flex-col gap-5  box-shadow'>
    <div className='flex flex-row items-center justify-between'>
      <h1 className='text-foundation-red-normal font-semibold text-2xl'>Shop By Categories</h1>
      <p className='text-black-color-text'>See All</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-4">
      <div className='text-center'>
        <div className='bg-body-bg-color h-[200px] bg-center object-cover flex items-center justify-center p-4'>
        <Image width={500} height={300} alt='seller brand image' className='object-contain bg-center w-full h-full' src={image1}></Image>
        </div>
        <p className='text-black-color-text mt-3 text-lg font-semibold text-center'>Phones</p>
      </div>

      <div className='text-center'>
        <div className='bg-body-bg-color h-[200px] bg-center object-cover flex items-center justify-center p-4'>
        <Image width={500} height={300} alt='seller brand image' className='object-contain bg-center w-full h-full' src={image3}></Image>
        </div>
        <p className='text-black-color-text mt-3 text-lg font-semibold text-center'>Shoes & Bags</p>
      </div>

      <div className='text-center'>
        <div className='bg-body-bg-color h-[200px] bg-center object-cover flex items-center justify-center p-8'>
        <Image width={500} height={300} alt='seller brand image' className='object-contain bg-center w-full h-full' src={image6}></Image>
        </div>
        <p className='text-black-color-text mt-3 text-lg font-semibold text-center'>Computing</p>
      </div>

      <div className='text-center'>
        <div className='bg-body-bg-color h-[200px] bg-center object-cover flex items-center justify-center p-8'>
        <Image width={500} height={300} alt='seller brand image' className='object-contain bg-center w-full h-full' src={image8}></Image>
        </div>
        <p className='text-black-color-text mt-3 text-lg font-semibold text-center'>Fashion</p>   
      </div>

      <div className='text-center'>
        <div className='bg-body-bg-color h-[200px] bg-center object-cover flex items-center justify-center p-4'>
        <Image width={500} height={300} alt='seller brand image' className='object-contain bg-center w-full h-full' src={image10}></Image>
        </div>
        <p className='text-black-color-text mt-3 text-lg font-semibold text-center'>Gaming</p>
      </div>

      <div className='text-center'>
        <div className='bg-body-bg-color h-[200px] bg-center object-cover flex items-center justify-center p-4'>
        <Image width={500} height={300} alt='seller brand image' className='object-contain bg-center w-full h-full' src={image11}></Image>
        </div>
        <p className='text-black-color-text mt-3 text-lg font-semibold text-center'>Fast Food</p>
      </div>

      <div className='text-center'>
        <div className='bg-body-bg-color h-[200px] bg-center object-cover flex items-center justify-center p-4'>
        <Image width={500} height={300} alt='seller brand image' className='object-contain bg-center w-full h-full' src={image12}></Image>
        </div>
        <p className='text-black-color-text mt-3 text-lg font-semibold text-center'>Jewelry</p>
      </div>

      <div className='text-center'>
        <div className='bg-body-bg-color h-[200px] bg-center object-cover flex items-center justify-center p-4'>
        <Image width={500} height={300} alt='seller brand image' className='object-contain bg-center w-full h-full' src={image16}></Image>
        </div>
        <p className='text-black-color-text mt-3 text-lg font-semibold text-center'>Home Electronics</p>
      </div>

    </div>
  </section>
  )
}

export default ShopByCategory