import React,{useState} from 'react'
import Timer from '../components/Timer'
import Card from '../components/Card'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import  Logo from "../assets/Logo";
// import Arrow from '../assets/Arrow';
import Leftarrow from '../components/Leftarrow';
import Rightarrow from '../components/Rightarrow';
import Luciano from '../assets/images/Luciano_IFS.jpg'
import logo from "../assets/logo-02.svg"


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
    name:"Teste1",
    image: Luciano  ,
    funcao:"a"
  },
  {
    id:2,
    name:"Teste2",
    image:Luciano ,
    funcao:"a"
  },
  {
    id:3,
    name:"Teste3",
    image:Luciano ,
    funcao:"a"
  },
  {
    id:4,
    name:"Teste4",
    image:Luciano ,
    funcao:"b"
  },
  {
    id:5,
    name:"Teste4",
    image:Luciano ,
    funcao:"b"
  },
  {
    id:6,
    name:"Teste4",
    image:Luciano ,
    funcao:"b"
  },
  {
    id:7,
    name:"Teste4",
    image:Luciano ,
    funcao:"b"
  }
]

  
  function criarCard(valor){
    console.log(valor)
    return <Card  key={valor.id} image = {valor.image} name={valor.name} institution={valor.funcao}/>
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
      <div className='flex px-32 items-center'>
        <div className=' flex '>
        <div>
        <h1 className='text-4xl font-bold pb-2 '>Indústria 5.0: Oportunidades e Desafios para Arquitetura e Construção</h1>
        <h2 className=''>13º Simpósio Brasileiro de Gestão e Economia da Construção e 4º Simpósio Brasileiro de Tecnologia da Informação e Comunicação na Construção</h2>

        </div>
        </div>
        <div>
          <img src={logo} alt="logo" className="w-900 h-auto mx-auto"/>
        </div>
      </div>

      <div className='bg-[#E28659] flex px-32 py-12 text-2xl justify-center itens-center font-bold'>
        <h3 >FALTAM</h3>
        <Timer />
        <h3>PARA O EVENTO COMEÇAR</h3>
      </div>
      

      <div className='text-base px-32 bg-gray-200 py-12'>
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
        <p className='py-4 px-32'>
        De acordo com as normas da ANTAC para realização de eventos, o SIBRAGEC / SBTIC 2023 contará com um comitê científico, responsável pela programação e pela gestão, avaliação e aprovação final dos artigos submetidos, e uma comissão organizadora, responsável pela gestão e provimento dos recursos necessários para a realização do evento.
        </p>

      <div className='flex justify-center '>
      <button disabled={isActive} onClick={handleClick} className='bg-transparent bg-none text-gray-400 disabled:text-gray-900'>
        Comite Cientifico
      </button>
      <button disabled={isActive2} onClick={handleClick} className='bg-transparent bg-none text-gray-400 disabled:text-gray-900'>
        Comissão Organizadora
      </button>
      </div>
      
      
        <div className='px-32 py-8'>

        {isActive && 
        <Slider {...settings} className='flex justify-center' > 
        {data.filter(data=>data.funcao==="a").map(data=>criarCard(data))}
        </Slider>
        }
        

      {isActive2 && 
      <Slider {...settings} className='flex justify-center' > 
      {data.filter(data=>data.funcao==="b").map(data=>criarCard(data))}
      </Slider>
      }
        </div>
      </div>
    </div>
  )
}

export default Home