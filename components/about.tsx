"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";

export default function About() {
  const { ref } = useSectionInView("About");
  const { language } = useLanguage();

  type Language = keyof typeof content;

  const content = {
    en: {
      heading: "About me",
      paragraph1: (
        <>
          After graduating with a degree in{" "}
          <span className="font-medium">Accounting</span>, I decided to pursue
          my passion for programming. I enrolled in a coding bootcamp and
          learned{" "}
          <span className="font-medium">full-stack web development</span>.{" "}
          <span className="italic">My favorite part of programming</span> is the
          problem-solving aspect. I <span className="underline">love</span> the
          feeling of finally figuring out a solution to a problem. My core stack
          is{" "}
          <span className="font-medium">
            React, Next.js, Node.js, and MongoDB
          </span>
          . I am also familiar with TypeScript and Prisma. I am always looking
          to learn new technologies. I am currently looking for a{" "}
          <span className="font-medium">full-time position</span> as a software
          developer.
        </>
      ),
      paragraph2: (
        <>
          <span className="italic">When I'm not coding</span>, I enjoy playing
          video games, watching movies, and playing with my dog. I also enjoy{" "}
          <span className="font-medium">learning new things</span>. I am
          currently learning about{" "}
          <span className="font-medium">history and philosophy</span>. I'm also
          learning how to play the guitar.
        </>
      ),
    },
    fr: {
      heading: "À propos de moi",
      paragraph1: (
        <>
          Après avoir obtenu un diplôme en{" "}
          <span className="font-medium">Comptabilité</span>, j'ai décidé de
          poursuivre ma passion pour la programmation. Je me suis inscrit à un
          bootcamp de codage et j'ai appris le{" "}
          <span className="font-medium">développement web full-stack</span>.{" "}
          <span className="italic">Ma partie préférée de la programmation</span>{" "}
          est l'aspect résolution de problèmes. J'
          <span className="underline">adore</span> le sentiment de finalement
          trouver une solution à un problème. Mon stack principal est{" "}
          <span className="font-medium">
            React, Next.js, Node.js, et MongoDB
          </span>
          . Je suis également familier avec TypeScript et Prisma. Je cherche
          toujours à apprendre de nouvelles technologies. Je recherche
          actuellement un{" "}
          <span className="font-medium">poste à temps plein</span> en tant que
          développeur logiciel.
        </>
      ),
      paragraph2: (
        <>
          <span className="italic">Quand je ne code pas</span>, j'aime jouer aux
          jeux vidéo, regarder des films et jouer avec mon chien. J'aime aussi{" "}
          <span className="font-medium">apprendre de nouvelles choses</span>.
          J'apprends actuellement l'
          <span className="font-medium">histoire et la philosophie</span>.
          J'apprends aussi à jouer de la guitare.
        </>
      ),
    },
  };

  const { heading, paragraph1, paragraph2 } = content[language as Language];

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{heading}</SectionHeading>
      <p className="mb-3">{paragraph1}</p>
      <p>{paragraph2}</p>
    </motion.section>
  );
}
