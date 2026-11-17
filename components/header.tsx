"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { FiArrowDownRight, FiMenu, FiX } from "react-icons/fi";
import { contact, links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionName } from "@/lib/types";
import ThemeSwitch from "./theme-switch";
import LanguageSwitcher from "./language-switcher";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const t = useTranslations("nav");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  const select = (name: SectionName) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
  };

  useEffect(() => {
    if (!menuOpen) return;
    firstMenuLinkRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b hairline bg-bg/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a
          href="#home"
          onClick={() => select("Home")}
          className="group flex items-baseline gap-2 rounded-sm"
          aria-label={`Younes Ouasmi — ${t("home")}`}
        >
          <span className="font-serif text-2xl leading-none">Younes Ouasmi</span>
          <span className="hidden h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-accent sm:inline-block" />
        </a>

        <nav aria-label="Navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1 text-[0.92rem]">
            {links.map((link) => {
              const active = activeSection === link.name;
              return (
                <li key={link.hash} className="relative">
                  <a
                    href={link.hash}
                    onClick={() => select(link.name)}
                    aria-current={active ? "true" : undefined}
                    className={clsx(
                      "relative block rounded-full px-3.5 py-2 transition-colors",
                      active ? "text-fg" : "text-muted hover:text-fg"
                    )}
                  >
                    {t(link.key)}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-fg/[0.06]"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeSwitch />
          <a
            href={contact.cv}
            download
            className="hidden items-center gap-1.5 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-on-accent sm:inline-flex"
          >
            {t("cv")}
            <FiArrowDownRight aria-hidden="true" />
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border hairline lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t("close") : t("menu")}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t hairline bg-bg lg:hidden"
      >
        <nav aria-label={t("menu")} className="container-page py-6">
          <ul className="flex flex-col">
            {links.map((link, index) => (
              <li key={link.hash} className="border-b hairline last:border-0">
                <a
                  ref={index === 0 ? firstMenuLinkRef : undefined}
                  href={link.hash}
                  onClick={() => {
                    select(link.name);
                    setMenuOpen(false);
                  }}
                  className="flex items-baseline justify-between py-3 font-serif text-3xl"
                >
                  {t(link.key)}
                  <span className="font-mono text-xs text-muted">0{index + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <a href={contact.cv} download className="btn-primary mt-6 w-full sm:hidden">
            {t("cv")}
            <FiArrowDownRight aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
