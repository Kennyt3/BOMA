import React from 'react'
import { useClothProvider } from '../context/clothContext'
import { useCartProvider } from '../context/cartContext'

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
const Cart = () => {
  const { state: clothstate } = useClothProvider()
  const { increaseQuantity, reduceQuantity } = useCartProvider()
  const cart = clothstate.cart
  return (
    <div className={` w-[250px] z-[1] bg-white  text-black px-3`}>
      <div className={`border-b-[1px]  border-bod pt-[60px]`}>
        <h4 className={`font-medium text-lg leading-[24.2px] mb-[60px]`}>
          items in cart ({cart.length || 0})
        </h4>
        {cart.map(({ id, name, price, val }, index) => {
          return (
            <div key={index} className={` border-t-[1px] border-bod`}>
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
                  className={`text-danger capitalize text-lg font-normal leading-[24px]`}
                >
                  Remove item
                </button>
                <div className='flex gap-3 justify-between items-center'>
                  <p className={`uppercase text-sm font-normal leading-[24px]`}>
                    Qty
                  </p>
                  <div className={`flex justify-between items-center`}>
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
      </div>
    </div>
  )
}

export default Cart
