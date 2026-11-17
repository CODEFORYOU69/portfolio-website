"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { FiArrowUpRight, FiPlus } from "react-icons/fi";
import { featuredProjects, type FeaturedProject } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import ProjectDialog from "./project-dialog";
import KntxVisual from "./kntx-visual";

export default function FeaturedProjects() {
  const { ref } = useSectionInView("Projects");
  const t = useTranslations("featured");
  const [selected, setSelected] = useState<FeaturedProject | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const open = (project: FeaturedProject, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setSelected(project);
  };

  const close = useCallback(() => {
    setSelected(null);
    triggerRef.current?.focus();
  }, []);

  return (
    <section ref={ref} id="projects" aria-labelledby="projects-title" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading id="projects-title" index={t("index")} title={t("title")} intro={t("intro")} />

        {/* First project spans the row (AI flagship); the three apps share the next row. */}
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <li
              key={project.slug}
              className={clsx(index === 0 && "md:col-span-2 lg:col-span-3", index === 3 && "md:col-span-2 lg:col-span-1")}
            >
              <ProjectCard project={project} wide={index === 0} onOpen={open} />
            </li>
          ))}
        </ul>
      </div>

      <ProjectDialog project={selected} onClose={close} />
    </section>
  );
}

type ProjectCardProps = {
  project: FeaturedProject;
  wide: boolean;
  onOpen: (project: FeaturedProject, trigger: HTMLButtonElement) => void;
};

function ProjectCard({ project, wide, onOpen }: ProjectCardProps) {
  const t = useTranslations("featured");
  const tc = useTranslations("common");
  const host = project.url?.replace("https://", "");
  const chipCount = wide ? 6 : 4;

  return (
    <article
      style={{ "--brand": project.accent } as React.CSSProperties}
      className={clsx(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border hairline bg-surface transition-[border-color,box-shadow] duration-300",
        "hover:border-[color:var(--brand)] hover:shadow-[0_24px_60px_-30px_var(--brand)] focus-within:border-[color:var(--brand)]",
        wide && "lg:flex-row"
      )}
    >
      <div className={clsx("border-b hairline bg-bg p-3 sm:p-4", wide && "lg:order-2 lg:w-[58%] lg:border-b-0 lg:border-l")}>
        {host ? (
          /* Browser-framed screenshot of the live product */
          <div className="overflow-hidden rounded-lg border hairline bg-surface">
            <div className="flex items-center gap-1.5 border-b hairline px-3 py-2" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-fg/15" />
              <span className="h-2 w-2 rounded-full bg-fg/15" />
              <span className="h-2 w-2 rounded-full bg-fg/15" />
              <span className="ml-2 truncate font-mono text-[0.68rem] text-muted">{host}</span>
            </div>
            <div className="overflow-hidden">
              <Image
                src={project.image}
                alt={t("screenshotAlt", { name: project.name })}
                sizes={wide ? "(min-width: 1024px) 44rem, 100vw" : "(min-width: 1024px) 25rem, (min-width: 768px) 50vw, 100vw"}
                className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
            </div>
          </div>
        ) : (
          <KntxVisual project={project} sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 100vw" />
        )}
      </div>

      <div className={clsx("flex flex-1 flex-col p-6 sm:p-8", wide && "lg:w-[42%]")}>
        <div className="flex items-center justify-between gap-3">
          <p className="flex items-center gap-2 text-sm text-muted">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[color:var(--brand)]" aria-hidden="true" />
            {t(`${project.slug}.status`)}
          </p>
          <span className="font-mono text-xs text-muted">{project.year}</span>
        </div>

        <h3 className="mt-5 font-serif text-5xl leading-none sm:text-6xl">{project.name}</h3>
        <p className="mt-3 max-w-md text-lg leading-snug text-fg/80">{t(`${project.slug}.tagline`)}</p>

        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label={t("labels.stack")}>
          {project.stack.slice(0, chipCount).map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
          {project.stack.length > chipCount && <li className="chip">+{project.stack.length - chipCount}</li>}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-8">
          {/* The ::after overlay makes the whole card open the details, keeping a single tab stop. */}
          <button
            type="button"
            onClick={(event) => onOpen(project, event.currentTarget)}
            aria-haspopup="dialog"
            className="inline-flex items-center gap-2 font-medium after:absolute after:inset-0 after:rounded-2xl after:content-['']"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-fg text-bg transition-colors group-hover:bg-[color:var(--brand)] group-hover:text-white">
              <FiPlus aria-hidden="true" />
            </span>
            {t("viewDetails")}
            <span className="sr-only"> — {project.name}</span>
          </button>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-1 text-sm text-muted link-underline hover:text-fg"
            >
              {t("visitSite")}
              <FiArrowUpRight aria-hidden="true" />
              <span className="sr-only">
                {project.name} {tc("newTab")}
              </span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
