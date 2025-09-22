import React from 'react'

const Heading = () => {
  return (
    <div className='flex max-lg:flex-col gap-x-16 justify-between'>
        <div id='heading' className='lg:text-5xl text-2xl font-bold leading-snug lg:w-[540px]'>
            <p className='uppercase text-xs tracking-wider '>values</p>
            <h2 className='capitalize'>Boundless potential through collective efforts</h2>
        </div>
        <div id='content' className=' space-y-6 text-gray-600 mt-8 font-light'>
            <p>At Hawkes Legal, we continually seek to improve ourselves.<br/> As long as we work together, there are no limits to what we can achieve.</p>
            <p>
                Passion drives us.<br/>
                Excellence distinguishes us..<br/>
                Creativity defines us..<br/>
                Relationships guide us..<br/>
                Integrity is our watchword..<br/>
                Empowerment is central to our goals..<br/>
            </p>
        </div>
    </div>
  )
}

export default Heading