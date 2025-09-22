'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { X } from 'lucide-react';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
        if (query.trim()) {
      // Redirect to the dedicated search page with the query as a URL parameter
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setIsOpen(false); // Close the search bar after redirecting
      setQuery(''); // Clear the input
    }
  };

  return (
    <div>
      {/* Search Button */}
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="text-white text-2xl mt-2 cursor-pointer focus:outline-none">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      )}

      {/* Search Input and Close Button */}
      {isOpen && (
        <div className={`flex flex-col justify-between w-full transform transition-transform duration-1500 ease-in-out`}>
          <div className='flex items-center min-h-20  lg:gap-x-[800px] justify-center absolute top-0 left-0 lg:w-full lg:mx-auto p-4 bg-gray-950'>
            <Image src="/logo.svg" alt="Logo" width={120} height={0} className="mr-4" />
            <button onClick={() =>setIsOpen(false)} className="text-white  text-2xl focus:outline-none">
              <X size={28} className=""/>
            </button> 
          </div>
        <div className={`absolute top-30 left-0 w-full placeholder:text-xl text-xl text-white font-bold min-h-[300px] flex items-center justify-center bg-gray-950 p-4`}>
          <input
            type="text"
            placeholder="Begin Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
            className="w-full max-w-[960px] bg-transparent transition ease-in-out text-white text-lg focus:outline-none border-b-2 py-4 border-white  px-6 placeholder-white"
          />
        </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;