import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Bidding from '../../assets/bidding.png'
import Rocket from '../../assets/rocket.png'
import AuctionHouse from '../../assets/auctionHouse.png'
import Castle from '../../assets/castle.png'
import Shirt from '../../assets/shirt.png'
import Check from '../../assets/check.png'
import Th1 from '../../assets/th1.png'
import Th2 from '../../assets/th2.png'
import Th3 from '../../assets/th3.png'
import Logo from '../../assets/mainLogo.png'


function Home() {

  return (
    <div className='bg-[#F15946]'>  
        <Navbar/>
        <div className='flex flex-row justify-evenly  pt-5'>
            <div className='flex items-center flex-col space-y-10'>
                <div className=' space-y-10'>
                    <p className='flex justify-center'>
                        <img src={Bidding} className=' h-[60px] w-[60px]'/>
                    </p>
                    <p className='w-[850px] text-center text-xl' style={{fontFamily:'Goblin One'}}>
                        Embrace the future of excellence, entrust your treasures to The Auction House, where your artistry finds its perfect stage to shine and captivate the world.
                    </p>
                    <p className='w-[850px] text-center text-xl' style={{fontFamily:'Goblin One'}}>
                        Elevate your aspirations beyond the imaginable, for at The Auction House, every bid is a transformative step towards owning a piece of tomorrow's legacy.
                    </p>
                    <p className='flex justify-center'>
                        <img src={Rocket} className='h-[60px] w-[60px]'/>
                    </p>
                </div>

                <div className='bg-[#B91717] w-[772px] h-[320px] rounded-xl '>
                    <p className='my-4 ml-10 space-y-3'>
                        <h2 style={{fontFamily:'Goblin One'}} className='text-xl font-bold'>Auction</h2>
                        <h1 style={{fontFamily:'Goblin One'}} className='font-normal text-xl text-white'>Real-time bidding and sales</h1>
                    </p>
                   <div className='flex flex-row justify-center mt-20'>
                     <div className='bg-[#F15946] flex justify-center items-center rounded-full text-xl w-[60%] h-[100px]'>
                        <p style={{fontFamily:'Goblin One'}} >Let , The Auction Begin</p>
                    </div>
                   </div>
                </div>

            </div>
            {/* <div className='w-[20%]'></div> */}
            <div>
                <div>
                    <img src={AuctionHouse}  className='w-[700px] h-[800px] ml-[13%]'/>
                </div>
            </div>

        </div>
        <div className='flex flex-row justify-evenly pt-5'>
          <div className='w-[700px] flex justify-end'>
            <img className='h-[700px] w-[500px]' src={Castle} alt="" />
          </div>

          <div className='flex items-center pl-[10%]'>
                <div className='bg-[#F37F71] w-[600px] h-[600px]  ml-30 flex flex-col justify-center items-center space-y-52 rounded-[10%]'>
                    <p style={{fontFamily:'Goblin One'}} className='text-2xl text-white space-y-5'>
                        <h2>The auction House</h2> 
                        <h2>NEW Edition for House's</h2>
                    </p>
                    <div>
                        <p className='bg-[#F09797] w-[400px] h-[100px] flex justify-center items-center rounded-full'>
                            <h2 className='text-[#FE3B3B] text-2xl'>Learn More</h2>
                        </p>
                    </div>
            </div>
          </div>
        </div>

        <div className='bg-[#B91717] m-24 p-10 flex flex-row justify-evenly rounded-3xl'>
            <div className='flex flex-col justify-evenly items-center ml-20'>
                <p style={{fontFamily:'Goblin One'}} className='text-3xl font-bold text-center'>The auction House Merchandise <br /> Store</p>
                <p className='h-[20%]'></p>
                <p className='w-[500px] h-[100px] bg-black flex justify-center items-center rounded-3xl'>
                    <h2 className='text-[#E54949] text-2xl'>Shop Now</h2>
                </p>
            </div>
            <div>
                <img src={Shirt} alt="" className='h-[406px] w-[525px]' />
         </div>
        </div>

        <div className='flex flex-row justify-evenly space-x-[24%] pb-32'>
            <div className='flex flex-col bg-[#EF452E] w-[500px] h-[500px] rounded-[150px] p-16 justify-evenly'> 
                <p>
                    <h2 style={{fontFamily:'Goblin One'}} className='text-xl text-white'>BASIC</h2>
                    <h2 style={{fontFamily:'Goblin One'}} className='text-xl text-white'>500RS/mo</h2>
                </p>
                <p className='flex flex-row space-x-5'>
                    <img src={Check} alt="" className='w-[30px] h-[30px]'/>
                    <h2 className='text-white text-xl'>Standard Access</h2>
                </p>
                 <p className='flex flex-row space-x-5'>
                    <img src={Check} alt="" className='w-[30px] h-[30px]'/>
                    <h2 className='text-white text-xl'>3 Auctions</h2>
                </p>
                 <p className='flex flex-row space-x-5'>
                    <img src={Check} alt="" className='w-[30px] h-[30px]'/>
                    <h2 className='text-white text-xl'>Shared Fee</h2>
                </p>
                 <p className='flex flex-row space-x-5'>
                    <img src={Check} alt="" className='w-[30px] h-[30px]'/>
                    <h2 className='text-white text-xl'>Live Auction</h2>
                </p>
                <p className='bg-black rounded-[30px]'> 
                    <h2 className='text-white text-xl text-center py-3'>Start Basic</h2>
                </p>
            </div>

             <div className='flex flex-col bg-[#EF452E] w-[500px] h-[500px] rounded-[150px] p-16 justify-evenly'> 
                <p>
                    <h2 style={{fontFamily:'Goblin One'}} className='text-xl text-white'>Pro</h2>
                    <h2 style={{fontFamily:'Goblin One'}} className='text-xl text-white'>1000RS/mo</h2>
                </p>
                <p className='flex flex-row space-x-5'>
                    <img src={Check} alt="" className='w-[30px] h-[30px]'/>
                    <h2 className='text-white text-xl'>Premium Access</h2>
                </p>
                 <p className='flex flex-row space-x-5'>
                    <img src={Check} alt="" className='w-[30px] h-[30px]'/>
                    <h2 className='text-white text-xl'>Unlimited Auctions</h2>
                </p>
                 <p className='flex flex-row space-x-5'>
                    <img src={Check} alt="" className='w-[30px] h-[30px]'/>
                    <h2 className='text-white text-xl'>No fee</h2>
                </p>
                 <p className='flex flex-row space-x-5'>
                    <img src={Check} alt="" className='w-[30px] h-[30px]'/>
                    <h2 className='text-white text-xl'>24/7 Access</h2>
                </p>
                <p className='bg-black rounded-[30px]'> 
                    <h2 className='text-white text-xl text-center py-3'>Start Pro</h2>
                </p>
            </div>
        </div>

        <div className='bg-black flex flex-row justify-evenly py-10'>
            <div className='bg-[#1E1E1E] w-[372px] h-[569px] p-10 flex flex-col justify-between rounded-2xl'>
               <div className=' space-y-24'>
                 <p className='flex justify-center'>
                    <img src={Th1} alt="" />
                </p>
              
                <p style={{fontFamily:'Goblin One'}} className='text-white'>
                The Auction House is the best Go-To place for some really cool Items.
                </p>
               </div>
                 <p className='text-white'>Jack Reacher</p>
            </div>

             <div className='bg-[#1E1E1E] w-[372px] h-[569px] p-10 flex flex-col justify-between rounded-2xl'>
               <div className=' space-y-24'>
                 <p className='flex justify-center'>
                    <img src={Th2} alt="" />
                </p>
              
                <p style={{fontFamily:'Goblin One'}} className='text-white'>
                It was a really Good Time over here shall visit for newbies
                </p>
               </div>
                 <p className='text-white'>Dua Lipa</p>
            </div>

             <div className='bg-[#1E1E1E] w-[372px] h-[569px] p-10 flex flex-col justify-between rounded-2xl'>
               <div className=' space-y-24'>
                 <p className='flex justify-center'>
                    <img src={Th3} alt="" />
                </p>
              
                <p style={{fontFamily:'Goblin One'}} className='text-white'>
                Spooky out there right now go at night its very good tbh...
                </p>
               </div>
                 <p className='text-white'>Mr.Ghost</p>
            </div>
        </div>

        <div className='bg-black flex flex-col space-y-6 py-10'>
            <p className='flex justify-center'>
                <img src={Logo} className='w-[300px] h-[300px]' alt="" />
            </p>
            <p style={{fontFamily:'Goblin One'}} className='text-white text-xl text-center'>The Auction House , @2023</p>
            <p style={{fontFamily:'Goblin One'}} className='text-white text-xl text-center'>Developed by : Neel Lohith , Dhanush kamath , Kshitij Mahajan</p>

        </div>
    </div>
  )
}

export default Home