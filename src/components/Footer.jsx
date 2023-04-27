import React from "react";
import Logo from "../assets/variacoesFooter.svg";
import { navLinks } from "../constants";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Navlinks from "./Navlinks";

function Footer() {
  // function scrollToTop() {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }

  const currentPath = useLocation();

  return (
    <div className='bg-nord0'>
      <div className='max-w-6xl mx-auto px-3'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 bg-nord0 pt-12 gap-6 sm:gap-3'>
          <div className='flex flex-col gap-2'>
            <a className='text-nord4 font-bold'>Início</a>
            <div className='flex flex-col gap-0 md:gap-1'>
              <Link
                to='/#sobre'
                activeclassname='active'
                className='text-sm text-slate-400'
              >
                Sobre
              </Link>
              <Link to='/#organizacao' className='text-sm text-slate-400'>
                Organização
              </Link>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <a
              // to='/programacao'
              // onClick={scrollToTop}
              className='text-nord4 font-bold'
            >
              Programação
            </a>
            {/* <h3 className='text-nord4 font-bold'>Programação</h3> */}
            <div className='flex flex-col gap-0 md:gap-1'>
              <a className='text-sm text-slate-400'>Horarios</a>
              <a className='text-sm text-slate-400'>Palestrantes do dia</a>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <a
              // to='/inscricoes'
              // onClick={scrollToTop}
              className='text-nord4 font-bold'
            >
              Inscrições
            </a>
            {/* <h3 className='text-nord4 font-bold'>Inscrição</h3> */}
            <div className='flex flex-col gap-0 md:gap-1'>
              <Link to='/inscricoes#sobre' className='text-sm text-slate-400'>
                Sobre
              </Link>
              <Link to='/inscricoes#precos' className='text-sm text-slate-400'>
                Preços
              </Link>
              <Link
                to='/inscricoes#minicursos'
                className='text-sm text-slate-400'
              >
                Minicursos
              </Link>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <a
              // to='/submissoes'
              // onClick={scrollToTop}
              className='text-nord4 font-bold'
            >
              Submissões
            </a>
            <div className='flex flex-col gap-0 md:gap-1'>
              <Link to='/submissoes#artigos' className='text-sm text-slate-400'>
                Artigos
              </Link>
              <Link
                to='/submissoes#calendario'
                className='text-sm text-slate-400'
              >
                Calendario
              </Link>
              <Link
                to='/submissoes#tematica'
                className='text-sm text-slate-400'
              >
                Temática dos Artigos
              </Link>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <a
              // to='/local'
              // onClick={scrollToTop}
              className='text-nord4 font-bold'
            >
              Local
            </a>
            <div className='flex flex-col gap-0 md:gap-1'>
              <Link to='/local#hotel' className='text-sm text-slate-400'>
                Hotel do evento
              </Link>
              <Link to='/local#aracaju' className='text-sm text-slate-400'>
                Venha sentir Aracaju
              </Link>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <a
              // to='/local'
              // onClick={scrollToTop}
              className='text-nord4 font-bold'
            >
              Summer Scholl
            </a>
            <div className='flex flex-col gap-0 md:gap-1'>
              <Link to='summer-school/#sobre' className='text-sm text-slate-400'>
                Sobre
              </Link>
              <Link to='summer-school/#calendario' className='text-sm text-slate-400'>
                Calendário
              </Link>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <a
              // to='/local'
              // onClick={scrollToTop}
              className='text-nord4 font-bold'
            >
              Desafio
            </a>
            <div className='flex flex-col gap-0 md:gap-1'>
              <Link to='desafio/#info' className='text-sm text-slate-400'>
                Informações
              </Link>
            </div>
          </div>

        </div>

        <div className='h-24 w-full relative overflow-hidden bg-nord0'>
          <img
            className='h-96 absolute -bottom-40 right-0'
            src={Logo}
            alt='Footer SVG'
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
