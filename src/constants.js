import Reymard from "./assets/images/reymard.png"
//import Tatiana from "./assets/images/tatiana.jpeg"
import Regina from "./assets/images/regina.png"
import Herbert from "./assets/images/herbert.jpeg"
import Eduardo from "./assets/images/Eduardo.png"
import Clarissa from "./assets/images/clarissa.png"
import Emerson from "./assets/images/emerson.jpg"
import Caroline from "./assets/images/caroline.jpg"
import Mohamed from "./assets/images/Mohamed.png"
import Béda from "./assets/images/Béda.png"
import Regina_Barkokebas from "./assets/images/Regina_Barkokebas.png"
import Fabiano_Rogerio from "./assets/images/Fabiano_Rogerio.png"
import Jose_Pinto from "./assets/images/José_Pinto.png"
import André_Quinderé from "./assets/images/André_Quinderé.png"
import Tatiana_Gondim from "./assets/images/Tatiana_Gondim.png"
import sem_foto from "./assets/images/sem_foto.jpg"


export const navLinks = [
  {
    name: "Início",
    path: "/",
    links: [
      { name: "Sobre", path: "sobre" },
      { name: "Organização", path: "organizaçao" },
    ],
  },
  {
    name: "Programação",
    path: "/programacao",
    links: [
      { name: "Horários", path: "horarios" },
      { name: "Palestrantes do dia", path: "palestrantes" },
    ],
  },
  {
    name: "Inscrições",
    path: "/inscricoes",
    links: [
      { name: "Sobre", path: "sobre" },
      { name: "Preços", path: "preços" },
      { name: "MiniCursos", path: "minicursos" },
    ],
  },
  {
    name: "Submissões",
    path: "/submissoes",
    links: [
      { name: "Artigos", path: "artigos" },
      { name: "Calendário", path: "calendario" },
      { name: "Temáticas dos Artigos", path: "tematicas" },
      { name: "Instruções", path: "instructions" },
      { name: "Revista Ambiente Construído", path: "magazine" },
    ],
  },
  {
    name: "Local",
    path: "/local",
    links: [
      { name: "Local do evento", path: "local-do-evento" },
      { name: "Aracaju", path: "aracaju" },
      
    ],
  },
  {
    name: "Summer School",
    path: "/summer-school",
    links: [
    ],
  },
  {
    name: "Desafio",
    path: "/desafio",
    links: [
      ],
  },
];

// Path: src\components\Navbar\index.js


