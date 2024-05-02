import React from 'react'
import homelogo from '/src/assets/home-logo.png'
// import Helpinghand from '/src/assets/helping-hand.svg'
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const HeaderSection = () => {
    return (
        <>
            <header className='flex flex-row justify-between py-4 px-5 bg-slate-500'>
                <section className='flex flex-row gap-8'>
                    <div className='flex items-center'  >
                        <img src={homelogo} alt="logo" className='size-10' />
                    </div>
                    <div className=''>
                        
                        <h3 className="text-xl font-bold text-black dark:text-hadith-deepoffwhite">হাদিস সমূহ</h3>
                        <h6 className="text-sm text-[#404040] dark:text-hadith-deepoffwhite">হাদিস পড়ুন শিখুন এবং জানুন</h6>
                    </div>
                </section>
                <section className='flex gap-16'>
                      {/* <div >
                        <input className='px-10 py-3 border-solid border-2 border-gray-300 rounded-md ' type="text" placeholder='Search Hadith' />

                      </div> */}
                       <div className='relative'>
                        <input className='pl-10 pr-3 py-3 border-solid border-2 border-gray-300 rounded-lg' type="text" placeholder='Search Hadith' />
                        <div className='absolute inset-y-1 pl-3 pb-1 flex items-center pointer-events-none'>
                            <IoIosSearch className='text-gray-500 text-xl mt-2' />
                        </div>
                    </div>
                      <div>
                        <button className='flex flex-row rounded-lg bg-emerald-600 py-3 px-5 text-white justify-center items-center gap-1'> 
                            <p>সাপোর্ট করুন</p>
                            <FaHandHoldingHeart className='size-6' />
                        </button>
                      </div>
                </section>
            </header>
        </>
    )
}

export default HeaderSection