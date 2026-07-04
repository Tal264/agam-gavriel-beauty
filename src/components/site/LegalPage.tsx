import type { ReactNode } from "react";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Legal</p>
      <h1 className="mt-3 font-serif text-4xl text-espresso sm:text-5xl">{title}</h1>
      <div className="prose mt-8 max-w-none space-y-4 text-muted-foreground [&_h2]:mt-8 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-espresso [&_ul]:list-disc [&_ul]:pr-6 [&_a]:text-espresso [&_a]:underline">
        {children}
      </div>
    </article>
  );
}
