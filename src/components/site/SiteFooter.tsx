import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";
import { CONTACT } from "@/lib/contact";

// TikTok icon (lucide doesn't ship one)
function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.6 6.3a5.3 5.3 0 0 1-3.2-1.1 5.3 5.3 0 0 1-2-3.2h-3.2v13.1a2.7 2.7 0 1 1-2.7-2.7c.3 0 .6.1.9.2V9.3a5.9 5.9 0 1 0 5 5.9V9.4a8.5 8.5 0 0 0 5.2 1.8V8a5.4 5.4 0 0 1 0-1.7Z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-espresso">Agam Gavriel</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            מאפרת ומעצבת שיער לכלות, אירועי ערב וצילומי אופנה. מגיעה למקום
            ההתארגנות.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-espresso/30 text-espresso transition-colors hover:bg-espresso hover:text-background"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={CONTACT.tiktok}
              aria-label="TikTok"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-espresso/30 text-espresso transition-colors hover:bg-espresso hover:text-background"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
            <a
              href={CONTACT.facebook}
              aria-label="Facebook"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-espresso/30 text-espresso transition-colors hover:bg-espresso hover:text-background"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            ניווט
          </p>
          <ul className="space-y-2 text-sm">
            <li><a href="/#services" className="hover:text-espresso">שירותים</a></li>
            <li><a href="/#portfolio" className="hover:text-espresso">גלריה</a></li>
            <li><a href="/#contact" className="hover:text-espresso">יצירת קשר</a></li>
            <li><Link to="/contact" className="hover:text-espresso">צור קשר</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            מידע משפטי
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/accessibility" className="hover:text-espresso">הצהרת נגישות</Link></li>
            <li><Link to="/terms" className="hover:text-espresso">תנאי שימוש</Link></li>
            <li><Link to="/privacy" className="hover:text-espresso">מדיניות פרטיות</Link></li>
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            טלפון:{" "}
            <a href={`tel:${CONTACT.phoneIntl}`} className="text-espresso hover:underline">
              {CONTACT.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()}  · כל הזכויות שמורות  made with ❤️ by dot.page |  Agam Gavriel
      </div>
    </footer>
  );
}
