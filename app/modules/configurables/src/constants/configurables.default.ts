/*
 * Default Configurable Data — seeded into Mongo on first boot.
 *
 * BEFORE EDITING: read ./RULES.md (especially R5: schema and defaults must
 * stay in sync) and ./configurables.schema.ts. For per-type schema and
 * default-value samples, see RULES.md §5 "Field Type Reference".
 */

export type TBrandColor = {
  // Base
  background: string;
  foreground: string;
  // Card
  card: string;
  cardForeground: string;
  // Popover
  popover: string;
  popoverForeground: string;
  // Primary
  primary: string;
  primaryForeground: string;
  // Secondary
  secondary: string;
  secondaryForeground: string;
  // Muted
  muted: string;
  mutedForeground: string;
  // Accent
  accent: string;
  accentForeground: string;
  // Destructive
  destructive: string;
  destructiveForeground: string;
  // Border / Input / Ring
  border: string;
  input: string;
  ring: string;
  // Charts
  chart1?: string;
  chart2?: string;
  chart3?: string;
  chart4?: string;
  chart5?: string;
  // Navbar
  navbarBackground: string;
  // Sidebar
  sidebarBackground: string;
  sidebarForeground: string;
  sidebarPrimary: string;
  sidebarPrimaryForeground: string;
  sidebarAccent: string;
  sidebarAccentForeground: string;
  sidebarBorder: string;
  sidebarRing: string;
};

export type TFont = {
  headingFont: string;
  textFont: string;
};

export type THero = {
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref: string;
  imageUrl: string;
};

export type TAbout = {
  heading: string;
  body: string;
  imageUrl: string;
  imageAlt: string;
};

export type TMenuSection = {
  heading: string;
  subheading: string;
};

export type TMenuItem = {
  name: string;
  description: string;
  price: string;
  category: string;
  imageUrl: string;
};

export type TGallerySection = {
  heading: string;
  subheading: string;
};

export type TContact = {
  heading: string;
  address: string;
  phone: string;
  email: string;
  mapEmbedUrl: string;
};

export type TBusinessHour = {
  days: string;
  hours: string;
};

export type TSocialLinks = {
  instagram: string;
  facebook: string;
  twitter: string;
};

export type TDefaultConfigurableData = {
  appName: string;
  logoUrl: string;
  brandColor: TBrandColor;
  font: TFont;
  hero: THero;
  about: TAbout;
  menuSection: TMenuSection;
  menuItems: TMenuItem[];
  gallerySection: TGallerySection;
  galleryImages: string[];
  contact: TContact;
  businessHours: TBusinessHour[];
  socialLinks: TSocialLinks;
  footerTagline: string;
  showGallerySection: boolean;
  showMapEmbed: boolean;
};

