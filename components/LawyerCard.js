"use client"
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
const LawyerCard = ({ name, imageUrl ,href}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/team/${href}`}
      className="relative w-full max-w-sm overflow-hidden shadow-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-full h-80">
        <Image
          src={imageUrl}
          alt={`Profile picture of ${name}`}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Name Overlay (always visible) */}
      <div className={`absolute ${isHovered? "-translate-y-20 transition-transform duration-300 ease-in-out":"translate-y-0"} left-0 right-0 p-4 py-6 text-white bg-black/70`}>
        <h2 className="text-xl font-bold">{name}</h2>
      </div>

      {/* Contact Links Overlay (appears on hover) */}
      {/* <div
        className={`absolute bottom-0 left-0 right-0 p-4 text-white bg-black/70 transition-transform duration-300 ease-in-out ${
          isHovered ? 'translate-y-0' : 'translate-y-full'
        }`}
      > */}
        {/* <div className="flex justify-start space-x-6">
          <a href="#" className="font-semibold hover:underline">Send Message</a>
          <a href={linkedinUrl ?linkedinUrl :`/team/${href}` } target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">LinkedIn</a>
        </div> */}
      {/* </div> */}
    </Link>
  );
};

export default LawyerCard;