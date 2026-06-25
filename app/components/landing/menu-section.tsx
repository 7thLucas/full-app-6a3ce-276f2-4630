import { useState } from "react";
import { useConfigurables } from "~/modules/configurables";

export function MenuSection() {
  const { config, loading } = useConfigurables();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  if (loading) {
    return (
      <section
        id="menu"
        className="py-24"
        style={{ backgroundColor: "var(--muted)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse">
          <div className="h-8 rounded w-48 mb-4 mx-auto" style={{ backgroundColor: "var(--border)" }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl h-64" style={{ backgroundColor: "var(--card)" }} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  const menuSection = config?.menuSection;
  const heading    = menuSection?.heading    ?? "Our Menu";
  const subheading = menuSection?.subheading ?? "";
  const items      = config?.menuItems       ?? [];

  const categories = ["All", ...Array.from(new Set(items.map((item) => item.category).filter(Boolean)))];
  const filtered   = activeCategory === "All"
    ? items
    : items.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      className="py-24"
      style={{ backgroundColor: "var(--muted)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-sm uppercase tracking-[0.2em] font-semibold mb-3"
            style={{ color: "var(--accent)" }}
          >
            What We Serve
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "var(--heading-font)",
              color: "var(--foreground)",
            }}
          >
            {heading}
          </h2>
          {subheading && (
            <p
              className="text-base sm:text-lg max-w-2xl mx-auto"
              style={{ color: "var(--muted-foreground)" }}
            >
              {subheading}
            </p>
          )}
        </div>

        {/* Category Filter */}
        {categories.length > 2 && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={
                  activeCategory === cat
                    ? {
                        backgroundColor: "var(--primary)",
                        color: "var(--primary-foreground)",
                      }
                    : {
                        backgroundColor: "var(--card)",
                        color: "var(--foreground)",
                        border: "1px solid var(--border)",
                      }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              style={{ backgroundColor: "var(--card)" }}
            >
              {item.imageUrl && (
                <div className="overflow-hidden h-48">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
              <div className="p-5 flex flex-col flex-1">
                {item.category && (
                  <span
                    className="text-xs uppercase tracking-widest font-semibold mb-2"
                    style={{ color: "var(--accent)" }}
                  >
                    {item.category}
                  </span>
                )}
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{
                    fontFamily: "var(--heading-font)",
                    color: "var(--card-foreground)",
                  }}
                >
                  {item.name}
                </h3>
                {item.description && (
                  <p
                    className="text-sm leading-relaxed flex-1 mb-4"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {item.description}
                  </p>
                )}
                <div
                  className="pt-3 border-t flex items-center justify-end"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className="text-lg font-bold"
                    style={{ color: "var(--primary)" }}
                  >
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
