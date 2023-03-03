import React,{useState} from 'react'
import Timer from '../components/Timer'
import Card from '../components/Card'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Leftarrow from '../components/Leftarrow';
import Rightarrow from '../components/Rightarrow';
import Luciano from '../assets/images/luciano.jpg'
// import logo from "../assets/logo-01.svg"
import Reymard from "../assets/images/reymard.png"
import Tatiana from "../assets/images/tatiana.jpeg"
import Sergio from "../assets/images/sergio.jpg"
import Regina from "../assets/images/regina.png"
import Debora from "../assets/images/debora.jpg"
import Herbert from "../assets/images/herbert.jpeg"
import Eduardo from "../assets/images/eduardo.jpg"
import Clarissa from "../assets/images/clarissa.png"
import Ricardo from "../assets/images/ricardo.jpg"
import Fernando from "../assets/images/fernando.jpeg"
import Marcelo from "../assets/images/marcelo.jpg"
import Emerson from "../assets/images/emerson.jpg"
import Marco from "../assets/images/brasiel.jpg"
import Caroline from "../assets/images/caroline.jpg"
import Denise from "../assets/images/denise.jpg"
import Mayana from "../assets/images/mayana.jpeg"
import Rosana from "../assets/images/rosana.png"
import VideoPlayer from '../components/VideoPlayer';
import ImagemFundo from "../assets/images/imagemFundo.jpg"

