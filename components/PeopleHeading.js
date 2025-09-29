import Image from 'next/image'
import React from 'react'

const PeopleHeading = () => {
  return (
  <section class="lg:px-16 px-12 lg:w-[800px] mx-auto text-center items-center bg-white text-gray-800">
    <div class="flex flex-col lg:gap-x-12 items-center lg:justify-center lg:items-start">
      
      <div class=" items-center  mb-8 lg:mb-0 flex flex-col justify-center">
        <h2 class="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Teamwork, Professionalism & Excellence - All for you
        </h2>
        <p class="text-lg text-gray-600 max-w-lg capitalize">
          Our team of Lawyers are carefully selected to combine their legal expertise, professional achievements, integrity, dedication and commitment to create smart solutions for our clients.
        </p>
      </div>

      <div class="lg:w-1/2 flex flex-col sm:flex-row space-y-4 justify-center lg:mt-12 sm:space-y-0 sm:space-x-4">
        
        {/* <div class="flex-1 p-12 text-center bg-blue-700 text-white">
          <p class="text-5xl font-extrabold mb-2">100+</p>
          <p class="text-sm uppercase tracking-wider">Lawyers</p>
        </div>
        
        <div class="flex-1 p-12 text-center bg-gray-900 text-white">
          <p class="text-5xl font-extrabold mb-2">17</p>
          <p class="text-sm uppercase tracking-wider">Partners</p>
        </div> */}
          {/* <Image src="/people.png" alt="people" width={400} height={400} className=' objec-contain rounded-lg shadow-lg h-80 w-80'/> */}
      </div>

    </div>
  </section>
  )
}

export default PeopleHeading