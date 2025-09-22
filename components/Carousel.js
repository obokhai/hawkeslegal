// "use client";
// import Slider from "react-slick";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const slides = [
//   {
//     title: "Temitayo Ojeleke",
//     description: "",
//     image: "/man.jpg",
//   },
//   {
//     title: "Fadeke Ajao",
//     description: "",
//     image: "/woman-1.jpg",
//   },
//   {
//     title: "Henry Mejulu",
//     description: "",
//     image: "/man.jpg",
//   },
//   {
//     title: "Victory Osareme",
//     description: "",
//     image: "/woman-3.jpg",
//   },
// ];

// function SampleNextArrow({ onClick }) {
//   return (
//     <button
//       className="absolute -bottom-12 lg:right-12 max-lg:left-1/2 translate-x-4 bg-white border border-orange-500 p-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition"
//       onClick={onClick}
//     >
//       <ChevronRight size={18} />
//     </button>
//   );
// }

// function SamplePrevArrow({ onClick }) {
//   return (
//     <button
//       className="absolute -bottom-12 lg:right-14 max-lg:left-1/2 -translate-x-12 bg-white border border-orange-500 p-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition"
//       onClick={onClick}
//     >
//       <ChevronLeft size={18} />
//     </button>
//   );
// }

// export default function Carousel() {
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToScroll: 3,
//     arrows: true,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//   };

//   return (
//     <div className="lg:-ml-8 max-lg:flex max-lg:flex-col max-lg:p-4">
//       <Slider {...settings}>
//         {slides.map((slide, idx) => (
//           <div key={idx} className={`px-2`}>
//             <div className={`relative h-80 border-0 overflow-hidden group`}>
//               <Image
//                 src={slide.image}
//                 alt={slide.title}
//                 fill
//                 className="object-cover" // Removed redundant height/width classes
//               />
//               <div className="absolute inset-0 bg-gradient-to-t "></div>
//               <div className="absolute bottom-0 left-0 right-0 px-4 py-6 hover:text-white text-center bg-black/70">
//                 <h4
//                   className={`text-sm uppercase font-bold text-white text-xl `}
//                 >
//                   {slide.title}
//                 </h4>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }


"use client";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    title: "Temitayo Ojeleke",
    description: "",
    image: "/man.jpg",
  },
  {
    title: "Fadeke Ajao",
    description: "",
    image: "/woman-1.jpg",
  },
  {
    title: "Henry Mejulu",
    description: "",
    image: "/man.jpg",
  },
  {
    title: "Victory Osareme",
    description: "",
    image: "/woman-3.jpg",
  },
];

function SampleNextArrow({ onClick }) {
  return (
    <button
      className="absolute -bottom-12 lg:right-12 max-lg:left-1/2 translate-x-4 bg-white border border-orange-500 p-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition"
      onClick={onClick}
    >
      <ChevronRight size={18} />
    </button>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <button
      className="absolute -bottom-12 lg:right-14 max-lg:left-1/2 -translate-x-12 bg-white border border-orange-500 p-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition"
      onClick={onClick}
    >
      <ChevronLeft size={18} />
    </button>
  );
}

export default function Carousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default for large desktops
 // Match slidesToShow for smooth transitions
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const mobileSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Default for large desktops
 // Match slidesToShow for smooth transitions
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="lg:-ml-8 max-lg:flex max-lg:flex-col max-lg:p-4">
      <div className="max-lg:hidden">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className={`px-2`}>
            <div className={`relative h-80 border-0 overflow-hidden group`}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t "></div>
              <div className="absolute bottom-0 left-0 right-0 px-4 py-6 hover:text-white text-center bg-black/70">
                <h4
                  className={`uppercase font-bold text-white text-xl `}
                >
                  {slide.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      <div className="lg:hidden">
      <Slider {...mobileSettings}>
        {slides.map((slide, idx) => (
          <div key={idx} className={`px-2`}>  
            <div className={`relative h-80 border-0 overflow-hidden group`}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t "></div>
              <div className="absolute bottom-0 left-0 right-0 px-4 py-6 hover:text-white text-center bg-black/70">
                <h4 
                  className={`uppercase font-bold text-white text-xl `}
                >
                  {slide.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
}