import { useState } from 'react'
import { ConnectWallet } from "@thirdweb-dev/react";

import LOGO from '../assets/mainLogo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>  
        <div className='flex bg-[#030000] flex-row justify-between items-center'>
          <div className='ml-[5%]'> 
            <img src={LOGO} className='h-16 w-16'/>
          </div>
          <div className='mr-[5%] flex flex-column items-center space-x-5 pt-3'>
            <ul className='flex flex-column space-x-10'>
              <Link to={'/'}>
                <li className=' text-2xl text-white font-normal' style={{fontFamily:'Dela Gothic One'}}>Home</li>
              </Link>
              <Link to={'/seller'}>
                <li className=' text-2xl text-white font-normal' style={{fontFamily:'Dela Gothic One'}}>Sell your item</li>
              </Link>
              <Link to={"/auction"}>
                <li className=' text-2xl text-white font-normal' style={{fontFamily:'Dela Gothic One'}}>Auction</li>
              </Link>
            </ul>
            {/* <div style={{fontFamily:'Dela Gothic One'}} className="relative p-0 focus:outline-none text-black font-extrabold bg-white hover:bg-gray-400 focus:ring-4 focus:ring-purple-300  rounded-2xl text-md px-5 py-2.5 mb-2"> */}
            <ConnectWallet
              // theme="dark"
              style={{fontFamily:'Dela Gothic One'}}
              className=" focus:outline-none text-black font-extrabold bg-white hover:bg-gray-400 focus:ring-4 focus:ring-purple-300  rounded-2xl text-md px-0 py-0 mb-2"
              btnTitle="Connect Wallet"
              auth={{
                loginOptional: true,
              }}
            />
            {/* </div> */}
            </div>
        </div>
    </>
  )
}

export default Navbar