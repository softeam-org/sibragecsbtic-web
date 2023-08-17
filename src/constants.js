import Reymard from "./assets/images/reymard.png"
import Tatiana from "./assets/images/tatiana.jpeg"
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
import Andre from "./assets/images/Andre.png"
import Tatiana_Gondim from "./assets/images/Tatiana_Gondim.png"
import Dayana from "./assets/images/Dayana.png"
import Denis from "./assets/images/Denis.png"
import Marcelo from "./assets/images/marcelo.jpg"
import Heineck from "./assets/images/Heineck.png"
import Pamella from "./assets/images/Pamella.png"
import Amelia from "./assets/images/Amelia.png"
import Debora from "./assets/images/debora.jpg"
import Maria_Luiza from "./assets/images/Maria_Luiza.png"
import Bernardo from "./assets/images/Bernardo.png"
import Fabricio from "./assets/images/Fabricio.png"
import Marcus from "./assets/images/Marcus.png"

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
            name: "Palestrante: Prof. PhD. Mohamed Al-Hussein (University of Alberta)",
            photo: Mohamed,
          },
          {
            name: "Moderador: Prof. PhD. Béda Barkokebas (Pontificia Universidad Católica de Chile)",
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
        title: "MESA REDONDA 1: Digitalização no canteiro de obras",
        speakers: [
          {
            name: "Palestrante: Prof. Dr. Fabiano Correa (USP)",
            photo: Reymard,
          },
          {
            name: "Palestrante: Profª. Drª. Dayana Bastos Costa (UFBA)",
            photo: Fabiano_Rogerio,
            description:"Docente do departamento de Engenharia de Construção Civil, da Poli-USP, possui graduação em Engenharia Mecânica com ênfase em Automação e Sistemas pela Universidade de São Paulo (2002), mestrado em Engenharia Mecânica na opção Mecatrônica pela Universidade de São Paulo (2004) e doutorado em Engenharia Mecânica na área de Controle e Automação (2009). Atualmente dedica-se à área de Tecnologia Computacional Aplicada à Construção Civil, conduzindo pesquisas nos seguintes temas: Automação e Robótica na Construção; Impacto da Indústria 4.0 na Construção, Modelagem da Informação da Construção (BIM) e Industry Foundation Classes (IFC); Fabricação Digital e Manufatura Aditiva (Impressão 3D) aplicada à Arquitetura e à Construção; Smart Cities e Big Data."
          },
          {
            name: "Palestrante: Eng. André Quinderé - CEO AVAL Engenharia (Agilean)",
            photo: sem_foto,
          },
          {
            name: "Moderador: Prof. Dr. Eduardo Toledo Santos (USP)",
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
            name: "Palestrante: Prof. PhD. José Pinto Duarte  (Penn State University)",
            photo: Jose_Pinto,
          },
          {
            name: "Moderador: Prof.ª Drª. Regina Coeli Ruschel(UNICAMP)",
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
        title: "PALESTRA 3: Industry 5.0: Construction production control",
        speakers: [
          {
            name: "Palestrante: Prof. PhD. Béda Barkokebas (Pontificia Universidad Católica de Chile)",
            photo: Béda,
          },
          {
            name: "Moderador: Prof. Dr. Reymard Sávio Sampaio de Melo (UFBA)",
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
        photo: Dayana,
        description: "Atualmente faz parte do Comitê de Assessoramento do Capes Print (UFBA) e Câmera de Engenharias FAPESB. É coordenadora do Grupo de Trabalho de Trends and KPI e membro do comitê executivo do GLF CEM - Global Leadership Forum in Construction Engineering and Management, e Deputy Editor da Engineering Construction Architectural Management - ECAM. Atua como Adhoc do CNPq, Capes e FAPs. Tem experiência na área de Construção Civil, com ênfase em gestão e tecnologia das construções, atuando nos seguintes temas: gestão de obras, incluindo medição de desempenho, planejamento e controle de obra, gestão da qualidade, gestão sustentável em canteiros, Building Information Modelling e Veículos Aéreos Não Tripulados."
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
        photo: Andre,
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
            name: "Prof.ª Dr.ª Regina Coeli Ruschel (Unicamp)",
            photo: Regina,
            description:"É Engenheira Civil, Mestre em Mecânica do Solos, Doutora em Engenharia Elétrica e Livre docente em Projeto Auxiliado por Computador. É Pesquisadora e Professora Colaboradora na Universidade Estadual de Campinas. Atua ativamente junto à ABNT na CCE134 e no BIM Fórum Brasil. Desenvolve pesquisas em Modelagem da Informação da Construção. Foi pioneira na introdução do BIM no ensino de graduação no Brasil."
          },
          {
            name: "Prof. Dr. Ariovaldo Denis Granja (Unicamp)",
            photo: Denis,
          },
          {
            name: "Prof. Dr. Fabiano Rogério Corrêa (USP)",
            photo: Fabiano_Rogerio,
            description:"Docente do departamento de Engenharia de Construção Civil, da Poli-USP, possui graduação em Engenharia Mecânica com ênfase em Automação e Sistemas pela Universidade de São Paulo (2002), mestrado em Engenharia Mecânica na opção Mecatrônica pela Universidade de São Paulo (2004) e doutorado em Engenharia Mecânica na área de Controle e Automação (2009). Atualmente dedica-se à área de Tecnologia Computacional Aplicada à Construção Civil, conduzindo pesquisas nos seguintes temas: Automação e Robótica na Construção; Impacto da Indústria 4.0 na Construção, Modelagem da Informação da Construção (BIM) e Industry Foundation Classes (IFC); Fabricação Digital e Manufatura Aditiva (Impressão 3D) aplicada à Arquitetura e à Construção; Smart Cities e Big Data."
          }
        ]
      },
      {
        time: "08h:30 - 10h:15",
        title: "WORKSHOP GAMES FOR LEAN",
        speakers: [
          {
            name: "jogo 01: Mashimelo game – Doutoranda Maria Luiza Abath Escorel Borges (UNICAMP) e Doutorando Fabricio Vargas (UFRGS)",
            photo: Maria_Luiza,
          },
          {
            photo: Fabricio,
          },
          {
            name: "Lego-Takt-Planning em obras de energias renováveis – Dr. Bernardo Martim Beck da Silva Etges e Marcus Fireman (Climb)",
            photo: Bernardo,
          },
          {
            photo: Marcus,
          },
          {
            name: "jogo 03: Lean experience - Eng. André Quinderé - CEO AVAL Engenharia (Agilean)",
            photo: Andre,
          },
          {
            name: "jogo 04: LeanBuilder: explorando Lean com jogo de montar – Profa. Dra. Débora de Gois Santos (UFS), Mestranda Amélia Gomes Nunes (UFS) e Mestranda Pamella Menezes Teodósio (UFS)",
            photo: Debora,
          },
          {
            photo: Amelia,
          },
          {
            photo: Pamella,
          },
          {
            name: "Mediadores: Profa. Dra. Tatiana Gondim do Amaral (UFG) e Prof. PhD. Luiz Fernando Mahlmann Heineck (UEC)",
            photo: Tatiana,
          },
          {
            photo: sem_foto,
          }
        ]
      },
      {
        time: "08h:30 - 10h:15",
        title: "VISITA TÉCNICA",
        speakers: []
      },
      {
        time: "10h:15 - 12h:15",
        title: "SESSÕES DE APRESENTAÇÕES DE ARTIGOS",
        description: "Apresentação de artigos aceitos pelo Comitê Científico",
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
        name: "Prof. Dr. Ariovaldo Denis Granja (UNICAMP)",
        photo: Denis,
        description: "Ingressou no nível de Professor Doutor na Universidade Estadual de Campinas (Unicamp) em 2003 e é Coordenador do Laboratório de Gerenciamento na Construção (LAGERCON). É docente permanente do Curso de Pós-Graduação em Engenharia Civil da Unicamp. Obteve Graduação em Engenharia Civil pela Pontifícia Universidade Católica de Campinas (1986), Master of Engineering pela Cologne University Of Applied Sciences, Germany (1995), Doutorado em Engenharia Civil pela Universidade Estadual de Campinas - Unicamp (2002), e Livre docência pela Universidade Estadual de Campinas - Unicamp (2016), passando ao nível de Professor Associado. De 2010 a 2014 exerceu o cargo de Chefe do Departamento de Arquitetura e Construção da Faculdade de Engenharia Civil, Arquitetura e Urbanismo da Unicamp (FECFAU/Unicamp)). Foi Coordenador do Grupo de Trabalho em Gestão e Economia na Construção, da Associação Nacional de Tecnologia do Ambiente Construído (ANTAC) de 2009 a 2011.Foi Coordenador de Pesquisa da FECFAU/Unicamp de 2017 a 2020. Desde 2022 é Editor para a área de Gestão e Economia na Construção da Revista Ambiente Construído, da Associação Nacional de Tecnologia do Ambiente Construído (ANTAC). Foi professor visitante da University of Huddersfield (UK), no Innovative Design Lab (IDL) entre março e abril de 2023 (Erasmus+ Programme). Tem atuado como Assessor Científico de agências, tais como CAPES, CNPq, Fapesp e também como Assessor de periódicos científicos da área, entre eles o Journal of Construction Engineering and Management; Construction Management and Economics; Engineering, Construction and Architectural Management; Journal of Engineering, Project and Production Management; Smart and Sustainable Built Environment; Revista Ambiente Construído; Gestão & Tecnologia de Projetos, Pesquisa em Arquitetura e Construção, entre outros. Antes do ingresso na Academia, acumulou extensa experiência profissional na indústria da construção civil, contemplando gestão da produção de edificações diversas, planejamento e controle de empreendimentos, gestão da produção e estudos sobre a qualidade de investimentos e exposição aos riscos de empreendimentos do setor. Seus interesses atuais de pesquisa dentro do campo de conhecimento sobre gerenciamento e economia na construção civil incluem: Gerenciamento de custos e de riscos; Gerenciamento e melhoria de processos construtivos; Gerenciamento de requisitos e desenvolvimento de produto; Planejamento e controle da produção; Gestão da produção. As temáticas atuais de pesquisa incluem: Lean Thinking/Lean Construction, Custeio-meta (target costing), IPD (integrated project delivery) e TVD (target value design); Métodos inovadores para criação, captura de percepção e entrega do valor a clientes e usuários; Estratégias para a redução e realocação de custos; Integração e colaboração entre stakeholders em cadeias de suprimentos; Integração de sistemas de planejamento e controle da produção; Valoração da flexibilidade em condições de incerteza com uso da teoria de opções reais e Sinergias entre living labs e lean em habitação social."
      },
      {
        name: "Prof. Dr. Fabiano Rogério Corrêa (USP)",
        photo: Fabiano_Rogerio,
        description:"Docente do departamento de Engenharia de Construção Civil, da Poli-USP, possui graduação em Engenharia Mecânica com ênfase em Automação e Sistemas pela Universidade de São Paulo (2002), mestrado em Engenharia Mecânica na opção Mecatrônica pela Universidade de São Paulo (2004) e doutorado em Engenharia Mecânica na área de Controle e Automação (2009). Atualmente dedica-se à área de Tecnologia Computacional Aplicada à Construção Civil, conduzindo pesquisas nos seguintes temas: Automação e Robótica na Construção; Impacto da Indústria 4.0 na Construção, Modelagem da Informação da Construção (BIM) e Industry Foundation Classes (IFC); Fabricação Digital e Manufatura Aditiva (Impressão 3D) aplicada à Arquitetura e à Construção; Smart Cities e Big Data."

      },
      {
        name: "Doutoranda Maria Luiza Abath Escorel Borges (UNICAMP)",
        photo: Maria_Luiza,
        description: "É doutoranda em Engenharia Civil com ênfase em Gerenciamento e Tecnologia na Construção pelo Programa de Pós-Graduação em Engenharia Civil da Universidade Estadual de Campinas (UNICAMP), com período sanduíche na University of Huddersfield (Inglaterra, Reino Unido). Tem mestrado em Engenharia Civil com ênfase em Processos Construtivos pelo Programa de Pós-Graduação em Engenharia Civil da Universidade Federal do Rio Grande do Norte (UFRN). Tem MBA em Plataforma BIM pelo Instituto Brasileiro de Educação Continuada (INBEC). Sua graduação é em Engenharia Civil pelo Centro Universitário de João Pessoa (UNIPÊ). Atuou na Atlantis Construtora, onde possuía funções de fiscalização e acompanhamento de serviços, controle de pagamentos e implementação da filosofia Lean nos processos construtivos. Atualmente faz parte do Laboratório de Gerenciamento da Construção (LAGERCON). Sua principal área de pesquisa é Gestão da construção, com foco em tecnologia, BIM, Lean Construction e o uso de algoritmos computacionais."
      },
      {
        name: "Doutorando Fabrício Berger de Vargas (UFRGS)",
        photo: Fabricio,
        description: "É doutorando na área de Gestão da Construção na UFRGS. Tem experiência em trabalho em equipe nos EUA, Brasil, Chile e Moçambique. Atuou principalmente nas áreas de projeto, coordenação, planejamento e controle da produção, e supervisão de obras. Atualmente é consultor Lean na LD Consulting, focado na implementação e transformação Lean no ambiente de construção no Brasil e Chile e é Professor em Cursos de Especialização em Engenharia Civil. Experiência e Áreas de Conhecimento: Gerenciamento da Construção com foco na Construção Enxuta, Planejamento e Controle da Produção & Logística, Planejamento e Controle da Produção baseado em localização & Linha de Balanço, Building Information Modeling (BIM) como suporte à tomada de decisões na indústria da Arquitetura, Engenharia e Construção - AEC (Fases de projeto, planejamento, logística e custos - BIM 4D e 5D), Mapeamento e otimização de processos e fluxos de trabalho, Controle de Qualidade & Melhoria Contínua, Gestão Visual, Transparência da informação e Design Thinking."
      },
      {
        name: "Dr. Bernardo Martim Beck da Silva Etges (Climb)",
        photo: Bernardo,
        description: "É Engenheiro Civil formado pela UFRGS em 2009 e mestre em Engenharia de Produção pelo PPGEP-UFRGS em 2012. Tem doutorado pelo PPGCI-UFRGS com ênfase em Gestão e Economia da Construção. Desde 2013, atuou como Consultor em implementação de programas de aumento de produtividade e com foco em promover a Excelência Operacional, melhorias operacionais e processos de inovação nas empresas construtoras. Atuação em mais de 30 projetos na América Latina e África."
      },
      {
        name: "André Quinderé (Agilean)",
        photo: Andre,
        description: "É CEO da Aval Tecnologia, engenheiro civil com pós-graduação em gestão de projetos e tem experiência em implantação de novas tecnologias e práticas do Lean Construction em diversos tipos de obra, totalizando mais de 3.000.000,00 de m² de área construída impactados. É um dos responsáveis pelo desenvolvimento do Agilean, solução pioneira em levar o Lean Construction de forma digital ao canteiro de obras e vencedora do Prêmio CBIC de Inovação e Sustentabilidade 2020."
      },
      {
        name: "Marcus Costa Tenório Fireman (Climb)",
        photo: Marcus,
        description: "Sócio Diretor e Co-fundador da Climb Consulting. Engenheiro Civil pela UFAL, Mestre em Gestão da Construção com ênfase em Lean pela UFRGS e Doutorado em andamento em Gestão da Construção com ênfase em Lean Construction pela UFRGS. Co-fundador da empresa Climb Consulting, um dos idealizadores do Fórum de Inovação da Construção e palestrante em congressos e workshops nacionais sobre a aplicação do Lean Construction. Experiência com implementação de Lean Construction em mais de 40 projetos (Linhas de Transmissão, Aeroportos, Obras Industriais e Residenciais)."
      },
      {
        name: "Profa. Dra. Débora de Gois Santos (UFS)",
        photo: Debora,
        description: "Possui graduação em Engenharia Civil pela Universidade Federal de Sergipe (1998), mestrado em Engenharia Civil pela Universidade Federal de Santa Catarina (2000) e doutorado em Engenharia de Produção pela Universidade Federal de Santa Catarina (2004). Atualmente é professora Associada 4 do Departamento de Engenharia Civil da Universidade Federal de Sergipe e revisora das Revistas Ambiente Construído (1678-8621), Principia, Scientia Plena, Conexões: Ciência e Tecnologia, Desenvolvimento e Meio Ambiente (1518-952X), e Produção Online (1676-1901). Foi Chefe de Departamento e Coordenadora de curso de Engenharia Civil de 12/2009 a 12/2011. Foi Diretora de Extensão de 08/2013 a 06/2014. Foi Coordenadora do Programa de Pós-Graduação em Engenharia Civil da UFS no período de 01/2016 a 01/2018. Foi Coordenadora do GT de Gestão e Economia da Construção da ANTAC (Associação Nacional de Tecnologia do Ambiente Construído) (2019-2021). Foi Diretora de Relações Interinstitucionais da ANTAC (2020-2022). Atualmente é Coordenadora do Laboratório de Construção Civil (LACC) da UFS, Membro da Comissão de Estudos para a norma de Garantia de Edificações da ABNT (CE 02.140.003) e Membro da Comissão de Materiais da Aseopp - Grupo de Estudos de Normas Técnicas. Tem experiência na área de Engenharia Civil, com ênfase em Gestão da construção, atuando principalmente nos seguintes temas: construção enxuta, norma de desempenho de edificações e gerenciamento de resíduos."
      },
      {
        name: "Mestranda Amélia Gomes Nunes (UFS)",
        photo: Amelia,
        description: "Atualmente, é mestranda de Engenharia civil pelo Programa de Pós-graduação em Engenharia Civil (PROEC), da Universidade Federal de Sergipe (UFS), na linha de pesquisa Gestão, Materiais e Sustentabilidade do Ambiente Construído. Tem graduação em Engenharia civil pela Universidade Federal de Sergipe (2017-2023). Técnica em edificações pelo Instituto Federal de Sergipe - Campus Aracaju (2013-2017). Participou como Bolsista do Programa Institucional de Bolsas de Iniciação Científica (PIBIC) pela Universidade Federal de Sergipe (2020-2022). Participa de projetos de pesquisa nas áreas de Construção Civil, Processos Construtivos (2020-2022). Desenvolve pesquisa na linha de pesquisa Gerenciamento de processos de produção, pelo grupo de Pesquisa Construção Civil da Universidade Federal de Sergipe."
      },
      {
        name: "Mestranda Pamella Menezes Teodósio (UFS)",
        photo: Pamella,
        description: "É técnica em Edificações, 2012-2016, pelo Instituto Federal de Sergipe - Campus Lagarto. Graduada em Engenharia Civil, 2016-2021, pela Universidade Federal de Sergipe - Campus São Cristóvão. Participa de projetos de pesquisas nas áreas de hidrologia, desenvolvimento sustentável e materiais de construção, 2014-2016, 2015-2016 e 2018-2019, respectivamente. Atualmente, é mestranda de Engenharia civil pelo Programa de Pós-graduação em Engenharia Civil (PROEC), da Universidade Federal de Sergipe (UFS), na linha de pesquisa Gestão, Materiais e Sustentabilidade do Ambiente Construído."
      },
      {
        name: "Profa. Dra. Tatiana Gondim do Amaral (UFG)",
        photo: Tatiana,
        description: "É mestre e doutora em Engenharia Civil pela Universidade Federal de Santa Catarina. É professora da Escola de Engenharia Civil da Universidade Federal de Goiás e Subcoordenadora do Curso de Especialização em Construção Civil. Tem experiência na área de Engenharia Civil e Engenharia de Produção, atuando principalmente nos seguintes temas: gestão da produção, gestão de sistemas de produção, produção enxuta, gestão da segurança do trabalho, medição de desempenho de empresas e empreendimentos de construção e gestão do processo de desenvolvimento do produto. Atua no mestrado profissional em Administração Pública (PROFIAP) e no Programa de Pós Graduação em Engenharia de Produção (PPGEP)."
      },
      {
        name: "Prof. PhD. Luiz Fernando Mahlmann Heineck (UEC)",
        photo: Heineck,
        description: "Possui graduação em Administração de Empresas e Engenharia Civil pela Universidade Federal do Rio Grande do Sul, com titulação respectivamente em 1977 e 1976. Participou da 1ª turma de Mestrado do Programa de Pós-graduação em Engenharia Civil, opção Construção (NORIE) da Universidade Federal do Rio Grande do Sul em 1978, quando recebeu sua primeira bolsa de pesquisa pelo CNPq, vínculo que mantém com esta instituição há 37 anos, hoje na qualidade de pesquisador I - C. É Ph.D. (Doctor of Philosophy) pela Leeds University, Inglaterra, com tese na área de Administração da Construção (Construction Management) publicada em 1983. Fez pós-doutorado na área de Economia da Construção e Habitação pela Universidade de Utrecht, Holanda em 1999. Participou das atividades de ensino e pesquisa nas áreas de Engenharia Civil e Gestão da Produção (Engenharia de Produção) nas Universidades Federais do Rio Grande do Sul (1983-1988), Universidade Federal de Santa Catarina (1989 - 2006), admitido por concurso como professor titular, e Universidade Federal do Ceará (2006 - 2013), onde se aposentou nesta qualidade. É professor adjunto do CESA, Centro de Estudos Sociais Aplicados da Universidade Estadual do Ceará, até a presente data. Atua nas áreas de tecnologia da construção civil e sua inovação, mercado imobiliário, gestão da construção, produtividade, planejamento e controle de obras, economia da construção e habitação. Na sua carreira acadêmica orientou 63 alunos de mestrado com dissertações concluídas e 15 alunos de doutorado com teses concluídas. Dos mestrandos 38 continuaram seus estudos a nível de doutorado. Do total de orientandos, 50 são professores universitários."
      }
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
            name: "Palestrante: Profª. PhD. Regina Barkokebas (Pontificia Universidad Católica de Chile)",
            photo: Regina_Barkokebas,
          },
          {
            name: "Moderadora: Profa. Drª. Tatiana Gondim do Amaral (UFG)",
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
        description: "Apresentação de artigos aceitos pelo Comitê Científico",
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
        description: "Apresentação de artigos aceitos para a Edição especial da Revista Ambiente Construído.",
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
          },
          {
            name: "Profa. Dra. Débora de Gois Santos (UFS)",
            photo: Debora,
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
        description: "Clarissa é professora adjunta do Departamento de Arquitetura e Urbanismo e Design (DAUD) do Centro de Tecnologia da Universidade Federal do Ceará (UFC). É co-fundadora da rede de pesquisa Young Researchers for Architecture, Engineering and Construction Industry (YR4AECI). Foi pesquisadora de pós-doutorado sobre os temas Lean Design Management e BIM na Universidade Federal de São Carlos (UFSCar) pelo Programa de Pós-graduação em Engenharia Civil (PPGECiv), e pelo NUPRE (Núcleo de Pesquisa em Racionalização e Desempenho de Edificações). Na mesma instituição, Clarissa foi professora substituta do Departamento de Engenharia Civil (DECiv) entre agosto de 2019 a agosto de 2021. Clarissa desenvolveu sua tese de doutorado na Universidade de Huddersfield, Reino Unido, com bolsa de doutorado pleno do CNPq pelo Programa Ciência sem Fronteiras (2019). Tem mestrado em Gestão e Economia da Construção pelo Núcleo Orientado para a Inovação da Edificação (NORIE) do Programa de Pós Graduação em Engenharia Civil da UFRGS, nota 7 CAPES (2012). Desenvolveu dissertação aplicando BIM 4D na gestão da produção. Possui graduação em Arquitetura e Urbanismo pela Universidade de São Paulo (2009). Sua área de interesse é a integração de gestão do processo de projeto, produção off-site e construção utilizando o Lean Construction como filosofia de produção, bem como ferramentas location-based schedules."
      },
      {
        name: "Prof. Me. Emerson Meireles de Carvalho (UFS)",
        photo: Emerson,
        description: "Possui graduação em Engenharia Civil pela Universidade Federal de Sergipe (1988), curso de especialização em Avaliações e Perícias de Engenharia, e Mestrado em Desenvolvimento e Meio Ambiente pela Universidade Federal de Sergipe - Rede RODEMA. Atualmente, é professor assistente da Universidade Federal de Sergipe, Departamento de Engenharia Civil, engenheiro civil - M&C Engenharia Ltda. Tem experiência na área de Engenharia Civil, com ênfase em edificações, atuando principalmente nos seguintes temas: construção civil, avaliações e perícias, qualidade, meio ambiente e gestão de resíduos de construção."
      },
      {
        name: "Prof. Ma. Caroline Almeida Aragão Cabral (CBIM-SE)",
        photo: Caroline,
        description: "Arquiteta e mestre em Arquitetura pela Universidade de Coimbra, Portugal (2012). Presidente da Câmera Brasileira de BIM (CBIM-SE). "
      },
      {
        name: "Prof. Me. Herbert Melo Cruz (IFS)",
        photo: Herbert,
        description: "Possui graduação em Engenharia Civil pela Universidade Federal de Sergipe (UFS), especialização em Educação Empreendedora pela PUC-Rio e mestrado em Engenharia Civil pela UFS. Tem como área de atuação e desenvolvimento de pesquisas a Gestão e Planejamento da Produção. É integrante do grupo de pesquisa Construção Civil-UFS, em que tem desenvolvido pesquisas na área de Gestão da Construção. É membro associado do Grupo de Trabalho de Gestão e Economia da Construção da ANTAC (Associação Nacional de Tecnologia do Ambiente Construído). Foi coordenador e professor do curso de Engenharia Civil do Centro Universitário Ages (BA), participando de processos de reconhecimento e aprovação de cursos de Engenharia Civil e Arquitetura e Urbanismo. Foi professor efetivo do Instituto Federal da Bahia do curso de Arquitetura e Urbanismo. Atualmente é professor, membro do NDE e colegiado do curso de Engenharia Civil do Instituto Federal de Sergipe, ministrando as disciplinas da área de Gestão e Construção Civil."
      },
      {
        name: "Profa. Dra. Débora de Gois Santos (UFS)",
        photo: Debora,
        description: "Possui graduação em Engenharia Civil pela Universidade Federal de Sergipe (1998), mestrado em Engenharia Civil pela Universidade Federal de Santa Catarina (2000) e doutorado em Engenharia de Produção pela Universidade Federal de Santa Catarina (2004). Atualmente é professora Associada 4 do Departamento de Engenharia Civil da Universidade Federal de Sergipe e revisora das Revistas Ambiente Construído (1678-8621), Principia, Scientia Plena, Conexões: Ciência e Tecnologia, Desenvolvimento e Meio Ambiente (1518-952X), e Produção Online (1676-1901). Foi Chefe de Departamento e Coordenadora de curso de Engenharia Civil de 12/2009 a 12/2011. Foi Diretora de Extensão de 08/2013 a 06/2014. Foi Coordenadora do Programa de Pós-Graduação em Engenharia Civil da UFS no período de 01/2016 a 01/2018. Foi Coordenadora do GT de Gestão e Economia da Construção da ANTAC (Associação Nacional de Tecnologia do Ambiente Construído) (2019-2021). Foi Diretora de Relações Interinstitucionais da ANTAC (2020-2022). Atualmente é Coordenadora do Laboratório de Construção Civil (LACC) da UFS, Membro da Comissão de Estudos para a norma de Garantia de Edificações da ABNT (CE 02.140.003) e Membro da Comissão de Materiais da Aseopp - Grupo de Estudos de Normas Técnicas. Tem experiência na área de Engenharia Civil, com ênfase em Gestão da construção, atuando principalmente nos seguintes temas: construção enxuta, norma de desempenho de edificações e gerenciamento de resíduos."
      }
      
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
    date: "até 08/08/2023",
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
        antac: ["R$ 650,02", "R$ 750,02", "R$ 900,02"],
        nonAntac: ["R$ 750,02", "R$ 850,02", "R$ 1000,02"],
      },
    },
    {
      title: "Estudante de Pós-graduação",
      price: {
        antac: ["R$ 450,02", "R$ 550,02", "R$ 650,02"],
        nonAntac: ["R$ 600,02", "R$ 700,02", "R$ 800,02"],
      },
    },
    {
      title: "Est. de Graduação (Autor)",
      price: {
        antac: ["R$ 350,02", "R$ 400,02", "R$ 450,02"],
        nonAntac: ["R$ 450,02", "R$ 500,02", "R$ 550,02"],
      },
      
    },
    {
      title: "Est. de Graduação (Ouvinte)",
      price: {
        antac: ["R$ 260,02", "R$ 310,02", "R$ 360,02"],
        nonAntac: ["R$ 320,02", "R$ 360,02", "R$ 410,02"],
      },
    },
  ],

  industryDay : [
    {
      title: "Profissional",
      price: {
        antac: ["R$ 300,02", "R$ 350,02", "R$ 400,02"],
        nonAntac: ["R$ 350,02", "R$ 400,02", "R$ 450,02"],
      },
    },
    {
      title: "Estudante de Pós-graduação",
      price: {
        antac: ["R$ 230,02", "R$ 280,02", "R$ 330,02"],
        nonAntac: ["R$ 290,02", "R$ 340,02", "R$ 390,02"],
      },
    },
    {
      title: "Estudante de Graduação",
      price: {
        antac: ["R$ 150,02", "R$ 200,02", "R$ 250,02"],
        nonAntac: ["R$ 200,02", "R$ 250,02", "R$ 300,02"],
      },
      
    },
   
  ],

  minicourses: [
    {
      title: "Profissional",
      price: {
        antac: ["R$ 150,02", "R$ 200,02", "R$ 300,02"],
        nonAntac: ["R$ 250,02", "R$ 300,02", "R$ 400,02"],
      },
    },
    {
      title: "Estudante de Pós-graduação",
      price: {
        antac: ["R$ 100,02", "R$ 150,02", "R$ 200,02"],
        nonAntac: ["R$ 160,02", "R$ 250,02", "R$ 300,02"],
      },
    },
    {
      title: "Estudante de Graduação",
      price: {
        antac: ["R$ 75,02", "R$ 100,02", "R$ 150,02"],
        nonAntac: ["R$ 100,02", "R$ 150,02", "R$ 200,02"],
      },
      
    },
  ]
}