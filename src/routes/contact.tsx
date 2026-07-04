import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/site/sections/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "יצירת קשר | אגם גבריאל" },
      {
        name: "description",
        content:
          "יצירת קשר עם אגם גבריאל — מאפרת ומעצבת שיער. טלפון, וואטסאפ וטופס בדיקת זמינות.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="pt-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Contact</p>
        <h1 className="mt-3 font-serif text-4xl text-espresso sm:text-5xl">יצירת קשר</h1>
      </div>
      <ContactSection />
    </div>
  );
}