export const dayData = {
  1: {
    date: "Quarta, 08 de Novembro",
    schedule: [
      {
        time: "08h:30 - 09h:00",
        title: "ABERTURA",
        speakers: []
      },
      {
        time: "09h:00 - 10h:30",
        title: "PALESTRA 1: Advances of Industry 4.0 and 5.0: modular and offsite construction, digitalized manufacturing process and automation.",
        speakers: [
          {
            name: "Prof. PhD. Mohamed Al-Hussein ( University of Alberta)",
            photo: Mohamed,
          },
          {
            name: "Prof. PhD. Béda Barkokebas (Pontificia Universidad Católica de Chile)",
            photo: Béda,
          }
        ],
      },
      {
        time: "10h:30 - 10h:45",
        title: "INTERVALO",
        speakers: []
      },
      {
        time: "10h:45 - 12h:15",
        title: "MESA REDONDA 1: Gêmeos Digitais",
        speakers: [
          {
            name: "Prof. Dr. Reymard Sávio Sampaio de Melo (UFBA)",
            photo: Reymard,
          },
          {
            name: "Prof. Dr. Fabiano Correa (USP)",
            photo: Fabiano_Rogerio,
            description:"Docente do departamento de Engenharia de Construção Civil, da Poli-USP, possui graduação em Engenharia Mecânica com ênfase em Automação e Sistemas pela Universidade de São Paulo (2002), mestrado em Engenharia Mecânica na opção Mecatrônica pela Universidade de São Paulo (2004) e doutorado em Engenharia Mecânica na área de Controle e Automação (2009). Atualmente dedica-se à área de Tecnologia Computacional Aplicada à Construção Civil, conduzindo pesquisas nos seguintes temas: Automação e Robótica na Construção; Impacto da Indústria 4.0 na Construção, Modelagem da Informação da Construção (BIM) e Industry Foundation Classes (IFC); Fabricação Digital e Manufatura Aditiva (Impressão 3D) aplicada à Arquitetura e à Construção; Smart Cities e Big Data."
          },
          {
            name: "Profª. Drª. Dayana Bastos Costa (UFBA)",
            photo: sem_foto,
          },
          {
            name: "Prof. PhD. Béda Barkokebas (Pontificia Universidad Católica de Chile)",
            photo: Béda,
          },
          {
            name: "Prof. Dr. Eduardo Toledo Santos (USP)",
            photo: Eduardo,
          }
        ]
      },
      {
        time: "12h:15 - 14h:00",
        title: "ALMOÇO",
        speakers: []
      },
      {
        time: "14h:00 - 15h:30",
        title: "PALESTRA 2: Robótica no canteiro de obras",
        speakers: [
          {
            name: "Prof. PhD. José Pinto Duarte  (Penn State University)",
            photo: Jose_Pinto,
          },
          {
            name: "Prof.ª Drª. Regina Coeli Ruschel(UNICAMP)",
            photo: Regina,
          },
        ]
      },
      {
        time: "15h:30 - 15h:45",
        title: "INTERVALO",
        speakers: []
      },
      {
        time: "15h:45 - 17h:15",
        title: "MESA REDONDA 2: Soluções digitais em relação a canteiros inteligentes",
        speakers: [
          {
            name: "André Quinderé - CEO AVAL Engenharia (Agilean): Soluções inteligentes para planejamento e controle de obras",
            photo: André_Quinderé,
          },
          {
            name: "Prof. Dr. Reymard Sávio Sampaio de Melo (UFBA)",
            photo: Reymard,
          },
        ]
      },
      {
        time: "17h:30 - 18h:30",
        title: "MINICURSOS",
        speakers: []
      },
    ],
    speakers: [
      {
        name: "Prof. PhD. Mohamed Al-Hussein (University of Alberta)",
        photo: Mohamed,
        description: "Pesquisador muito requisitado nas áreas de construção modular, pré-fabricação, lean manufacturing, otimização do processo de construção e BIM. A pesquisa do Dr. Al-Hussein foi publicada em quase 400 artigos nos principais jornais e anais de conferências."
      },
      {
        name: "Prof. PhD. Béda Barkokebas (Pontificia Universidad Católica de Chile)",
        photo: Béda,
        description:"Professor adjunto da Pontifícia Universidad Católica de Chile na área de industrialização e automação na construção. É também coordenador da Aliança Brasileira para a Construção Modular (ABCModular), um ecossistema do Centro de Inovação para a Construção Sustentável - CICS/USP, formado por empresas e academia. Trabalha com sistemas de construção industrializados desde 2010. Após sua mudança para o Canadá, passou a trabalhar ativamente com fábricas de construção modular no Canadá e Brasil, desenvolvendo sistemas de informação combinando dados gerados por modelos BIM e dados coletados em tempo real por diferentes sensores. Também desenvolve estudos de viabilidade para a implantação de sistemas de construção industrializados, além de melhorias em processos em linhas de produção e canteiros de obra. Sua área de interesse consiste no desenvolvimento de métodos para controle de produção inteligentes e integrados a sistemas de informação para a melhoria contínua na construção modular. É engenheiro civil formado pela Escola Politécnica da Universidade de Pernambuco, mestre e doutor pela Universidade de Alberta (Canadá)."
      },
      {
        name: "Prof. Dr. Reymard Sávio Sampaio de Melo (UFBA)",
        photo: Reymard,
        description:"É professor de Engenharia Civil na Universidade Federal da Bahia. Ele esteve envolvido com a indústria da construção nos últimos 15 anos, onde conduziu pesquisas, ensinou e auxiliou a indústria na área de Gestão da Construção, incluindo melhoria de processos, mentalidade enxuta, modelagem da informação na construção e Blockchain. É autor e co-autor de 09 artigos de periódicos e 49 artigos de conferências revisados por pares até o momento."
      },
      {
        name: "Prof. Dr. Fabiano Correa (USP)",
        photo: Fabiano_Rogerio,
        description:"Docente do departamento de Engenharia de Construção Civil, da Poli-USP, possui graduação em Engenharia Mecânica com ênfase em Automação e Sistemas pela Universidade de São Paulo (2002), mestrado em Engenharia Mecânica na opção Mecatrônica pela Universidade de São Paulo (2004) e doutorado em Engenharia Mecânica na área de Controle e Automação (2009). Atualmente dedica-se à área de Tecnologia Computacional Aplicada à Construção Civil, conduzindo pesquisas nos seguintes temas: Automação e Robótica na Construção; Impacto da Indústria 4.0 na Construção, Modelagem da Informação da Construção (BIM) e Industry Foundation Classes (IFC); Fabricação Digital e Manufatura Aditiva (Impressão 3D) aplicada à Arquitetura e à Construção; Smart Cities e Big Data."

      },
      {
        name: "Profª. Drª. Dayana Bastos Costa (UFBA)",
        photo: sem_foto,
      },
      {
        name: "Prof. Dr. Eduardo Toledo Santos (USP)",
        photo: Eduardo,
        description:"Engenheiro, Mestre e Doutor em Engenharia Elétrica pela Escola Politécnica da USP. Professor da Escola Politécnica da USP e Vice Coordenador do Mestrado Profissional em Inovação na Construção Civil. É relator do GT Objetos BIM da Comissão Especial de Estudos sobre BIM (CEE-134) da ABNT. Diretor de Divulgação da ANTAC. Diretor das entidades internacionais ISGG, ISCCBE e CIB. Membro da BIM Excellence Initiative e do CIB W78. Especialista do Comitê Estratégico BIM do Governo Federal. Revisor técnico das edições brasileiras do "+"BIM Handbook"+". Editor para Língua Portuguesa do BIM Dictionary."
      },
      {
        name: "Prof. PhD. José Pinto Duarte  (Penn State University)",
        photo: Jose_Pinto,
        description:"Graduado em Arquitetura pela Universidade Técnica de Lisboa, Portugal, mestre em Design Methods e PHD em Design and Computation pelo MIT, EUA. Atualmente, ele é Chair in Design Innovation e diretor do Stuckeman Center for Design Computing na Penn State University, EUA, bem como professor de arquitetura e engenharia. Foi Reitor e Professor da Faculdade de Arquitetura da Universidade de Lisboa e Presidente da eCAADe - educação e investigação em desenho arquitetônico assistido por computador na Europa. O foco principal de sua pesquisa é o uso de novas tecnologias para customização em massa em projetos arquitetônicos, urbanos e de produtos."
      },
      {
        name: "Prof.ª Drª. Regina Coeli Ruschel(UNICAMP)",
        photo: Regina,
        description:" É Engenheira Civil, Mestre em Mecânica do Solos, Doutora em Engenharia Elétrica e Livre docente em Projeto Auxiliado por Computador. É Pesquisadora e Professora Colaboradora na Universidade Estadual de Campinas. Atua ativamente junto à ABNT na CCE134 e no BIM Fórum Brasil. Desenvolve pesquisas em Modelagem da Informação da Construção. Foi pioneira na introdução do BIM no ensino de graduação no Brasil."
      },
      {
        name: "André Quinderé - CEO AVAL Engenharia (Agilean)",
        photo: André_Quinderé,
        description:" CEO da Aval Tecnologia, engenheiro civil com pós-graduação em gestão de projetos e experiência em implantação de novas tecnologias e práticas do Lean Construction em diversos tipos de obra, totalizando mais de 3.000.000,00 de m² de área construída impactados. É um dos responsáveis pelo desenvolvimento do Agilean, solução pioneira em levar o Lean Construction de forma digital ao canteiro de obras e vencedora do Prêmio CBIC de Inovação e Sustentabilidade 2020."
      },

    ]
  },
  2: {
    date: "Quinta, 09 de Novembro",
    schedule: [
      {
        time: "08h:30 - 10h:15",
        title: "SUMMER SCHOOL",
        speakers: [
          {
            name: "Prof.ª Dr.ª Regina Coeli Ruschel (Unicamp))",
            photo: Regina,
            description:"É Engenheira Civil, Mestre em Mecânica do Solos, Doutora em Engenharia Elétrica e Livre docente em Projeto Auxiliado por Computador. É Pesquisadora e Professora Colaboradora na Universidade Estadual de Campinas. Atua ativamente junto à ABNT na CCE134 e no BIM Fórum Brasil. Desenvolve pesquisas em Modelagem da Informação da Construção. Foi pioneira na introdução do BIM no ensino de graduação no Brasil."
          },
          {
            name: "Prof. Dr. Ariosvaldo Denis Granja (Unicamp)",
            photo: sem_foto,
          },
          {
            name: "Prof. Dr. Fabiano Rogério Corrêa (USP)",
            photo: Fabiano_Rogerio,
            description:"Docente do departamento de Engenharia de Construção Civil, da Poli-USP, possui graduação em Engenharia Mecânica com ênfase em Automação e Sistemas pela Universidade de São Paulo (2002), mestrado em Engenharia Mecânica na opção Mecatrônica pela Universidade de São Paulo (2004) e doutorado em Engenharia Mecânica na área de Controle e Automação (2009). Atualmente dedica-se à área de Tecnologia Computacional Aplicada à Construção Civil, conduzindo pesquisas nos seguintes temas: Automação e Robótica na Construção; Impacto da Indústria 4.0 na Construção, Modelagem da Informação da Construção (BIM) e Industry Foundation Classes (IFC); Fabricação Digital e Manufatura Aditiva (Impressão 3D) aplicada à Arquitetura e à Construção; Smart Cities e Big Data."
          }
        ]
      },
      {
        time: "10h:15 - 12h:15",
        title: "INTERVALO",
        speakers: []
      },
      {
        time: "12h:15 - 14h:00",
        title: "ALMOÇO",
        speakers: []
      },
      {
        time: "14h:00 - 15h:45",
        title: "SESSÕES DE APRESENTAÇÕES DE ARTIGOS",
        description: "Apresentação de artigos aceitos pelo Comitê Científico",
        speakers: []
      },
      {
        time: "15h:45 - 16h:15",
        title: "INTERVALO",
        speakers: []
      },
      {
        time: "16h:15 - 17h:45",
        title: "SESSÕES DE APRESENTAÇÕES DE ARTIGOS",
        description: "Apresentação de artigos aceitos para a Edição especial da Revista Ambiente Construído",
        speakers: []
      },
      {
        time: "17h:45 - 20h:00",
        title: "REUNIÃO DOS GTs GESTÃO E ECONOMIA DA CONSTRUÇÃO & TECNOLOGIA DA INFORMAÇÃO E COMUNICAÇÃO",
        speakers: []
      },
      {
        time: "20h:00 - 22h:00",
        title: "JANTAR DE CONFRATERNIZAÇÃO",
        speakers: []
      },
    ],
    speakers: [
      {
        name: "Prof.ª Dr.ª Regina Coeli Ruschel (Unicamp))",
        photo: Regina,
        description:"É Engenheira Civil, Mestre em Mecânica do Solos, Doutora em Engenharia Elétrica e Livre docente em Projeto Auxiliado por Computador. É Pesquisadora e Professora Colaboradora na Universidade Estadual de Campinas. Atua ativamente junto à ABNT na CCE134 e no BIM Fórum Brasil. Desenvolve pesquisas em Modelagem da Informação da Construção. Foi pioneira na introdução do BIM no ensino de graduação no Brasil."
      },
      {
        name: "Prof. Dr. Ariosvaldo Denis Granja (Unicamp)",
        photo: sem_foto,
      },
      {
        name: "Prof. Dr. Fabiano Rogério Corrêa (USP)",
        photo: Fabiano_Rogerio,
        description:"Docente do departamento de Engenharia de Construção Civil, da Poli-USP, possui graduação em Engenharia Mecânica com ênfase em Automação e Sistemas pela Universidade de São Paulo (2002), mestrado em Engenharia Mecânica na opção Mecatrônica pela Universidade de São Paulo (2004) e doutorado em Engenharia Mecânica na área de Controle e Automação (2009). Atualmente dedica-se à área de Tecnologia Computacional Aplicada à Construção Civil, conduzindo pesquisas nos seguintes temas: Automação e Robótica na Construção; Impacto da Indústria 4.0 na Construção, Modelagem da Informação da Construção (BIM) e Industry Foundation Classes (IFC); Fabricação Digital e Manufatura Aditiva (Impressão 3D) aplicada à Arquitetura e à Construção; Smart Cities e Big Data."

      },
    ]
  },
  3: {
    date: "Sexta, 10 de Novembro",
    schedule: [
      {
        time: "08h:30 - 10h:00",
        title: "PALESTRA 3: Análises ergonômicas baseadas em realidade virtual (RV) para reduzir lesões ocupacionais",
        speakers: [
          {
            name: "Profª. PhD. Regina Barkokebas (Pontificia Universidad Católica de Chile)",
            photo: Regina_Barkokebas,
          },
          {
            name: "Prof. Drª. Tatiana Gondim do Amaral (UFG)",
            photo: Tatiana_Gondim,
          }
        ]
      },
      {
        time: "10h:00 - 10h:15",
        title: "INTERVALO",
        speakers: []
      },
      {
        time: "10h:15 - 12h:00",
        title: "SESSÕES DE APRESENTAÇÕES DE ARTIGOS",
        speakers: []
      },
      {
        time: "10h:15 - 12h:00",
        title: "VISITA TÉCNICA",
        speakers: []
      },
      {
        time: "12h:00 - 14h:00",
        title: "ALMOÇO",
        speakers: []
      },
      {
        time: "14h:00 - 15h:15",
        title: "SESSÕES DE APRESENTAÇÕES DE ARTIGOS",
        speakers: []
      },
      {
        time: "14h:00 - 15h:15",
        title: "PITCH DO DESAFIO SIBRAGEC/SBTIC",
        speakers: [
          {
            name: "Profª. Drª. Clarissa Notariano Biotto (UFC)",
            photo: Clarissa,
          },
          {
            name: "Prof. Me. Emerson Meireles de Carvalho (UFS)",
            photo: Emerson,
          },
          {
            name: "Prof. Ma. Caroline Almeida Aragão Cabral (CBIM-SE)",
            photo: Caroline,
          },
          {
            name: "Prof. Me. Herbert Melo Cruz (IFS)",
            photo: Herbert,
          }
        ]
      },
      {
        time: "15h:45 - 16h:00",
        title: "INTERVALO",
        speakers: []
      },
      {
        time: "16h:00 - 17h:45",
        title: "SESSÕES DE APRESENTAÇÕES DE ARTIGOS",
        description: "Apresentação de artigos aceitos para a Edição especial da Revista Ambiente Construído.",
        speakers: []
      },
      {
        time: "18h:00 - 20h:00",
        title: "ENCERRAMENTO",
        description: "Premiação do Desafio SIBRAGEC / SBTIC e Summer School.",
        speakers: []
      },
    ],
    speakers: [
      {
        name: "Profª. PhD. Regina Barkokebas (Pontificia Universidad Católica de Chile)",
        photo: Regina_Barkokebas,
        description:"Arquiteta e Urbanista pela Universidade Federal de Pernambuco (UFPE, 2013), Mestre em Gestão da Construção pela Universidade de Alberta (University of Alberta, Canadá, 2017), e Doutora em Gestão da Construção pela Universidade de Alberta (University of Alberta, Canadá, 2022). É Professora Adjunta no Departamento de Engenharia e Gestão da Construção e na área de Engenharia de Projeto (DILAB) na Pontificia Universidad Católica de Chile. Atualmente, sua pesquisa foca em análise ergonômica e avaliação de riscos ergonômicos na construção civil baseadas em simulações de atividades laborais utilizando realidade virtual e sistema de captura de movimento."
      },
      {
        name: "Prof. Drª. Tatiana Gondim do Amaral (UFG)",
        photo: Tatiana_Gondim,
        description:"É engenheira civil, Mestre e Doutora em Engenharia Civil pela UFSC. É professora da UFG e Subcoordenadora do Curso de Especialização em Construção Civil. Integra o Mestrado Profissional do Programa de Pós-graduação em Engenharia de Produção (PPGEP - UFG) da Engenharia de Produção e do Mestrado Profissional em Finanças e Obras Públicas (PROFIAP - UFG) da Faculdade de Ciências e Tecnologia (FCT)."

      },
      {
        name: "Profª. Drª. Clarissa Notariano Biotto (UFC)",
        photo: Clarissa,
      },
      {
        name: "Prof. Me. Emerson Meireles de Carvalho (UFS)",
        photo: Emerson,
      },
      {
        name: "Prof. Ma. Caroline Almeida Aragão Cabral (CBIM-SE)",
        photo: Caroline,
      },
      {
        name: "Prof. Me. Herbert Melo Cruz (IFS)",
        photo: Herbert,
      },
    ]
  }
}

