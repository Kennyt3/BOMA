import React from 'react'
import { useClothProvider } from '../context/clothContext'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const Cloths = () => {
  const {
    state,
    increaseQuantity,
    reduceQuantity,
    increaseSize,
    reduceSize,
    addToCart,
  } = useClothProvider()
  return (
    <div className='md:mt-40 max-w-[1000px] mx-auto '>
      <div
        className={`grid grid-cols-1 ll:grid-cols-2 ml:grid-cols-3  md:grid-cols-4
        mx-auto  gap-5  px-3 pb-24`}
      >
        {state.data.map((cloth, index) => {
          const { id, image, name, price, sizeArr, num, val } = cloth
          return (
            <div className={`bg-white rounded mt-10 px-2 `} key={index}>
              <img src={image} alt={`pic${id}`} className={`bg-plain`} />
              <div>
                <div className={`flex justify-between mt-5`}>
                  <h5 className={`text-deets font-medium text-xl leading-6`}>
                    {name}
                  </h5>
                  <p className={`text-deets font-medium   text-xl leading-6`}>
                    {price}
                  </p>
                </div>
                <div className={`my-3`}>
                  <div className={`flex justify-between`}>
                    <div className={`flex items-center gap-1`}>
                      <h4 className='text-xs text-deets font-medium '>Size</h4>
                      <div
                        className={`text-xs text-deets  font-medium flex items-center justify-center`}
                      >
                        <BsChevronLeft onClick={() => reduceSize(index)} />
                        <p className={`uppercase text-xs`}>{sizeArr[num]}</p>
                        <BsChevronRight onClick={() => increaseSize(index)} />
                      </div>
                    </div>
                    <div className='flex items-center gap-1'>
                      <h4 className='text-xs text-deets font-medium'>
                        Quantity
                      </h4>
                      <div
                        className={`text-xs text-deets font-medium flex items-center justify-center`}
                      >
                        <BsChevronLeft onClick={() => reduceQuantity(index)} />
                        <p className='bg-plain rounded-sm'>{val}</p>
                        <BsChevronRight
                          onClick={() => increaseQuantity(index)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={`flex justify-between items-center pt-3`}>
                    <h5 className={`text-smheader text-base font-bold`}>
                      {price}
                    </h5>
                    <button
                      className='text-smheader font-medium text-xs p-1 border border-logo'
                      onClick={() => {
                        addToCart({ id, name, price, num, val }, index)
                      }}
                    >
                      Add to cart
                    </button>
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

export default Cloths
