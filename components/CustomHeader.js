// components/CustomHeader.js
import Image from 'next/image'; // Assuming you are using Next.js for Image component

const CustomHeader = ({ title, justify, p1,p2,p3 }) => {
  return (
    <header className="relative w-full lg:h-96 h-60 flex font-manrope items-end pb-16 lg:px-16 px-12 bg-gradient-to-r from-gray-950 to-blue-950 overflow-hidden">
      <Image
        src="/2.jpg" // You'll need an abstract background image like the one in your example
        alt="Abstract background pattern"
        fill
        className="object-cover object-center opacity-20 mix-blend-screen pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Title */}
       <div 
        className={`
          flex flex-col items-center ${justify} relative w-full max-w-7xl lg:mx-auto
        `}
      >
        <h1 className={`text-white lg:text-7xl text-3xl font-semibold font-manrope leading-tight drop-shadow-lg`}>
          {title}
        </h1>
        <p className='flex gap-x-12 text-xs mt-8 capitalize text-white items-center '>{p1} <span className={` ${p1 ?'h-6 w-[1px] bg-white':''}`} /> {p2} <span className={`${p2 ?'h-6 w-[1px] bg-white':''}`} />{p3}</p>
      </div>
    </header>
  );
};

export default CustomHeader;