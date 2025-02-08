import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 tex-gray-500 '>
        <p>ABOUT  < span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className=' justify-center my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className=' justify-center flex rounded-md border px-10 flex-col justify-centergap-6 ml-10 md:w-2/4 text-sm text-gray-600 '>
        <p className="text-lg text-gray-700 mb-4">
        Welcome to our doctor appointment web platform! We aim to provide a seamless and efficient way to book medical consultations with trusted professionals.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Our doctor appointment booking app is designed to make scheduling medical
        appointments easy, convenient, and hassle-free. Whether you need a
        general check-up or a specialist consultation, our platform allows you
        to book appointments with trusted doctors at your preferred time.
      </p>
      
      
      </div>
      </div>
      <div className='text-xl my-4'>
      <p >Why <span className='text-gray-700 font-semibold'>Choose Us?</span></p>
      
      </div>
      <div className='flex flex-col md:flex-row mb-3'>
        <div className='mr-5 rounded-md border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='mr-5 rounded-md border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className=' rounded-md border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About
