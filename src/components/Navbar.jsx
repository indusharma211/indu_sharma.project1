import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

// 1. Receive the search state props from App.jsx
const Navbar = ({ searchQuery = "", setSearchQuery }) => {

  const navigate = useNavigate()

  return (
    <>
      <div className='w-full justify-between flex items-center font-semibold'>
        
        {/* Left Section: Navigation Arrows + Search Input */}
        <div className='flex items-center gap-3 w-full max-w-[500px]'>
          <div className='flex items-center gap-2'>
            <img onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
            <img onClick={() => navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
          </div>

          {/* 2. ADD THIS SEARCH INPUT BOX HERE */}
          <div className='flex items-center gap-2 bg-[#242424] px-4 py-2 rounded-full w-full'>
            <img className='w-4 text-zinc-400' src={assets.search_icon} alt="" />
            <input 
              type="text" 
              placeholder="What do you want to play?" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='bg-transparent text-white w-full outline-none text-sm font-normal placeholder-zinc-400'
            />
          </div>
        </div>

        {/* Right Section: Profile & Action Buttons */}
        <div className='flex items-center gap-4'>
          <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
          <p className='bg-black px-3 py-1 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
          <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>IS</p>
        </div>

      </div>

      {/* Category Pills Row */}
      <div className='flex items-center mt-4 gap-2'>
        <p className='bg-white text-black rounded-2xl px-4 py-1 cursor-pointer'>All</p>
        <p className='bg-black text-white rounded-2xl px-4 py-1 cursor-pointer'>Music</p>
        <p className='bg-black text-white rounded-2xl px-4 py-1 cursor-pointer'>Podcasts</p>
      </div>
    </>
  )
}

export default Navbar
