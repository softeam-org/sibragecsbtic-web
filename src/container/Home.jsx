import React,{useState} from 'react'
import Timer from '../components/Timer'
import Card from '../components/Card'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Leftarrow from '../components/Leftarrow';
import Rightarrow from '../components/Rightarrow';
import VideoPlayer from '../components/VideoPlayer';
import ImagemFundo from "../assets/images/imagemFundo.jpg"
import {data,logo} from "../array"

function Home() {


  const [componenteAtivo, setComponenteAtivo] = useState(1);


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: < Rightarrow />,
    prevArrow: < Leftarrow />,
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
  

  
  function criarCard(valor){
    return <Card  key={valor.id} image = {valor.image} name={valor.name} description={valor.description} institution={valor.organization}/>
  }


  const handleClick = (componente) => {
    setComponenteAtivo(componente);
  };



  return (
    <div className="bg-slate-50 text-nord0 ">
      <div className='bg-[url] bg-cover w-full h-full  flex items-center justify-center relative' >
      <img className='object-cover' src={ImagemFundo}></img>
      <div className='bg-black w-full h-full absolute  opacity-25'>

      </div>
      <div className='absolute w-full flex flex-col items-center text-center px-9 '>
      <div className='flex  items-center justify-center'>
        <div className=' flex flex-col sm:gap-2 justify-center items-center '>
      
        <h1 className='text-3xl lg:text-4xl font-bold pb-2 text-nord5 '>Indústria 5.0: Oportunidades e Desafios para Arquitetura e Construção</h1>
        <h2 className='text-xs text-nord5 font-medium'>13º Simpósio Brasileiro de Gestão e Economia da Construção e 4º Simpósio Brasileiro de Tecnologia da Informação e Comunicação na Construção</h2>

        
        </div>
      </div>

      <div className='flex px-32 py-3 sm:py-12 text-2xl justify-center itens-center font-bold text-nord5'>
  
        <Timer />
      </div>
      </div>
      </div>
      

      <div name="sobre" className='text-base px-6 sm:px-6 md:px-10 lg:px-48 2xl:px-72 bg-gray-200 py-12'>
        <h3 className='font-bold text-lg text-slate-900'>Sobre o evento</h3>
          <div className="my-4">
            <p>
              O Simpósio Brasileiro de Gestão e Economia da Construção (SIBRAGEC) e o Simpósio Brasileiro de Tecnologia da Informação e Comunicação na Construção (SBTIC) são eventos bienais promovidos, respectivamente pelos Grupos de Trabalho “Gestão e Economia da Construção” e “Tecnologia da Informação e Comunicação” da Associação Nacional de Tecnologia do Ambiente Construído (ANTAC), que têm como objetivos promover a cooperação entre pesquisadores e disseminar os avanços técnico-científicos nessa temática.
            </p>
          </div>
          <div className="my-4">
            <p className='lg:pb-4'>
              Com o tema central “Indústria 5.0: oportunidades e desafios para a indústria da construção”, o SIBRAGEC + SBTIC 2023 deseja aprofundar os impactos e desafios da Construção 4.0 e discutir avanços para incorporar o foco humano na tomada de decisões proposto pela Indústria 5.0. Pretende-se, com isso, promover uma ampla discussão sobre os mecanismos de difusão e integração do conhecimento científico existente, as estratégias empreendidas, tanto pelo meio acadêmico quanto pelo setor produtivo para promover esta integração, as oportunidades e barreiras para a transferência do conhecimento científico e de novas tecnologias desenvolvidas no ambiente acadêmico para ação e o desenvolvimento da indústria da construção civil, que compreende as áreas de Engenharia, Arquitetura e Construção.
            </p>
          </div>

          <VideoPlayer/>

          <h3 className='font-bold text-lg pt-4 lg:pt-8'>Um pouco sobre a programação</h3>
          <div className="my-4">
            <p>
              O primeiro dia do evento “Industry Day”, objetiva a integração entre academia e indústria. Representantes da indústria e especialistas renomados, que estão envolvidos com processos de inovação do setor, dialogarão e compartilharão suas experiências e visões sobre a Indústria 5.0.
            </p>
          </div>
          <div className="my-4">
            <p>
              O segundo e terceiro dias serão destinados à disseminação e discussão da produção científica em “Gestão e Economia da Construção” e “Tecnologia da Informação e Comunicação”. através de painéis de debates, minicursos, apresentações de trabalhos e o Desafio SIBRAGEC+SBTIC 2023.
            </p>
          </div>
      </div>
      <div>
      <h3 name="organizaçao" className='pt-4 px-6 sm:px-6 md:px-10 lg:px-48 2xl:px-72 font-bold text-lg text-slate-900'>Organização</h3>
        <p className='py-4 px-6 sm:px-6 md:px-10 lg:px-48 2xl:px-72'>
          Desde as suas primeiras edições (SIBRAGEC em 1999 e SBTIC em 2002), os eventos têm se caracterizado como dois dos principais fóruns nacionais de discussões pertinentes à “Gestão e Economia da Construção” e “Tecnologia da Informação e Comunicação”, bem como de integração e intercâmbio do conhecimento acadêmico com o setor produtivo. Em 2023, os dois eventos voltam a ocorrer em conjunto (SIBRAGEC+SBTIC 2023), contando com a soma de esforços de professores, pesquisadores e alunos de pós-graduação e graduação, como também construtores, projetistas, gestores e outros profissionais atuantes na Construção Civil.
        </p>

      <div className='flex justify-center '>
      <button onClick={() => handleClick(1)} className={`bg-transparent duration-0 bg-none  outline-none hover:border-none focus:outline-none  ${componenteAtivo===1?"text-gray-900":"text-gray-400"}`}>
        Comite Cientifico
      </button>
      <button onClick={() => handleClick(2)} className={`bg-transparent duration-0 bg-none  outline-none hover:border-none focus:outline-none  ${componenteAtivo===2?"text-gray-900":"text-gray-400"}`}>
        Comissão Organizadora
      </button>
      <button  onClick={() => handleClick(3)} className={`bg-transparent duration-0 bg-none  outline-none hover:border-none focus:outline-none  ${componenteAtivo===3?"text-gray-900":"text-gray-400"}`}>
        Coordenação do Evento
      </button>
      </div>
      
      
        <div className='px-3 sm:px-6 md:px-10 lg:px-24 2xl:px-48 py-8'>

        {componenteAtivo===1 && 
        <Slider {...settings} className='flex justify-center' > 
      
        {data.filter(data=>data.function==="Scientific Committee").map(data=>criarCard(data))}
        
        </Slider>
        }
        

      {componenteAtivo===2 && 
      <Slider {...settings} className='flex justify-center' > 
      {data.filter(data=>data.function==="Organizing committee").map(data=>criarCard(data))}
      </Slider>
      }

      {
        componenteAtivo===3 && 
        <Slider {...settings} className='flex justify-center' > 
      
        {data.filter(data=>data.function==="Event Coordination").map(data=>criarCard(data))}
        
        </Slider>
      }
        </div>
      </div>
      
      
      
      <div className='flex flex-col justify-center items-center pb-8'>
      <div className='grid grid-cols-1 md:grid-cols-3'>
      <div className=' flex flex-col items-center'>
      <h3 className='font-bold text-lg pt-4 pb-4 text-center'>Apoio</h3>
        
        <div>
        {logo.filter((image=>(image.type==="apoio"))).map((image) => (
        <div className='flex items-center justify-center'><img key={image.id} src={image.image} className=" w-1/2 md:w-auto md:h-16 " alt="Imagem" /></div>))}
        </div>
        
      
      </div>


       <div className='flex flex-col justify-center items-center'>
       <h3 className='font-bold text-lg pt-4 pb-4 text-center '>Organização</h3>
       <div className='grid grid-cols-2 sm:grid-cols-3 '>
       {logo.filter((image=>(image.type==="organizacao"))).map((image) => (
        <div className='flex justify-center items-center'><img key={image.id} src={image.image} className="w-auto h-28 " alt="Imagem" /></div>))}
      </div>
      </div>

      <div className=' flex flex-col items-center'>
      <h3 className='font-bold text-lg pt-4 pb-4'>Promoção</h3>
      <div className='flex'>
      {logo.filter((image=>(image.type==="promocao"))).map((image) => (
      <img key={image.id} src={image.image} className="w-auto h-28 " alt="Imagem" />))}
      </div>
      </div>
      </div>
      

      <div className='flex flex-col justify-center items-center'>
      <h3 className='font-bold text-lg pt-4 lg:pt-8 pb-6'>Co-organização</h3>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
    
      {logo.filter((image=>(image.type==="co-organizacao"))).map((image) => (
      <div className='flex justify-center items-center'><img key={image.id} src={image.image} className="w-auto h-28 " alt="Imagem" /></div>))}
      
      </div>
      </div>
      </div>

      
      
    </div>
  )
}

export default Home