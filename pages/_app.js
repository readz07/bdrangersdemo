import { useState, useEffect } from 'react';
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  //use State for cart
  const [cart, setCart] = useState({});
  // use state for subtotal which define into save cart function below
  const [subTotal, setSubTotal] = useState(0);

  //use Effect function
  useEffect(() => {
    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')))
      }
    } catch (error) {
      console.log("This is an error", error)
      localStorage.clear()
    }
  }, [])

  // save cart to local storage
  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart))
    console.log(myCart)
    let subT = 0
    let keys = Object.keys(myCart)
    for(let i=0; i<keys.length; i++){
      subT += myCart[keys[i]].price * myCart[keys[i]].qty
      
    }
    setSubTotal(subT)
  }
  //add to cart function start here
  const addToCart = (itemCode, qty, price, name, size, variant) => {
    const newCart = cart
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant }
    }
    setCart(newCart);
    saveCart(newCart);
  }
  // subtract product quantity and remove from cart 
  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    const newCart = cart
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart);
    saveCart(newCart);
  }
  //end remove cart function

  //clear cart
  const clearCart =()=>{
    setCart({})
    saveCart({})
  }
  return <>
    <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} subTotal={subTotal} clearCart={clearCart} saveCart={saveCart}/>
    <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} subTotal={subTotal} clearCart={clearCart} saveCart={saveCart}{...pageProps} />
    <Footer />
  </>
}

export default MyApp
