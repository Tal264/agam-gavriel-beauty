export const CONTACT = {
  brand: "Agam Gavriel",
  phoneDisplay: "054-754-1004",
  phoneIntl: "+972547541004",
  whatsappNumber: "972547541004",
  whatsappDefaultMessage:
    "היי אגם, אשמח לבדוק זמינות לשירותי איפור ושיער 💄",
  instagram: "https://www.instagram.com/agamgavriel_/",
  tiktok: "#",
  facebook: "#",
} as const;

export function whatsappUrl(message: string = CONTACT.whatsappDefaultMessage) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const telHref = `tel:${CONTACT.phoneIntl}`;
