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
    name: "VICTORY OSAREME ISEGHOHIMHEN",
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
        
            <h1 className='lg:text-6xl text-4xl font-bold Capitalize -mt-2'>Our Lawyers</h1>
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