import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center bg-[#03045e] rounded-lg px-6 md:px-10 lg:px-20 py-16 min-h-[400px]'>

            {/* --------- Header Left --------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 text-left'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight'>
                    Find the Right Doctor, <br /> Effortlessly
                </p>

                <p className='text-white/70 text-sm font-light'>
                   Browse our network of trusted healthcare professionals 
                    <br className='hidden sm:block' />
                    and book your appointment in just a few clicks.
                </p>

                <a
                    href='#speciality'
                    className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm hover:scale-105 transition-all duration-300'
                >
                    Book now
                    <img className='w-3' src={assets.arrow_icon} alt="" />
                </a>
            </div>

            {/* --------- Header Right - Stats Cards --------- */}
            <div className='md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0'>
                <div className='flex flex-col gap-4 w-full max-w-xs'>
                    <div className='bg-white/10 border border-white/20 rounded-xl px-6 py-5'>
                        <p className='text-white/60 text-sm mb-1'>Registered doctors</p>
                        <p className='text-white text-4xl font-semibold'>1,200+</p>
                    </div>

                    <div className='bg-white/10 border border-white/20 rounded-xl px-6 py-5'>
                        <p className='text-white/60 text-sm mb-1'>Appointments today</p>
                        <p className='text-white text-4xl font-semibold'>340+</p>
                    </div>

                    <div className='bg-white/10 border border-white/20 rounded-xl px-6 py-5'>
                        <p className='text-white/60 text-sm mb-1'>Specialities</p>
                        <p className='text-white text-4xl font-semibold'>15+</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header