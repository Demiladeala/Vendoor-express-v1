import Image from 'next/image'
import React from 'react'
import image1 from '../assets/sellerStore2-1.png'
import image2 from '../assets/sellerStore2-2.png'
import image3 from '../assets/sellerStore2-3.png'
import image4 from '../assets/sellerStore2-4.png'

const SellerStoreTwo = () => {
  return (
    <section className='w-[93%] mt-12 md:mt-16 mx-auto flex flex-col box-shadow'>
 <div className='flex flex-row items-center justify-between bg-[#C1DBD0] py-3 px-4 rounded-tl-lg rounded-tr-lg'>
      <h1 className='text-black-color-text font-semibold text-2xl'>Destiny Jewelry</h1>
      <p className='text-black-color-text'>See All</p>
    </div>

    <div className="bg-white grid grid-cols-2 lg:grid-cols-4 gap-5 py-4 pt-6 px-3">
      <div className=''>
        <div className=''>
          <Image alt='product' className='bg-center object-cover w-full h-full' src={image1} width={500} height={300}></Image>
        </div>
        <p className='text-black-color-text mt-5 text-lg'>Drop Round Gemstone Ea...</p>
        <p className='text-foundation-red-normal mt-1 text-lg sm:text-xl'>₦3,000</p>
      </div>

      <div className=''>
        <div className=''>
        <Image alt='product' className='bg-center object-cover w-full h-full' src={image2} width={500} height={300}></Image>
        </div>
        <p className='text-black-color-text mt-5 text-lg'>Gold 3 Layer Pearl Pendan...</p>
        <p className='text-foundation-red-normal mt-1 text-lg sm:text-xl'>₦4,000</p>
      </div>

      <div className=''>
        <div className=''>
        <Image alt='product' className='bg-center object-cover w-full h-full' src={image3} width={500} height={300}></Image>
        </div>
        <p className='text-black-color-text mt-5 text-lg'>Gold Flower with Gemsto...</p>
        <p className='text-foundation-red-normal mt-1 text-lg sm:text-xl'>₦3,000</p>
      </div>

      <div className=''>
        <div className=''>
        <Image alt='product' className='bg-center object-cover w-full h-full' src={image4} width={500} height={300}></Image>
        </div>
        <p className='text-black-color-text mt-5 text-lg'>Sliver Gemstone Rings 3...</p>
        <p className='text-foundation-red-normal mt-1 text-lg sm:text-xl'>₦3,000</p>
      </div>
    </div>
  </section>
  )
}

export default SellerStoreTwo