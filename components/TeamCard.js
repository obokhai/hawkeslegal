import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TeamCard = ({name, image, shortDesc, href}) => {
  return (
    <Link href={href ? `/team/${href}`:"/"} className='w-80 rounded-2xl h-full bg-white flex flex-col items-center text-center gap-y-6 shadow-xl p-6 '>
        <Image src={image} alt={`hawkes_${name}`} width={160} height={200} className='rounded-full w-32 h-32 shadow-lg' />
        <h2 className='text-3xl text-gray-700 font-manrope'>{name}</h2>
        <p className='leading-9 tracking-wider text-gray-500'>
          {shortDesc ? shortDesc : "lorem15"}
        </p>
    </Link>
  )
}

export default TeamCard