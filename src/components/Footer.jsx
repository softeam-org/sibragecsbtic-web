import React from 'react'
import Logo from "../assets/variacoesFooter.svg"
import { Link } from 'react-router-dom';

function Footer() {

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div >
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 bg-nord0 sm:px-8 lg:px-28 px-5 pt-12 gap-6 sm:gap-1'>
      <div className='flex flex-col gap-2'>
        <Link to='/' onClick={scrollToTop} className='text-nord4 font-bold'>Início</Link>
        {/* <h3 className='text-nord4 font-bold'>Início</h3> */}
        <div className='flex flex-col gap-0 md:gap-1'>
        <a className='text-sm text-slate-400'>Sobre</a>
        <a className='text-sm text-slate-400'>Organização</a>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
      <Link to='/programacao' onClick={scrollToTop} className='text-nord4 font-bold'>Programação</Link>
        {/* <h3 className='text-nord4 font-bold'>Programação</h3> */}
        <div className='flex flex-col gap-0 md:gap-1'>
        <a className='text-sm text-slate-400'>Horarios</a>
        <a className='text-sm text-slate-400'>Palestrantes do dia</a>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
      <Link to='/inscricoes' onClick={scrollToTop} className='text-nord4 font-bold'>Inscrições</Link>
        {/* <h3 className='text-nord4 font-bold'>Inscrição</h3> */}
        <div className='flex flex-col gap-0 md:gap-1'>
        <a className='text-sm text-slate-400'>Sobre</a>
        <a className='text-sm text-slate-400'>Preços</a>
        <a className='text-sm text-slate-400'>Minicursos</a>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
      <Link to='/submissoes' onClick={scrollToTop} className='text-nord4 font-bold'>Submissões</Link>
        {/* <h3 className='text-nord4 font-bold'>Submissão</h3> */}
        <div className='flex flex-col gap-0 md:gap-1'>
        <a className='text-sm text-slate-400'>Artigos</a>
        <a className='text-sm text-slate-400'>Calendario</a>
        <a className='text-sm text-slate-400'>Temática dos Artigos</a>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
      <Link to='/local' onClick={scrollToTop} className='text-nord4 font-bold'>Local</Link>
        {/* <h3 className='text-nord4 font-bold '>Local</h3> */}
        <div className='flex flex-col gap-0 md:gap-1'>
        <a className='text-sm text-slate-400'>Hotel do evento</a>
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



