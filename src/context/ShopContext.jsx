import { createContext, useEffect, useState } from "react";
import { assets, products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const currency = '$';
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
const navigate = useNavigate();




const addToCart = async (itemId, size) => {

  if (!size) {
    toast.error("Select Product Size");
    return;
  }

  let cartData = structuredClone(cartItems);

  if (cartData[itemId]) {
    if (cartData[itemId][size]) {
      cartData[itemId][size] += 1;
    } else {
      cartData[itemId][size] = 1;
    }
  } else {
    cartData[itemId] = {};
    cartData[itemId][size] = 1;
  }

  setCartItems(cartData);

  toast.success("Product Added To Cart");
};





const getCartCount = () => {
  let totalCount = 0;

  for (const product in cartItems) {
    for (const size in cartItems[product]) {
      const quantity = cartItems[product][size];

      if (quantity > 0) {
        totalCount += quantity;
      }
    }
  }

  return totalCount;
};



const updateQuantity = async (itemId,size,quantity) =>{

  let cartData = structuredClone(cartItems);

  cartData [itemId][size] = quantity;

  // setCartItems(cartData);


}



const getCartAmount = () => {
  let total = 0;
  Object.keys(cartItems).forEach((itemId) => {
    const product = products.find(p => p._id === itemId);
    if (!product) return;

    Object.keys(cartItems[itemId]).forEach((size) => {
      const qty = cartItems[itemId][size];
      if (qty > 0) {
        total += product.price * qty;
      }
    });
  });

  return total;
};






const value = {
    products, currency, delivery_fee,
    search, setSearch, showSearch, setShowSearch,
    cartItems, addToCart,
    getCartCount,updateQuantity,
    getCartAmount,navigate
  }

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;