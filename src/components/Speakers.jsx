import React from 'react'

import { dayData } from '../constants'

function Speakers({ day }) {
  const speakers = dayData[day].speakers

  return (
    <div>
      <h1>Palestrantes do dia</h1>
      <div>
        {speakers.map((speaker) => (
          <div>
            <img src={speaker.photo} alt={speaker.name} />
            <div>
              <h2>{speaker.name}</h2>
              <p>{speaker.description}</p>
            </div>
          </div>
          ))}
      </div>
    </div>
  )
}

export default Speakers