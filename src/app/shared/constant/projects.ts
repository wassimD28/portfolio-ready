import { Project } from './../../core/models/interfaces/project.interface';
export const projects: Project[] = [
  {
    title: 'Training website',
    description:
      'Developed a training web app using Angular for a dynamic front end and Express.js for the backend. The app allowed users to access training modules and track their progress, helping me gain experience in full-stack development and modern front-end integration with server-side logic.',
    images: ['fire-fist-1.JPEG', 'fire-fist-2.JPEG', 'fire-fist-3.JPEG'],
    usedTechnology: [
      { name: 'angular', image: 'angular.png' },
      { name: 'express.js', image: 'expressJs.png' },
      { name: 'tailwind', image: 'Tailwind CSS.png' },
      { name: 'mySQL', image: 'my-sql.png' },
    ],
    fontGitHubLink: 'https://github.com/wassimD28/FireFist-fixed-version',
    backGitHubLink: 'https://github.com/wassimD28/FireFist-Back-End',
  },
  {
    title: 'Invoice Generator',
    description:
      'Created Invoice Generator full-stack application built with React and Express.js for creating and managing professional invoices. It streamlines the invoicing process with customizable templates, real-time calculations, and secure backend integration for data storage and retrieval.',
    images: ['quick-bill page.jpeg'],
    usedTechnology: [
      { name: 'react', image: 'react logo.png' },
      { name: 'Express.js', image: 'expressJs.png' },
      { name: 'Tailwind', image: 'Tailwind CSS.png' },
      { name: 'PostgreSql', image: 'postgresql logo.png' },
    ],
    fontGitHubLink: 'https://github.com/wassimD28/QuickBill-api',
    backGitHubLink: 'https://github.com/wassimD28/quick-bill-front-end',
  },
  {
    title: 'Location-Based Social App',
    description:
      'Developed backend for social media platform that links memories to specific locations on a map. Built with Express.js and Sequelize, it features real-time notifications with Socket.IO, secure authentication, and efficient management of memories, likes, comments, and followers, enabling seamless user interaction.',
    images: ['treasured memories exmp.png'],
    usedTechnology: [
      { name: 'express.js', image: 'expressJs.png' },
      { name: 'Tailwind', image: 'Tailwind CSS.png' },
      { name: 'mySQL', image: 'my-sql.png' },
    ],
    backGitHubLink: 'https://github.com/wassimD28/Treasured-Memories-API',
  },
  {
    title: 'Film library',
    description:
      "Completed a film library website using Symfony for both backend and frontend. The project provided users with a comprehensive film database, including details like synopses, cast, and crew information. It strengthened his skills in full-stack development and showcased Symfony's capabilities for building cohesive, scalable web applications.",
    images: ['film-library-app.jpeg'],
    usedTechnology: [
      { name: 'symfony', image: 'symfony-white.png' },
      { name: 'tailwind', image: 'Tailwind CSS.png' },
      { name: 'mySQL', image: 'my-sql.png' },
    ],
    fullGitHubLink: 'https://github.com/wassimD28/Film-library',
  },
];
