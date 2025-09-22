"use client"

import ContactInfo from '@/components/ContactInfo'
import CustomHeader from '@/components/CustomHeader'
import Map from '@/components/Map'
import { House, MailOpen, PhoneIcon } from 'lucide-react'
import { AtSign } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <div className='w-full'>
        <CustomHeader title="Contact Us" />
        <div className='flex lg:items-center max-lg:flex-col lg:justify-between lg:px-16 px-12 py-6 mx-auto gap-x-6'>
        <ContactInfo icon={House} content={`Hawkes suite, 23A Marina, Mamman Kontagora House, Lagos, Nigeria.`} />
         <ContactInfo icon={AtSign} content={`info@hawkeslegal.com`} /> 
         <ContactInfo icon={PhoneIcon} content={`(+234) 08125540672, 020 1 3427086`} />
        </div>
      <Map />


    </div>
  )
}

export default Contact