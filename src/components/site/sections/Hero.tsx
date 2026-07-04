import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { CONTACT, telHref, whatsappUrl } from "@/lib/contact";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-8 sm:pt-12">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 sm:px-8 md:grid-cols-2 md:gap-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Brides · Evening · Fashion
          </p>
          <h1 className="font-serif text-4xl leading-[1.1] text-espresso sm:text-5xl md:text-6xl">
            מאפרת ומעצבת שיער
            <br />
            <span className="italic text-espresso/80">כלות וערב</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            מגיעה למקום ההתארגנות ליצירת מראה יוקרתי, טבעי וזוהר —
            ליום החתונה, לאירוע הערב או לצילומי אופנה.
          </p>
          <p className="mt-3 text-sm tracking-wide text-muted-foreground">
            Makeup &amp; Hair Artist · coming to your location
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={telHref}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm tracking-wide text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <Phone className="h-4 w-4" />
              להתקשר עכשיו
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-espresso/70 px-7 py-3.5 text-sm tracking-wide text-espresso transition-colors hover:bg-espresso hover:text-background"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            {CONTACT.phoneDisplay}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="order-1 md:order-2"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] shadow-[0_30px_80px_-30px_oklch(0.24_0.02_45/0.35)]">
            <img
              src={heroImg}
              alt="קומפוזיציה יוקרתית של מוצרי איפור על משי בגווני שמנת"
              width={1536}
              height={1920}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/10 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
