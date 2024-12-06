"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const { language } = useLanguage();

  // Ensure language is either 'en' or 'fr'
  const lang = language === "en" || language === "fr" ? language : "en";

  // Pick the correct data array based on the current language
  const selectedProjectsData = projectsData[lang];

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>
        {lang === "en" ? "My projects" : "Mes projets"}
      </SectionHeading>
      <div>
        {selectedProjectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
