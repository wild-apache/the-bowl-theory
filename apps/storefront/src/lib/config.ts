function safeUrl(value: string | undefined, fallback: string): string {
  if (!value) return fallback;
  try {
    const url = new URL(value);
    return ["https:", "http:", "mailto:", "tel:"].includes(url.protocol) ? url.toString() : fallback;
  } catch {
    return fallback;
  }
}

export const brandLinks = {
  swiggy: safeUrl(process.env.NEXT_PUBLIC_SWIGGY_URL, "#order"),
  zomato: safeUrl(process.env.NEXT_PUBLIC_ZOMATO_URL, "#order"),
  instagram: safeUrl(process.env.NEXT_PUBLIC_INSTAGRAM_URL, "https://www.instagram.com/"),
  contact: safeUrl(process.env.NEXT_PUBLIC_CONTACT_URL, "mailto:hello@thebowltheory.in")
};
