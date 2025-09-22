"use client"
import React from 'react'
import Image from 'next/image'
const ContactInfo = ({ icon: Icon, content }) => {
  return (
    <div className='flex items-center max-lg:my-4 lg:justify-center items-center w-80'>
      {Icon && <Icon className="text-gray-700 mr-2 size-9" />}
      <p>{content}</p>
    </div>
  )
}

export default ContactInfo