import React from 'react'
import { assets } from '../assets/assets_frontend/assets';
const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col items-center justify-center gap-10 md:flex-row mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col gap-6 justify-center items-start'>
          <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
          <p className='text-gray-500 '>Karve Statue Kothrud,<br /> Pune-411008, India</p>
          <p className='text-gray-500'>+91 8787898091 <br /> Email: bookmydoctor@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Careers at BOOK MY DOCTOR</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border rounded-lg border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
       </div>
      </div>
      
    </div>
  )
}

export default Contact
