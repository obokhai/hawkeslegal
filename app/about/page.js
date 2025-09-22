import CustomHeader from '@/components/CustomHeader'
import Header from '@/components/Header'
import Heading from '@/components/Heading'
import ValueCard from '@/components/ValuesCard'
import Image from 'next/image'
import React from 'react'
import { Award, Gem, Lightbulb, User, Rocket, Zap } from 'lucide-react';

const About = () => {
  return (
    <div>
        <CustomHeader title="About Hawkes" />
        <div className='bg-white min-h-36 py-24 lg:px-16 px-12 relative'>
            {/* <Image src="/about_overlay.jpg" alt="about" width={200} height={200} className='absolute top-0 left-0 -translate-x-12 size-80 transform '  /> */}
            <Heading/>
           <div className="grid grid-cols-1 w-full mt-32 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1: PASSION */}
                <ValueCard
                    title="PRECISE"
                    description="Passion for results: We show pride, enthusiasm and dedication in everything that we do. We are committed to delivering high quality services and providing exceptional results."
                    src="/precise.png"
                    bg="bg-[#f8eeef]"
                />
                
                {/* Card 2: EXCELLENCE */}
                <ValueCard
                    title="SWIFT"
                    description="Commitment to Excellence: We deliver quality services of unmatched value, constantly raising the bar on our performance."
                    src="/swift.png"
                    bg="bg-[#f0f0f6]"
                />
                
                {/* Card 3: CREATIVITY */}
                <ValueCard
                    title="EFFICIENT"
                    description="Creativity puts us at the cutting edge of legal solutions: We constantly stay at the forefront of developments in the market, creating bespoke solutions and generating new and alternative real-time ideas to solving both traditional and emerging problems."
                    src="/efficient.png"
                    bg="bg-[#fbf9f7]"
                />
                
                </div>
            </div>
    </div>
  )
}

export default About