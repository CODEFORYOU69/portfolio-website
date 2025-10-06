"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTranslations, useLocale } from 'next-intl';

export default function About() {
  const { ref } = useSectionInView("About");
  const t = useTranslations('about');
  const locale = useLocale();

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
<SectionHeading>{t('title')}</SectionHeading>
{locale === 'fr' ? (
  <>
    <p className="mb-3">
      Après <span className="font-medium">15 ans d'expérience en logistique</span>, j'ai décidé de me reconvertir dans le <span className="font-medium">développement web</span>, un domaine dans lequel je me suis récemment certifié. Cette transition a été motivée par mon approche proactive, en tirant parti de mes compétences transférables et d'un fort désir d'innovation. <span className="italic">Ce qui m'enthousiasme dans la programmation</span>, c'est l'opportunité de résoudre des problèmes complexes et de créer des solutions impactantes. J'<span className="underline">adore</span> le défi et la satisfaction qui viennent de la résolution d'un problème de code difficile. Mes principales compétences techniques incluent <span className="font-medium">HTML, CSS, JavaScript, React, Express, Node.js, Git/Github, Leaflet, Swift et SwiftUI</span>. Je cherche constamment à élargir mes connaissances et à les appliquer à des projets concrets. Je recherche activement un <span className="font-medium">nouveau poste</span> où je peux contribuer et grandir en tant que développeur web.
    </p>
    <p>
      <span className="italic">En dehors du code</span>, je suis passionné par <span className="font-medium">la plongée, l'astronomie et la photographie</span>. Je consacre également du temps à <span className="font-medium">l'entraînement de Taekwondo</span>, reflétant mon engagement envers l'enseignement et l'implication communautaire. J'aime <span className="font-medium">explorer de nouveaux domaines</span> et suis toujours curieux d'en apprendre davantage sur <span className="font-medium">la technologie et la science</span>. Actuellement, je perfectionne mes compétences en technologies et méthodologies de développement web.
    </p>
  </>
) : (
  <>
    <p className="mb-3">
      After <span className="font-medium">15 years of experience in logistics</span>, I decided to pivot towards <span className="font-medium">web development</span>, an area I've recently become certified in. This transition was driven by my proactive approach, leveraging my transferable skills and a strong desire for innovation. <span className="italic">What excites me about programming</span> is the opportunity to solve complex problems and create impactful solutions. I <span className="underline">love</span> the challenge and satisfaction that come from cracking a tough coding problem. My main technical skills include <span className="font-medium">HTML, CSS, JavaScript, React, Express, Node.js, Git/Github, Leaflet, Swift, and SwiftUI</span>. I'm constantly seeking to expand my knowledge and apply it to real-world projects. I am actively looking for a <span className="font-medium">new role</span> where I can contribute and grow as a web developer.
    </p>
    <p>
      <span className="italic">Outside of coding</span>, I'm passionate about <span className="font-medium">diving, astronomy, and photography</span>. I also dedicate time to <span className="font-medium">coaching Taekwondo</span>, reflecting my commitment to teaching and community involvement. I enjoy <span className="font-medium">exploring new areas</span> and am always curious to learn more about <span className="font-medium">technology and science</span>. Currently, I am enhancing my skills in web development technologies and methodologies.
    </p>
  </>
)}
    </motion.section>
  );
}
