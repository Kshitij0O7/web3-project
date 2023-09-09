import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Upload from '../../assets/upload.png'
import { ethers } from 'ethers';
function seller() {
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [minBid, setMinBid] = useState("");
    const [isSelected, setIsSelected] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Form is submitted");
        console.log(name);
        console.log(image);
        console.log(minBid);
    }
  return (
    <div>
        <Navbar/>
        {/* {console.log("Console Working")} */}
        <form className='flex flex-row bg-[#0314B0] py-36 justify-evenly' onSubmit={handleSubmit}>
            <section className='flex flex-col justify-center items-center gap-5'>
                <div className='w-[674px] h-[561px] bg-black rounded-[75px] flex flex-col justify-center items-center'>
                    <img src={Upload}/>
                    <section className='text-white flex gap-5'>
                        <p className='bg-white w-5 h-5 rounded-full'></p>
                        <p className='bg-white w-5 h-5 rounded-full'></p>
                        <p className='bg-white w-5 h-5 rounded-full'></p>
                    </section>
                    <p className='text-white text-xl mt-4'>Upload a image of item</p>
                </div>
                <p className='bg-white relative p-4 rounded-[100px] w-[439px]'>
                    <input type = 'file' className='flex-1 opacity-0 absolute w-full h-full inset-0' onChange={(e)=>{setImage(e.target.files[0])}}/> 
                    <h2 className='text-black text-lg text-center'>Upload</h2>
                </p>
            </section>
            <div>
                <section className='w-[629px] h-[629px] bg-white rounded-[100px] p-12'>
                    <h2 style={{fontFamily:'Goblin One'}}  className='text-black text-xl text-center'>Add Item</h2>
                    <p className='pr-10 mt-10'>
                        <h2 style={{fontFamily:'Goblin One'}}  className='text-black text-xl my-5'>Name</h2>
                        <input className="w-full placeholder:italic mb-5 placeholder:text-slate-400  border-b-2 border-b-black  py-2 pl-9 pr-3  sm:text-sm" placeholder="enter item name here" type="text" name="search" onChange={(e)=>{setName(e.target.value)}}/>
                        <div className='mt-4 flex flex-col items-center gap-6'>
                            <h2 style={{fontFamily:'Goblin One'}}  className='text-black text-lg text-center'>Minimum bid in {"(ETH)"}</h2>
                            <ul className='grid grid-cols-2 gap-3 place-items-center mt-4'>
                                <li className='bg-black text-3xl text-white w-32 relative text-center rounded-3xl px-5'>
                                    <input 
                                        type='radio' className='flex-1 opacity-0 absolute w-full h-full inset-0' name= 'min'  
                                        onChange={(e)=>{setMinBid('0.01')}}
                                    />
                                    0.01
                                </li>
                                <li className='bg-black relative text-3xl text-white w-32 text-center rounded-3xl px-5'>
                                    <input 
                                        className='flex-1 opacity-0 absolute w-full h-full inset-0'
                                        type='radio' name = 'min' onChange={(e)=>{setMinBid('0.05')}}
                                    />
                                    0.05
                                </li>
                                <li className='bg-black text-3xl relative text-white w-32 text-center rounded-3xl px-5'>
                                    <input 
                                        type='radio' className='flex-1 opacity-0 absolute w-full h-full inset-0'name = 'min' 
                                        onChange={(e)=>{setMinBid('0.1')}}
                                    />
                                    0.1
                                </li>
                                <li className='bg-black text-3xl relative text-white w-32 text-center rounded-3xl px-5'>
                                    <input 
                                        className='flex-1 opacity-0 absolute w-full h-full inset-0'
                                        type='radio' name = 'min' onChange={(e)=>{setMinBid('0.25')}}
                                    />
                                    0.25
                                </li>
                                <li className='bg-black text-3xl relative text-white w-32 text-center rounded-3xl px-5'>
                                    <input
                                        className='flex-1 opacity-0 absolute w-full h-full inset-0'
                                        type='radio' name = 'min' onChange={(e)=>{setMinBid('0.5')}}
                                    />
                                    0.5
                                </li>
                                <li className='bg-black text-3xl relative text-white w-32 text-center rounded-3xl px-5'>
                                    <input
                                        className='flex-1 opacity-0 absolute w-full h-full inset-0'
                                        type='radio' name = 'min' onChange={(e)=>{setMinBid('1')}}
                                    />
                                    1
                                </li>
                            </ul>
                            <button className='bg-black w-[60%] rounded-2xl' >
                                {/* List item */}
                                <h3 className='text-white text-center py-3' type = 'submit'>List item</h3>
                            </button>
                        </div>
                    </p>
                </section>
            </div>
        </form>
    </div>
  )
}

export default seller;