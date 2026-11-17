"use client";

import { useRef } from "react";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { sendEmail } from "@/actions/sendEmail";
import { contact } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";
import CopyEmailButton from "./copy-email-button";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const t = useTranslations("contact");
  const tc = useTranslations("common");
  const formRef = useRef<HTMLFormElement>(null);

  const fieldClass =
    "w-full rounded-xl border border-fg/15 bg-surface px-4 py-3 text-fg placeholder:text-muted/70 transition-colors focus:border-accent";

  return (
    <section ref={ref} id="contact" aria-labelledby="contact-title" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading id="contact-title" index={t("index")} title={t("title")} intro={t("lead")} />

        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="eyebrow">{t("direct")}</p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-3 block break-all font-serif text-3xl link-underline"
            >
              {contact.email}
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              <CopyEmailButton />
            </div>
            <ul className="mt-8 divide-y divide-fg/10 border-y hairline">
              {[
                { href: contact.linkedin, label: "LinkedIn", sr: tc("linkedin"), icon: <FaLinkedinIn /> },
                { href: contact.github, label: "GitHub", sr: tc("github"), icon: <FaGithub /> },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-3 transition-colors hover:text-accent"
                  >
                    <span className="flex items-center gap-3">
                      <span aria-hidden="true">{item.icon}</span>
                      {item.label}
                      <span className="sr-only">
                        — {item.sr} {tc("newTab")}
                      </span>
                    </span>
                    <FiArrowUpRight
                      aria-hidden="true"
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form
            ref={formRef}
            className="grid gap-4 md:col-span-8"
            action={async (formData) => {
              const { error } = await sendEmail(formData);

              if (error) {
                toast.error(error);
                return;
              }

              formRef.current?.reset();
              toast.success(t("success"));
            }}
          >
            <div className="grid gap-2">
              <label htmlFor="senderEmail" className="text-sm font-medium">
                {t("emailLabel")}
              </label>
              <input
                id="senderEmail"
                className={fieldClass}
                name="senderEmail"
                type="email"
                autoComplete="email"
                required
                maxLength={500}
                placeholder={t("emailPlaceholder")}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                {t("messageLabel")}
              </label>
              <textarea
                id="message"
                className={`${fieldClass} min-h-[12rem] resize-y`}
                name="message"
                placeholder={t("messagePlaceholder")}
                required
                maxLength={5000}
              />
            </div>
            <div>
              <SubmitBtn />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
