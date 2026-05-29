import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({ name, image, desc, id }) => {

  const { playWithId } = useContext(PlayerContext)

  return (
    <div 
      onClick={() => playWithId(id)} 
      className='min-w-[180px] p-4 px-3 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#282828] hover:scale-[1.03] group relative'
    >
      <div className='relative mb-3 overflow-hidden rounded shadow-lg'>
        <img className='w-full object-cover rounded aspect-square' src={image} alt={name} />
        
        {/* 👇 THE GREEN PLAY BUTTON ICON (Hidden by default, slides up smoothly on hover) */}
        <div className='absolute bottom-2 right-2 bg-[#1db954] p-3 rounded-full shadow-2xl opacity-0 translate-y-3 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105 z-10'>
          <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="black">
            <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.288V1.713z"></path>
          </svg>
        </div>
      </div>

      <p className='font-bold text-sm text-white mb-1 truncate'>{name}</p>
      <p className='text-zinc-400 text-xs line-clamp-2 leading-relaxed'>{desc}</p>
    </div>
  )
}

export default SongItem
