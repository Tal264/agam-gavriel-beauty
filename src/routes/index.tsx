import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/sections/Hero";
import { Services } from "@/components/site/sections/Services";
import { Portfolio } from "@/components/site/sections/Portfolio";
import { ContactSection } from "@/components/site/sections/ContactSection";

export const Route = createFileRoute("/")({
  component: Index,

  // ✅ THIS IS THE IMPORTANT PART (SEO + SOCIAL SHARING)
  meta: () => [
    {
      title: "Agam Gavriel | Makeup & Hair Artist",
    },
    {
      name: "description",
      content:
        "איפור ועיצוב שיער כלות מקצועי. בדיקת זמינות, שירות אישי עד הבית.",
    },

    // Open Graph (WhatsApp / Facebook)
    {
      property: "og:title",
      content: "Agam Gavriel | Makeup & Hair Artist",
    },
    {
      property: "og:description",
      content:
        "איפור ועיצוב שיער כלות מקצועי. שירות אישי עד הבית.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:image",
      content: "./src/assets/og-image.jpg",
    },
    {
      property: "og:url",
      content: "https://agamgavriel.dot-page-studio.workers.dev/",
    },

    // Twitter
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Agam Gavriel | Makeup & Hair Artist",
    },
    {
      name: "twitter:description",
      content:
        "איפור ועיצוב שיער כלות מקצועי. שירות אישי עד הבית.",
    },
    {
      name: "twitter:image",
      content: "./src/assets/og-image.jpg",
    },
  ],
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
    <section
      aria-label="פילוסופיה"
      className="border-y border-border/60 bg-background py-14 sm:py-20"
    >
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
          Philosophy
        </p>

        <p className="mt-5 font-serif text-2xl leading-relaxed text-espresso sm:text-3xl">
          איפור ועיצוב שיער שגורמים לך להרגיש הכי את — יפה, טבעית וזוהרת.
          מגיעה למקום ההתארגנות ליום שכולו נעימות ורוגע.
        </p>
      </div>
    </section>
  );
}