function Home() {

  const [isActive, setIsActive] = useState(true);
  const [isActive2, setIsActive2] = useState(false);


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

  const data = [{
    id:1,
    name:"Prof. Dr. Reymard Sávio Sampaio de Melo",
    image: Reymard,
    organization: "UFBA",
    function:"Scientific Committee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id:2,
    name:"Prof. Dra. Tatiana Gondim do Amaral",
    image:Tatiana,
    organization: "UFG",
    function:"Scientific Committee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id:3,
    name:"Prof. Dra. Regina Coeli Ruschel",
    image:Regina,
    organization: "UNICAMP",
    function:"Scientific Committee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id:4,
    name:"Prof. Sérgio Leal Ferreira",
    image:Sergio,
    organization: "USP",
    function:"Scientific Committee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id:5,
    name:"Profª. Drª. Débora de Gois Santos",
    image:Debora ,
    organization: "UFS",
    function:"Organizing committee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id:6,
    name:"Prof. Me. Herbert Melo Cruz",
    image:Herbert ,
    organization: "IFS",
    function:"Organizing committee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id:7,
    name:"Prof. Dr. Eduardo Toledo",
    image:Eduardo ,
    organization: "USP",
    function:"Organizing committee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id:8,
    name:"Prof. Sérgio Leal Ferreira",
    image:Sergio,
    organization: "USP",
    function:"Organizing committee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id:9,
    name:"Prof. Dra. Tatiana Gondim do Amaral",
    image:Tatiana,
    organization: "UFG",
    function:"Organizing committee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id:10,
    name:"Profª. Drª. Clarissa Notariano Biotto",
    image:Clarissa ,
    organization: "UFC",
    function:"Organizing committee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id:11,
    name:"Prof. Dr. Ricardo Juan José Oviedo Haito",
    image:Ricardo ,
    organization: "UFSC",
    function:"Organizing committee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id:12,
    name:"Prof. Me. Luciano Silva Vasconcelos",
    image:Luciano ,
    organization: "IFS",
    function:"Organizing committee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id:13,
    name:"Prof. Dr. Fernando Márcio de Oliveira",
    image:Fernando ,
    organization: "UFS",
    function:"Organizing committee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id:14,
    name:"Prof. Me. Marcelo Augusto Costa Maciel",
    image:Marcelo ,
    organization: "UFS",
    function:"Organizing committee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id:15,
    name:"Prof. Me. Emerson Meireles de Carvalho",
    image:Emerson ,
    organization: "UFS",
    function:"Organizing committee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id:16,
    name:"Prof. Dr. Marco Antônio Brasiel Sampaio",
    image:Marco ,
    organization: "UFS",
    function:"Organizing committee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id:17,
    name:"Prof. Ma. Caroline Almeida Aragão Cabral",
    image:Caroline ,
    organization: "CBIM-SE",
    function:"Organizing committee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id:18,
    name:"Profª. Drª. Denise Conceição de Gois Santos Michelan",
    image:Denise ,
    organization: "UFS",
    function:"Organizing committee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id:19,
    name:"Profª. Me. Mayana Chagas Carvalho",
    image:Mayana ,
    organization: "IFPB",
    function:"Organizing committee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id:20,
    name:"Rosana Dal Molin Inghes",
    image:Rosana ,
    organization: "ANTAC",
    function:"Organizing committee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
]

  
  function criarCard(valor){
    console.log(valor)
    return <Card  key={valor.id} image = {valor.image} name={valor.name} description={valor.description} institution={valor.organization}/>
  }

  const handleClick = () => {
    if (isActive) {
      setIsActive(!isActive);
      setIsActive2(!isActive2);
      console.log(isActive);
      console.log(isActive2);
    } else {
      setIsActive(!isActive);
      setIsActive2(!isActive2);
      console.log(isActive);
      console.log(isActive2);
    }
  };


  //style={{ backgroundImage: `url(${ImagemFundo})` }}

  // console.log(data.map((valor)=>{ <Card key={valor.id} image = {valor.image} name={valor.name}/>}))
  return (
    <div className="bg-slate-50 text-nord0 ">
      <div className='bg-[url] bg-cover w-full md:min-h-screen flex items-center justify-center relative' >
      <img src={ImagemFundo}></img>
      <div className='bg-black w-full h-full absolute  opacity-25'>

      </div>
      <div className='absolute w-full flex flex-col items-center text-center px-9 '>
      <div className='flex  items-center justify-center'>
        <div className=' flex flex-col sm:gap-2 justify-center items-center '>
      
        <h1 className='text-xs sm:text-lg md:text-4xl lg:text-6xl font-bold pb-2 text-nord5 '>Indústria 5.0: Oportunidades e Desafios para Arquitetura e Construção</h1>
        <h2 className='text-xxs sm:text-sm text-nord5'>13º Simpósio Brasileiro de Gestão e Economia da Construção e 4º Simpósio Brasileiro de Tecnologia da Informação e Comunicação na Construção</h2>

        
        </div>
        {/* <div>
          <img src={logo} alt="logo" className="w-96 sm:w-800  h-auto mx-auto"/>
        </div> */}
      </div>

      <div className='flex px-32 py-12 text-2xl justify-center itens-center font-bold text-nord5'>
        {/* <h3 >FALTAM</h3> */}
        <Timer />
        {/* <h3>PARA O EVENTO</h3> */}
      </div>
      </div>
      </div>
      

      <div name="sobre" className='text-base px-6 sm:px-6 md:px-10 lg:px-32 bg-gray-200 py-12'>
        <h3 className='font-bold text-lg text-slate-900'>Sobre o evento</h3>
          <div className="my-4">
            <p>
              O Simpósio Brasileiro de Gestão e Economia da Construção (SIBRAGEC) e o Simpósio Brasileiro de Tecnologia da Informação e Comunicação na Construção (SBTIC) são eventos bienais promovidos, respectivamente pelos Grupos de Trabalho “Gestão e Economia da Construção” e “Tecnologia da Informação e Comunicação” da Associação Nacional de Tecnologia do Ambiente Construído (ANTAC), que têm como objetivos promover a cooperação entre pesquisadores e disseminar os avanços técnico-científicos nessa temática.
            </p>
          </div>
          <div className="my-4">
            <p>
              Com o tema central “Indústria 5.0: oportunidades e desafios para a indústria da construção”, o SIBRAGEC + SBTIC 2023 deseja aprofundar os impactos e desafios da Construção 4.0 e discutir avanços para incorporar o foco humano na tomada de decisões proposto pela Indústria 5.0. Pretende-se, com isso, promover uma ampla discussão sobre os mecanismos de difusão e integração do conhecimento científico existente, as estratégias empreendidas, tanto pelo meio acadêmico quanto pelo setor produtivo para promover esta integração, as oportunidades e barreiras para a transferência do conhecimento científico e de novas tecnologias desenvolvidas no ambiente acadêmico para ação e o desenvolvimento da indústria da construção civil, que compreende as áreas de Engenharia, Arquitetura e Construção.
            </p>
          </div>

          <VideoPlayer/>

          <h3 className='font-bold text-lg'>Um pouco sobre a programação</h3>
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
      <h3 name="organizaçao" className='pt-4 px-6 sm:px-6 md:px-10 lg:px-32 font-bold text-lg text-slate-900'>Organização</h3>
        <p className='py-4 px-6 sm:px-6 md:px-10 lg:px-32'>
          Desde as suas primeiras edições (SIBRAGEC em 1999 e SBTIC em 2002), os eventos têm se caracterizado como dois dos principais fóruns nacionais de discussões pertinentes à “Gestão e Economia da Construção” e “Tecnologia da Informação e Comunicação”, bem como de integração e intercâmbio do conhecimento acadêmico com o setor produtivo. Em 2023, os dois eventos voltam a ocorrer em conjunto (SIBRAGEC+SBTIC 2023), contando com a soma de esforços de professores, pesquisadores e alunos de pós-graduação e graduação, como também construtores, projetistas, gestores e outros profissionais atuantes na Construção Civil.
        </p>

      <div className='flex justify-center '>
      <button disabled={isActive} onClick={handleClick} className='bg-transparent duration-0 bg-none text-gray-400 outline-none hover:border-none focus:outline-none disabled:text-gray-900'>
        Comite Cientifico
      </button>
      <button disabled={isActive2} onClick={handleClick} className='bg-transparent duration-0 bg-none text-gray-400 outline-none hover:border-none focus:outline-none disabled:text-gray-900'>
        Comissão Organizadora
      </button>
      </div>
      
      
        <div className='px-6 sm:px-6 md:px-10 lg:px-32 py-8'>

        {isActive && 
        <Slider {...settings} className='flex justify-center' > 
      
        {data.filter(data=>data.function==="Scientific Committee").map(data=>criarCard(data))}
        
        </Slider>
        }
        

      {isActive2 && 
      <Slider {...settings} className='flex justify-center' > 
      {data.filter(data=>data.function==="Organizing committee").map(data=>criarCard(data))}
      </Slider>
      }
        </div>
      </div>
    </div>
  )
}

export default Home