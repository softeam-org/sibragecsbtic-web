import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

import Construction from "../components/Construction";
import Hotel from "../assets/images/hotel_SESC.jpg";

function Local() {
  const location = useLocation();
  const hotelRef = useRef(null);
  const aracajuRef = useRef(null);
  console.log(location);
  console.log(hotelRef);

  useEffect(() => {
    if (location.hash === "#hotel") {
      hotelRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "#aracaju") {
      aracajuRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <div className=' bg-gray-200 '>
      <div className=' text-slate-900 h-full w-full'>
        <div
          name='local-do-evento'
          className='pb-12 max-w-6xl mx-auto px-2'
          id='hotel'
          ref={hotelRef}
        >
          <h3 className='pt-20 md:pt-28 lg:pt-12 font-bold pb-8 text-xl'>
            Sobre o Local do evento
          </h3>
          <div className='flex flex-wrap lg:flex-nowrap gap-8 justify-center'>

            <div className="flex gap-4 flex-col lg:max-w-[550px]">
              <p className='text-lg font-medium'>
                O SIBRAGEC+SBTIC 2023 ocorrerá no HOTEL SESC ATALAIA em
                ARACAJU-SE, situado de frente para o mar da mais famosa praia de
                Aracaju - a Praia de Atalaia - e contando com toda beleza e
                comodidade turística da maior e mais bela orla do Brasil, a orla
                de Atalaia.
              </p>
              <div className='flex flex-col items-center gap-4 py-4'>
                <p className='text-lg font-medium'>
                  Confira mais informações sobre o local do evento
                </p>
                <a
                  href='https://sesc-se.com.br/hotel-atalaia/'
                  target={"_blank"}
                  className='bg-orange-500 border-0 text-white font-bold py-3 px-8 shadow-md hover:shadow-lg rounded-md hover:bg-orange-400 transition-all ease-in flex justify-center items-center gap-4 w-48'
                >
                  Acessar
                </a>
              </div>
            </div>

            <iframe
                width="560"
                height="315"
                src='https://www.youtube.com/embed/EVJCEMDTMrA'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              ></iframe>
            
          </div>
        </div>

        <div className='relative h-40 md:h-96 2xl:h-[1200px] overflow-hidden'>
          <img
            src={Hotel}
            alt='Imagem Hotel'
            className='w-full absolute top-0 md:-top-20 lg:-top-40'
          ></img>
        </div>

        <div>
          <div
            name='aracaju'
            className='pb-4 pt-12 max-w-6xl mx-auto px-2'
            id='aracaju'
            ref={aracajuRef}
          >
            <h3 className='font-bold text-xl pb-8'>Venha sentir Aracaju</h3>
            <p className='text-lg font-semibold'>
              Aracaju oferece diversas opções que vão encantar desde quem
              procura uma praia bucólica para descansar até amantes de esportes
              em busca de novas emoções. São praias tranquilas, parques com
              grandes áreas verdes, museus, um rico patrimônio arquitetônico e
              manifestações da cultura regional. Uma infinidade de sensações
              para serem experimentadas, que vão ajudar a entender o que é
              aracajuar! (Fonte: PMA)
            </p>

            <div className='flex items-center justify-center flex-col md:flex-row  gap-4 pt-2 lg:pt-4 pb-6'>
              <p className='flex itens-center text-lg font-medium'>
                Acesse mais informações turísticas
              </p>
              <a
                href='https://www.aracaju.se.gov.br/userfiles/pdf/2022/docs/Folder_WEB_Aracaju.pdf'
                target={"_blank"}
                className='bg-orange-500 border-0 text-white font-bold py-3 px-8 shadow-md hover:shadow-lg rounded-md hover:bg-orange-400 transition-all ease-in flex justify-center items-center gap-4 w-48'
              >
                Clique aqui
              </a>
            </div>
            <div className='flex justify-center items-center py-4'>
              <p className='text-lg font-semibold'>
                Confira os vídeos e descubra Aracaju!
              </p>
            </div>
          </div>
        </div>

        <div className='flex items-center flex-wrap justify-center gap-8 pb-8'>
          <iframe
            width='455'
            height='256'
            src='https://www.youtube.com/embed/jne69GP6Up4'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
          <iframe
            width='455'
            height='256'
            src='https://www.youtube.com/embed/cKTjTh-S8uw'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
          <iframe
            width='455'
            height='256'
            src='https://www.youtube.com/embed/fzokOthp3hU'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Local;
