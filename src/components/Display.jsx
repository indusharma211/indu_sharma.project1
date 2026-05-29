import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import SearchPage from './SearchPage'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'

// Receives search states passed down cleanly from App.jsx
const Display = ({ searchQuery, setSearchQuery }) => {

  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split('/').pop() : "";
  const bgColor = isAlbum ? albumsData[Number(albumId)]?.bgColor || "#121212" : "#121212";

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      displayRef.current.style.background = `#121212`;
    }
  }, [isAlbum, bgColor]);

  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      
      {/* 1. Only one single global Navbar rendered here */}
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <Routes>
        {/* 2. Main Page Views Routing Configuration */}
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
        
        {/* 3. Search Page View Linking state elements */}
        <Route path='/search' element={<SearchPage searchQuery={searchQuery} />} />
      </Routes>
    </div>
  )
}

export default Display
