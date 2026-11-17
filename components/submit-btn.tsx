"use client";

import React from "react";
import { FiSend } from "react-icons/fi";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { useTranslations } from "next-intl";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  const t = useTranslations("contact");

  return (
    <button
      type="submit"
      className="btn-primary group min-w-[10rem] disabled:cursor-wait disabled:opacity-70"
      disabled={pending}
      aria-busy={pending}
    >
      {pending ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-b-transparent" aria-hidden="true" />
          {t("sending")}
        </>
      ) : (
        <>
          {t("submit")}
          <FiSend aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </>
      )}
    </button>
  );
}
