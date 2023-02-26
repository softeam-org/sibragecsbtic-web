import React from 'react'

import { calendarData } from '../constants'

function Calendar() {
  return (
    <div className='flex flex-col gap-1 w-3/4 mx-auto font-semibold'>
        {calendarData.map((data, index) => (
            <div 
                key={index}
                className='px-4 flex border border-nord0'
                >
                    <div className='w-3/5 pt-2 pb-2 border-r border-nord0'>
                        <p >{data.event}</p>
                    </div>
                    <div className='w-2/5 pt-2 pb-2 flex justify-center'>
                        <p>{data.date}</p>
                    </div>
            </div>
        ))}
    </div>
  )
}

export default Calendar