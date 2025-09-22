import React from 'react'

const PeopleHeading = () => {
  return (
  <section class="lg:px-16 px-12 bg-white text-gray-800">
    <div class="flex flex-col lg:flex-row lg:gap-x-12 items-center lg:items-start">
      
      <div class="lg:w-1/2 mb-8 lg:mb-0">
        <h2 class="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Experience, creativity, excellence – tailored for you
        </h2>
        <p class="text-lg text-gray-600 max-w-lg">
          Our team of experienced lawyers is committed to ensuring that our clients receive the highest quality legal representation, whether they are businesses or individuals.
        </p>
      </div>

      <div class="lg:w-1/2 flex flex-col sm:flex-row space-y-4 justify-center lg:mt-12 sm:space-y-0 sm:space-x-4">
        
        <div class="flex-1 p-12 text-center bg-blue-700 text-white">
          <p class="text-5xl font-extrabold mb-2">100+</p>
          <p class="text-sm uppercase tracking-wider">Lawyers</p>
        </div>
        
        <div class="flex-1 p-12 text-center bg-gray-900 text-white">
          <p class="text-5xl font-extrabold mb-2">17</p>
          <p class="text-sm uppercase tracking-wider">Partners</p>
        </div>
        
      </div>

    </div>
  </section>
  )
}

export default PeopleHeading