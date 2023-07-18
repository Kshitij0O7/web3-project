import React from 'react'
import Navbar from '../../components/Navbar'
import Upload from '../../assets/upload.png'

export default function seller() {

  return (
    <div>
        <Navbar/>
        <div className='flex flex-row bg-[#0314B0] py-36 justify-evenly'>
            <section className='flex flex-col justify-center items-center gap-5'>
                <div className='w-[674px] h-[561px] bg-black rounded-[75px] flex flex-col justify-center items-center'>
                    <img src={Upload}/>
                    <section className='text-white flex gap-5'>
                        <p className='bg-white w-5 h-5 rounded-full'></p>
                        <p className='bg-white w-5 h-5 rounded-full'></p>
                        <p className='bg-white w-5 h-5 rounded-full'></p>
                    </section>
                    <p className='text-white text-xl mt-4'>upload a image of item</p>
                </div>
                <p className='bg-white p-4 rounded-[100px] w-[439px]'> 
                    <h2 className='text-black text-lg text-center'>Upload</h2>
                </p>
            </section>

            <div>
                <section className='w-[629px] h-[629px] bg-white rounded-[100px] p-12'>
                    <h2 style={{fontFamily:'Goblin One'}}  className='text-black text-xl text-center'>Add Item</h2>
                    <p className='pr-10 mt-10'>
                        <h2 style={{fontFamily:'Goblin One'}}  className='text-black text-xl my-5'>Name</h2>
                        <input className="w-full placeholder:italic mb-5 placeholder:text-slate-400  border-b-2 border-b-black  py-2 pl-9 pr-3  sm:text-sm" placeholder="enter item name here" type="text" name="search"/>
                        <p className='mt-4 flex flex-col items-center gap-6'>
                            <h2 style={{fontFamily:'Goblin One'}}  className='text-black text-lg text-center'>Minimum bid in {"(ETH)"}</h2>
                            <ul className='grid grid-cols-2 gap-3 place-items-center mt-4'>
                                <li className='bg-black text-3xl text-white w-32 text-center rounded-3xl px-5'>0.01</li>
                                <li className='bg-black text-3xl  text-white w-32  text-center rounded-3xl px-5'>0.05</li>
                                <li className='bg-black text-3xl text-white w-32 text-center rounded-3xl px-5'>0.1</li>
                                <li className='bg-black text-3xl text-white w-32 text-center rounded-3xl px-5'>0.25</li>
                                <li className='bg-black text-3xl text-white w-32 text-center rounded-3xl px-5'>0.5</li>
                                <li className='bg-black text-3xl text-white w-32 text-center rounded-3xl px-5'>1</li>
                            </ul>
                            <p className='bg-black w-[60%] rounded-2xl'>
                                <h3 className='text-white text-center py-3'>List item</h3>
                            </p>
                        </p>
                    </p>
                </section>
            </div>
        </div>
    </div>
  )
}
