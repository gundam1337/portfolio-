import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaBriefcase } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdSchool } from "react-icons/md";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting, and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count, and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
];

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
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
];
