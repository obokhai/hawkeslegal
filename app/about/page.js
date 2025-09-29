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
        <CustomHeader title="About Hawkes" justify="items-center" p1='Precise' p2='swift' p3='efficient' />
        <div className='bg-white min-h-36 py-24 lg:px-16  flex flex-col items-center px-12 relative'>
            {/* <Image src="/about_overlay.jpg" alt="about" width={200} height={200} className='absolute top-0 left-0 -translate-x-12 size-80 transform '  /> */}
            {/* <Heading/> */}
            <p className='leading-12 text-lg font-montserrat text-center w-[800px] text-gray-600'>
                Hawkes Legal is a bespoke Nigerian law firm offering legal and business advisory services to a global clientele. The firm was founded with a vision of creating a value driven practice with global standards epitomising efficiency and professionalism. Our clients entrust us with important legal decisions impacting on their business, and we do the expected - provide first class legal advice and services that yield effective results. We endeavour to know the Law as it impacts our clients and strive to understand commerce, industry and the intrinsic nature and detail of each client's peculiar transactions. With the firm's members possessing extensive professional credentials and experience, we have a team of dynamic professionals geared towards providing proficient and effective legal cover. We establish relationships with law firms and professionals in diverse jurisdictions across the globe because of the need to facilitate and explore cross-border transactions and opportunities. We therefore cherish and maintain good working alliances with foreign professionals and law firms in several jurisdictions. This affords us the wildest possible perspective in the provision of first-rate legal services.
            {/*  */}
           </p>
        
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