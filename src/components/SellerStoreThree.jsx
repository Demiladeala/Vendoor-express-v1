import Image from 'next/image'
import React from 'react'
import image1 from '../assets/sellerStore3-1.png'
import image2 from '../assets/sellerStore3-2.png'
import image3 from '../assets/sellerStore3-3.png'
import image4 from '../assets/sellerStore3-4.png'

const SellerStoreThree = () => {
  return (
    <section className='w-[93%] mt-12 md:mt-16 mx-auto flex flex-col box-shadow'>
   <div className='flex flex-row items-center justify-between bg-[#C1DBD0] py-3 px-4 rounded-tl-lg rounded-tr-lg'>
    <h1 className='text-black-color-text font-semibold text-2xl'>Goodness Clothes</h1>
      <p className='text-black-color-text'>See All</p>
    </div>

    <div className="bg-white grid grid-cols-2 lg:grid-cols-4 gap-5 py-4 pt-6 px-3">
      <div className=''>
        <div className=''>
          <Image alt='product' className='bg-center object-cover w-full h-full' src={image1} width={500} height={300}></Image>
        </div>
        <p className='text-black-color-text mt-5 text-lg'>Two piece Hoodie and sw...</p>
        <p className='text-foundation-red-normal mt-1 text-lg sm:text-xl'>₦10,000</p>
      </div>

      <div className=''>
        <div className=''>
        <Image alt='product' className='bg-center object-cover w-full h-full' src={image2} width={500} height={300}></Image>
        </div>
        <p className='text-black-color-text mt-5 text-lg'>Unisex Pain Tee Shirt .</p>
        <p className='text-foundation-red-normal mt-1 text-lg sm:text-xl'>₦1,500</p>
      </div>

      <div className=''>
        <div className=''>
        <Image alt='product' className='bg-center object-cover w-full h-full' src={image3} width={500} height={300}></Image>
        </div>
        <p className='text-black-color-text mt-5 text-lg'>Female Gym 2 piece</p>
        <p className='text-foundation-red-normal mt-1 text-lg sm:text-xl'>₦7,000</p>
      </div>

      <div className=''>
        <div className=''>
        <Image alt='product' className='bg-center object-cover w-full h-full' src={image4} width={500} height={300}></Image>
        </div>
        <p className='text-black-color-text mt-5 text-lg'>Unisex White Hoodie</p>
        <p className='text-foundation-red-normal mt-1 text-lg sm:text-xl'>₦5,000</p>
      </div>
    </div>
  </section>
  )
}

export default SellerStoreThree