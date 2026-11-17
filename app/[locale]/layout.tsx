import "../globals.css";
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Toaster } from "react-hot-toast";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MotionProvider from "@/components/motion-provider";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider, { themeInitScript } from "@/context/theme-context";

const sans = Inter_Tight({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: { languages: { fr: "/fr", en: "/en" } },
    openGraph: { title: t("title"), description: t("description"), type: "website", locale },
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "nav" });

  return (
    <html
      lang={locale}
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[1000] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
        >
          {t("skip")}
        </a>
        <NextIntlClientProvider messages={messages}>
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <MotionProvider>
                <Header />
                <main id="main">{children}</main>
                <Footer />
                <Toaster
                  position="bottom-center"
                  toastOptions={{
                    className: "!rounded-full !bg-fg !text-bg !text-sm !px-4",
                    iconTheme: { primary: "rgb(var(--c-accent))", secondary: "rgb(var(--c-bg))" },
                  }}
                />
              </MotionProvider>
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
