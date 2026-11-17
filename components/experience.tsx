"use client";

import { useTranslations } from "next-intl";
import { experienceSlugs } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const t = useTranslations("experience");
  const bio = t.raw("bio") as string[];
  const sport = t.raw("sport.items") as { title: string; text: string }[];

  return (
    <section ref={ref} id="experience" aria-labelledby="experience-title" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading id="experience-title" index={t("index")} title={t("title")} />

        <div className="mb-14">
          <h3 className="eyebrow">{t("sport.title")}</h3>
          <ul className="mt-4 grid gap-px overflow-hidden rounded-2xl border hairline bg-fg/10 sm:grid-cols-3">
            {sport.map((item) => (
              <li key={item.title} className="flex flex-col gap-2 bg-surface p-6">
                <span className="font-serif text-3xl leading-none sm:text-4xl">{item.title}</span>
                <span className="leading-relaxed text-muted">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="space-y-4 text-lg leading-relaxed text-fg/85 md:col-span-4">
            {bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ol className="border-t hairline md:col-span-8">
            {experienceSlugs.map((slug) => (
              <li
                key={slug}
                className="grid gap-2 border-b hairline py-6 transition-colors hover:bg-fg/[0.025] sm:grid-cols-[11rem_1fr] sm:gap-6 sm:px-3"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-muted sm:pt-1.5">{t(`${slug}.date`)}</p>
                <div>
                  <h3 className="text-xl font-medium">{t(`${slug}.title`)}</h3>
                  <p className="text-muted">{t(`${slug}.location`)}</p>
                  <p className="mt-3 max-w-2xl leading-relaxed text-fg/80">{t(`${slug}.description`)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
