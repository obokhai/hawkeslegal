"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/legal_services.jpg",
    title: "Top notch time focused and inovative legal services",
    desc: "",
    tags: ["Legal Services", "Legal Support", "Legal Solutions","Legal Growth"],
    active: "Legal Services",
  },
  {
    src: "/legal_support.jpg",
    title: "More than just representation, we provide legal support that keep you advancing",
    desc: "",
       tags: ["Legal Services", "Legal Support", "Legal Solutions","Legal Growth"],
    active: "Legal Support",
  },
  {
    src: "/legal_solution.jpg",
    title: "We provide comprehenive legal solutions for your business ",
    desc: "",
    tags: ["Legal Services", "Legal Support", "Legal Solutions","Legal Growth"],
    active: "Legal Solutions",
  },
  {
    src: "/bg-hawkes-slide.jpg",
    title: "We mind all facts of your legal business so you can mind the growth",
    desc: "",
tags: ["Legal Services", "Legal Support", "Legal Solutions","Legal Growth"],
    active: "Legal Growth",
  },
];

export default function FadeInSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 8500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto h-screen lg:px-8 overflow-hidden">
      {/* Background images container */}
      <div className="absolute inset-0">
        <Image
          key={activeIndex}
          src={slides[activeIndex].src}
          alt={`Slide ${activeIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-1500"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#152333] w-full opacity-50" />

      {/* Main content container */}
      <div className="relative z-20 flex flex-col lg:flex-row lg:items-center lg:justify-between text-white lg:p-4 px-6 lg:p-10 h-full w-full">
        {/* Text section */}
        <div className="flex flex-col items-center lg:items-start justify-center max-lg:justify-end text-center lg:text-left h-1/2 lg:h-full w-full lg:w-[450px] transition-all duration-300">
          <h1 className="text-3xl font-bold mb-4 leading-16 capitalize">
            {slides[activeIndex].title}
          </h1>
          <p className="text-sm font-extralight font-manrope max-w-2xl">
            {slides[activeIndex].desc}
          </p>
        </div>

        {/* Static tags and services section */}
        <div className="flex flex-col justify-center h-1/2 lg:h-full w-full lg:w-[400px] mt-8 lg:mt-0">
          <h1 className="font-bold mb-8 text-center lg:text-right">Practice Areas</h1>
          <div className="flex flex-col gap-y-6 items-center lg:items-end">
            {isMobile ? (
              // ✅ Only show the active tag on mobile
              <div className="flex justify-center items-center gap-x-4 w-full">
                {/* <div className="h-[2px] w-4 bg-orange-500"></div> */}
                <p className="text-xl text-orange-500">
                  {slides[activeIndex].active}
                </p>
              </div>
            ) : (
              // ✅ Show the full list on desktop
              slides[activeIndex].tags.map((tag, index) => (
                <div key={index} className="flex justify-center lg:justify-end items-center gap-x-4 w-full">
                  <div
                    className={`h-[2px] w-4 bg-orange-500 ${
                      tag === slides[activeIndex].active ? "lg:block max-lg:hidden" : "hidden"
                    }`}
                  ></div>
                  <p
                    className={`text-sm transition-colors duration-300 ${tag === slides[activeIndex].active ? "text-orange-500" : "text-white"}`}
                  >
                    {tag}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}