"use client";

import React, { useRef, useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  FiArrowRight,
  FiBarChart2,
  FiBookOpen,
  FiCheck,
  FiCpu,
  FiFileText,
  FiRepeat,
  FiShield,
  FiTarget,
} from "react-icons/fi";
import { serviceCases, type ServiceCase } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import SectionHeading from "./section-heading";

const caseIcons: Record<ServiceCase, React.ReactNode> = {
  docs: <FiFileText />,
  data: <FiBarChart2 />,
  automation: <FiRepeat />,
  rag: <FiBookOpen />,
  agents: <FiCpu />,
  custom: <FiTarget />,
};

type Step = { title: string; text: string };
type Proof = { name: string; text: string };

export default function Services() {
  const { ref } = useSectionInView("Services");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const t = useTranslations("services");
  const steps = t.raw("process.steps") as Step[];
  const principles = t.raw("principles.items") as string[];
  const proofs = t.raw("proof.items") as Proof[];

  return (
    <section
      ref={ref}
      id="services"
      aria-labelledby="services-title"
      className="theme-invert bg-bg py-20 text-fg sm:py-28"
    >
      <div className="container-page">
        <SectionHeading id="services-title" index={t("index")} title={t("title")} intro={t("lead")} />

        {/* Manifesto */}
        <div className="grid gap-6 border-y hairline py-10 md:grid-cols-12 md:gap-8 md:py-14">
          <p className="font-serif text-[2.4rem] leading-[1.02] md:col-span-7 md:text-[4.2rem]">
            {t("manifestoTitle")}
          </p>
          <p className="self-end text-lg leading-relaxed text-muted md:col-span-5">{t("manifestoText")}</p>
        </div>

        <CaseExplorer />

        {/* Method */}
        <div className="mt-20">
          <h3 className="eyebrow">{t("process.title")}</h3>
          <ol className="mt-6 grid gap-px overflow-hidden rounded-2xl border hairline bg-fg/10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="flex flex-col bg-bg p-6">
                <span className="font-serif text-5xl text-accent">{index + 1}</span>
                <span className="mt-6 text-lg font-medium">{step.title}</span>
                <span className="mt-2 leading-relaxed text-muted">{step.text}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Principles + proof */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="eyebrow">{t("principles.title")}</h3>
            <ul className="mt-6 divide-y divide-fg/10 border-y hairline">
              {principles.map((item) => (
                <li key={item} className="flex gap-4 py-4 text-lg">
                  <FiCheck aria-hidden="true" className="mt-1.5 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow">{t("proof.title")}</h3>
            <ul className="mt-6 grid gap-3">
              {proofs.map((proof) => (
                <li key={proof.name} className="rounded-xl border hairline bg-surface p-5">
                  <p className="font-serif text-2xl">{proof.name}</p>
                  <p className="mt-1 leading-relaxed text-muted">{proof.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-col items-start gap-4 border-t hairline pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-lg text-muted">{t("ctaHint")}</p>
          <a
            href="#contact"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
            className="btn group bg-accent text-on-accent hover:bg-fg hover:text-bg"
          >
            {t("cta")}
            <FiArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function CaseExplorer() {
  const t = useTranslations("services");
  const [active, setActive] = useState<ServiceCase>(serviceCases[0]);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const focusTab = (index: number) => {
    const next = serviceCases[(index + serviceCases.length) % serviceCases.length];
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    const keys: Record<string, () => void> = {
      ArrowDown: () => focusTab(index + 1),
      ArrowRight: () => focusTab(index + 1),
      ArrowUp: () => focusTab(index - 1),
      ArrowLeft: () => focusTab(index - 1),
      Home: () => focusTab(0),
      End: () => focusTab(serviceCases.length - 1),
    };
    const action = keys[event.key];
    if (action) {
      event.preventDefault();
      action();
    }
  };

  const base = `cases.${active}`;
  const examples = t.raw(`${base}.examples`) as string[];
  const before = t.raw(`${base}.before`) as string[];
  const after = t.raw(`${base}.after`) as string[];

  return (
    <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-10">
      <div
        role="tablist"
        aria-label={t("casesLabel")}
        aria-orientation="vertical"
        className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:-mx-8 sm:px-8 lg:col-span-4 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0"
      >
        {serviceCases.map((key, index) => {
          const selected = key === active;
          return (
            <button
              key={key}
              ref={(node) => {
                tabRefs.current[key] = node;
              }}
              id={`case-tab-${key}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`case-panel-${key}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(key)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={clsx(
                "group flex shrink-0 items-start gap-3 rounded-xl border px-4 py-3 text-left transition-colors lg:px-5 lg:py-4",
                selected
                  ? "border-accent/60 bg-surface"
                  : "border-transparent hover:border-fg/15 hover:bg-surface/60"
              )}
            >
              <span
                aria-hidden="true"
                className={clsx(
                  "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg text-base transition-colors",
                  selected ? "bg-accent text-on-accent" : "bg-fg/[0.07] text-fg/70 group-hover:text-fg"
                )}
              >
                {caseIcons[key]}
              </span>
              <span className="flex flex-col">
                <span className="whitespace-nowrap font-medium lg:whitespace-normal">{t(`cases.${key}.name`)}</span>
                <span className="hidden text-sm text-muted lg:block">{t(`cases.${key}.short`)}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        id={`case-panel-${active}`}
        role="tabpanel"
        aria-labelledby={`case-tab-${active}`}
        tabIndex={0}
        className="rounded-2xl border hairline bg-surface p-6 sm:p-8 lg:col-span-8"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <p className="eyebrow">{t("labels.today")}</p>
            <p className="mt-2 text-lg leading-relaxed text-muted">{t(`${base}.today`)}</p>

            <p className="eyebrow mt-8">{t("labels.concretely")}</p>
            <ul className="mt-3 space-y-3">
              {examples.map((example) => (
                <li key={example} className="flex gap-3 text-lg leading-snug sm:text-xl">
                  <FiArrowRight aria-hidden="true" className="mt-1.5 shrink-0 text-accent" />
                  <span>{example}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-3 rounded-xl border hairline p-4 sm:p-5">
              <Flow label={t("labels.before")} steps={before} />
              <Flow label={t("labels.after")} steps={after} highlight />
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="eyebrow">{t("labels.impact")}</p>
                <p className="mt-2 leading-relaxed">{t(`${base}.impact`)}</p>
              </div>
              <div>
                <p className="eyebrow flex items-center gap-1.5">
                  <FiShield aria-hidden="true" className="text-accent" />
                  {t("labels.guardrail")}
                </p>
                <p className="mt-2 leading-relaxed">{t(`${base}.guardrail`)}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Flow({ label, steps, highlight = false }: { label: string; steps: string[]; highlight?: boolean }) {
  return (
    <div className="grid gap-2 sm:grid-cols-[4.5rem_1fr] sm:items-center">
      <span className={clsx("font-mono text-[0.7rem] uppercase tracking-[0.14em]", highlight ? "text-accent" : "text-muted")}>
        {label}
      </span>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center gap-1.5">
            <span
              className={clsx(
                "rounded-full border px-2.5 py-1",
                highlight ? "border-accent/50 bg-accent/10" : "border-fg/15 text-muted"
              )}
            >
              {step}
            </span>
            {index < steps.length - 1 && (
              <span aria-hidden="true" className="text-muted">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
