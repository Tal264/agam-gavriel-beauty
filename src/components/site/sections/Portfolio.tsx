import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const IMAGES = [
  { src: p1, alt: "זר כלה עם ורדים לבנים על משי" },
  { src: p2, alt: "תקריב שפתיים בגוון נוד מבריק" },
  { src: p3, alt: "עיצוב שיער אסוף עם גלים רכים" },
  { src: p4, alt: "תקריב עין עם צלליות ניוד וריסים" },
  { src: p5, alt: "פורטרט אופנה עם איפור בולט" },
  { src: p6, alt: "אסוף כלה מפואר עם סיכות פנינים" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">Portfolio</p>
          <h2 className="font-serif text-4xl text-espresso sm:text-5xl">גלריה</h2>
          <p className="mt-4 text-muted-foreground">
            הצצה לעבודות אחרונות — כלות, ערב ואופנה.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
          {IMAGES.map((img, i) => (
            <motion.a
              key={i}
              href={CONTACT.instagram}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group relative block aspect-square overflow-hidden bg-muted"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-espresso/0 opacity-0 transition-all duration-500 group-hover:bg-espresso/40 group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-background" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-espresso/70 px-6 py-3 text-sm tracking-wide text-espresso transition-colors hover:bg-espresso hover:text-background"
          >
            <Instagram className="h-4 w-4" />
            עקבו באינסטגרם @agamgavriel_
          </a>
        </div>
      </div>
    </section>
  );
}
