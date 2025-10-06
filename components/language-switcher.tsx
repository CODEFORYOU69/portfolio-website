"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from 'next-intl';

const locales = ['en', 'fr'] as const;

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const changeLanguage = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <div className="fixed bottom-5 left-5 z-[999] flex gap-2">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => changeLanguage(locale)}
          className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
            currentLocale === locale
              ? "bg-gray-900 text-white dark:bg-white/20"
              : "bg-white/80 text-gray-700 hover:bg-white dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/20"
          } borderBlack`}
          aria-label={`Switch to ${locale === "en" ? "English" : "Français"}`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
