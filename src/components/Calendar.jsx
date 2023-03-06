import React from 'react'

import { calendarData } from '../constants'

function Calendar() {
  return (
    <div className='flex flex-col gap-1 w-3/4 py-8 mx-auto font-semibold'>
        {calendarData.map((data, index) => (
            <div 
                key={index}
                className='px-4 flex border items-center border-nord0'
                >
                    <div className='w-3/5 py-2 border-r border-nord0'>
                        <p >{data.event}</p>
                    </div>
                    <div className='w-3/5 md:w-2/5 p-1 flex justify-center'>
                        <p>{data.date}</p>
                    </div>
            </div>
        ))}
    </div>
  )
}

export default Calendar