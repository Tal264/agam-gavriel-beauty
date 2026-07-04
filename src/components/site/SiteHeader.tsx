import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CONTACT } from "@/lib/contact";

const NAV = [
  { href: "#services", label: "שירותים" },
  { href: "#portfolio", label: "גלריה" },
  { href: "#contact", label: "יצירת קשר" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      {/* 🔥 FORCE LTR ONLY FOR HEADER */}
      <div
        dir="ltr"
        className="mx-auto flex w-full max-w-7xl items-center px-5 py-4 sm:px-8"
      >
        {/* LEFT SIDE: LOGO (WILL NOW ALWAYS STAY LEFT) */}
        <div className="flex shrink-0">
          <Link
            to="/"
            className="font-serif text-2xl tracking-wide text-espresso sm:text-[26px]"
            aria-label="אגם גבריאל - דף הבית"
          >
            Agam Gavriel
          </Link>
        </div>

        {/* PUSH RIGHT SIDE */}
        <div className="ml-auto flex items-center gap-8">

          {/* DESKTOP NAV */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="ניווט ראשי"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}

            <a
              href={`tel:${CONTACT.phoneIntl}`}
              className="rounded-full border border-espresso/80 px-5 py-2 text-sm tracking-wide text-espresso transition-colors hover:bg-espresso hover:text-background"
            >
              {CONTACT.phoneDisplay}
            </a>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-espresso hover:bg-secondary"
            aria-label="פתיחת תפריט"
          >
            <Menu className="h-6 w-6" />
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          open ? "" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-espresso/40 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        <aside
          className={`absolute inset-y-0 right-0 flex w-[82%] max-w-sm flex-col bg-background shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-border/60">
            <span className="font-serif text-xl">Agam Gavriel</span>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-secondary"
              aria-label="סגירת תפריט"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 p-5" aria-label="ניווט נייד">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-4 text-lg text-foreground hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}

            <a
              href={`tel:${CONTACT.phoneIntl}`}
              className="mt-4 rounded-full bg-primary px-6 py-3 text-center text-base text-primary-foreground"
            >
              להתקשר עכשיו — {CONTACT.phoneDisplay}
            </a>
          </nav>
        </aside>
      </div>
    </header>
  );
}