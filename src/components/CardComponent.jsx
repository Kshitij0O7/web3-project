import React from 'react'
import Bidding from '../assets/auctionHouse.png'
function CardComponent() {
  return (
    <div className='h-[500px] w-[350px] bg-black p-5 rounded-3xl flex flex-col  gap-6'>
        <h2 style={{fontFamily:'Goblin One'}}  className='text-white text-base'>Item</h2>
        <p className='flex justify-center'>
            <img src={Bidding} alt="" className='h-[200px] w-[300px]' />
        </p>
        <ul className='flex flex-row gap-4 justify-center'>
            <li className=' w-4 h-4 bg-white rounded-full'></li>
            <li className=' w-4 h-4 bg-white rounded-full'></li>
            <li className=' w-4 h-4 bg-white rounded-full'></li>
        </ul>
        <p>
            <h1 style={{fontFamily:'Goblin One'}} className='text-white text-base'>Name : fhfhfhffhhf</h1>
            <h1 style={{fontFamily:'Goblin One'}} className='text-white text-base'>minimum bid : 0.01 ETH</h1>
        </p>
        <p className='flex justify-center'>
            <p className='bg-white w-[70%] rounded-2xl'>
                <h3 style={{fontFamily:'Goblin One'}}  className='text-black text-center py-3 font-extrabold'>place Bid</h3>
            </p>
        </p>
    </div>
  )
}

export default CardComponent