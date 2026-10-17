export type MenuCategory = "Rice bowls" | "Comfort classics" | "From the kitchen";

export type PackOption = {
  label: string;
  detail: string;
  price: number;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  tag?: string;
  image: string;
  packs: PackOption[];
};

export const categories = ["All", "Rice bowls", "Comfort classics", "From the kitchen"] as const;
export type CategoryFilter = (typeof categories)[number];

// Preview prices are deliberately indicative. Confirm recipe yield, ingredient cost,
// packaging, tax, and delivery-channel fees before publishing as final prices.
export const menu: MenuItem[] = [
  {
    id: "tamarind-pulihora",
    name: "Tamarind Pulihora",
    description: "Tangy tamarind rice, tempered spices and the familiar warmth of home.",
    category: "Rice bowls",
    tag: "Signature",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
    packs: [{ label: "Regular", detail: "350 g", price: 99 }, { label: "Generous", detail: "500 g", price: 139 }, { label: "Family", detail: "1 kg", price: 259 }]
  },
  {
    id: "lemon-pulihora",
    name: "Lemon Pulihora",
    description: "Bright citrus, green chilli and a delicate crackle of tempering.",
    category: "Rice bowls",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    packs: [{ label: "Regular", detail: "350 g", price: 99 }, { label: "Generous", detail: "500 g", price: 139 }, { label: "Family", detail: "1 kg", price: 259 }]
  },
  {
    id: "tomato-rice",
    name: "Tomato Rice",
    description: "Slow-cooked tomato masala, aromatic rice and a rounded, homestyle finish.",
    category: "Rice bowls",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
    packs: [{ label: "Regular", detail: "350 g", price: 109 }, { label: "Generous", detail: "500 g", price: 149 }, { label: "Family", detail: "1 kg", price: 279 }]
  },
  {
    id: "zeera-rice",
    name: "Zeera Rice",
    description: "Fragrant cumin rice: simple, soulful and made to pair beautifully.",
    category: "Rice bowls",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85",
    packs: [{ label: "Regular", detail: "350 g", price: 99 }, { label: "Generous", detail: "500 g", price: 139 }, { label: "Family", detail: "1 kg", price: 259 }]
  },
  {
    id: "pudina-rice",
    name: "Pudina Rice",
    description: "Fresh mint, green herbs and a lively, aromatic finish.",
    category: "Rice bowls",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    packs: [{ label: "Regular", detail: "350 g", price: 109 }, { label: "Generous", detail: "500 g", price: 149 }, { label: "Family", detail: "1 kg", price: 279 }]
  },
  {
    id: "kothimeera-rice",
    name: "Kothimeera Rice",
    description: "Coriander-forward rice with fresh green notes and gentle spice.",
    category: "Rice bowls",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85",
    packs: [{ label: "Regular", detail: "350 g", price: 109 }, { label: "Generous", detail: "500 g", price: 149 }, { label: "Family", detail: "1 kg", price: 279 }]
  },
  {
    id: "curd-rice",
    name: "Curd Rice",
    description: "Cooling, creamy comfort finished with a gentle South Indian tempering.",
    category: "Comfort classics",
    tag: "Comfort classic",
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=900&q=85",
    packs: [{ label: "Regular", detail: "350 g", price: 89 }, { label: "Generous", detail: "500 g", price: 129 }, { label: "Family", detail: "1 kg", price: 239 }]
  },
  {
    id: "pappu-charu-rice",
    name: "Pappu Charu Rice",
    description: "A comforting dal-and-tamarind pairing inspired by everyday Andhra meals.",
    category: "Comfort classics",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    packs: [{ label: "Regular", detail: "350 g", price: 119 }, { label: "Generous", detail: "500 g", price: 159 }, { label: "Family", detail: "1 kg", price: 299 }]
  },
  {
    id: "pappu-aavakai-rice",
    name: "Pappu Aavakai Rice",
    description: "Dal rice with a bold, pickle-led Andhra flavour.",
    category: "Comfort classics",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
    packs: [{ label: "Regular", detail: "350 g", price: 129 }, { label: "Generous", detail: "500 g", price: 169 }, { label: "Family", detail: "1 kg", price: 319 }]
  },
  {
    id: "chicken-pulav",
    name: "Chicken Pulav",
    description: "Aromatic rice and warming spices with tender chicken.",
    category: "From the kitchen",
    tag: "House favourite",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85",
    packs: [{ label: "Single", detail: "450 g", price: 189 }, { label: "Hungry", detail: "700 g", price: 269 }, { label: "Share", detail: "1 kg", price: 379 }]
  },
  {
    id: "chicken-fry-rice",
    name: "Chicken Fry Piece Biryani",
    description: "Spiced rice layered with crisp-edged chicken fry pieces.",
    category: "From the kitchen",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=85",
    packs: [{ label: "Single", detail: "450 g", price: 219 }, { label: "Hungry", detail: "700 g", price: 299 }, { label: "Share", detail: "1 kg", price: 429 }]
  },
  {
    id: "bagara-rice",
    name: "Bagara Rice",
    description: "Hyderabadi-style fragrant rice with whole spices and a rich aroma.",
    category: "From the kitchen",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85",
    packs: [{ label: "Regular", detail: "350 g", price: 109 }, { label: "Generous", detail: "500 g", price: 149 }, { label: "Family", detail: "1 kg", price: 279 }]
  }
];
