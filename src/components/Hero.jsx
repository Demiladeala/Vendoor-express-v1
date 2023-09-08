import React from 'react'
import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import heroImage from '../assets/Hero-Image.svg'

const Hero = () => {
  return (
    <section className='hero py-20 relative top-[3.5rem] mb-[8rem] flex flex-col items-center md:items-start justify-between md:flex-row md:px-8'>

      {/* HERO TEXT/SEARCH SECTION */}
      <div className='text-black-color-text md:basis-[60%]'>
        <h2 className='w-[95%] mx-auto text-2xl md:text-3xl font-semibold md:mt-10'>Find <span className='text-foundation-red-normal'>Vendors</span> for every product and services you need <span className='text-foundation-red-normal'>around you</span></h2>
        
        <div className='relative w-[95%] mr-auto mt-12 flex items-center'>
          <div className='text-black-color-text relative left-6 top-[0.1rem]'>
            <AiOutlineSearch />
          </div>
          <input type='search' placeholder='Search item, shop, categories' className='px-6 w-[70%] h-[3rem] border border-foundation-red-normal bg-transparent outline-none rounded-tl-xl rounded-bl-xl border-r-0 hero-search' />
          <div className='text-black-text-color w-[30%] h-[3rem] px-3 flex items-center justify-between border border-foundation-red-normal rounded-tr-xl rounded-br-xl'>
            <p className='max-[300px]:text-xs max-[350px]:text-sm md:text-lg'>Location</p>
            <MdOutlineKeyboardArrowDown className='cursor-pointer' />
          </div>
        </div>

        <div className='mt-5 md:mt-8 w-[90%] mx-auto text-xl md:w-[95%]'>
          <button className='text-white text-sm sm:text-base bg-[#DB3305] py-2 px-16 rounded-xl hover:opacity-75'>Search</button>
        </div>

      </div>

      {/* HERO IMAGE SECTION */}
      <div className='relative h-[25rem] md:h-[30rem] mt-8 md:basis-[40%] md:top-[-4rem]'>
        <Image src={heroImage} className='w-full h-full object-cover bg-center'></Image>
      </div>
    </section>
  )
}

export default Hero