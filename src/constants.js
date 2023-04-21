import Reymard from "./assets/images/reymard.png"
import Tatiana from "./assets/images/tatiana.jpeg"
import Regina from "./assets/images/regina.png"
import Herbert from "./assets/images/herbert.jpeg"
import Eduardo from "./assets/images/eduardo.jpg"
import Clarissa from "./assets/images/clarissa.png"
import Emerson from "./assets/images/emerson.jpg"
import Caroline from "./assets/images/caroline.jpg"



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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: []
      },
      {
        time: "09h:00 - 10h:30",
        title: "PALESTRA 1: Advances of Industry 4.0 and 5.0: modular and offsite construction, digitalized manufacturing process and automation.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: [
          {
            name: "Prof. PhD. Mohamed Al-Hussein",
            photo: "https://picsum.photos/200/300",
          },
          {
            name: "Prof. PhD. Béda Barkokebas",
            photo: "https://picsum.photos/200/300",
          }
        ],
      },
      {
        time: "10h:30 - 10h:45",
        title: "INTERVALO",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: []
      },
      {
        time: "10h:45 - 12h:15",
        title: "MESA REDONDA 1: Gêmeos Digitais",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: [
          {
            name: "Prof. Dr. Reymard Sávio Sampaio de Melo (UFBA)",
            photo: Reymard,
          },
          {
            name: "Prof. Dr. Fabiano Correa (USP)",
            photo: "https://picsum.photos/200/300",
          },
          {
            name: "Profª. Drª. Dayana Bastos Costa (UFBA)",
            photo: "https://picsum.photos/200/300",
          },
          {
            name: "Prof. PhD. Béda Barkokebas (Pontificia Universidad Católica de Chile)",
            photo: "https://picsum.photos/200/300",
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: []
      },
      {
        time: "14h:00 - 15h:30",
        title: "PALESTRA 2: Robótica no canteiro de obras",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: [
          {
            name: "Prof. PhD. José Pinto Duarte  (Penn State University)",
            photo: "https://picsum.photos/200/300",
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: []
      },
      {
        time: "15h:45 - 17h:15",
        title: "MESA REDONDA 2: Soluções digitais em relação a canteiros inteligentes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: [
          {
            name: "André Quinderé - CEO AVAL Engenharia (Agilean): Soluções inteligentes para planejamento e controle de obras",
            photo: "https://picsum.photos/200/300",
          },
          {
            name: "Volmer Leal de Sena - Dahua Technology: Inteligência artificial aplicada nas incorporadoras e construtoras",
            photo: "https://picsum.photos/200/300",
          },
          {
            name: "Sergio Fernando Domingues - Empresa Tarjab: Captura e processamento de imagens com inteligência artificial para segurança do trabalho",
            photo: "https://picsum.photos/200/300",
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: []
      },
    ],
    speakers: [
      {
        name: "Prof. PhD. Mohamed Al-Hussein (University of Alberta)",
        photo: "https://picsum.photos/300/300",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
      {
        name: "Prof. PhD. Béda Barkokebas (Pontificia Universidad Católica de Chile)",
        photo: "https://picsum.photos/200/300",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
      {
        name: "Prof. Dr. Reymard Sávio Sampaio de Melo (UFBA)",
        photo: Reymard,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
      {
        name: "Prof. Dr. Fabiano Correa (USP)",
        photo: "https://picsum.photos/200/300",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
      {
        name: "Profª. Drª. Dayana Bastos Costa (UFBA)",
        photo: "https://picsum.photos/200/300",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
      {
        name: "Prof. Dr. Eduardo Toledo Santos (USP)",
        photo: Eduardo,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
      {
        name: "Prof. PhD. José Pinto Duarte  (Penn State University)",
        photo: "https://picsum.photos/200/300",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
      {
        name: "Prof.ª Drª. Regina Coeli Ruschel(UNICAMP)",
        photo: Regina,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
      {
        name: "André Quinderé - CEO AVAL Engenharia (Agilean)",
        photo: "https://picsum.photos/200/300",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
      {
        name: "Volmer Leal de Sena - Dahua Technology",
        photo: "https://picsum.photos/200/300",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
      {
        name: "Sergio Fernando Domingues - Empresa Tarjab",
        photo: "https://picsum.photos/200/300",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },

    ]
  },
  2: {
    date: "Quinta, 09 de Novembro",
    schedule: [
      {
        time: "08h:30 - 10h:15",
        title: "SUMMER SCHOOL",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: [
          {
            name: "Prof.ª Dr.ª Regina Coeli Ruschel (Unicamp))",
            photo: Regina,
          },
          {
            name: "Prof. Dr. Ariosvaldo Denis Granja (Unicamp)",
            photo: "https://picsum.photos/200/300",
          },
          {
            name: "Prof. Dr. Fabiano Rogério Corrêa (USP)",
            photo: "https://picsum.photos/200/300",
          }
        ]
      },
      {
        time: "10h:15 - 12h:15",
        title: "INTERVALO",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: []
      },
      {
        time: "12h:15 - 14h:00",
        title: "ALMOÇO",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: []
      },
      {
        time: "14h:00 - 15h:45",
        title: "SESSÕES DE POSTERS 3 e 4",
        description: "Apresentação de artigos aceitos pelo Comitê Científico",
        speakers: []
      },
      {
        time: "15h:45 - 16h:15",
        title: "INTERVALO",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: []
      },
      {
        time: "16h:15 - 17h:45",
        title: "SESSÕES TÉCNICAS 1 e 2",
        description: "Apresentação de artigos aceitos para a Edição especial da Revista Ambiente Construído",
        speakers: []
      },
      {
        time: "17h:45 - 20h:00",
        title: "REUNIÃO DOS GTs GESTÃO E ECONOMIA DA CONSTRUÇÃO & TECNOLOGIA DA INFORMAÇÃO E COMUNICAÇÃO",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: []
      },
      {
        time: "20h:00 - 22h:00",
        title: "JANTAR DE CONFRATERNIZAÇÃO",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: []
      },
    ],
    speakers: [
      {
        name: "Prof.ª Dr.ª Regina Coeli Ruschel (Unicamp))",
        photo: Regina,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
      {
        name: "Prof. Dr. Ariosvaldo Denis Granja (Unicamp)",
        photo: "https://picsum.photos/200/300",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
      {
        name: "Prof. Dr. Fabiano Rogério Corrêa (USP)",
        photo: "https://picsum.photos/200/300",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
    ]
  },
  3: {
    date: "Sexta, 10 de Novembro",
    schedule: [
      {
        time: "08h:30 - 10h:00",
        title: "PALESTRA 3: Análises ergonômicas baseadas em realidade virtual (RV) para reduzir lesões ocupacionais",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: [
          {
            name: "Profª. PhD. Regina Barkokebas (Pontificia Universidad Católica de Chile)",
            photo: "https://picsum.photos/200/300",
          },
          {
            name: "Prof. Drª. Tatiana Gondim do Amaral (UFG)",
            photo: Tatiana,
          }
        ]
      },
      {
        time: "10h:00 - 10h:15",
        title: "INTERVALO",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: []
      },
      {
        time: "10h:15 - 12h:00",
        title: "SESSÕES POSTERS 5 e 6",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: []
      },
      {
        time: "12h:00 - 14h:00",
        title: "ALMOÇO",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: []
      },
      {
        time: "14h:00 - 15h:15",
        title: "SESSÕES POSTERS 7 e 8",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: []
      },
      {
        time: "14h:00 - 15h:15",
        title: "PITCH DO DESAFIO SIBRAGEC/SBTIC",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: []
      },
      {
        time: "16h:00 - 17h:45",
        title: "SESSÕES TÉCNICAS 3 e 4",
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
        photo: "https://picsum.photos/200/300",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
      {
        name: "Prof. Drª. Tatiana Gondim do Amaral (UFG)",
        photo: Tatiana,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
      {
        name: "Profª. Drª. Clarissa Notariano Biotto (UFC)",
        photo: Clarissa,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
      {
        name: "Prof. Me. Emerson Meireles de Carvalho (UFS)",
        photo: Emerson,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
      {
        name: "Prof. Ma. Caroline Almeida Aragão Cabral (CBIM-SE)",
        photo: Caroline,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
      {
        name: "Prof. Me. Herbert Melo Cruz (IFS)",
        photo: Herbert,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
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
    crossed: 'até 07/04/23',
    event: "Envio de artigos"
  },
  {
    date: "até 07/05/23",
    event: "Decisão preliminar de artigos submetidos"
  },
  {
    date: "até 21/05/23",
    event: "Envio das versões corrigidas dos artigos"
  },
  {
    date: "até 21/06/23",
    event: "Decisão final dos artigos"
  },
  {
    date: "até 10/07/23",
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