"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import type { FeaturedProject } from "@/lib/data";
import KntxVisual from "./kntx-visual";

type ProjectDialogProps = {
  project: FeaturedProject | null;
  onClose: () => void;
};

/**
 * Native <dialog> opened with showModal(): focus is contained, Escape closes it,
 * and the parent restores focus to the card that opened it.
 */
export default function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const t = useTranslations("featured");
  const tc = useTranslations("common");
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    }
    if (!project && dialog.open) dialog.close();
  }, [project]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => {
      document.documentElement.style.overflow = "";
      onClose();
    };
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  const highlights = project ? (t.raw(`${project.slug}.highlights`) as string[]) : [];
  // A project can override the generic "solo" role line.
  const role = project && t.has(`${project.slug}.role`) ? t(`${project.slug}.role`) : t("role");

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-dialog-title"
      className="project-dialog m-auto w-full overflow-y-auto overscroll-contain rounded-2xl border hairline bg-bg p-0 text-fg shadow-2xl"
      onClick={(event) => {
        // A click on the backdrop targets the dialog element itself.
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
    >
      {project ? (
        <article style={{ "--brand": project.accent } as React.CSSProperties}>
          <header className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b hairline bg-bg/95 px-5 py-4 backdrop-blur sm:px-8">
            <div>
              <p className="eyebrow flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[color:var(--brand)]" aria-hidden="true" />
                {t(`${project.slug}.status`)}
              </p>
              <h3 id="project-dialog-title" className="mt-1 font-serif text-4xl sm:text-5xl">
                {project.name}
              </h3>
            </div>
            <button
              type="button"
              autoFocus
              onClick={() => dialogRef.current?.close()}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border hairline transition-colors hover:bg-fg/[0.06]"
              aria-label={t("close")}
            >
              <FiX aria-hidden="true" />
            </button>
          </header>

          <div className="px-5 pb-8 pt-6 sm:px-8">
            <p className="max-w-2xl font-serif text-2xl italic leading-snug">{t(`${project.slug}.tagline`)}</p>

            {project.url ? (
              <div className="mt-6 overflow-hidden rounded-xl border hairline">
                <Image
                  src={project.image}
                  alt={t("screenshotAlt", { name: project.name })}
                  sizes="(min-width: 900px) 52rem, 100vw"
                  className="w-full"
                />
              </div>
            ) : (
              <div className="mt-6">
                <KntxVisual project={project} sizes="(min-width: 900px) 24rem, 100vw" />
              </div>
            )}

            <div className="mt-8 grid gap-8 md:grid-cols-12">
              <div className="md:col-span-7">
                <p className="leading-relaxed text-fg/85">{t(`${project.slug}.description`)}</p>
                <h4 className="eyebrow mt-8">{t("labels.highlights")}</h4>
                <ol className="mt-3 divide-y divide-fg/10 border-y hairline">
                  {highlights.map((item, index) => (
                    <li key={item} className="flex gap-4 py-3 leading-relaxed">
                      <span className="pt-0.5 font-mono text-xs text-[color:var(--brand)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <aside className="md:col-span-5">
                <dl className="divide-y divide-fg/10 border-y hairline text-sm">
                  {(["status", "role", "year"] as const).map((key) => (
                    <div key={key} className="grid grid-cols-3 gap-3 py-3">
                      <dt className="text-muted">{t(`labels.${key}`)}</dt>
                      <dd className="col-span-2">
                        {key === "status" && t(`${project.slug}.status`)}
                        {key === "role" && role}
                        {key === "year" && project.year}
                      </dd>
                    </div>
                  ))}
                </dl>
                <h4 className="eyebrow mt-6">{t("labels.stack")}</h4>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-8 w-full"
                  >
                    {t("visitSite")} — {project.url.replace("https://", "")}
                    <FiArrowUpRight aria-hidden="true" />
                    <span className="sr-only">{tc("newTab")}</span>
                  </a>
                )}
              </aside>
            </div>
          </div>
        </article>
      ) : null}
    </dialog>
  );
}
