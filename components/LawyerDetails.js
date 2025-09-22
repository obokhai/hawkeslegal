import React from 'react'

const LawyerDetails = ({p1,p2}) => {
  return (
     <div className='px-16 mt-16 font-light font-montserrat space-y-8 leading-8 text-lg  tracking-widest py-8'>
      <p className='leading-12'>{p1}</p>
      <p className='leading-12'>{p2}</p>
      </div>
  )
}

export default LawyerDetails