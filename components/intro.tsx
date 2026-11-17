"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { useTranslations } from "next-intl";
import { FiArrowRight, FiArrowDownRight } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { contact } from "@/lib/data";
import portraitImg from "@/public/portrait.jpg";
import CopyEmailButton from "./copy-email-button";

const statKeys = ["products", "ai", "olympics", "field"] as const;

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const t = useTranslations("hero");
  const tc = useTranslations("common");
  const frame = useRef<number | null>(null);

  // Pointer-driven light: updates two CSS variables, no layout work, ignored on touch (CSS-gated).
  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse" || frame.current !== null) return;
    const el = event.currentTarget;
    const { clientX, clientY } = event;
    frame.current = window.requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${clientX - rect.left}px`);
      el.style.setProperty("--my", `${clientY - rect.top}px`);
      frame.current = null;
    });
  };

  const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

  return (
    <section
      ref={ref}
      id="home"
      aria-labelledby="hero-title"
      onPointerMove={onPointerMove}
      className="hero-zone relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-32"
    >
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="hero-spotlight pointer-events-none absolute inset-0" />

      <div className="container-page relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <div className="motion-rise">
              <p className="inline-flex items-center gap-2 rounded-full border hairline bg-surface/70 py-1.5 pl-2.5 pr-3.5 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-emerald-500" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {t("availability")}
              </p>
            </div>

            <p style={delay(60)} className="eyebrow motion-rise mt-6">
              {t("role")}
            </p>
            <h1
              id="hero-title"
              style={delay(90)}
              className="motion-rise mt-3 font-serif text-[3.6rem] leading-[0.92] tracking-[-0.02em] sm:text-[6.5rem] xl:text-[8rem]"
            >
              Younes Ouasmi
            </h1>

            <p
              style={delay(140)}
              className="motion-rise mt-6 max-w-[34ch] text-[1.4rem] leading-[1.3] tracking-[-0.01em] sm:text-[2rem]"
            >
              {t.rich("statement", {
                em: (chunks) => <em className="font-serif italic text-accent">{chunks}</em>,
              })}
            </p>

            <div style={delay(190)} className="motion-rise mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#contact"
                className="btn-primary group"
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                {t("ctaProject")}
                <FiArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <div className="flex flex-wrap items-center gap-3">
                <a href={contact.cv} download className="btn-ghost">
                  {t("ctaCv")}
                  <FiArrowDownRight aria-hidden="true" />
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${tc("linkedin")} ${tc("newTab")}`}
                  className="grid h-[2.9rem] w-[2.9rem] place-items-center rounded-full border border-fg/15 transition-colors hover:border-fg/40 hover:bg-fg/[0.04]"
                >
                  <FaLinkedinIn aria-hidden="true" />
                </a>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${tc("github")} ${tc("newTab")}`}
                  className="grid h-[2.9rem] w-[2.9rem] place-items-center rounded-full border border-fg/15 text-lg transition-colors hover:border-fg/40 hover:bg-fg/[0.04]"
                >
                  <FaGithub aria-hidden="true" />
                </a>
              </div>
              <CopyEmailButton className="self-start sm:self-auto" />
            </div>

            <p style={delay(240)} className="motion-rise mt-8 max-w-2xl leading-relaxed text-muted sm:text-lg">
              {t("lead")}
            </p>
          </div>

          <div className="hidden lg:col-span-4 lg:block">
            <figure style={delay(160)} className="motion-rise group relative ml-auto max-w-[19rem]">
              <div className="overflow-hidden rounded-2xl border hairline bg-surface">
                <Image
                  src={portraitImg}
                  alt={t("portraitAlt")}
                  priority
                  sizes="19rem"
                  className="aspect-square w-full scale-[1.06] object-cover grayscale transition duration-500 ease-out group-hover:scale-[1.09] group-hover:grayscale-0"
                />
              </div>
              <figcaption className="eyebrow mt-3 flex justify-between">
                <span>Younes Ouasmi</span>
                <span>FR · EN</span>
              </figcaption>
            </figure>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-px border-y hairline bg-fg/10 sm:mt-20 lg:grid-cols-4">
          {statKeys.map((key) => (
            <div key={key} className="flex flex-col-reverse justify-end gap-1 bg-bg px-4 py-5 lg:px-6">
              <dt className="text-sm text-muted">{t(`stats.${key}.label`)}</dt>
              <dd className="font-serif text-3xl sm:text-4xl">{t(`stats.${key}.value`)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
