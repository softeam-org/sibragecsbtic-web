import React, { useState, useEffect, useRef } from "react";
import Timer from "../components/Timer";
import Card from "../components/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Leftarrow from "../components/Leftarrow";
import Rightarrow from "../components/Rightarrow";
import VideoPlayer from "../components/VideoPlayer";
import ImagemFundo from "../assets/images/imagemFundo.jpg";
import { data, logo } from "../array";
import { AiOutlineInstagram } from "react-icons/ai";
import { useLocation } from "react-router-dom";

function Home(props) {
  const [componenteAtivo, setComponenteAtivo] = useState(1);
  const location = useLocation();
  const aboutRef = useRef(null);
  const orgRef = useRef(null);

  useEffect(() => {
    if (location.hash === "#sobre") {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "#organizacao") {
      orgRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Rightarrow />,
    prevArrow: <Leftarrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  function criarCard(valor) {
    return (
      <Card
        key={valor.id}
        image={valor.image}
        name={valor.name}
        description={valor.description}
        institution={valor.organization}
      />
    );
  }

  const handleClick = (componente) => {
    setComponenteAtivo(componente);
  };

  return (
    <div className='bg-slate-50 text-nord0 h-full w-full'>
      <div className='bg-[url] bg-cover w-full h-full  flex items-center justify-center relative'>
        <img className='object-cover' src={ImagemFundo}></img>
        <div className='bg-black w-full h-full absolute  opacity-25'></div>
        <div className='absolute w-full flex flex-col items-center text-center px-9 '>
          <div className='flex  items-center justify-center'>
            <div className=' flex flex-col sm:gap-2 justify-center items-center '>
              <h1 className='text-xl md:text-2xl lg:text-4xl font-bold pb-2 text-nord5 '>
                Indústria 5.0: Oportunidades e Desafios para Arquitetura e
                Construção
              </h1>
              <h2 className='text-xxs md:text-xs lg:text-sm text-nord5 font-medium'>
                13º Simpósio Brasileiro de Gestão e Economia da Construção e 4º
                Simpósio Brasileiro de Tecnologia da Informação e Comunicação na
                Construção
              </h2>
            </div>
          </div>

          <div className='flex py-3 sm:py-12 text-2xl justify-center itens-center font-bold text-nord5'>
            <Timer />
          </div>
          <div className="flex flex-col justify-center items-center gap-1 md:gap-3">
            <p className="text-md md:text-2xl lg:text-2xl font-bold text-nord5">Nosso evento ja começou!</p>
            <a href="https://drive.google.com/drive/folders/1XxFgIKKcbYeRjJNqUpSimOz-Ds0-RKh9" target="_blank" className="text-xs md:text-xl bg-orange-500 border-0 text-white font-bold py-3 px-8 shadow-md hover:shadow-lg rounded-md hover:bg-orange-400 transition-all ease-in flex justify-center items-center gap-4">Confira as fotos</a>
          </div>
        </div>
      </div>

      <div
        name='sobre'
        id='sobre'
        ref={aboutRef}
        className='text-base bg-gray-200 py-12'
      >
        <div className="max-w-6xl mx-auto px-3">
          <h3 className='font-bold text-xl  text-slate-900'>Sobre o evento</h3>
          <div className='my-4 font-bold text-lg'>
            <p>
              O evento ocorrerá de 08 a 10 de novembro, no SESC Atalaia Hotel em
              Aracaju-SE.
            </p>
          </div>
          <div className='my-4 text-lg font-semibold'>
            <p>
              O Simpósio Brasileiro de Gestão e Economia da Construção
              (SIBRAGEC) e o Simpósio Brasileiro de Tecnologia da Informação e
              Comunicação na Construção (SBTIC) são eventos bienais promovidos,
              respectivamente pelos Grupos de Trabalho “Gestão e Economia da
              Construção” e “Tecnologia da Informação e Comunicação” da
              Associação Nacional de Tecnologia do Ambiente Construído (ANTAC),
              que têm como objetivos promover a cooperação entre pesquisadores e
              disseminar os avanços técnico-científicos nessa temática.
            </p>
          </div>
          <div className='my-4'>
            <p className='lg:pb-4 text-lg font-semibold'>
              Com o tema central “Indústria 5.0: oportunidades e desafios para a
              indústria da construção”, o SIBRAGEC + SBTIC 2023 deseja
              aprofundar os impactos e desafios da Construção 4.0 e discutir
              avanços para incorporar o foco humano na tomada de decisões
              proposto pela Indústria 5.0. Pretende-se, com isso, promover uma
              ampla discussão sobre os mecanismos de difusão e integração do
              conhecimento científico existente, as estratégias empreendidas,
              tanto pelo meio acadêmico quanto pelo setor produtivo para
              promover esta integração, as oportunidades e barreiras para a
              transferência do conhecimento científico e de novas tecnologias
              desenvolvidas no ambiente acadêmico para ação e o desenvolvimento
              da indústria da construção civil, que compreende as áreas de
              Engenharia, Arquitetura e Construção.
            </p>
          </div>

          <VideoPlayer />

          <h3 className='font-bold text-xl pt-4 lg:pt-8'>
            Um pouco sobre a programação
          </h3>
          <div className='my-4 text-lg font-semibold'>
            <p>
              O primeiro dia do evento “Industry Day”, objetiva a integração
              entre academia e indústria. Representantes da indústria e
              especialistas renomados, que estão envolvidos com processos de
              inovação do setor, dialogarão e compartilharão suas experiências e
              visões sobre a Indústria 5.0.
            </p>
          </div>
          <div className='my-4 text-lg font-semibold'>
            <p>
              O segundo e terceiro dias serão destinados à disseminação e
              discussão da produção científica em “Gestão e Economia da
              Construção” e “Tecnologia da Informação e Comunicação” através de
              painéis de debates, minicursos, apresentações de trabalhos e o
              Desafio SIBRAGEC+SBTIC 2023.
            </p>
          </div>
          <div className='my-4 text-lg font-semibold'>
            <p>
              Contamos com sua participação. Esse é o principal evento acadêmico
              de Gestão e Economia da Construção do Brasil! Outras informações
              estão disponibilizadas neste site, bem como nas mídias sociais do
              evento.
            </p>
          </div>
          <div className='flex justify-center items-center'>
            <a
              href='https://www.instagram.com/sibragec.sbtic2023/'
              className='bg-orange-500 border-0 text-white font-bold py-3 px-8 shadow-md hover:shadow-lg rounded-md hover:bg-orange-400 transition-all ease-in flex justify-center items-center gap-4 w-48'
            >
              <AiOutlineInstagram size={24} />
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h3
          name='organizaçao'
          id='organizacao'
          ref={orgRef}
          className='pt-10  font-bold text-lg text-slate-900 px-3'
        >
          Organização
        </h3>
        <p className='py-4 text-lg font-semibold px-3'>
          Desde as suas primeiras edições (SIBRAGEC em 1999 e SBTIC em 2002), os
          eventos têm se caracterizado como dois dos principais fóruns nacionais
          de discussões pertinentes à “Gestão e Economia da Construção” e
          “Tecnologia da Informação e Comunicação”, bem como de integração e
          intercâmbio do conhecimento acadêmico com o setor produtivo. Em 2023,
          os dois eventos voltam a ocorrer em conjunto (SIBRAGEC+SBTIC 2023),
          contando com a soma de esforços de professores, pesquisadores e alunos
          de pós-graduação e graduação, como também construtores, projetistas,
          gestores e outros profissionais atuantes na Construção Civil.
        </p>

        <div className='flex justify-center gap-0 md:gap-6 '>
          <button
            onClick={() => handleClick(1)}
            className={`px-0 transition-color transition bg-transparent duration-0 bg-none  outline-none hover:border-none focus:outline-none  ${componenteAtivo === 1 ? "text-gray-900" : "text-gray-400"
              }`}
          >
            Comite Cientifico
          </button>
          <button
            onClick={() => handleClick(2)}
            className={`px-0 transition-color transition bg-transparent duration-0 bg-none  outline-none hover:border-none focus:outline-none  ${componenteAtivo === 2 ? "text-gray-900" : "text-gray-400"
              }`}
          >
            Comissão Organizadora
          </button>
          <button
            onClick={() => handleClick(3)}
            className={`px-0 transition-color transition bg-transparent duration-0 bg-none  outline-none hover:border-none focus:outline-none  ${componenteAtivo === 3 ? "text-gray-900" : "text-gray-400"
              }`}
          >
            Coordenação do Evento
          </button>
        </div>

        <div className=' py-8'>
          {componenteAtivo === 1 && (
            <Slider {...settings} className='flex justify-center'>
              {data
                .filter((data) => data.function === "Scientific Committee")
                .map((data) => criarCard(data))}
            </Slider>
          )}

          {componenteAtivo === 2 && (
            <Slider {...settings} className='flex justify-center'>
              {data
                .filter((data) => data.function === "Organizing committee")
                .map((data) => criarCard(data))}
            </Slider>
          )}

          {componenteAtivo === 3 && (
            <Slider {...settings} className='flex justify-center'>
              {data
                .filter((data) => data.function === "Event Coordination")
                .map((data) => criarCard(data))}
            </Slider>
          )}
        </div>
      </div>

      <div className='flex flex-col justify-center items-center pb-8 '>
        <div className='flex flex-col gap-5 md:gap-14'>

          <div className='flex justify-around'>

          <div className=' flex flex-col items-center'>
            <h3 className='font-bold text-lg pt-4 pb-4'>Promoção</h3>
            <div className='flex'>
              {logo
                .filter((image) => image.type === "promocao")
                .map((image) => (
                  <img
                    key={image.id}
                    src={image.image}
                    className='w-auto h-16 md:h-28 '
                    alt='Imagem'
                  />
                ))}
            </div>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <h3 className='font-bold text-lg pt-4 pb-4 text-center '>
              Organização
            </h3>
            <div className='grid grid-cols-3 '>
              {logo
                .filter((image) => image.type === "organizacao")
                .map((image) => (
                  <div className='flex justify-center items-center'>
                    <img
                      key={image.id}
                      src={image.image}
                      className='w-auto h-16 md:h-28 '
                      alt='Imagem'
                    />
                  </div>
                ))}
            </div>
          </div>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <h3 className='font-bold text-lg pt-4 lg:pt-8 pb-6'>
              Co-organização
            </h3>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 lg:gap-6'>
              {logo
                .filter((image) => image.type === "co-organizacao")
                .map((image) => (
                  <div className='flex justify-center items-center'>
                    <img
                      key={image.id}
                      src={image.image}
                      className={`w-auto ${ image.id === 5 ? 'h-10 md:h-20':'h-16 md:h-28'}`}
                      alt='Imagem'
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className=' flex flex-col justify-center itens-center'>
            <h3 className='font-bold text-lg pt-4 pb-4 text-center'>Patrocínio</h3>

            <div className ='flex justify-center flex-col md:flex-row gap-8 md:gap-16'>
              {logo
                .filter((image) => image.type === "patrocinio")
                .map((image) => (
                  <div className='flex items-center justify-center'>
                    <img
                      key={image.id}
                      src={image.image}
                      className={`w-auto ${image.id === 21?'h-12 md:h-20':'h-16 md:h-28'}`}
                      alt='Imagem'
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className=' flex flex-col justify-center items-center '>
            <h3 className='font-bold text-lg pt-4 pb-4 text-center'>Apoio</h3>

            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 lg:gap-6'>
              {logo
                .filter((image) => image.type === "apoio")
                .map((image) => (
                  <div className='flex items-center justify-center'>
                    <img
                      key={image.id}
                      src={image.image}
                      className={`w-auto ${ image.id === 13 ? 'h-10 md:h-16' :image.id === 16 ? 'h-8 md:h-14': image.id === 15 ? 'h-12 md:h-20' : image.id === 14 ? 'h-32 md:h-44' : image.id === 22 ? 'h-10 md:h-14':image.id === 23 ? 'h-10 md:h-14': 'h-16 md:h-28'}`}
                      alt='Imagem'
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Home;
