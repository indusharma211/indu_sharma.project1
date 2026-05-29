import React from 'react';
import { songsData } from '../assets/assets'; // Links directly to your real songs array
import SongItem from './SongItem';

const SearchPage = ({ searchQuery = "" }) => {
  
  // Filters your real tracks instantly as you type
  const filteredSongs = songsData.filter(song => 
    song.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 min-h-screen">
      {searchQuery === "" ? (
        /* 1. Show Spotify-style colorful cards if search input is completely empty */
        <div>
          <h2 className="text-2xl font-bold mb-6">Browse all categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div className="bg-pink-600 h-36 rounded-xl p-4 font-bold text-xl relative overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform">Podcasts</div>
            <div className="bg-green-600 h-36 rounded-xl p-4 font-bold text-xl relative overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform">New Releases</div>
            <div className="bg-blue-600 h-36 rounded-xl p-4 font-bold text-xl relative overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform">Live Events</div>
            <div className="bg-purple-600 h-36 rounded-xl p-4 font-bold text-xl relative overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform">Made For You</div>
            <div className="bg-orange-500 h-36 rounded-xl p-4 font-bold text-xl relative overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform">Pop Hits</div>
          </div>
        </div>
      ) : (
        /* 2. Show actual filtered tracks grid when text exists in the search bar */
        <div>
          <h2 className="text-2xl font-bold mb-6">Search Results for "{searchQuery}"</h2>
          
          {filteredSongs.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredSongs.map((item, index) => (
                <SongItem 
                  key={index} 
                  name={item.name} 
                  desc={item.desc} 
                  id={item.id} 
                  image={item.image} 
                />
              ))}
            </div>
          ) : (
            <p className="text-zinc-400 text-center py-12">No songs found matching your search.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
