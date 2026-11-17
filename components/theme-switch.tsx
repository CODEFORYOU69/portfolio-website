"use client";

import { useTheme } from "@/context/theme-context";
import { useTranslations } from "next-intl";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations("nav");
  const label = theme === "light" ? t("themeToDark") : t("themeToLight");

  return (
    <button
      type="button"
      onClick={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        toggleTheme({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      }}
      className="grid h-9 w-9 place-items-center rounded-full text-fg/80 transition-colors hover:bg-fg/[0.06] hover:text-fg"
      aria-label={label}
      title={label}
    >
      {theme === "light" ? <FiMoon aria-hidden="true" /> : <FiSun aria-hidden="true" />}
    </button>
  );
}
