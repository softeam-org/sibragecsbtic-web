import React from 'react'

import Construction from "../components/Construction";
import Hotel from '../assets/images/hotel_SESC.jpg'


function Local() {
  return (
    <div className='bg-gray-200 text-slate-900 h-full w-full '>
      
      <div name='local-do-evento' className='pb-4  px-6 sm:px-6 md:px-10 lg:px-48 2xl:px-72'>
      <h3 className='pt-20 md:pt-28 lg:pt-12 font-bold text-lg pb-4'>Sobre o Local do evento</h3>
      <p>O SIBRAGEC+SBTIC 2023 ocorrerá no HOTEL SESC ATALAIA em ARACAJU-SE, situado de frente para o mar da mais famosa praia de Aracaju - a Praia de Atalaia - e contando com toda beleza e comodidade turística da maior e mais bela orla do Brasil, a orla de Atalaia.</p>
      <div className='flex gap-2 items-center justify-center flex-col md:flex-row py-4'>
      <p className='flex itens-center'>Confira mais informações sobre o local do evento</p>
      <a  href='https://sesc-se.com.br/hotel-atalaia/' target={'_blank'} className='bg-orange-500 border-0 text-white font-bold py-3 px-8 shadow-md hover:shadow-lg rounded-md hover:bg-orange-400 transition-all ease-in flex justify-center items-center gap-4 w-48'>Acessar</a>
      </div>
      
      </div>
      <div className='relative h-40 md:h-96 overflow-hidden'>
        <img src={Hotel} alt='Imagem Hotel' className='w-full absolute top-0 md:-top-20 lg:-top-60' ></img>
      </div>
      <div className='flex justify-center items-center py-8'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/EVJCEMDTMrA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>

      <div name='aracaju' className='pb-4  px-6 sm:px-6 md:px-10 lg:px-48 2xl:px-72'>
      <h3 className='font-bold text-lg'>Venha sentir Aracaju</h3>
      <p>Aracaju oferece diversas opções que vão encantar desde quem procura uma praia bucólica para descansar até amantes de esportes em busca de novas emoções. São praias tranquilas, parques com grandes áreas verdes, museus, um rico patrimônio arquitetônico e manifestações da cultura regional. Uma infinidade de sensações para serem experimentadas, que vão ajudar a entender o que é aracajuar! (Fonte: PMA)</p>

      <div className='flex items-center justify-center flex-col md:flex-row  gap-4 pt-2'>
      <p className='flex itens-center'>Acesse mais informações turísticas</p>
      <a href='https://www.aracaju.se.gov.br/userfiles/pdf/2022/docs/Folder_WEB_Aracaju.pdf' target={'_blank'} className='bg-orange-500 border-0 text-white font-bold py-3 px-8 shadow-md hover:shadow-lg rounded-md hover:bg-orange-400 transition-all ease-in flex justify-center items-center gap-4 w-48'>Acessar</a>
      </div>
      <div className='flex justify-center items-center py-4'>
      <p>Confira os vídeos e descubra Aracaju!</p>
      </div>
      </div>

      <div className='flex  items-center flex-wrap justify-center gap-8 pb-8'>
      <iframe width="455" height="256" src="https://www.youtube.com/embed/jne69GP6Up4" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      <iframe width="455" height="256" src="https://www.youtube.com/embed/cKTjTh-S8uw" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      <iframe width="455" height="256" src="https://www.youtube.com/embed/fzokOthp3hU" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>

      

    </div>
  )
}

export default Local