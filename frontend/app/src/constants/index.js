import { people01, people02, people03, facebook, instagram, linkedin, twitter, engie, procel, aqua, absolar, send, shield, star } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Início",
    path: "/", // Rota para a página inicial
  },
  {
    id: "acao",
    title: "Simulador",
    path: "/acao", // Rota para a página acao
  },

  {
    id: "solucao",
    title: "Solução",
    path: "/solucao", // Rota para a seção solução
  },
  {
    id: "depoimentos",
    title: "Depoimentos",
    path: "/depoimentos", // Rota para depoimentos
  },
  {
    id: "parceiros",
    title: "Parceiros",
    path: "/parceiros", // Rota para parceiros
  },
  {
    id: "login",
    title: "Login",
    path: "/login", // Rota para o login
  },

];


export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Monitoramento em Tempo Real",
    content:
      "A plataforma permite que você monitore o consumo de energia de sua residência ou pequeno negócio em tempo real, ajudando a identificar desperdícios.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Segurança e Privacidade",
    content:
      "Com medidas de segurança avançadas, garantimos a proteção de seus dados pessoais e o uso consciente das informações sobre seu consumo.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Educação Gamificada",
    content:
      "Através de conteúdos interativos e gamificados, os usuários aprendem como reduzir o consumo energético, gerando um impacto positivo no meio ambiente e nas finanças.",
  },
];


export const feedback = [
  {
    id: "feedback-1",
    content:
      "A plataforma me ajudou a entender meus hábitos de consumo e a reduzir significativamente a conta de energia. A parte gamificada tornou a experiência ainda mais interessante.",
    name: "Ana Silva",
    title: "Cliente - Usuária Residencial",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Com a ajuda do 'Energia Inteligente', consegui otimizar o consumo de energia no meu pequeno negócio e agora tenho uma visão clara do que posso melhorar.",
    name: "Pedro Souza",
    title: "Usuário - Pequeno Negócio",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "A plataforma não só me ajudou a economizar energia, mas também me educou sobre práticas mais sustentáveis para o meu dia a dia.",
    name: "Carlos Oliveira",
    title: "Cliente - Usuário Residencial",
    img: people03,
  },
];
export const dados = [
  {
    id: "stats-1",
    title: "Usuários Ativos",
    value: "5.000+",
  },
  {
    id: "stats-2",
    title: "Empresas Conectadas",
    value: "500+",
  },
  {
    id: "stats-3",
    title: "Economia Total",
    value: "R$ 200M+",
  },
];

export const footerLinks = [
  {
    title: "Links Úteis",
    links: [
      {
        name: "Como Funciona",
        link: "https://www.energiainteligente.com/como-funciona",
      },
      {
        name: "Produtos",
        link: "https://www.energiainteligente.com/produtos",
      },
      {
        name: "Blog",
        link: "https://www.energiainteligente.com/blog",
      },
      {
        name: "Contato",
        link: "https://www.energiainteligente.com/contato",
      },
      {
        name: "Termos de Uso",
        link: "https://www.energiainteligente.com/termos-de-uso",
      },
    ],
  },
  {
    title: "Comunidade",
    links: [
      {
        name: "Ajuda",
        link: "https://www.energiainteligente.com/ajuda",
      },
      {
        name: "Fórum",
        link: "https://www.energiainteligente.com/forum",
      },
      {
        name: "Sugestões",
        link: "https://www.energiainteligente.com/sugestoes",
      },
      {
        name: "Notícias",
        link: "https://www.energiainteligente.com/noticias",
      },
      {
        name: "Newsletters",
        link: "https://www.energiainteligente.com/newsletter",
      },
    ],
  },
  {
    title: "Parceiros",
    links: [
      {
        name: "Nossos Parceiros",
        link: "https://www.energiainteligente.com/parceiros",
      },
      {
        name: "Seja um Parceiro",
        link: "https://www.energiainteligente.com/seja-um-parceiro",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/energiainteligente/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/energiainteligente/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/energiainteligente/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/energiainteligente/",
  },
];
// Em constants.js
// Em constants.js
export const parceiros = [
  {
    id: "client-1",
    logo: engie,
    name: "Engie",
    description: "Inovando na hospedagem e viagens, com foco em práticas sustentáveis e energia renovável em suas operações.",
    website: "https://www.engie.com"
  },
  {
    id: "client-2",
    logo: procel,
    name: "Procel",
    description: "Plataforma líder em criptoativos que promove investimentos sustentáveis e inovações em blockchain.",
    website: "https://www.procel.com"
  },
  {
    id: "client-3",
    logo: aqua,
    name: "Aqua",
    description: "Promovendo o futuro financeiro com soluções baseadas em criptomoedas, comprometida com práticas de baixo impacto ambiental.",
    website: "https://www.aqua.com"
  },
  {
    id: "client-4",
    logo: absolar,
    name: "Absolar",
    description: "Líder em soluções de armazenamento na nuvem com foco em eficiência energética e sustentabilidade.",
    website: "https://www.absolar.com"
  },
];
