import React from 'react'

import { dayData } from '../constants'
import SectionTitle from "../components/SectionTitle";

function Schedule({ day }) {
  return (
    <div>
        <SectionTitle title={dayData[day].date} />
        <div className='text-xl pb-10 flex flex-col gap-10'>
            {dayData[day].schedule.map((item, index) => (
                <div className='flex flex-col lg:flex-row gap-1 lg:gap-32 mb-6' key={index}>
                    <div className=' text-nord1 font-bold '>{item.time}</div>
                    <div className='max-w-3xl w-full'>
                        <p className='text-nord1 font-bold mb-4 '>{item.title}</p>
                        <p className='text-gray-500 font-semibold'>{item.description}</p>
                        <div>
                        {item.speakers.map((speaker, index) => (
                                <p className='text-sm font-semibold'>{speaker.name}</p>))}
                        </div>
                        <div className='flex flex-row-reverse justify-center sm:justify-start mt-2 sm:mt-0'>
                            {item.speakers.map((speaker, index) => (
                                <img 
                                    src={speaker.photo}
                                    key={index}
                                    className={` w-14 h-14 sm:w-10 sm:h-10 rounded-full relative object-cover object-top ${index > 0 ? 'left-2' : ''}`} 
                                />))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Schedule