// Path: src\John Doendex.js


export const subscribeInstructions = [
  {
    title: "As inscrições serão realizadas por depósito identificado",
    text: ["Os dados bancários da conta ANTAC EVENTOS são:",
    "Banco do Brasil (001)",
    "Agência 1899-6 (UFRGS)",
    "Conta Corrente: 104.104-5",
    "CNPJ: 59.838.045/0001-82 (para pix ou transferência de outros bancos)"],
  },
  {
    title: "Cada inscrição completa dará direito a publicação de dois artigos nos anais do evento, exceto a modalidade “Estudante de graduação - ouvinte”.  Os autores deverão efetuar sua inscrição até 10/07/2023.",
    text: "",
  },
  {
    title: "Inscrições por empenho",
    text: "Para inscrições por Empenho, entrar em contato através do e-mail: antac@ufrgs.br para receber as orientações."
  },
  {
    title: "Comprovante exigido (Exclusivo para estudantes de Graduação e Pós-graduação)",
    text: "Todos os comprovantes exigidos (comprovante de matrícula de graduação ou pós-graduação) deverão ser digitalizados e anexos no momento do cadastro no formato Jpg ou PDF."
  },
  {
    title: "Comprovante exigido (sócio ANTAC)",
    text: "O comprovante de pagamento da anuidade deverá ser digitalizado e anexo no momento do cadastro no formato .jpg ou .pdf."
  },
      
  ]

  export const articleInstructions = [
    {
      title: "As inscrições serão realizadas por meio do formulário eletrônico “link”. Nele, deverão ser preenchidos os dados pessoais e anexado o comprovante de pagamento bancário (depósito/transferência/PIX identificados), a ser realizado conforme dados de transferência.",
      text: ""
    },
    {
      title: 'Na aba AVALIAÇÃO > RODADA 1, em "REVISÕES", clique em ENVIAR ARQUIVO. Uma nova janela chamada "Enviar arquivo para avaliação" irá aparecer',
      text: "",
    },
    {
      title: 'Na janela "Enviar aquivo para avaliação", na aba CARREGAR ARQUIVO, selecione em Componentes do Artigo a opção "Texto do Artigo" e arraste o arquivo para a área de upload ou selecione enviar arquivo. O formato do artigo deve OBRIGATORIAMENTE ser em docx. Clique em CONTINUAR',
      text: ""
    },
    {
      title: 'Na janela "Enviar arquivo para avaliação", na aba METADADOS, altere o nome do arquivo para XXX-SIBRAGEC2021.docx, no qual XXX é o número da submissão. Por exemplo: 228-SIBRAGEC2021.docx . Clique em CONTINUAR',
      text: ""
    },
    {
      title: "Comprovante exigido (sócio ANTAC)",
      text: 'Na janela "Enviar arquivo para avaliação", na aba FINALIZAÇÃO, clique em CONCLUIR.'
    },
        
    ]

