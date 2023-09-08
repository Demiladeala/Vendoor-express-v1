import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <>
    <React.Fragment>
      <footer className='bg-[#831F03] mt-28 py-6 pl-5 md:pl-0'>

        <div className='flex flex-col md:justify-between gap-12 md:flex-row md:px-12 md:py-6'>
          <div className=''>
            <div className='bg-[#D9D9D9] w-[25%] md:w-full md:px-16 py-4 text-center hover:opacity-80 cursor-pointer'><p className='text-center'>LOGO</p></div>
          </div>

          <div className='flex flex-col gap-3 text-white'>
            <p>About us</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Latest Ads</p>
            <p>Become a Seller</p>
          </div>

          <div className='flex flex-col gap-3 text-white'>
            <p>Contact Us</p>
            <p>FAQ</p>
            <p>Safety tips</p>
            <p>Help Center</p>
            <p>Report a Product</p>
          </div>

          <div className='flex flex-col gap-3 text-white'>
            <div className='flex gap-2 items-center'>
              <FiFacebook />
            <p>@VendoorExpress</p>
            </div>
            <div className='flex gap-2 items-center'>
              <FiInstagram />
            <p>VendoorExpress</p>
            </div>
            <div className='flex gap-2 items-center'>
              <FiTwitter />
            <p>VendoorExpress</p>
            </div>
          </div>
        </div>

        <div className='w-[95%] mx-auto bg-white h-px my-10'></div>

        <p className='w-full text-white text-center max-[350px]:text-xs text-sm'>
          © 2023 VendoorExpress.  All rights reserved.
        </p>
      </footer>
    </React.Fragment>
    </>
  )
}

export default Footer