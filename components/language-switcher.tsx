"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import clsx from "clsx";

const locales = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
] as const;

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();
  const t = useTranslations("nav");

  const changeLanguage = (newLocale: string) => {
    if (newLocale === currentLocale) return;
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/") + window.location.hash, { scroll: false });
  };

  return (
    <div
      role="group"
      aria-label={t("language")}
      className="flex items-center rounded-full border hairline p-0.5 font-mono text-[0.7rem]"
    >
      {locales.map(({ code, label }) => {
        const active = currentLocale === code;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            onClick={() => changeLanguage(code)}
            aria-pressed={active}
            aria-label={t("switchTo", { language: label })}
            className={clsx(
              "rounded-full px-2 py-1 uppercase tracking-wider transition-colors",
              active ? "bg-fg text-bg" : "text-muted hover:text-fg"
            )}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
