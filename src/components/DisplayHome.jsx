import React from 'react'
import Navbar from './Navbar'
import  {albumsData} from '../assets/assets'
import AlbumItem from './AlbumItem'
import {songsData} from '../assets/assets'
import SongItem from './SongItem'
import FooterLinks from './FooterLinks';


const DisplayHome = () => {
  return (
    <>

     <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
             {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
     </div>
       <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
        <div className='flex overflow-auto'>
             {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
        </div>
     </div>
     <div className='p-4 text-white overflow-y-auto h-full'>
            
            {/* ... Keep all your existing Charts & Today's Biggest Hits code here ... */}

            {/* ---> PASTE THE LINE BELOW RIGHT HERE <--- */}
            <FooterLinks />

        </div>
    </>
  )
}

export default DisplayHome