import React from 'react';

const FooterLinks = () => {
  return (
    <div className="w-full bg-[#121212] text-zinc-400 px-6 py-10 mt-12 border-t border-zinc-800">
      {/* Upper Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        
        {/* Column 1: Company */}
        <div className="flex flex-col gap-2.5">
          <p className="text-white font-bold text-sm mb-1">Company</p>
          <a href="#" className="hover:text-white hover:underline text-sm transition-all">About</a>
          <a href="#" className="hover:text-white hover:underline text-sm transition-all">Jobs</a>
          <a href="#" className="hover:text-white hover:underline text-sm transition-all">For the Record</a>
        </div>

        {/* Column 2: Communities */}
        <div className="flex flex-col gap-2.5">
          <p className="text-white font-bold text-sm mb-1">Communities</p>
          <a href="#" className="hover:text-white hover:underline text-sm transition-all">For Artists</a>
          <a href="#" className="hover:text-white hover:underline text-sm transition-all">Developers</a>
          <a href="#" className="hover:text-white hover:underline text-sm transition-all">Advertising</a>
          <a href="#" className="hover:text-white hover:underline text-sm transition-all">Investors</a>
          <a href="#" className="hover:text-white hover:underline text-sm transition-all">Vendors</a>
        </div>

        {/* Column 3: Useful Links */}
        <div className="flex flex-col gap-2.5">
          <p className="text-white font-bold text-sm mb-1">Useful links</p>
          <a href="#" className="hover:text-white hover:underline text-sm transition-all">Support</a>
          <a href="#" className="hover:text-white hover:underline text-sm transition-all">Free Mobile App</a>
          <a href="#" className="hover:text-white hover:underline text-sm transition-all">Popular by Country</a>
          <a href="#" className="hover:text-white hover:underline text-sm transition-all">Import your music</a>
        </div>

        {/* Column 4: Spotify Plans */}
        <div className="flex flex-col gap-2.5">
          <p className="text-white font-bold text-sm mb-1">Spotify Plans</p>
          <a href="#" className="hover:text-white hover:underline text-sm transition-all">Premium Standard</a>
          <a href="#" className="hover:text-white hover:underline text-sm transition-all">Premium Platinum</a>
          <a href="#" className="hover:text-white hover:underline text-sm transition-all">Premium Student</a>
          <a href="#" className="hover:text-white hover:underline text-sm transition-all">Spotify Free</a>
        </div>

      </div>

      <hr className="border-zinc-800 my-6" />

      {/* Bottom Copyright Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-zinc-400 pb-24">
        <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:text-white">Legal</a>
          <a href="#" className="hover:text-white">Safety & Privacy Center</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Cookies</a>
          <a href="#" className="hover:text-white">About Ads</a>
          <a href="#" className="hover:text-white">Accessibility</a>
        </div>
         
        <p className="text-zinc-400 font-medium">
          &copy; {new Date().getFullYear()} Spotify AB | <span className="text-green-500 font-bold">Developed by Indu Sharma</span>
        </p>

      </div>
    </div>
  );
};

export default FooterLinks;
