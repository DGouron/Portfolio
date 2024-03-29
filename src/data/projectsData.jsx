export const ProjectsData = [
  {
    projectName: 'Solife',
    projectLink: 'https://www.solife.fr/',
    projectDescription: "Site vitrine pour l'ONG Solife. Paiement en ligne, formulaire de contact avancé, système d'actualité, etc.",
    projectLargeImage: '/assets/thumbnails/Large_Solife.webp',
    projectDetails: [
      '- Front en Next.js 13 avec TypeScript',
      '- Utilisation de Nodemailer pour l’envoi de mail',
      '- Chakra UI et Tailwind pour le design',
    ],
  },
  {
    projectName: 'Amicale des sapeurs-pompiers de Châtellerault',
    projectLink: 'https://amicalespchatellerault.fr/',
    projectDescription: "Site internet pour une association de sapeur pompier. Système d'authentification et de reservation",
    projectLargeImage: '/assets/thumbnails/Large_AmicaleSP.png',
    projectDetails: [
      '- Front avec React et Material UI',
      '- Redux-Toolkit pour la gestion des états et les appels API',
      '- Base de données MongoDB',
      '- VPS OVH et Nginx pour le reverse proxy',
    ],
  },
  {
    projectName: 'Movies Tier List',
    projectLink: 'https://movies-tierlist.netlify.app/',
    projectDescription: 'Application web qui permet de créer des tier list de films.',
    projectLargeImage: '/assets/thumbnails/Large_MoviesTierList.webp',
    projectDetails: [
      '- Front avec React et TypeScript et Material-UI pour le design',
      '- Redux-Toolkit pour la gestion des états et de Zod pour la validation des données',
      '- Utilisation de l’API Open Movies Database (OMDb)',
      '- Code source : https://github.com/DGouron/Movie-app',
    ],
  },
  {
    projectName: 'SpaceX Rocket Information',
    projectLink: 'https://spacex-informations.netlify.app/',
    projectDescription:
      "Application web qui affiche des informations sur les fusées SpaceX en utilisant leur API GraphQL. Note : l'API utilisée est actuellement inutilisable. ",
    projectLargeImage: '/assets/thumbnails/Large_SpaceX.webp',
    projectDetails: [
      '- Front avec NextJS et TypeScript',
      "- Utilisation de l'API GraphQL de SpaceX",
      "- Création d'une librairie SpaceX/library",
      '- Utilisaiton de Cypress pour les tests',
      '- Code source : https://github.com/DGouron/spacex-rocket-information',
    ],
  },
  {
    projectName: 'Test Hub - mini jeux',
    projectLink: 'https://test-hub.netlify.app/',
    projectDescription: 'Clone du site Humanbenchmark.com. Collection de mini-jeux cognitif.',
    projectLargeImage: '/assets/thumbnails/Large_TestHub.webp',
    projectDetails: [
      '- Front avec React',
      '- Utilisation de machine à état pour la gestion des mini-jeux',
      '- Collaboration via Github',
      '- Code source : https://github.com/BenoitDesnos/TestHub',
    ],
  },
  {
    projectName: 'Whynotprint',
    projectLink: 'https://whynotprint.netlify.app/',
    projectDescription:
      "Site internet de l'entreprise Whynotprint, spécialisée dans la sublimation d'objet",
    projectLargeImage: '/assets/thumbnails/Large_Whynotprint.webp',
    projectDetails: ['- Front avec React', '- Envoi de mails avec EmailJS'],
  },
  {
    projectName: 'More Rhum',
    projectLink: 'https://more-rhum.netlify.app/',
    projectDescription: 'Jeu par navigateur de type cookie clicker.',
    projectLargeImage: '/assets/thumbnails/Large_morerhum.webp',
    projectDetails: ['- Front avec React', '- Utilisation de Redux-toolkit'],
  },
  {
    projectName: 'Learn Suap',
    projectLink: 'https://learnsuap.netlify.app/',
    projectDescription:
      "Création d'un quizz interactif sur le thème du secours d'urgence aux personnes.",
    projectLargeImage: '/assets/thumbnails/Large_LearnSuap.webp',
    projectDetails: [
      '- Front avec React',
      '- Utilisation de Redux',
      '- Utilisation de Router pour le Client Side Routing',
    ],
  },
  {
    projectName: 'Ancien Portfolio',
    projectLink: 'https://dgouron.netlify.app/',
    projectDescription:
      "Ancien portfolio qui présentait mes travaux et m'a permis d'apprendre React.",
    projectLargeImage: '/assets/thumbnails/Large_oldPortfolioReact.webp',
    projectDetails: [
      '- Front avec React',
      '- Utilisation de Router pour le Client Side Routing',
      '- Nginx pour la gestion du reverse proxy (Projet initialement hébergé sur un VPS OVH)',
    ],
  },
  {
    projectName: 'Print Message Visualizer',
    projectLink: 'https://www.unrealengine.com/marketplace/en-US/product/print-message-visualizer',
    projectDescription:
      "Plugin Unreal Engine 4 fait en C++. PMV est un outil qui permet de traquer en temps réel, de sauvegarder et de comparer des données de jeu. Par exemple les points de passage des joueurs, les morts, etc. Parfait pour le debug d'un jeu multijoueur.",
    projectLargeImage: '/assets/thumbnails/Large_PMV.webp',
    projectDetails: [
      '- Algorithmes C++',
      '- Tracking des données joueurs',
      '- Sauvegarde des données',
    ],
  },
];
