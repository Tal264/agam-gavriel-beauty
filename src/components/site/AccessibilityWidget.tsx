import { useEffect, useState } from "react";
import { Accessibility, X, RotateCcw } from "lucide-react";

type Settings = {
  fontSize: "normal" | "large" | "xlarge";
  contrast: boolean;
  grayscale: boolean;
  underline: boolean;
};

const DEFAULTS: Settings = {
  fontSize: "normal",
  contrast: false,
  grayscale: false,
  underline: false,
};

const STORAGE_KEY = "a11y-settings-v1";

function apply(s: Settings) {
  const html = document.documentElement;
  html.classList.toggle("a11y-large", s.fontSize === "large");
  html.classList.toggle("a11y-xlarge", s.fontSize === "xlarge");
  html.classList.toggle("a11y-contrast", s.contrast);
  html.classList.toggle("a11y-grayscale", s.grayscale);
  html.classList.toggle("a11y-underline", s.underline);
}

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(DEFAULTS);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = { ...DEFAULTS, ...JSON.parse(raw) } as Settings;
        setSettings(parsed);
        apply(parsed);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const update = (patch: Partial<Settings>) => {
    const next = { ...settings, ...patch };
    setSettings(next);
    apply(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  };

  const reset = () => update(DEFAULTS);

  const increase = () =>
    update({
      fontSize:
        settings.fontSize === "normal"
          ? "large"
          : settings.fontSize === "large"
            ? "xlarge"
            : "xlarge",
    });
  const decrease = () =>
    update({
      fontSize:
        settings.fontSize === "xlarge"
          ? "large"
          : settings.fontSize === "large"
            ? "normal"
            : "normal",
    });

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="תפריט נגישות"
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-espresso text-background shadow-lg transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
      >
        <Accessibility className="h-6 w-6" />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="הגדרות נגישות"
          className="fixed bottom-20 right-5 z-50 w-72 rounded-2xl border border-border bg-background p-5 shadow-2xl sm:right-6"
        >
          <div className="mb-4 flex items-center justify-between">
            <p className="font-serif text-lg">נגישות</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="סגירה"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-secondary"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <p className="mb-2 text-xs text-muted-foreground">גודל טקסט</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={decrease}
                  className="h-10 flex-1 rounded-md border border-border hover:bg-secondary"
                  aria-label="הקטנת טקסט"
                >
                  A-
                </button>
                <button
                  onClick={() => update({ fontSize: "normal" })}
                  className="h-10 flex-1 rounded-md border border-border hover:bg-secondary"
                >
                  A
                </button>
                <button
                  onClick={increase}
                  className="h-10 flex-1 rounded-md border border-border hover:bg-secondary"
                  aria-label="הגדלת טקסט"
                >
                  A+
                </button>
              </div>
            </div>

            <ToggleRow
              label="ניגודיות גבוהה"
              checked={settings.contrast}
              onChange={(v) => update({ contrast: v })}
            />
            <ToggleRow
              label="גווני אפור"
              checked={settings.grayscale}
              onChange={(v) => update({ grayscale: v })}
            />
            <ToggleRow
              label="הדגשת קישורים"
              checked={settings.underline}
              onChange={(v) => update({ underline: v })}
            />

            <button
              type="button"
              onClick={reset}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-secondary py-2.5 text-sm hover:bg-accent"
            >
              <RotateCcw className="h-4 w-4" />
              איפוס
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function ToggleRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-3 rounded-md py-1">
      <span>{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors ${
          checked ? "bg-espresso" : "bg-border"
        }`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-background shadow transition-transform ${
            checked ? "-translate-x-5" : "-translate-x-0.5"
          }`}
        />
      </button>
    </label>
  );
}
