import React,{useState} from 'react'
import Timer from '../components/Timer'
import Card from '../components/Card'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Leftarrow from '../components/Leftarrow';
import Rightarrow from '../components/Rightarrow';
import Luciano from '../assets/images/luciano.jpg'
import logo from "../assets/logo-01.svg"
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


  

  // console.log(data.map((valor)=>{ <Card key={valor.id} image = {valor.image} name={valor.name}/>}))
  return (
    <div className="bg-slate-50 text-nord0 ">
      <div className='flex px-6 sm:px-6 md:px-10 lg:px-32 items-center sm:gap-10'>
        <div className=' flex flex-col sm:gap-2 '>
      
        <h1 className='text-xs sm:text-lg md:text-xl lg:text-4xl font-bold pb-2 '>Indústria 5.0: Oportunidades e Desafios para Arquitetura e Construção</h1>
        <h2 className='text-xxs sm:text-sm'>13º Simpósio Brasileiro de Gestão e Economia da Construção e 4º Simpósio Brasileiro de Tecnologia da Informação e Comunicação na Construção</h2>

        
        </div>
        <div>
          <img src={logo} alt="logo" className="w-96 sm:w-800  h-auto mx-auto"/>
        </div>
      </div>

      <div className='bg-[#E28659] flex px-32 py-12 text-2xl justify-center itens-center font-bold'>
        <h3 >FALTAM</h3>
        <Timer />
        <h3>PARA O EVENTO</h3>
      </div>
      

      <div className='text-base px-6 sm:px-6 md:px-10 lg:px-32 bg-gray-200 py-12'>
        <h3 className='font-bold text-lg text-slate-900'>Sobre o evento</h3>
          <div className="my-4">
            <p>
              O Simpósio Brasileiro de Gestão e Economia da Construção (SIBRAGEC) e o Simpósio Brasileiro de Tecnologia da Informação e Comunicação na Construção (SBTIC) são eventos bienais promovidos, respectivamente pelos Grupos de Trabalho “Gestão e Economia da Construção” e “tecnologia da Informação e Comunicação” da Associação Nacional de Tecnologia do Ambiente  Construído (ANTAC),que têm como objetivos promover a cooperação entre pesquisadores e disseminar os avanços técnico-científicos nessa temática. 
            </p>
          </div>
          <div className="my-4">
            <p>
              Desde as suas primeiras edições (SIBRAGEC em 1999 e SBTIC em 2002, inicialmente com a sigla TIC), os eventos têm se caracterizado como um dos principais fóruns de discussões pertinentes à “Gestão e Economia da Construção” e “Tecnologia da Informação e Comunicação”, bem como de integração e intercâmbio do conhecimento acadêmico com o setor produtivo. Sendo assim, os eventos SIBRAGEC e SBTIC são considerados, atualmente, eventos acadêmicos nacionais de renome em suas áreas de conhecimento. Ademais, o SBTIC já ocorreu em conjunto com o III SBQP (Simpósio Brasileiro de Qualidade no Projeto), numa organização conjunta com o GT de Qualidade do Projeto. Desta vez, considerando que outros eventos têm apresentado sessões técnicas na temática TIC e BIM, a exemplo do SBQP, SIBRAGEC e ENTAC (Encontro Nacional de Tecnologia do Ambiente Construído), vão ser realizados conjuntamente os eventos SIBRAGEC e SBTIC, conforme já anunciado. 
            </p>
          </div>
          <div className="my-4">
            <p>
              Em 2017, ambos eventos foram realizados em conjunto, em Fortaleza, Ceará. Em 2023, essa parceria volta a acontecer e o SIBRAGEC / SBTIC 2023 é dirigido tanto a professores, pesquisadores e alunos de pós-graduação e graduação, como também construtores, projetistas, consultores, técnicos de órgãos públicos e outros profissionais atuantes na construção civil. Nesse sentido, este evento constitui-se em uma oportunidade ímpar para aglutinação dos esforços de todos que atuam nesta área do conhecimento, tão vital para o desenvolvimento do país.
            </p>
          </div>
          <div className="my-4">
            <p>
              O evento é organizado por um consórcio dos Programas de Pós-Graduação da UFS (Engenharia Civil), UFBA (Engenharia Civil), UFG (Engenharia de Produção), UNICAMP (Arquitetura, Tecnologia e Cidade) e USP (Engenharia Civil/Inovação na Construção Civil) e dos Cursos de Graduação do IFS (Engenharia Civil e Arquitetura e Urbanismo), da UFSC (Engenharia Civil) e UFC (Arquitetura e Urbanismo e Design). 
            </p>
          </div>
        
          <div className="my-4">
            <p>
              O tema central é a integração do conhecimento em arquitetura e construção, considerando inovação, aspectos sociais e resiliência. Pretende-se, com isso, promover uma ampla discussão sobre os mecanismos de difusão e integração do conhecimento científico existente, as estratégias empreendidas tanto pelo meio acadêmico, quanto pelo setor produtivo para promover esta integração, as oportunidades e barreiras para a transferência do conhecimento científico e de novas tecnologias desenvolvidas no ambiente acadêmico para ação e o desenvolvimento da indústria da construção civil, que compreende as áreas de Engenharia, Arquitetura e Construção.
            </p>
          </div>
          <h3 className='font-bold text-lg'>Um pouco sobre a programação</h3>
          <div className="my-4">
            <p>
              O primeiro dia do evento tem como objetivo específico promover essa integração da academia com a indústria. Para isso, são convidados pesquisadores que atuam em projetos fortemente vinculados à indústria e representantes da indústria e de organismos públicos e privados que estão envolvidos com processos de inovação do setor, quer seja no âmbito empresarial e em canteiros de obra, quer na formulação de políticas públicas ou ações interinstitucionais.
            </p>
          </div>
          <div className="my-4">
            <p>
              O segundo e o terceiro dias serão destinados à disseminação e discussão da produção científica em “Gestão e Economia da Construção” e “Tecnologia da Informação e Comunicação”. Será realizado um painel de debates composto por profissionais de alta competência e experiência na condução de pesquisa na área, com o objetivo de avaliar, de forma crítica, os avanços e as lacunas do conhecimento desenvolvido nessas áreas. Também serão realizados minicursos, bem como sessões de pôsteres, de discussão de dissertações e teses em andamento (summer school), permitindo a discussão mais aprofundada de trabalhos finalizados e com significativas contribuições técnicas e científicas.
            </p>
          </div>
      </div>
      <div>
      <h3 className='pt-4 px-6 sm:px-6 md:px-10 lg:px-32 font-bold text-lg text-slate-900'>Organização</h3>
        <p className='py-4 px-6 sm:px-6 md:px-10 lg:px-32'>
        De acordo com as normas da ANTAC para realização de eventos, o SIBRAGEC / SBTIC 2023 contará com um comitê científico, responsável pela programação e pela gestão, avaliação e aprovação final dos artigos submetidos, e uma comissão organizadora, responsável pela gestão e provimento dos recursos necessários para a realização do evento.
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