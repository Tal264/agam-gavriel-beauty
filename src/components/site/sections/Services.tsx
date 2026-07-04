import { motion } from "framer-motion";
import bridal from "@/assets/service-bridal.jpg";
import evening from "@/assets/service-evening.jpg";
import fashion from "@/assets/service-fashion.jpg";

const SERVICES = [
  {
    title: "כלות",
    en: "Bridal",
    desc: "מראה חתונה בהתאמה אישית — עור זוהר, איפור עמיד לכל היום ועיצוב שיער רומנטי או קלאסי.",
    img: bridal,
    alt: "איפור ועיצוב שיער לכלה עם רעלה עדינה",
  },
  {
    title: "ערב",
    en: "Evening",
    desc: "איפור ערב אלגנטי לאירועים מיוחדים — סופט גלאם, פול גלאם או מראה טבעי ומהודר.",
    img: evening,
    alt: "פורטרט איפור ערב יוקרתי עם עור זוהר וגלים רכים",
  },
  {
    title: "אופנה",
    en: "Fashion",
    desc: "עבודות אופנה, מותגים וצילומי סטודיו — מראה אמנותי, מדויק ומצולם.",
    img: fashion,
    alt: "פורטרט אופנה עריכתי עם איפור בולט ושיער חלק",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-t border-border/60 bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">Services</p>
          <h2 className="font-serif text-4xl text-espresso sm:text-5xl">השירותים שלי</h2>
          <p className="mt-4 text-muted-foreground">
            מראה מותאם אישית — קלין גלאם, סופט גלאם או פול גלאם.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-muted">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="pt-6">
                <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                  {s.en}
                </p>
                <h3 className="mt-2 font-serif text-3xl text-espresso">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
