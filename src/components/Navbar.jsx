import { useState } from 'react'
import LOGO from '../assets/mainLogo.png'
function Navbar() {

  return (
    <>  
        <div className='flex bg-[#030000] flex-row justify-between items-center'>
          <div className='ml-[5%]'> 
            <img src={LOGO} className='h-16 w-16'/>
          </div>
          <div className='mr-[5%] flex flex-column items-center space-x-5 pt-3'>
            <ul className='flex flex-column space-x-10'>
              <li className=' text-2xl text-white font-normal' style={{fontFamily:'Dela Gothic One'}}>home</li>
              <li className=' text-2xl text-white font-normal' style={{fontFamily:'Dela Gothic One'}}>Sell your item</li>
              <li className=' text-2xl text-white font-normal' style={{fontFamily:'Dela Gothic One'}}>Auction</li>
            </ul>
            <button style={{fontFamily:'Dela Gothic One'}} type="button" className="focus:outline-none text-black font-extrabold bg-white hover:bg-gray-400 focus:ring-4 focus:ring-purple-300  rounded-2xl text-md px-5 py-2.5 mb-2">Connect Wallet</button>
          </div>
        </div>
    </>
  )
}

export default Navbar