import React from 'react'

import { dayData } from '../constants'

function Schedule({ day }) {
  return (
    <div>
        <div>
            {dayData[day].date}
        </div>
        <div>
            {dayData[day].schedule.map((item, index) => (
                <div>
                    <div>{item.time}</div>
                    <div>
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                        <div>
                            {item.speakers.map((speaker, index) => <img src={speaker.photo} />)}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Schedule