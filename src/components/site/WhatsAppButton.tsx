import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/contact";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="שליחת הודעת וואטסאפ"
      className="fixed bottom-5 left-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-espresso/20 transition-transform hover:scale-105 sm:bottom-6 sm:left-6"
      style={{ right: "auto" }}
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} />
    </a>
  );
}
