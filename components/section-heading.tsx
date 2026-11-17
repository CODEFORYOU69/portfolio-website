import React from "react";

type SectionHeadingProps = {
  id: string;
  index: string;
  title: string;
  intro?: React.ReactNode;
};

export default function SectionHeading({ id, index, title, intro }: SectionHeadingProps) {
  return (
    <div className="mb-10 grid gap-4 border-t hairline pt-6 sm:mb-14 md:grid-cols-12 md:gap-8">
      <p className="eyebrow md:col-span-3" aria-hidden="true">
        <span className="text-accent">{index}</span> — {title}
      </p>
      <div className="md:col-span-9">
        <h2
          id={id}
          className="font-serif text-[2.6rem] leading-[1.02] tracking-[-0.01em] sm:text-6xl"
        >
          {title}
        </h2>
        {intro ? <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p> : null}
      </div>
    </div>
  );
}
