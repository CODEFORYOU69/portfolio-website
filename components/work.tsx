"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { workCategories, workProjects, type WorkCategory, type WorkProject } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

export default function Work() {
  const { ref } = useSectionInView("Projects");
  const t = useTranslations("work");
  const [filter, setFilter] = useState<WorkCategory>("all");
  // Reduced motion: cards only cross-fade, no scale at all.
  const reduceMotion = useReducedMotion();

  const visible =
    filter === "all" ? workProjects : workProjects.filter((project) => project.categories.includes(filter));

  return (
    <section ref={ref} id="work" aria-labelledby="work-title" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading id="work-title" index={t("index")} title={t("title")} intro={t("intro")} />

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div role="group" aria-label={t("filterLabel")} className="flex flex-wrap gap-2">
            {workCategories.map((category) => {
              const active = filter === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(category)}
                  className={clsx(
                    "rounded-full border px-4 py-2 text-sm transition-colors",
                    active ? "border-fg bg-fg text-bg" : "border-fg/15 text-muted hover:border-fg/40 hover:text-fg"
                  )}
                >
                  {t(`filters.${category}`)}
                </button>
              );
            })}
          </div>
          <p className="font-mono text-xs text-muted" aria-live="polite">
            {t("count", { count: visible.length })}
          </p>
        </div>

        <motion.ul layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence initial={false} mode="popLayout">
            {visible.map((project) => (
              <motion.li
                key={project.slug}
                layout
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <WorkCard project={project} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}

function WorkCard({ project }: { project: WorkProject }) {
  const t = useTranslations("work");
  const isPoc = project.slug === "regulaai";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border hairline bg-surface transition-colors hover:border-fg/30">
      <div className="relative aspect-[16/10] overflow-hidden border-b hairline bg-bg">
        {project.image ? (
          <Image
            src={project.image}
            alt={t("imageAlt", { title: project.title })}
            fill
            sizes="(min-width: 1024px) 25rem, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <RagPipeline steps={t.raw(`${project.slug}.pipeline`) as string[]} />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-serif text-3xl leading-none">{project.title}</h3>
          {isPoc && <span className="chip border-accent/40 text-accent">{t("pocBadge")}</span>}
        </div>
        <p className="mt-3 leading-relaxed text-muted">{t(`${project.slug}.description`)}</p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {project.tags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/** Diagram of the RegulaAI answer pipeline (no screenshot exists for this POC). */
function RagPipeline({ steps }: { steps: string[] }) {
  return (
    <ol className="absolute inset-0 flex flex-col justify-center gap-2 p-5">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-3">
          <span
            className={clsx(
              "grid h-6 w-6 shrink-0 place-items-center rounded-full font-mono text-[0.65rem]",
              index === steps.length - 1 ? "bg-accent text-on-accent" : "border border-fg/20 text-muted"
            )}
          >
            {index + 1}
          </span>
          <span
            className={clsx(
              "flex-1 rounded-md border px-3 py-1.5 font-mono text-[0.72rem] transition-colors",
              index === steps.length - 1
                ? "border-accent/50 bg-accent/10 text-fg"
                : "border-fg/10 bg-surface text-muted group-hover:text-fg"
            )}
          >
            {step}
          </span>
        </li>
      ))}
    </ol>
  );
}
