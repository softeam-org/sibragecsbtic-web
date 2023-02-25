import React from 'react'

import { dayData } from '../constants'

function Schedule({ day }) {
  return (
    <div className='max-w-6xl mx-auto'>
        <div className='mb-6 py-4 border-b-2 border-b-nord2 text-nord1 text-2xl font-bold'>
            {dayData[day].date}
        </div>
        <div className='text-xl pb-10'>
            {dayData[day].schedule.map((item, index) => (
                <div className='flex justify-between mb-6' key={index}>
                    <div className=' text-nord1 font-bold'>{item.time}</div>
                    <div className='max-w-3xl'>
                        <p className='text-nord1 font-bold mb-4'>{item.title}</p>
                        <p className='text-gray-500 font-semibold'>{item.description}</p>
                        <div className='flex flex-row-reverse'>
                            {item.speakers.map((speaker, index) => (
                                <img 
                                    src={speaker.photo}
                                    key={index}
                                    className={`w-10 h-10 rounded-full relative object-cover object-top ${index > 0 ? 'left-2' : ''}`} 
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