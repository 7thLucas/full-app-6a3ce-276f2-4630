import { useConfigurables } from "~/modules/configurables";

export function AboutSection() {
  const { config, loading } = useConfigurables();

  if (loading) {
    return (
      <section id="about" className="py-24" style={{ backgroundColor: "var(--background)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse">
          <div className="h-8 rounded w-48 mb-6" style={{ backgroundColor: "var(--muted)" }} />
          <div className="h-4 rounded w-full mb-3" style={{ backgroundColor: "var(--muted)" }} />
          <div className="h-4 rounded w-4/5" style={{ backgroundColor: "var(--muted)" }} />
        </div>
      </section>
    );
  }

  const about = config?.about;
  const heading  = about?.heading  ?? "Our Story";
  const body     = about?.body     ?? "";
  const imageUrl = about?.imageUrl ?? "";
  const imageAlt = about?.imageAlt ?? "About us";

  const paragraphs = body.split("\n").filter((p) => p.trim().length > 0);

  return (
    <section
      id="about"
      className="py-24"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p
              className="text-sm uppercase tracking-[0.2em] font-semibold mb-3"
              style={{ color: "var(--accent)" }}
            >
              Who We Are
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight"
              style={{
                fontFamily: "var(--heading-font)",
                color: "var(--foreground)",
              }}
            >
              {heading}
            </h2>
            <div className="space-y-5">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Decorative divider */}
            <div className="flex items-center gap-4 mt-10">
              <div
                className="h-px flex-1"
                style={{ backgroundColor: "var(--border)" }}
              />
              <span
                className="text-2xl"
                style={{ color: "var(--accent)" }}
              >
                ☕
              </span>
              <div
                className="h-px flex-1"
                style={{ backgroundColor: "var(--border)" }}
              />
            </div>
          </div>

          {/* Image */}
          {imageUrl && (
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
                style={{ backgroundColor: "var(--accent)", opacity: 0.15 }}
              />
              <img
                src={imageUrl}
                alt={imageAlt}
                className="relative w-full h-80 sm:h-96 lg:h-[480px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
