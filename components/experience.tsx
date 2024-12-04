// components/Experience.tsx
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { useLanguage } from "@/context/language-context";

// Define the structure of each experience
interface ExperienceItem {
  date: Record<string, string>; // { en: string, fr: string, ... }
  icon: React.ReactNode; // Icon component
  title: Record<string, string>; // { en: string, fr: string, ... }
  location?: Record<string, string>; // Optional
  description: Record<string, string>; // { en: string, fr: string, ... }
}

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme(); // Assume theme is typed as { theme: "light" | "dark" }
  const { language } = useLanguage(); // Assume language is typed as { language: "en" | "fr" }

  const sectionTitle: Record<string, string> = {
    en: "My experience",
    fr: "Mon expérience",
  };

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>{sectionTitle[language]}</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item: ExperienceItem, index: number) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date[language]}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">
                {item.title[language]}
              </h3>
              {item.location?.[language] && (
                <p className="font-normal !mt-0">{item.location[language]}</p>
              )}
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description[language]}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
