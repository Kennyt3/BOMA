import React from 'react'
import Navbar from './navbar'
import { useAppContext } from '../context/appContext'

const Header = () => {
  const { lightmode } = useAppContext()
  return (
    <div
      className={`${
        !lightmode && 'bg-smheader sm:bg-header text-white'
      } h-[50px] sm:h-[70px] px-1`}
    >
      <div
        className={`max-w-[1200px] mx-auto h-full
      ${lightmode && 'bg-lightsmalnav sm:bg-white'}
      
      `}
      >
        <Navbar />
      </div>
    </div>
  )
}

export default Header
