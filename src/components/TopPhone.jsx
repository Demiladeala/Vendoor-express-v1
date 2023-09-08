import Image from 'next/image'
import React from 'react'
import image1 from '../assets/phone-1.png'
import image2 from '../assets/phone-2.png'
import image3 from '../assets/phone-3.png'
import image4 from '../assets/phone-4.png'

const TopPhone = () => {
  return (
    <section className='w-[93%] p-3 bg-white mt-12 md:mt-16 mx-auto flex flex-col gap-5  box-shadow'>
      <div className='flex flex-row items-center justify-between'>
        <h1 className='text-foundation-red-normal font-semibold text-2xl'>Top Phone Deals</h1>
        <p className='text-black-color-text'>See All</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-4">
        <div className=''>
          <div className=''>
            <Image alt='product' className='bg-center object-cover w-full h-full' src={image1} width={500} height={300}></Image>
          </div>
          <p className='text-black-color-text mt-5 text-lg'>Samsung Galaxy A14- Bla...</p>
          <p className='text-foundation-red-normal mt-1 text-lg sm:text-xl'>₦106,000</p>
        </div>

        <div className=''>
          <div className=''>
          <Image alt='product' className='bg-center object-cover w-full h-full' src={image2} width={500} height={300}></Image>
          </div>
          <p className='text-black-color-text mt-5 text-lg'>Apple iPhone 12 6.1 Inch...</p>
          <p className='text-foundation-red-normal mt-1 text-lg sm:text-xl'>₦400,000</p>
        </div>

        <div className=''>
          <div className=''>
          <Image alt='product' className='bg-center object-cover w-full h-full' src={image3} width={500} height={300}></Image>
          </div>
          <p className='text-black-color-text mt-5 text-lg'>XIAOMI Redmi 10A</p>
          <p className='text-foundation-red-normal mt-1 text-lg sm:text-xl'>₦89,000</p>
        </div>

        <div className=''>
          <div className=''>
          <Image alt='product' className='bg-center object-cover w-full h-full' src={image4} width={500} height={300}></Image>
          </div>
          <p className='text-black-color-text mt-5 text-lg'>Apple iPhone 13 Pro Max...</p>
          <p className='text-foundation-red-normal mt-1 text-lg sm:text-xl'>₦810,000</p>
        </div>
      </div>
    </section>
  )
}

export default TopPhone