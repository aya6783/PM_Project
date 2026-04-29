import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>
            Welcome to MediConnect — your reliable partner for simple, efficient healthcare management. 
            We make it easy to find doctors, book appointments, and stay on top of your health without unnecessary hassle.
          </p>

          <p>
            Our platform is designed with you in mind, combining smart technology with a user-friendly experience. 
            Whether you're scheduling a visit or managing ongoing care, MediConnect helps you do it quickly and confidently.
          </p>

          <b className='text-gray-800'>Our Vision</b>

          <p>
            We aim to make healthcare more accessible and connected for everyone. 
            By bridging the gap between patients and providers, MediConnect ensures you get the care you need — anytime, anywhere.
          </p>
        </div>
      </div>


    </div>
  )
}

export default About
