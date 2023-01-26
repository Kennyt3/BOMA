import React from 'react'
import { useAppContext } from '../context/appContext'

const Footer = () => {
  const { lightmode } = useAppContext()
  return (
    <div
      className={` bg-footerbgl text-footertxl ${
        !lightmode && 'bg-footerbgd text-footertxd'
      }`}
    >
      <div
        className={`max-w-[1200px] mx-auto px-3 xl:px-5 ml:px-10  md:px-20  py-10 ${
          !lightmode && 'text-footertxd'
        }`}
      >
        <div className={`flex gap-5 md:gap-20 items-center md:px-24`}>
          <div className={``}>
            <h3
              className={`text-[16px] md:text-[30px] font-bold leading-[57.6px]`}
            >
              BOMA
            </h3>
          </div>
          <div className={`grid  grid-cols-4 gap-5 md:gap-10`}>
            <div>
              <h6 className={`text-[16px] leading-[24px] font-medium`}>
                Sitemap
              </h6>
              <div className={`flex flex-col gap-3 mt-5`}>
                <p className={`text-[12px] leading-[16px] font-normal`}>Home</p>
                <p className={`text-[12px] leading-[16px] font-normal`}>
                  About
                </p>
                <p className={`text-[12px] leading-[16px] font-normal`}>
                  Merchants
                </p>
                <p className={`text-[12px] leading-[16px] font-normal`}>
                  Contact
                </p>
              </div>
            </div>
            <div>
              <h6 className={`text-[16px] leading-[24px] font-medium`}>
                Sitemap
              </h6>
              <div className={`flex flex-col gap-3 mt-5`}>
                <p className={`text-[12px] leading-[16px] font-normal`}>Home</p>
                <p className={`text-[12px] leading-[16px] font-normal`}>
                  About
                </p>
                <p className={`text-[12px] leading-[16px] font-normal`}>
                  Merchants
                </p>
                <p className={`text-[12px] leading-[16px] font-normal`}>
                  Contact
                </p>
              </div>
            </div>
            <div>
              <h6 className={`text-[16px] leading-[24px] font-medium`}>
                Socials
              </h6>
              <div className={`flex flex-col gap-3 mt-5`}>
                <p className={`text-[12px] leading-[16px] font-normal`}>
                  Facebook
                </p>
                <p className={`text-[12px] leading-[16px] font-normal`}>
                  Linkedin
                </p>
                <p className={`text-[12px] leading-[16px] font-normal`}>
                  Instagram
                </p>
                <p className={`text-[12px] leading-[16px] font-normal`}>
                  Twitter
                </p>
              </div>
            </div>
            <div>
              <h6 className={`text-[16px] leading-[24px] font-medium`}>
                Socials
              </h6>
              <div className={`flex flex-col gap-3 mt-5`}>
                <p className={`text-[12px] leading-[16px] font-normal`}>
                  Facebook
                </p>
                <p className={`text-[12px] leading-[16px] font-normal`}>
                  Linkedin
                </p>
                <p className={`text-[12px] leading-[16px] font-normal`}>
                  Instagram
                </p>
                <p className={`text-[12px] leading-[16px] font-normal`}>
                  Twitter
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
