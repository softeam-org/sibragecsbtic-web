import React from 'react'

function Header() {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='flex'>
            <div className='mr-56'>
                <p>LOGO</p> 
            </div>
            <div>
              <p className='text-xl font-bold'>Sibragec XXIII</p>  
            </div>
        </div>
        <div className='flex gap-20'>
            <p className='font-semibold'>Início</p>
            <p className='font-semibold'>Programação</p>
            <p className='font-semibold'>Inscrições</p>
            <p className='font-semibold'>Submissão</p>
            <p className='font-semibold'>Local</p>
        </div>
    </div>
  )
}

export default Header