import React from 'react'
import Logo from './Logo.jsx'

const Footer = () => {
  return (
    <div className=' bg-primary flex flex-col md:p-6 text-accent-white'>
      
      <div className='md:flex flex-row gap-2 justify-between m-2'>
        <div>
          <Logo />
          <p className=' mt-3 mb-9 sm:w-[410px]'>
          Your goal is our target. Not anything in between. 
          We use online marketing platforms and tools to achieve single objective - 
          your business results
          </p>
        </div>

        <div className=' sm:flex-row gap-8 flex flex-col  sm:gap-8'>

          <div >
            <h2 className=' text-xl font-medium mb-1'>Our Technologies</h2>
            <ul>
              <li>ReactJS</li>
              <li>Getsby</li>
              <li>NextJS</li>
              <li>NodeJs</li>
            </ul>
          </div>
          <div>
            <h2 className=' text-xl font-medium mb-1'>Our Services</h2>
            <ul>
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>

        </div>
      </div>

      <div className='flex mx-8 mt-8 items-center justify-center border-top'>
        <div >
          <p>Privacy Policy | Terms & Conditions</p>
        </div>
        
      </div>

    </div>
  )
}

export default Footer


