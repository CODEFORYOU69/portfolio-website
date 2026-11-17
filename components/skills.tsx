"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";
import { skillGroups } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const t = useTranslations("skills");

  return (
    <section ref={ref} id="skills" aria-labelledby="skills-title" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading id="skills-title" index={t("index")} title={t("title")} />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            // AI groups are descriptive (translated) and highlighted; the others are tool names.
            const highlighted = group.translated;
            const items = group.translated ? (t.raw(`${group.key}Items`) as string[]) : group.items;
            return (
              <div
                key={group.key}
                className={clsx(
                  "rounded-2xl border p-6",
                  highlighted ? "border-accent/40 bg-accent/[0.06] lg:col-span-2" : "hairline bg-surface"
                )}
              >
                <h3 className={clsx("eyebrow", highlighted && "text-accent")}>{t(`groups.${group.key}`)}</h3>
                <ul className={clsx("mt-4", highlighted ? "divide-y divide-fg/10" : "flex flex-wrap gap-1.5")}>
                  {items.map((item) => (
                    <li key={item} className={clsx(highlighted ? "py-2.5 text-[1.05rem] leading-snug" : "chip text-[0.78rem] text-fg/80")}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
