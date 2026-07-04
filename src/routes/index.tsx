import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/sections/Hero";
import { Services } from "@/components/site/sections/Services";
import { Portfolio } from "@/components/site/sections/Portfolio";
import { ContactSection } from "@/components/site/sections/ContactSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TaglineStrip />
      <Services />
      <Portfolio />
      <ContactSection />
    </>
  );
}

function TaglineStrip() {
  return (
    <section aria-label="פילוסופיה" className="border-y border-border/60 bg-background py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Philosophy</p>
        <p className="mt-5 font-serif text-2xl leading-relaxed text-espresso sm:text-3xl">
          איפור ועיצוב שיער שגורמים לך להרגיש הכי את — יפה, טבעית וזוהרת.
          מגיעה למקום ההתארגנות ליום שכולו נעימות ורוגע.
        </p>
      </div>
    </section>
  );
}
