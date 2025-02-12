import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  php,
  html,
  css,
  java,
  kotlin,
  python,
  sql,
  vue,
  bootstrap,
  spring,
  docker,
  git,
  jetbrains,
  figma,
  canva,
  vakna,
  coverhunt,
  dcc,
  kelhel,
  microverse
} from '../assets';

export const navLinks = [
  {
    id: 'competences',
    title: 'Compétences',
  },
  {
    id: 'techs',
    title: 'Technologies',
  },
  {
    id: 'projects',
    title: 'Projets',
  },
  {
    id: 'parcours',
    title: 'Mon Parcours',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'PHP',
    icon: php,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'Kotlin',
    icon: kotlin,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'SQL',
    icon: sql,
  }
];

const tools = [
  {
    name: 'VueJS',
    icon: vue,
  },
  {
    name: 'BootStrap',
    icon: bootstrap,
  },
  {
    name: 'Spring Boot',
    icon: spring,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'JetBrains',
    icon: jetbrains,
  },
  {
    name: 'Figma',
    icon: figma,
  },
  {
    name: 'Canva',
    icon: canva,
  }
]

const experiences = [
  {
    title: 'BAC STI2D',
    company_name: 'Lycee Jean Baylet',
    icon: coverhunt,
    iconBg: '#333333',
    date: '2021 - 2022',
  },
  {
    title: 'BUT Informatique',
    company_name: 'Universite Paul Sabatier',
    icon: coverhunt,
    iconBg: '#333333',
    date: " 2022 - Aujourd'hui",
  },
  {
    title: 'Stage 2eme année BUT',
    company_name: 'Boucherie Charcuterie Belloc',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Avril 2024 - Juin 2024',
  }
];

const projects = [
  {
    id: 0,
    name: 'Vakna',
    description: 'Une application mobile android en Kotlin qui a pour but de motiver les utilisateurs dans leurs projets personnels',
    tags: [
      {
        name: 'Kotlin'
      },
      {
        name: 'Structure MVC'
      },
      {
        name: 'Scrum'
      },
      {
        name: 'Android Studio'
      },
    ],
    image: vakna
  },
  {
    id: 1,
    name: 'Site web vitrine',
    description: "Un site web fait en stage chez BOUCHERIE CHARCUTERIE BELLOC qui a pour but de présenter les produits de l'entreprise",
    tags: [
      {
        name: 'HTML'
      },
      {
        name: 'Bootstrap'
      },
      {
        name: 'Vue.js'
      },
      {
        name: 'Php'
      },
      {
        name: 'Python Flask'
      },
      {
        name: 'Figma'
      },
    ],
    image: null,
    link: null
  },
  {
    id: 2,
    name: 'E-Sporter',
    description: 'Une application de gestion de match E-Sport en Java',
    tags: [
      {
        name: 'Java'
      },
      {
        name: 'Java Swing'
      },
      {
        name: 'JDBC Derby'
      },
      {
        name: 'Structure MVC'
      },
    ],
    image: null,
    link: "https://gitlab.info.iut-tlse3.fr/quipe-1-sae-s3/sae"
  }
];

const competences = [
  {
    name: 'Réaliser',
    description: 'Adapter des applications sur un ensemble de supports',
    projets: [
        0,
        1,
        2,
    ],
    color: "bg-red-700"
  },
  {
    name: 'Optimiser',
    description: 'Analyser et optimiser des applications',
    projets: [
      0,
      1,
      2,
    ],
    color: "bg-orange-400"
  },
  {
    name: 'Administrer',
    description: 'Déployer des services dans une architecture réseau',
    projets: [
      1
    ],
    color: "bg-yellow-500"
  },
  {
    name: 'Gérer',
    description: 'Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité',
    projets: [
      1,
      2,
    ],
    color: "bg-green-500"
  },
  {
    name: 'Conduire',
    description: 'Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs',
    projets: [
      0,
      1
    ],
    color: "bg-blue-950"
  },
  {
    name: 'Collaborer',
    description: 'Manager une équipe informatique',
    projets: [
      2,
    ],
    color: "bg-black"
  },
]

export { services, technologies, tools, experiences, projects, competences };
