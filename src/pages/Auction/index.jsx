import React from 'react'
import Navbar from '../../components/Navbar'
import CardComponent from '../../components/CardComponent'

function Auction() {
  return (
    <div className='flex justify-center flex-col gap-9 bg-white'>
    <Navbar/>
    <div className='grid place-items-center md:place-items-start grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 px-5 mb-10'>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
    </div>
    </div>
  )
}

export default Auction