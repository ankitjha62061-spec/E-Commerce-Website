import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='px-4 md:px-10 py-10'>

      <div className='text-center mb-10'>
        <h1 className='text-3xl font-semibold text-gray-800'>Contact Us</h1>
        <p className='text-gray-500 mt-2'>We’d love to hear from you</p>
      </div>

     
      <div className='max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center'>

 
        <img
          src={assets.contact_img}
          alt="Contact"
          className='w-full md:max-w-[420px] rounded-xl shadow-lg'
        />

 
        <form className='w-full flex flex-col gap-4'>

          <input
            type="text"
            placeholder="Your Name"
            className='border px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500'
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            className='border px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500'
            required
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className='border px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500'
            required
          ></textarea>

          <button className='bg-indigo-600 text-white py-2.5 rounded-lg hover:bg-indigo-700 transition'>
            Send Message
          </button>

        </form>
      </div>

   
      <div className='mt-16 text-center text-gray-600'>

        <h2 className='text-xl font-semibold text-gray-800 mb-4'>
          Get in Touch
        </h2>

        <p>Email: support@example.com</p>
        <p>Phone: +91 6206101198</p>
        <p>Address: Your City, India</p>

      </div>

    </div>
  )
}

export default Contact