export const calendarData = [
  {
    date: "até 21/04/23",
    crossed: 'até  23/04/2023',
    event: "Envio de artigos"
  },
  {
    date: "até 21/05/2023",
    event: "Decisão preliminar de artigos submetidos"
  },
  {
    date: "até 05/06/2023",
    event: "Envio das versões corrigidas dos artigos"
  },
  {
    date: "até 03/07/2023",
    event: "Decisão final dos artigos"
  },
  {
    date: "até 17/07/2023",
    event: "Inscrição dos autores de artigos"
  },
]

export const thematicsSibragec = [
  {
    title: "Gestão da Cadeia de Suprimentos e Logística",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Gestão da Produção",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Ensino de Gestão da Construção",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Gestão de Contratos e de Aquisições",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Gestão Sustentável nas Empresas e Canteiros de Obra",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Gestão da Qualidade",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Gestão do Conhecimento e da Informação",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Gestão de Custos",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Gestão de Riscos",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Gestão Estratégica e Organizacional",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Gestão da Saúde e Segurança do Trabalho",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Gestão da Manutenção e de Operações",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Gestão da Inovação",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Indústrias 4.0 e 5.0 com ênfase na construção",
    link: "https://picsum.photos/200/300",
  },
  
]

export const thematicsSbtic = [
  {
    title: "TIC`s no desenvolvimento de projeto de edifícios e infraestruturas",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "TIC`s na gestão do conhecimento, integração e colaboração",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "TIC`s na gestão e operação de edifícios e infraestruturas",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "TIC`s no desenvolvimento das cidades e na gestão pública",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "TIC`s no ensino",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Indústria 4.0 e 5.0 com ênfase nas tecnologias e arquitetura",
    link: "https://picsum.photos/200/300",
  },
  
]


