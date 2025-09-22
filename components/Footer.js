"use client"
import React from 'react'
import {Facebook, Linkedin, X, Instagram } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
   <footer class="bg-[#161920] text-white py-10 px-24">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">

    <div class="w-full md:w-1/3">
      <p class="mb-1 text-[14px] ml-4">Subscribe :</p>
      <div class="flex items-center bg-gray-100 rounded-full overflow-hidden">
        <input 
          type="email" 
          placeholder="Enter Your Email Address" 
          class="flex-1 bg-gray-100 px-4 py-3 text-gray-600 text-sm focus:outline-none"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              // Handle the enter key press event here
              console.log('Email submitted:', e.target.value);
            } }}
        />
        <button class="bg-black text-white p-2 max-lg:hidden rounded-full mr-1 m-1">
            <Image src="/send.png" alt='send message' className="max-lg:size-8 max-lg:w-12" width={40} height={0} />
        </button>
      </div>
    </div>

    <div class="flex h-full items-center gap-x-4">
      <Link href="#" class="bg-gray-800  hover:bg-orange-500 p-3 rounded-full">
        <Linkedin/>
      </Link>
      <Link href="#" class="bg-gray-800 hover:bg-purple-500  p-3 rounded-full">
        <Instagram/>
      </Link>
      <Link href="#" class="bg-gray-800 hover:bg-blue-800 p-3 rounded-full">
        <Facebook/>
      </Link>
      <Link href="#" class="bg-gray-800 hover:bg-cyan-500 p-3 rounded-full">
        <X/>
      </Link>
    </div>


    <div class="text-center md:text-right text-sm space-y-2">
      <div class="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
        <a href="#" class="hover:underline">Contact Us</a>
        <a href="#" class="hover:underline">Privacy Policy</a>
        <a href="#" class="hover:underline">Cookie Policy</a>
      </div>
      <p class="text-gray-400">
       Hawkes Legal © 2025. All Rights Reserved.
      </p>
    </div>
  </div>
</footer>
  )
}

export default Footer