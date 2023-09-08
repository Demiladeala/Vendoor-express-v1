import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.svg'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const header = () => {
  return (
    <div className='w-full px-4 py-5 bg-[#F4C0B2] fixed z-40 top-0 left-0 flex justify-between items-center'>
        <div>
            <Image alt='logo' src={logo} className='md:ml-8 max-[300px]:ml-0  max-[300px]:w-[5.5rem] w-[6rem] sm:w-[8rem] md:w-[10rem]'></Image>
        </div>

        <div className='flex items-center gap-5'>
          <div className='flex items-center gap-1 md:gap-5'>
            <p className='mr-1 sm:mr-0'>?</p>
            <p className='text-sm sm:text-base'>Help </p>
            <MdOutlineKeyboardArrowDown />
          </div>
          <div className='md:mr-4'>
            <button className='text-white max-[300px]:text-sm text-base bg-[#DB3305] py-1 px-6 max-[300px]:px-2 md:py-[0.3rem] md:px-16 rounded-lg sm:rounded-xl hover:opacity-75'>Sign in</button>
          </div>
        </div>
    </div>
  )
}

export default header