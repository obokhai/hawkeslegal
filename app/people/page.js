import Carousel from '@/components/Carousel'
import CustomHeader from '@/components/CustomHeader'
import PeopleHeading from '@/components/PeopleHeading'
import { ArrowRightIcon, MoveRight } from 'lucide-react'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'
const People = () => {
  return (
    <div className='space-y-14'>
        <CustomHeader title="Our People" />
        <PeopleHeading />
        <div className='flex flex-col lg:gap-y-40  min-h-60 bg-gray-100 lg:px-16 py-20 px-12 lg:w-full lg:pt-16'>
            <div className='flex max-lg:flex-col lg:justify-between text-lg lg:items-center lg:gap-x-12 max-lg:gap-y-8'>
                <div className='lg:w-5/6 flex max-lg:flex-col justify-between gap-x-12 items-start'>
                    <h1 className='lg:text-6xl font-bold Capitalize -mt-2'>Lawyers</h1>
                    <p className='lg:flex-1 text-gray-400 font-extralight lg:w-[500px] justify-self-end'>At Hawkes Legal, we carefully select lawyers based on their ability to apply intelligence to solve real-world problems. We intentionally recruit and train individuals who possess innovative thinking, knowledge, and the ability to generate solutions while providing passionate advocacy for our clients in all legal matters.</p>

                </div>
                <span className='lg:w-1/6 flex justify-end lg:-mt-28 '>
                <Link href="/team" className=' capitalize flex items-center gap-2'>view all <MoveRight/> </Link>
                </span>
            </div>

            <Carousel/>
        </div>
    </div>
  )
}

export default People