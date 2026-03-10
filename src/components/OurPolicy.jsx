import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-12 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-black'>We offer a 7-day exchange
             policy from the date of delivery. Items must be unused, 
             <br />in original condition, and with all tags attached. 
             Exchanges are available for size issues, damaged products, or wrong items received. 
             To request an exchange, please contact our support team with your order details.</p>
        </div>
        
        </div>
  )
}

export default OurPolicy