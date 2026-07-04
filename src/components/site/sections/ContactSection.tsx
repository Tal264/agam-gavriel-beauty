import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, MessageCircle, Check } from "lucide-react";
import { CONTACT, telHref, whatsappUrl } from "@/lib/contact";

const schema = z.object({
  name: z.string().trim().min(2, "יש להזין שם מלא").max(80),
  phone: z
    .string()
    .trim()
    .min(9, "מספר טלפון לא תקין")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "מספר טלפון לא תקין"),
  email: z.string().trim().email("כתובת אימייל לא תקינה").max(120).or(z.literal("")),
  date: z.string().trim().max(40).optional().or(z.literal("")),
  service: z.enum(["bridal", "evening", "fashion", "other"]),
  message: z.string().trim().max(600).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

const SERVICE_LABEL: Record<FormValues["service"], string> = {
  bridal: "כלות",
  evening: "ערב",
  fashion: "אופנה / צילומים",
  other: "אחר",
};

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { service: "bridal", email: "", date: "", message: "" },
  });

  const onSubmit = (data: FormValues) => {
    const lines = [
      `שם: ${data.name}`,
      `טלפון: ${data.phone}`,
      data.email ? `אימייל: ${data.email}` : "",
      data.date ? `תאריך אירוע: ${data.date}` : "",
      `שירות: ${SERVICE_LABEL[data.service]}`,
      data.message ? `הודעה: ${data.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const text = `היי אגם, אשמח לבדוק זמינות:\n\n${lines}`;
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border/60 bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-2 md:gap-16">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">Contact</p>
          <h2 className="font-serif text-4xl text-espresso sm:text-5xl">בדיקת זמינות</h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            שלחי פרטים לבדיקת זמינות ותקבלי מענה אישי בהקדם. ניתן גם להתקשר או
            להשאיר הודעה בוואטסאפ.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={telHref}
              className="flex items-center gap-3 rounded-xl border border-border bg-background px-5 py-4 transition-colors hover:border-espresso"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-espresso text-background">
                <Phone className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-muted-foreground">להתקשר עכשיו</span>
                <span className="block font-serif text-lg text-espresso">
                  {CONTACT.phoneDisplay}
                </span>
              </span>
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-background px-5 py-4 transition-colors hover:border-espresso"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#25D366] text-white">
                <MessageCircle className="h-5 w-5" fill="currentColor" strokeWidth={0} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-muted-foreground">WhatsApp</span>
                <span className="block font-serif text-lg text-espresso">
                  שליחת הודעה מהירה
                </span>
              </span>
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8"
          noValidate
        >
          {sent && (
            <div className="mb-5 flex items-center gap-2 rounded-md bg-secondary px-4 py-3 text-sm text-espresso">
              <Check className="h-4 w-4" /> נפתחה שיחת וואטסאפ עם הפרטים שלך.
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="שם מלא" error={errors.name?.message}>
              <input
                {...register("name")}
                type="text"
                autoComplete="name"
                className="input"
                placeholder="שם ושם משפחה"
              />
            </Field>
            <Field label="טלפון" error={errors.phone?.message}>
              <input
                {...register("phone")}
                type="tel"
                autoComplete="tel"
                className="input"
                placeholder="050-000-0000"
                dir="ltr"
              />
            </Field>
            <Field label="אימייל" error={errors.email?.message}>
              <input
                {...register("email")}
                type="email"
                autoComplete="email"
                className="input"
                placeholder="you@example.com"
                dir="ltr"
              />
            </Field>
            <Field label="תאריך אירוע" error={errors.date?.message}>
              <input
                {...register("date")}
                type="date"
                className="input"
                dir="ltr"
              />
            </Field>
            <Field label="סוג שירות" error={errors.service?.message} className="sm:col-span-2">
              <select {...register("service")} className="input">
                <option value="bridal">כלות</option>
                <option value="evening">ערב</option>
                <option value="fashion">אופנה / צילומים</option>
                <option value="other">אחר</option>
              </select>
            </Field>
            <Field label="הודעה (אופציונלי)" error={errors.message?.message} className="sm:col-span-2">
              <textarea
                {...register("message")}
                rows={4}
                className="input resize-none"
                placeholder="ספרי לי על האירוע והמראה הרצוי"
              />
            </Field>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 w-full rounded-full bg-primary py-3.5 text-sm tracking-wide text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-60"
          >
            בדיקת זמינות · Check Availability
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            הפרטים ישלחו כהודעת וואטסאפ לאגם.
          </p>
        </form>
      </div>

      {/* input styles */}
      <style>{`
        .input {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          padding: 0.7rem 0.9rem;
          font-size: 0.95rem;
          color: var(--color-foreground);
          transition: border-color .2s;
        }
        .input:focus { outline: none; border-color: var(--color-espresso); }
      `}</style>
    </section>
  );
}

function Field({
  label,
  error,
  className,
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1.5 block text-sm text-espresso">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
