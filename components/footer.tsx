import { useTranslations } from "next-intl";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t hairline">
      <div className="container-page flex flex-col gap-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} Younes Ouasmi. {t("rights")}
          <span className="mt-1 block text-xs">{t("built")}</span>
        </p>
        <a href="#home" className="inline-flex items-center gap-2 self-start text-fg link-underline sm:self-auto">
          {t("backToTop")}
          <FiArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
