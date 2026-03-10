import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="" />

          <p className='w-full md:w-2/3 text-gray-600'>
        YourStore is your trusted online shopping destination for quality products at the best prices. 
        We offer a wide range of fashion, electronics, and lifestyle products with fast delivery and 
        excellent customer support to make your shopping experience easy and enjoyable.
</p>
        </div>


<div>

 <p className='text-xl font-medium mb-5 '>COMPANY</p>
 <ul className='flex flex-col gap-1 text-gray-600'>

<li>HOME</li>
<li>About</li>
<li>Delivery</li>
<li>Privacy</li>
 </ul>   
</div>

<div>
    <p className='text-xl font-medium mb-5'>GET IN TOUCH </p>
     <ul className='flex flex-col gap-1 text-gray-600'>

     <li>+918256412952</li>
     <li>contact@forverjha.com</li>

     </ul>

     </div>
 </div>

<div>
<hr />
<p className='py-5 text-sm text-center'>© 2026 Forever. All Rights Reserved.</p>

</div>



    </div>
  )
}

export default Footer