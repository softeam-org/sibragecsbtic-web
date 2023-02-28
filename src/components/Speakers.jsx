import React from 'react'

import { dayData } from '../constants'
import Container from './Container'

function Speakers({ day }) {
  const speakers = dayData[day].speakers

  return (
    <Container color='white'>
      <h2 className='text-3xl font-bold mb-16 lg:mt-20'>Palestrantes do dia</h2>
      <div>
        {speakers.map((speaker, index) => (
          <div key={index} className='bg-gray-100 flex flex-col gap-5 text-center lg:flex-row lg:gap-0 py-16 px-2 lg:pl-16 pr-6 mb-10 items-center justify-between'>
            <img 
              src={speaker.photo} 
              alt={speaker.name}
              className='w-44 h-44 rounded-full object-cover'
            />
            <div>
              <h2 className='font-bold mb-6 text-xl'>{speaker.name}</h2>
              <p className='text-zinc-500 text-xl max-w-3xl'>{speaker.description}</p>
            </div>
          </div>
          ))}
      </div>
    </Container>
  )
}

export default Speakers