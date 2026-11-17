"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FiRotateCcw } from "react-icons/fi";
import type { FeaturedProject } from "@/lib/data";

/**
 * KNTX Labs has no public site to screenshot: show the real computer-vision output
 * next to the active-learning loop the platform is built around.
 */
export default function KntxVisual({ project, sizes }: { project: FeaturedProject; sizes: string }) {
  const t = useTranslations("featured.kntx");
  const loop = t.raw("loop") as string[];

  return (
    <div className="theme-invert grid gap-4 rounded-lg bg-bg p-4 text-fg sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] sm:items-center sm:p-5">
      <figure className="overflow-hidden rounded-md border hairline">
        <Image
          src={project.image}
          alt={t("visualAlt")}
          sizes={sizes}
          className="aspect-[620/684] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        <figcaption className="border-t hairline px-3 py-2 font-mono text-[0.68rem] text-muted">
          {t("visualCaption")}
        </figcaption>
      </figure>

      <div>
        <p className="eyebrow">{t("loopTitle")}</p>
        <ol className="mt-3 space-y-2">
          {loop.map((step, index) => (
            <li key={step} className="flex items-center gap-3">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-fg/20 font-mono text-[0.65rem] text-muted">
                {index + 1}
              </span>
              <span className="flex-1 rounded-md border border-fg/10 bg-surface px-3 py-1.5 text-sm">{step}</span>
            </li>
          ))}
        </ol>
        <p aria-hidden="true" className="mt-3 flex items-center gap-2 pl-9 font-mono text-[0.68rem] text-accent">
          <FiRotateCcw />
          {loop.length} → 1
        </p>
      </div>
    </div>
  );
}
