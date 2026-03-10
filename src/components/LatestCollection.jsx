import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {

  const { products } = useContext(ShopContext)

  const [latestProduct, setLatestProducts] = useState([])

  useEffect(() => {
    setLatestProducts(products.slice(0,10))
  }, [products])

  return (
    <div className='my-10'>

      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'}  text2= {'COLLECTIONS'} />

        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-black-600'>
Welcome to Forver, your trusted destination for modern and convenient online shopping. At Forver, we bring you the latest collections and trending products designed to match your style and everyday needs. Our goal is to make your shopping experience simple, fast, and enjoyable.
Explore a wide range of quality products carefully selected to give you the best value and satisfaction. From new arrivals to popular items, Forver always keeps you updated with the latest trends.
We believe shopping should be easy and comfortable, which is why our platform is designed with a clean and user-friendly interface. Browse products, discover new styles, and find the perfect items in just a few clicks.
Thank you for visiting Forver. We are committed to providing quality products and a great shopping experience for every customer. Happy shopping with Forver! 🛍️

        </p>
      </div>

      {/* Product Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
        {latestProduct.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>

    </div>
  )
}


export default LatestCollection