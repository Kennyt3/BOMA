import React from 'react'
import { useAppContext } from '../context/appContext'
import Hero from '../component/hero'

const Home = () => {
  const { lightmode } = useAppContext()
  return (
    <div className={`${!lightmode && 'bg-main text-white'} min-h-[90vh]`}>
      <Hero />
    </div>
  )
}

export default Home
