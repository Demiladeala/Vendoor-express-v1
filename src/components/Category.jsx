import React from 'react'
import Image from 'next/image'
import { BiCategory } from 'react-icons/bi'
import { MdOutlineFastfood, MdComputer, MdOutlineChair } from 'react-icons/md'
import {LuShirt } from 'react-icons/lu'
import { BsPhone , BsBag} from 'react-icons/bs'
import { GrGamepad } from 'react-icons/gr'
import { GiLipstick } from 'react-icons/gi'
import { TbPerfume } from 'react-icons/tb'
import categoryAd from '../assets/category-ad.png'


const Category = () => {
  return (
    <section className='w-[93%] md:h-[20rem] mx-auto flex flex-col md:flex-row gap-5 items-center justify-between'>

      <div className='bg-white w-full md:basis-[20%] p-4 flex flex-col gap-4 h-[15rem] md:h-full box-shadow overflow-y-scroll'>
        <div className='flex items-center gap-4'>
          <BiCategory />
          <p className='cursor-pointer font-semibold'>Category</p>
        </div>
        <div className='flex items-center gap-4'>
          <LuShirt />
          <p className='cursor-pointer'>Fashion</p>
        </div>
        <div className='flex items-center gap-4'>
          <MdOutlineFastfood />
          <p className='cursor-pointer'>Food</p>
        </div>
        <div className='flex items-center gap-4'>
          <BsPhone />
          <p className='cursor-pointer'>Phones & Accessories</p>
        </div>
        <div className='flex items-center gap-4'>
          <GrGamepad />
          <p className='cursor-pointer'>Gaming</p>
        </div>
        <div className='flex items-center gap-4'>
          <MdComputer />
          <p className='cursor-pointer'>Computers</p>
        </div>
        <div className='flex items-center gap-4'>
          <GiLipstick />
          <p className='cursor-pointer'>Health & Beauty</p>
        </div>
        <div className='flex items-center gap-4'>
          <BsBag />
          <p className='cursor-pointer'>Shoes & Bags</p>
        </div>
        <div className='flex items-center gap-4'>
          <TbPerfume/>
          <p className='cursor-pointer'>Jewelry & Watches</p>
        </div>
        <div className='flex items-center gap-4'>
          <MdOutlineChair />
          <p className='cursor-pointer'>Home & Appliances</p>
        </div>
      </div>
      
      <div className='bg-white w-full md:basis-[80%] h-full box-shadow'>
        <Image alt='category ad' width={500} height={300} src={categoryAd} className='bg-center object-cover w-full h-full'></Image>
      </div>

    </section>
  )
}

export default Category