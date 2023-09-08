import React from 'react'
import Image from 'next/image'
import categoryAd from '../assets/category-ad.png'

const AdBanner = () => {
  return (
    <section className='w-[93%] h-[340px] mt-12 md:mt-16 mx-auto bg-center box-shadow'>
     <Image alt='category ad' width={500} height={300} src={categoryAd} className='bg-center object-cover w-full h-full'></Image>
   </section>
  )
}

export default AdBanner