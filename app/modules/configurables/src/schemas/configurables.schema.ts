/* START: THIS SECTION CODE IS CANNOT BE CHANGED, YOU ONLY READ IT */
export interface FieldSchemaType {
  fieldName?: string;
  type:
    | "string"
    | "number"
    | "boolean"
    | "object"
    | "array"
    | "color"
    | "url"
    | "enum"
    | "datetime"
    | "file"
    | "files";
  required?: boolean;
  label?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  options?: string[];
  fields?: FieldSchemaType[];
  item?: FieldSchemaType;
}
/* END: THIS SECTION CODE IS CANNOT BE CHANGED, YOU ONLY READ IT */

export type ConfigurableSchemas = {
  formSchema: FieldSchemaType[];
};



export const configurableSchemas: ConfigurableSchemas = {
  formSchema: [
    {
      fieldName: "appName",
      type: "string",
      required: true,
      label: "App Name",
    },
    {
      fieldName: "logoUrl",
      type: "url",
      required: true,
      label: "Logo URL",
    },
    {
      fieldName: "brandColor",
      type: "object",
      required: true,
      label: "Brand Color",
      fields: [
        // ── Base ────────────────────────────────────────────────────────────
        { fieldName: "background",        type: "color", required: true,  label: "Background" },
        { fieldName: "foreground",        type: "color", required: true,  label: "Foreground" },
        // ── Card ────────────────────────────────────────────────────────────
        { fieldName: "card",              type: "color", required: true,  label: "Card" },
        { fieldName: "cardForeground",    type: "color", required: true,  label: "Card Foreground" },
        // ── Popover ─────────────────────────────────────────────────────────
        { fieldName: "popover",           type: "color", required: true,  label: "Popover" },
        { fieldName: "popoverForeground", type: "color", required: true,  label: "Popover Foreground" },
        // ── Primary ─────────────────────────────────────────────────────────
        { fieldName: "primary",           type: "color", required: true,  label: "Primary" },
        { fieldName: "primaryForeground", type: "color", required: true,  label: "Primary Foreground" },
        // ── Secondary ───────────────────────────────────────────────────────
        { fieldName: "secondary",           type: "color", required: true,  label: "Secondary" },
        { fieldName: "secondaryForeground", type: "color", required: true,  label: "Secondary Foreground" },
        // ── Muted ───────────────────────────────────────────────────────────
        { fieldName: "muted",           type: "color", required: true,  label: "Muted" },
        { fieldName: "mutedForeground", type: "color", required: true,  label: "Muted Foreground" },
        // ── Accent ──────────────────────────────────────────────────────────
        { fieldName: "accent",           type: "color", required: true,  label: "Accent" },
        { fieldName: "accentForeground", type: "color", required: true,  label: "Accent Foreground" },
        // ── Destructive ─────────────────────────────────────────────────────
        { fieldName: "destructive",           type: "color", required: true,  label: "Destructive" },
        { fieldName: "destructiveForeground", type: "color", required: true,  label: "Destructive Foreground" },
        // ── Border / Input / Ring ────────────────────────────────────────────
        { fieldName: "border", type: "color", required: true, label: "Border" },
        { fieldName: "input",  type: "color", required: true, label: "Input" },
        { fieldName: "ring",   type: "color", required: true, label: "Ring" },
        // ── Charts ──────────────────────────────────────────────────────────
        { fieldName: "chart1", type: "color", required: false, label: "Chart 1" },
        { fieldName: "chart2", type: "color", required: false, label: "Chart 2" },
        { fieldName: "chart3", type: "color", required: false, label: "Chart 3" },
        { fieldName: "chart4", type: "color", required: false, label: "Chart 4" },
        { fieldName: "chart5", type: "color", required: false, label: "Chart 5" },
        // ── Navbar ──────────────────────────────────────────────────────────
        { fieldName: "navbarBackground", type: "color", required: true, label: "Navbar Background" },
        // ── Sidebar ─────────────────────────────────────────────────────────
        { fieldName: "sidebarBackground",        type: "color", required: true,  label: "Sidebar Background" },
        { fieldName: "sidebarForeground",        type: "color", required: true,  label: "Sidebar Foreground" },
        { fieldName: "sidebarPrimary",           type: "color", required: true,  label: "Sidebar Primary" },
        { fieldName: "sidebarPrimaryForeground", type: "color", required: true,  label: "Sidebar Primary Foreground" },
        { fieldName: "sidebarAccent",            type: "color", required: true,  label: "Sidebar Accent" },
        { fieldName: "sidebarAccentForeground",  type: "color", required: true,  label: "Sidebar Accent Foreground" },
        { fieldName: "sidebarBorder",            type: "color", required: true,  label: "Sidebar Border" },
        { fieldName: "sidebarRing",              type: "color", required: true,  label: "Sidebar Ring" },
      ],
    },

    {
      fieldName: "font",
      type: "object",
      required: true,
      label: "Typography",
      fields: [
        {
          fieldName: "headingFont",
          type: "enum",
          required: true,
          label: "Heading Font",
          options: [
            "Inter",
            "Inter Tight",
            "Plus Jakarta Sans",
            "Poppins",
            "Montserrat",
            "Raleway",
            "Playfair Display",
            "Lora",
            "Merriweather",
            "EB Garamond",
            "Cinzel",
            "Cormorant Garamond",
            "Libre Baskerville",
            "PT Serif",
            "Nunito",
            "Outfit",
            "DM Sans",
            "Sora",
            "Space Grotesk",
            "Josefin Sans",
            "Rubik",
            "Quicksand",
            "Figtree",
            "Lexend",
          ],
        },
        {
          fieldName: "textFont",
          type: "enum",
          required: true,
          label: "Text Font",
          options: [
            "Inter",
            "Inter Tight",
            "Plus Jakarta Sans",
            "Poppins",
            "Montserrat",
            "Raleway",
            "Lora",
            "Merriweather",
            "EB Garamond",
            "Libre Baskerville",
            "PT Serif",
            "Nunito",
            "Outfit",
            "DM Sans",
            "Sora",
            "Source Sans 3",
            "Noto Sans",
            "Lato",
            "Open Sans",
            "Roboto",
            "Rubik",
            "Quicksand",
            "Figtree",
            "Lexend",
          ],
        },
      ],
    },

    // ── Hero Section ─────────────────────────────────────────────────────────
    {
      fieldName: "hero",
      type: "object",
      required: true,
      label: "Hero Section",
      fields: [
        { fieldName: "headline",    type: "string", required: true,  label: "Headline",    maxLength: 80 },
        { fieldName: "subheadline", type: "string", required: false, label: "Subheadline", maxLength: 160 },
        { fieldName: "ctaLabel",    type: "string", required: true,  label: "CTA Button Label", maxLength: 40 },
        { fieldName: "ctaHref",     type: "string", required: false, label: "CTA Button Target (anchor)", maxLength: 60 },
        { fieldName: "imageUrl",    type: "url",    required: false, label: "Hero Background Image URL" },
      ],
    },

    // ── About Section ────────────────────────────────────────────────────────
    {
      fieldName: "about",
      type: "object",
      required: true,
      label: "About Section",
      fields: [
        { fieldName: "heading",     type: "string", required: true,  label: "Heading",     maxLength: 80 },
        { fieldName: "body",        type: "string", required: true,  label: "Body Text",   maxLength: 600 },
        { fieldName: "imageUrl",    type: "url",    required: false, label: "About Image URL" },
        { fieldName: "imageAlt",    type: "string", required: false, label: "About Image Alt Text", maxLength: 120 },
      ],
    },

    // ── Menu Section ─────────────────────────────────────────────────────────
    {
      fieldName: "menuSection",
      type: "object",
      required: true,
      label: "Menu Section",
      fields: [
        { fieldName: "heading",    type: "string", required: true, label: "Section Heading",    maxLength: 80 },
        { fieldName: "subheading", type: "string", required: false, label: "Section Subheading", maxLength: 160 },
      ],
    },
    {
      fieldName: "menuItems",
      type: "array",
      label: "Menu Items",
      item: {
        type: "object",
        fields: [
          { fieldName: "name",        type: "string", required: true,  label: "Item Name",        maxLength: 60 },
          { fieldName: "description", type: "string", required: false, label: "Item Description", maxLength: 200 },
          { fieldName: "price",       type: "string", required: true,  label: "Price",            maxLength: 20 },
          { fieldName: "category",    type: "string", required: false, label: "Category",         maxLength: 40 },
          { fieldName: "imageUrl",    type: "url",    required: false, label: "Item Image URL" },
        ],
      },
    },

    // ── Gallery Section ──────────────────────────────────────────────────────
    {
      fieldName: "gallerySection",
      type: "object",
      required: false,
      label: "Gallery Section",
      fields: [
        { fieldName: "heading",    type: "string", required: false, label: "Heading",    maxLength: 80 },
        { fieldName: "subheading", type: "string", required: false, label: "Subheading", maxLength: 160 },
      ],
    },
    {
      fieldName: "galleryImages",
      type: "files",
      required: false,
      label: "Gallery Images",
    },

    // ── Contact / Visit Section ──────────────────────────────────────────────
    {
      fieldName: "contact",
      type: "object",
      required: true,
      label: "Contact & Visit Section",
      fields: [
        { fieldName: "heading",       type: "string", required: true,  label: "Section Heading",  maxLength: 80 },
        { fieldName: "address",       type: "string", required: true,  label: "Address",          maxLength: 200 },
        { fieldName: "phone",         type: "string", required: false, label: "Phone Number",     maxLength: 30 },
        { fieldName: "email",         type: "string", required: false, label: "Email",            maxLength: 80 },
        { fieldName: "mapEmbedUrl",   type: "url",    required: false, label: "Google Maps Embed URL" },
      ],
    },
    {
      fieldName: "businessHours",
      type: "array",
      label: "Business Hours",
      item: {
        type: "object",
        fields: [
          { fieldName: "days",  type: "string", required: true, label: "Days",  maxLength: 40 },
          { fieldName: "hours", type: "string", required: true, label: "Hours", maxLength: 40 },
        ],
      },
    },

    // ── Social Links ─────────────────────────────────────────────────────────
    {
      fieldName: "socialLinks",
      type: "object",
      required: false,
      label: "Social Media Links",
      fields: [
        { fieldName: "instagram", type: "url", required: false, label: "Instagram URL" },
        { fieldName: "facebook",  type: "url", required: false, label: "Facebook URL" },
        { fieldName: "twitter",   type: "url", required: false, label: "Twitter/X URL" },
      ],
    },

    // ── Footer ───────────────────────────────────────────────────────────────
    {
      fieldName: "footerTagline",
      type: "string",
      required: false,
      label: "Footer Tagline",
      maxLength: 160,
    },

    // ── Feature Flags ────────────────────────────────────────────────────────
    {
      fieldName: "showGallerySection",
      type: "boolean",
      required: false,
      label: "Show Gallery Section",
    },
    {
      fieldName: "showMapEmbed",
      type: "boolean",
      required: false,
      label: "Show Map Embed",
    },
  ],
};
