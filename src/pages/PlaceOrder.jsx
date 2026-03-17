import React from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'

const PlaceOrder = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t' > 
      
      {/* left side  */}
 <div className='flex flex-col gap-4 w-full sm:max-w-[480px]' >

<div className='text-xl sm:text-2xl my-3'>
  <Title text1={'DELIVERY'} text2={'INFORMATION'} />
</div>


<div className='flex gap-3'>

  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First  name' />
  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' />

</div>

  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Email' />
 <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />

<div className='flex gap-3'>
  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
</div>



<div className='flex gap-3'>
  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' />
  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
</div>

  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' />
 </div>

 {/* Right Side */}


     <div className='mt-8'>

      <div className='mt-8 min-w-80'>
        <CartTotal/>
      </div>


<div className='mt-12'>

  <Title text1={'PAYMENTS'} text2={'METHODS'} />

{/* Payment method */}

<div className='flex gap-3 flex-col lg:flex-row'>

  <div className='flex items-center gap-3 border-2 p-2 px-3 cursor-pointer'>
     <p className={`min-w-3.5 h-3.5 border rounded-full`} ></p>
   </div>



  <div className='flex items-center gap-3 border-2 p-2 px-3 cursor-pointer'>
    <p className={`min-w-3.5 h-3.5 border rounded-full`} ></p>
  </div>


  <div className='flex items-center gap-3 border-2 p-2 px-3 cursor-pointer'>
     <p className={`min-w-3.5 h-3.5 border rounded-full`} ></p>
    </div>

<button className='bg-black border text-white text-sm my-8 px-8 py-3'> PLACE ORDER </button>

</div>

 </div>

     </div>

      </div>
  )
}

export default PlaceOrder