export const defaultConfigurablesData: TDefaultConfigurableData = {
  appName: "Brew & Co",
  logoUrl: "",
  brandColor: {
    // Base
    background:        "#FDFAF4",
    foreground:        "#3B2314",
    // Card
    card:              "#F5ECD7",
    cardForeground:    "#3B2314",
    // Popover
    popover:           "#FDFAF4",
    popoverForeground: "#3B2314",
    // Primary
    primary:           "#6F4E37",
    primaryForeground: "#FDFAF4",
    // Secondary
    secondary:           "#C8A97E",
    secondaryForeground: "#3B2314",
    // Muted
    muted:           "#F5ECD7",
    mutedForeground: "#7A5C44",
    // Accent
    accent:           "#D4A853",
    accentForeground: "#3B2314",
    // Destructive
    destructive:           "#B94A48",
    destructiveForeground: "#FDFAF4",
    // Border / Input / Ring
    border: "#DDD0B8",
    input:  "#DDD0B8",
    ring:   "#6F4E37",
    // Navbar
    navbarBackground: "#3B2314",
    // Sidebar
    sidebarBackground:        "#3B2314",
    sidebarForeground:        "#FDFAF4",
    sidebarPrimary:           "#D4A853",
    sidebarPrimaryForeground: "#3B2314",
    sidebarAccent:            "#6F4E37",
    sidebarAccentForeground:  "#FDFAF4",
    sidebarBorder:            "#5A3825",
    sidebarRing:              "#D4A853",
  },
  font: {
    headingFont: "Playfair Display",
    textFont: "Lato",
  },

  // ── Hero ────────────────────────────────────────────────────────────────────
  hero: {
    headline: "Where Every Cup Tells a Story",
    subheadline: "Artisanal coffee crafted with passion, served in a warm and welcoming space. Come in, slow down, and savor the moment.",
    ctaLabel: "Explore Our Menu",
    ctaHref: "#menu",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1920&q=80",
  },

  // ── About ────────────────────────────────────────────────────────────────────
  about: {
    heading: "Our Story",
    body: "Brew & Co was born from a simple belief: great coffee deserves great company. Founded in 2018 by two coffee-obsessed friends, we set out to create a space where specialty coffee meets genuine hospitality.\n\nWe source our beans directly from small-scale farms in Ethiopia, Colombia, and Sumatra, ensuring fair wages for farmers and exceptional quality in every cup. Each batch is roasted in-house to highlight the unique character of every origin.\n\nWhether you're here for your morning ritual or an afternoon escape, we're glad you found us.",
    imageUrl: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Barista carefully preparing a latte art pour",
  },

  // ── Menu ─────────────────────────────────────────────────────────────────────
  menuSection: {
    heading: "Our Menu",
    subheading: "From single-origin pour-overs to indulgent lattes — there's something for every palate.",
  },
  menuItems: [
    {
      name: "Signature Espresso",
      description: "A perfectly balanced double shot with notes of dark chocolate and caramel.",
      price: "$4.00",
      category: "Espresso",
      imageUrl: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Honey Oat Latte",
      description: "Smooth espresso with creamy oat milk and a drizzle of local honey.",
      price: "$6.50",
      category: "Latte",
      imageUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Ethiopian Pour Over",
      description: "Bright and floral single-origin pour over showcasing Yirgacheffe beans.",
      price: "$5.50",
      category: "Filter",
      imageUrl: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Cold Brew",
      description: "Steeped 18 hours for a smooth, bold, low-acid cold brew. Served over ice.",
      price: "$5.00",
      category: "Cold",
      imageUrl: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Avocado Toast",
      description: "Sourdough topped with smashed avocado, cherry tomatoes, and flaky sea salt.",
      price: "$9.00",
      category: "Food",
      imageUrl: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Butter Croissant",
      description: "Freshly baked, buttery, and flaky. Best enjoyed warm with your morning coffee.",
      price: "$3.50",
      category: "Pastry",
      imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
    },
  ],

  // ── Gallery ──────────────────────────────────────────────────────────────────
  gallerySection: {
    heading: "Our Space",
    subheading: "A cozy corner for quiet mornings, catch-ups, and creative afternoons.",
  },
  galleryImages: [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1533777324565-a040eb52facd?auto=format&fit=crop&w=800&q=80",
  ],

  // ── Contact ──────────────────────────────────────────────────────────────────
  contact: {
    heading: "Find Us",
    address: "42 Roasted Bean Lane, Brewville, CA 94102",
    phone: "+1 (415) 555-0192",
    email: "hello@brewandco.coffee",
    mapEmbedUrl: "",
  },
  businessHours: [
    { days: "Monday – Friday", hours: "7:00 AM – 8:00 PM" },
    { days: "Saturday",        hours: "8:00 AM – 9:00 PM" },
    { days: "Sunday",          hours: "9:00 AM – 6:00 PM" },
  ],

  // ── Social Links ─────────────────────────────────────────────────────────────
  socialLinks: {
    instagram: "https://instagram.com",
    facebook:  "https://facebook.com",
    twitter:   "",
  },

  // ── Footer ───────────────────────────────────────────────────────────────────
  footerTagline: "Crafted with love. Served with warmth.",

  // ── Feature Flags ────────────────────────────────────────────────────────────
  showGallerySection: true,
  showMapEmbed: false,
};
