"use client";

import React from "react";
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2030 Younes Ouasmi. {t('rights')}
      </small>
      <p className="text-xs">
        <span className="font-semibold">{t('about')}</span> {t('tech')}
      </p>
    </footer>
  );
}
