import Image from 'next/image';
import React from 'react';

// The Icon prop is a Lucide React component passed from the parent
const ValueCard = ({ title, description,src }) => {
  return (
    <div className={`flex flex-col gap-y-6 p-8  rounded-lg relative shadow-lg`}>
      {/* Render the icon component passed via props */}
      {/* {Icon && <Icon size={43} className="text-[#a11622] font-extralight mb-4" />} */}
      <Image size={43} className="text-[#a11622] object-contain font-extralight mb-4 h-20 w-20" alt='' height={50} width={50} src={src}  />
      {/* Title */}
      <span className='z-10'>

        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm font-light leading-6 tracking-wide">{description}</p>
      </span>
    </div>
  );
};

export default ValueCard;