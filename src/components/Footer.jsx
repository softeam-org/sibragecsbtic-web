import React from 'react'
import Logo from "../assets/variacoesFooter.svg"

function Footer() {
  return (
    <div >
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 bg-nord0 sm:px-8 lg:px-28 px-5 pt-12 gap-6 sm:gap-1'>
      <div className='flex flex-col gap-2'>
        <h3 className='text-nord6 font-semibold'>Início</h3>
        <div className='flex flex-col'>
        <a className='text-sm text-stone-500'>Sobre</a>
        <a className='text-sm text-stone-500'>Organização</a>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-nord6 font-semibold'>Programação</h3>
        <div className='flex flex-col'>
        <a className='text-sm text-stone-500'>Horarios</a>
        <a className='text-sm text-stone-500'>Palestrantes do dia</a>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-nord6 font-semibold'>Inscrição</h3>
        <div className='flex flex-col'>
        <a className='text-sm text-stone-500'>Sobre</a>
        <a className='text-sm text-stone-500'>Preços</a>
        <a className='text-sm text-stone-500'>Minicursos</a>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-nord6 font-semibold'>Submissão</h3>
        <div className='flex flex-col'>
        <a className='text-sm text-stone-500'>Artigos</a>
        <a className='text-sm text-stone-500'>Calendario</a>
        <a className='text-sm text-stone-500'>Temática dos Artigos</a>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-nord6 font-semibold '>Local</h3>
        <div className='flex flex-col'>
        <a className='text-sm text-stone-500'>Hotel do evento</a>
        </div>
      </div>

      
     
      </div>

      <div className='h-24 w-full relative overflow-hidden bg-nord0'>
      
      <img className='h-96 absolute -bottom-40 right-0'  src={Logo} alt="Footer SVG"/>
    
    </div>
    </div>
  )
}

export default Footer