export const prices = {

  all : [
    {
      title: "Profissional",
      price: {
        antac: ["R$ 650,00", "R$ 750,00", "R$ 900,00"],
        nonAntac: ["R$ 750,00", "R$ 850,00", "R$ 1000,00"],
      },
    },
    {
      title: "Estudante de Pós-graduação",
      price: {
        antac: ["R$ 450,00", "R$ 550,00", "R$ 650,00"],
        nonAntac: ["R$ 600,00", "R$ 700,00", "R$ 800,00"],
      },
    },
    {
      title: "Est. de Graduação (Autor)",
      price: {
        antac: ["R$ 350,00", "R$ 400,00", "R$ 450,00"],
        nonAntac: ["R$ 450,00", "R$ 500,00", "R$ 550,00"],
      },
      
    },
    {
      title: "Est. de Graduação (Ouvinte)",
      price: {
        antac: ["R$ 260,00", "R$ 310,00", "R$ 360,00"],
        nonAntac: ["R$ 320,00", "R$ 360,00", "R$ 410,00"],
      },
    },
  ],

  industryDay : [
    {
      title: "Profissional",
      price: {
        antac: ["R$ 300,00", "R$ 350,00", "R$ 400,00"],
        nonAntac: ["R$ 350,00", "R$ 400,00", "R$ 450,00"],
      },
    },
    {
      title: "Estudante de Pós-graduação",
      price: {
        antac: ["R$ 230,00", "R$ 280,00", "R$ 330,00"],
        nonAntac: ["R$ 290,00", "R$ 340,00", "R$ 390,00"],
      },
    },
    {
      title: "Estudante de Graduação",
      price: {
        antac: ["R$ 150,00", "R$ 200,00", "R$ 250,00"],
        nonAntac: ["R$ 200,00", "R$ 250,00", "R$ 300,00"],
      },
      
    },
   
  ],

  minicourses: [
    {
      title: "Profissional",
      price: {
        antac: ["R$ 150,00", "R$ 200,00", "R$ 300,00"],
        nonAntac: ["R$ 250,00", "R$ 300,00", "R$ 400,00"],
      },
    },
    {
      title: "Estudante de Pós-graduação",
      price: {
        antac: ["R$ 100,00", "R$ 150,00", "R$ 200,00"],
        nonAntac: ["R$ 160,00", "R$ 250,00", "R$ 300,00"],
      },
    },
    {
      title: "Estudante de Graduação",
      price: {
        antac: ["R$ 75,00", "R$ 100,00", "R$ 150,00"],
        nonAntac: ["R$ 100,00", "R$ 150,00", "R$ 200,00"],
      },
      
    },
  ]
}