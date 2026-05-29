import React, { useContext, useState } from 'react' // 1. Added useState here
import SidebarNew from './components/SidebarNew'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'

function App() {

  const { audioRef, track } = useContext(PlayerContext);
  
  // 2. CREATE THE SEARCH STATE HERE
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <SidebarNew />
        
        {/* 3. PASS STATE AND SETTER INTO DISPLAY COMPONENT */}
        <Display searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App

