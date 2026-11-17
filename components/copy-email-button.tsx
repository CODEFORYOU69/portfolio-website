"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import { FiCheck, FiCopy } from "react-icons/fi";
import clsx from "clsx";
import { contact } from "@/lib/data";

export default function CopyEmailButton({ className }: { className?: string }) {
  const t = useTranslations("common");
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      toast.success(t("emailCopied"));
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast(t("copyFailed", { email: contact.email }));
    }
  };

  return (
    <button type="button" onClick={copy} className={clsx("btn-ghost", className)}>
      {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
      <span>{t("copyEmail")}</span>
      <span className="sr-only">: {contact.email}</span>
    </button>
  );
}
