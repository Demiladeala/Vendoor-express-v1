import React from 'react'
import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import heroImage from '../assets/Hero-Image.svg'

const Hero = () => {
  return (
    <section className='hero pt-20 relative top-[3.5rem] mb-[5rem] flex flex-col items-center md:items-start justify-between md:flex-row md:px-8'>

      {/* HERO TEXT/SEARCH SECTION */}
      <div className='text-black-color-text md:basis-[60%]'>
        <h2 className='w-[95%] mx-auto text-2xl md:text-3xl font-semibold md:mt-10'>Find <span className='text-foundation-red-normal'>Vendors</span> for every product and services you need <span className='text-foundation-red-normal'>around you</span></h2>
        
        <div className='relative w-[95%] mx-auto mt-12 flex items-center'>
          {/* <div className='text-black-color-text relative left-6 top-[0.09rem] md:top-[0.1rem]'>
            <AiOutlineSearch />
          </div> */}
          <div className='relative w-full md:w-[80%]'>
            <input type="text" name="searchItem" id="searchItem" placeholder='Search item, shop, categories'
            className='w-full border border-foundation-red-normal py-2 px-4 bg-transparent outline-none rounded-lg hero-search'/>
          <div className='max-[360px]:hidden absolute top-0 right-[30%] w-px bg-foundation-red-normal h-full text-black-color-text flex items-center'>
            <p className='pl-4'>Location</p>
          </div>
          <MdOutlineKeyboardArrowDown className='absolute right-3 top-3 cursor-pointer text-black-color-text' size={20} />
          </div>
        </div>

        <div className='my-5 md:mt-8 w-[90%] mx-auto text-xl md:w-[95%]'>
          <button className='text-white text-sm sm:text-base bg-[#DB3305] py-2 px-16 rounded-xl hover:opacity-75'>Search</button>
        </div>

      </div>

      {/* HERO IMAGE SECTION */}
      <div className='relative h-[25rem] md:h-[30rem] md:basis-[40%] md:top-[-4rem]'>
        <Image alt='hero image' width={500} height={300} src={heroImage} className='w-full h-full object-cover bg-center'></Image>
      </div>
    </section>
  )
}

export default Hero