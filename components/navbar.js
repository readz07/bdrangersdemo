import Image from 'next/image';
import React, { useRef } from 'react';
import logo from "../public/favicon.ico"
import { GrCart } from "react-icons/gr";
import Link from 'next/link';
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";

//main function start here
const Navbar = ({ cart, addToCart, removeFromCart, clearCart, saveCart, subTotal }) => {
    const ref = useRef()
    const toggleCart = () => {
        if (ref.current.classList.contains("translate-x-full")) {
            ref.current.classList.remove("translate-x-full")
            ref.current.classList.add("translate-x-0")
        }
        else if (!ref.current.classList.contains("translate-x-full")) {
            ref.current.classList.remove("translate-x-0")
            ref.current.classList.add("translate-x-full")
        }
    }
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex justify-between p-5  md:flex-row items-center">
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    <Link href="/tshirts"><a className="mr-5 hover:text-gray-900">Polo Shirts</a></Link>
                    <a className="mr-5 hover:text-gray-900">Polo Shirts</a>
                    <a className="mr-5 hover:text-gray-900">Polo Shirts</a>
                </nav>
                <Link href="/">
                    <a className="flex order-first lg:order-none lg:w-2/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                        <Image src={logo} alt="banner" /></a></Link>
                <nav className="flex justify-end lg:w-2/5  items-center text-base md:mr-auto">
                    <span onClick={toggleCart} className="mr-5 hover:text-gray-900 flex items-center pr-1 cursor-pointer"><GrCart />Cart</span>
                    <div>
                        <Link href="/signin"><a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Sign In{' '}
                        
                        </a></Link> 
                        <Link  href="/signup"><a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 ">
                            Sign Up
                        
                        </a></Link>
                    </div>

                    {/* Hidden Cart Sidebar */}
                    <div ref={ref} className="absolute z-10 inset-y-0 right-0 flex max-w-full pl-10 transform transition-transform translate-x-full">
                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                <div className="flex items-start justify-between">
                                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>

                                    <div onClick={toggleCart} className="ml-3 flex h-7 items-center">
                                        <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Close panel</span>
                                            {/* <!-- Heroicon name: outline/x-mark --> */}
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <div className="flow-root">
                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                            {
                                                Object.keys(cart).length == 0 && <h4>No item added to cart</h4>
                                            }
                                            {
                                                Object.keys(cart).map(k => {
                                                    return <li key={k} className="flex py-6">
                                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                            <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                                                        </div>

                                                        <div className="ml-4 flex flex-1 flex-col">
                                                            <div>
                                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                                    <h3>
                                                                        <a href="#">Throwback Hip Bag</a>
                                                                    </h3>
                                                                    <p className="ml-4">$90.00</p>
                                                                </div>
                                                                <p className="mt-1 text-sm text-gray-500">Salmon</p>
                                                            </div>
                                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                                <p className="text-gray-500 flex items-center" >Qty  <AiFillMinusSquare onClick={() => { removeFromCart(k, 1,) }} /> {cart[k].qty} <AiFillPlusSquare onClick={() => { addToCart(k, 1,) }} /></p>
                                                                {console.log(cart, k)}
                                                                <div className="flex">
                                                                    <button onClick={() => { clearCart(k) }} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                })
                                            }




                                            {/* <!-- More products... --> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>$262.00</p>
                                </div>
                                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                <div className="mt-6">
                                    <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                                </div>
                                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                    <p>
                                        or
                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Continue Shopping
                                            <span aria-hidden="true"> &rarr;</span>
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Hidden cart end here  */}
                </nav>
                <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;