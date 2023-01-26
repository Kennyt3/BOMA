import React from 'react'
import { useClothProvider } from '../context/clothContext'
import { useCartProvider } from '../context/cartContext'

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
const Cart = () => {
  const { state: clothstate, removeFromCart, total } = useClothProvider()
  const { increaseQuantity, reduceQuantity } = useCartProvider()
  const cart = clothstate.cart
  return (
    <div className={`w-[300px] md:w-[300px] z-[1] bg-white  text-black `}>
      <div className={`border-b-[1px]   border-bod pt-[60px]`}>
        <h4
          className={`font-medium ml-5 text-[20px] leading-[24.2px] mb-[60px]`}
        >
          Items in cart ({cart.length || 0})
        </h4>
        {cart.map(({ id, name, price, val }, index) => {
          return (
            <div key={index} className={` border-t-[1px] px-7 border-bod`}>
              <div className={`flex justify-between pt-[30px]`}>
                <h5 className={`text-lg font-semibold leading-[20px]`}>
                  {name}
                </h5>
                <p className={`text-lg font-semibold leading-[20px]`}>
                  {price}
                </p>
              </div>
              <div className={`flex justify-between py-[24px]`}>
                <button
                  className={`text-danger capitalize text-[20px] font-normal leading-[24px]`}
                  onClick={() => {
                    removeFromCart(index)
                  }}
                >
                  Remove item
                </button>
                <div className='flex gap-3 justify-between items-center'>
                  <p
                    className={`uppercase text-[20px] font-normal leading-[24px]`}
                  >
                    Qty
                  </p>
                  <div
                    className={`flex justify-between text-[20px] font-normal leading-[24px] items-center`}
                  >
                    <BsChevronLeft
                      onClick={() => {
                        reduceQuantity(index)
                      }}
                    />
                    <p>{val}</p>
                    <BsChevronRight
                      onClick={() => {
                        increaseQuantity(index)
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        <div
          className={`flex justify-between px-5 border-t-[1px] border-bod py-7  items-center`}
        >
          <h1 className={`text-[24px] font-semibold leading-[28.8px]`}>
            Total Amount
          </h1>
          <p className={`text-[24px] font-semibold leading-[28.8px]`}>
            ₦{total}
          </p>
        </div>
        <div
          className={`px-5 mb-10 text-[20px] font-semibold leading-[24.2px]`}
        >
          <button className={`bg-process block w-full text-white p-3`}>
            Process order
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
