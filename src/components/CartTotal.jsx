import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {

  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext)

  const cartTotal = getCartAmount()

  return (
    <div className='w-full bg-gray-5 p-5 rounded-lg shadow-md'>

      <div className='text-xl mb-4'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>

      <div className='flex flex-col gap-3 text-sm'>

        {/* Subtotal */}
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency} {cartTotal.toFixed(2)}</p>
        </div>

        <hr />

        <div className='flex justify-between'>
          <p>Shipping</p>
          <p>{currency} {delivery_fee.toFixed(2)}</p>
        </div>

        <hr />

        {/* Total */}
        <div className='flex justify-between text-lg font-semibold'>
          <p>Total</p>
          <p>
            {currency} {cartTotal === 0 ? 0 : (cartTotal + delivery_fee).toFixed(2)}
          </p>
        </div>

      </div>

    </div>
  )
}

export default CartTotal