import CustomHeader from '@/components/CustomHeader'
import LawyerCard from '@/components/LawyerCard';
import TeamCard from '@/components/TeamCard'
import Link from 'next/link';
import { ArrowRightIcon, MoveRight } from 'lucide-react';
import React from 'react'

const teamMembers = [
  {
    name: "TEMITAYO OJELEKE",
    image: "/man.jpg",
    title: "Partner", // Example
    href: "temitayo"
  },
  {
    name: "FADEKE AJAO",
    image: "/woman-1.jpg",
    title: "Associate", // Example
    href:"fadeke"
  },
  {
    name: "HENRY MEJULU",
    image: "/man.jpg",
    title: "Partner",
    href: "henry"
  },
  {
    name: "DIPO TORHUKERHIJO",
    image: "/man.jpg",
    title: "Associate",
    href: "dipo"
  },
  {
    name: "CHINONYELUM IGBOEKWE",
    image: "/woman-1.jpg",
    title: "Partner",
    href: "chinonyelum"
  },
  {
    name: "VICTORY OSAREME ISEGOHEMHEN",
    image: "/woman-2.jpg",
    title: "Associate",
    href : "victory"
  },
  {
    name: "OPRITE PEPPLE ROWLAND",
    image: "/woman-3.jpg",
    title: "Partner",
    href: "oprite"
  },
  {
    name: "AANOLULUWAPO AWODEINDE",
    image: "/woman-1.jpg",
    title: "Associate",
    href: "aanu"
  },
];

const Team = () => {
  return (
    <>
        <CustomHeader title="Team" />
        <div className='flex flex-col gap-y-40  min-h-60 bg-white px-16 mt-12 py-20 pt-16'>
            <div className='flex justify-between text-lg items-center gap-x-12'>
                <div className='w-5/6 flex justify-between gap-x-12 items-start'>
                    <h1 className='text-6xl font-bold Capitalize -mt-3'>Lawyers</h1>
                    <p className='flex-1 text-gray-400 font-extralight w-[500px] justify-self-end'>At Hawkes Legal, we carefully select lawyers based on their ability to apply intelligence to solve real-world problems. We intentionally recruit and train individuals who possess innovative thinking, knowledge, and the ability to generate solutions while providing passionate advocacy for our clients in all legal matters.</p>

                </div>
                <span className='w-1/6 flex justify-end -mt-28 '>
                <Link href="/team" className=' capitalize flex items-center gap-x-3 font-extralight'>view all <MoveRight size={22}/> </Link>
                </span>
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 p-16">
          {teamMembers.map((member, index) => (
            <LawyerCard key={index} 
              name = {member.name}
              imageUrl={member.image}
              href={member.href}
            />
          ))}
        </div>
    </>
  )
}

export default Team