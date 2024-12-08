import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaBriefcase } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdSchool } from "react-icons/md";
import matchaImg from "@/public/matchaImg.png";
import raytracingImg from "@/public/raytracingImg.png";
import fractolImg from "@/public/fractolImg.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
];

export const experiencesData = [
  {
    date: { en: "2015 – 2019", fr: "2015 – 2019" },
    title: {
      en: "Bachelor of Science and Technology, FST Beni Mellal",
      fr: "Licence en Sciences et Techniques, FST Beni Mellal",
    },
    location: { en: "", fr: "" },
    description: {
      en: "Studied Electronic Engineering and Telecommunications, covering electronics, telecommunications, information processing, and industrial computing.",
      fr: "Études en ingénierie électronique et télécommunications, incluant électronique, télécommunications, traitement de l’information, et informatique industrielle.",
    },
    icon: React.createElement(MdSchool),
  },
  {
    date: { en: "December 2018 – June 2022", fr: "Décembre 2018 – Juin 2022" },
    title: {
      en: "Junior Developer Program, 1337 Coding School",
      fr: "Programme de Développeur Junior, École 1337",
    },
    location: { en: "", fr: "" },
    description: {
      en: "Hands-on experience in coding and project-based learning with a focus on problem-solving and peer learning.",
      fr: "Expérience pratique en codage et apprentissage par projets, axée sur la résolution de problèmes et l’apprentissage par les pairs.",
    },
    icon: React.createElement(MdSchool),
  },
  {
    date: { en: "2021 – 2024", fr: "2021 – 2024" },
    title: {
      en: "Math Teacher, Ministry of National Education, Beni Mellal",
      fr: "Professeur de Mathématiques, Ministère de l'Éducation Nationale, Beni Mellal",
    },
    location: { en: "", fr: "" },
    description: {
      en: "Taught high school mathematics, developed lesson plans, and evaluated student performance.",
      fr: "Enseignement des mathématiques au lycée, élaboration de plans de cours et évaluation des performances des élèves.",
    },
    icon: React.createElement(FaBriefcase),
  },
  {
    date: { en: "June 2023 – January 2024", fr: "Juin 2023 – Janvier 2024" },
    title: { en: "Freelance Developer, Upwork", fr: "Développeur Freelance, Upwork" },
    location: { en: "", fr: "" },
    description: {
      en: "Created user interfaces and debugged code for various clients.",
      fr: "Création d’interfaces utilisateur et débogage de code pour divers clients.",
    },
    icon: React.createElement(FaBriefcase),
  },
];

// export const projectsData = [
//   {
//     title: "Matcha",
//     description:
//       "A full-stack dating app with real-time chat, user preferences, and geolocation features. Built during a coding bootcamp.",
//     tags: ["Node.js", "Express", "React", "Socket.IO", "MongoDB"],
//     imageUrl: matchaImg, // Replace with actual image import or path
//   },
//   {
//     title: "Raytracing with C",
//     description:
//       "A project focused on creating a raytracing engine entirely in C, showcasing advanced graphics programming techniques.",
//     tags: ["C", "Graphics", "Math"],
//     imageUrl: raytracingImg, // Replace with actual image import or path
//   },
//   {
//     title: "Fract'ol 1337",
//     description:
//       "A project visualizing fractals with zooming and color manipulation, developed for a coding bootcamp.",
//     tags: ["C", "Graphics", "Fractals", "Algorithms"],
//     imageUrl: fractolImg, // Replace with actual image import or path
//   },
// ];

//to add I should add the front 

export const projectsData = {
  en: [
    {
      title: "Matcha",
      description:
        "A full-stack dating app with real-time chat, user preferences, and geolocation features. Built during a coding bootcamp.",
      tags: ["Node.js", "Express", "React", "Socket.IO", "MongoDB"],
      imageUrl: matchaImg,
    },
    {
      title: "Raytracing with C",
      description:
        "A project focused on creating a raytracing engine entirely in C, showcasing advanced graphics programming techniques.",
      tags: ["C", "Graphics", "Math"],
      imageUrl: raytracingImg,
    },
    {
      title: "Fract'ol 1337",
      description:
        "A project visualizing fractals with zooming and color manipulation, developed for a coding bootcamp.",
      tags: ["C", "Graphics", "Fractals", "Algorithms"],
      imageUrl: fractolImg,
    },
  ],
  fr: [
    {
      title: "Matcha",
      description:
        "Une application de rencontre full-stack avec messagerie instantanée, préférences utilisateur et fonctionnalités de géolocalisation, développée lors d'un bootcamp.",
      tags: ["Node.js", "Express", "React", "Socket.IO", "MongoDB"],
      imageUrl: matchaImg,
    },
    {
      title: "Raytracing en C",
      description:
        "Un projet visant à créer un moteur de lancer de rayons entièrement en C, mettant en avant des techniques avancées de programmation graphique.",
      tags: ["C", "Graphiques", "Mathématiques"],
      imageUrl: raytracingImg,
    },
    {
      title: "Fract'ol 1337",
      description:
        "Un projet de visualisation de fractales avec zoom et manipulation des couleurs, développé pendant un bootcamp.",
      tags: ["C", "Graphiques", "Fractales", "Algorithmes"],
      imageUrl: fractolImg,
    },
  ],
};


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
];
