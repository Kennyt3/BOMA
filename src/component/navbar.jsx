import React from 'react'
import { BsHandbag } from 'react-icons/bs'
import { WiStars } from 'react-icons/wi'
import { useAppContext } from '../context/appContext'
import { CiSearch } from 'react-icons/ci'
import { TfiClose } from 'react-icons/tfi'
import { useClothProvider } from '../context/clothContext'

const Navbar = () => {
  const {
    lightmode,
    toggleLightmode,
    searchopen,
    openSearch,
    closeSearch,
    toggleCart,
  } = useAppContext()
  const { state: clothstate } = useClothProvider()
  const cart = clothstate.cart
  return (
    <div
      className={`h-full py-[15px] px-4 ll:px-7 sm:px-10 flex  items-center justify-between ${
        !lightmode ? 'text-white' : 'text-logo  '
      }`}
    >
      <h1
        className={`font-bold text-2xl leading-[28.8px] sm:text-[32px] sm:leading-[38.4px]  uppercase text-logo ${
          !lightmode && 'md:text-white'
        }`}
      >
        Boma
      </h1>
      <WiStars
        size={20}
        onClick={toggleLightmode}
        className={` text-logo ${!lightmode && 'md:text-white'}`}
      />
      <div className='flex gap-3 md:block'>
        <label
          className={`flex items-center  gap-3 relative md:hidden ${
            !lightmode && 'text-search'
          }`}
        >
          {searchopen ? (
            <TfiClose
              size={15}
              onClick={closeSearch}
              className={`${lightmode ? 'text-search' : 'text-darksearch'}`}
            />
          ) : (
            <CiSearch
              size={25}
              className={`${lightmode ? 'text-search' : 'text-darksearch'}`}
              onClick={openSearch}
            />
          )}
          <input
            type='search'
            placeholder='Search for item'
            className={`bg-plain w-[130px] 
             ${searchopen ? 'block' : 'hidden'} 
            md:hidden px-3 `}
            style={{ fontFamily: 'Arial, FontAwesome' }}
          />
        </label>
        <div className={`relative  ml-5`} onClick={toggleCart}>
          <BsHandbag
            size={20}
            className={`text-logo  ${!lightmode && 'md:text-white'}`}
          />
          <p
            className={`absolute  top-2 left-2 z-10 text-xl ${
              !lightmode ? 'text-white' : 'text-red-600'
            }`}
          >
            {cart.length}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
