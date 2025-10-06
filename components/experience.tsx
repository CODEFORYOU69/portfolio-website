"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { useTranslations } from 'next-intl';

function TimelineItem({ item, index, theme, t }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className={`relative mb-12 md:mb-16 ${
        index % 2 === 0 ? 'md:pr-[50%] md:pl-0' : 'md:pl-[50%] md:pr-0'
      } pl-12`}
    >
      {/* Icon */}
      <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
        theme === "light" ? "bg-white border-4 border-gray-200" : "bg-gray-800 border-4 border-white/10"
      }`}>
        {item.icon}
      </div>

      {/* Content card */}
      <div className={`${
        index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
      }`}>
        <div className={`p-6 rounded-lg ${
          theme === "light"
            ? "bg-gray-100 border border-gray-200"
            : "bg-white/5 border border-white/10"
        }`}>
          {/* Date badge */}
          <div className="mb-3">
            <span className={`inline-block px-3 py-1 text-sm rounded-full ${
              theme === "light"
                ? "bg-white text-gray-700"
                : "bg-white/10 text-white/80"
            }`}>
              {t(`${item.slug}.date`)}
            </span>
          </div>

          <h3 className="text-xl font-semibold mb-1 capitalize">
            {t(`${item.slug}.title`)}
          </h3>
          <p className="font-medium text-gray-600 dark:text-white/60 mb-3">
            {t(`${item.slug}.location`)}
          </p>
          <p className="text-gray-700 dark:text-white/75 leading-relaxed">
            {t(`${item.slug}.description`)}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const t = useTranslations('experience');

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>{t('title')}</SectionHeading>
      <div className="relative mt-16">
        {/* Vertical line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-[4px] h-full bg-gray-200 dark:bg-white/10"></div>

        {experiencesData.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            index={index}
            theme={theme}
            t={t}
          />
        ))}
      </div>
    </section>
  );
}
