import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='px-4 md:px-10'>

      
      <div className='text-2xl text-center pt-10 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
        <p className='text-gray-500 mt-2'>Learn more about who we are and what we do</p>
      </div>

    
      <div className='max-w-5xl mx-auto my-16 flex flex-col md:flex-row items-center gap-12'>

     
        <img
          src={assets.about_img}
          alt="About"
          className='w-full md:max-w-[420px] rounded-xl shadow-lg'
        />

   
        <div className='flex flex-col gap-5 text-gray-600'>

          <h2 className='text-2xl font-semibold text-gray-800'>
            Our Story
          </h2>

          <p>
            We started our journey with a simple goal — to provide high-quality
            products with a seamless shopping experience. Over time, we have
            grown into a trusted platform for hundreds of customers.
          </p>

          <p>
            Our focus is on customer satisfaction, fast delivery, and building
            long-term relationships with our users.
          </p>

          <ul className='list-disc pl-5 space-y-1'>
            <li>Premium quality products</li>
            <li>Fast and reliable delivery</li>
            <li>Secure payment system</li>
          </ul>

          <div className='flex gap-8 mt-4'>
            <div>
              <p className='text-2xl font-bold text-black'>1000+</p>
              <p className='text-sm'>Happy Customers</p>
            </div>

            <div>
              <p className='text-2xl font-bold text-black'>50+</p>
              <p className='text-sm'>Products</p>
            </div>

            <div>
              <p className='text-2xl font-bold text-black'>4.8★</p>
              <p className='text-sm'>Rating</p>
            </div>
          </div>

          <button className='mt-4 bg-indigo-600 text-white px-6 py-2.5 rounded-lg w-fit hover:bg-indigo-700 transition'>
            Explore Products
          </button>

        </div>
      </div>

      <div className='bg-gray-100 py-12 rounded-xl text-center'>
        <h3 className='text-xl font-semibold text-gray-800'>
          Why Choose Us?
        </h3>

        <div className='mt-6 flex flex-col md:flex-row justify-center gap-10 text-gray-600'>

          <div>
            <p className='font-medium text-black'>Quality</p>
            <p className='text-sm'>We never compromise on quality</p>
          </div>

          <div>
            <p className='font-medium text-black'>Trust</p>
            <p className='text-sm'>Trusted by many customers</p>
          </div>

          <div>
            <p className='font-medium text-black'>Support</p>
            <p className='text-sm'>24/7 customer support</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default About