import { useConfigurables } from "~/modules/configurables";

export function HeroSection() {
  const { config, loading } = useConfigurables();

  if (loading) {
    return (
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "var(--primary)" }}
      />
    );
  }

  const hero = config?.hero;
  const headline    = hero?.headline    ?? "Where Every Cup Tells a Story";
  const subheadline = hero?.subheadline ?? "";
  const ctaLabel    = hero?.ctaLabel    ?? "Explore Our Menu";
  const ctaHref     = hero?.ctaHref     ?? "#menu";
  const imageUrl    = hero?.imageUrl    ?? "";

  function handleCtaClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const target = document.querySelector(ctaHref);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      {imageUrl ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(59, 35, 20, 0.62)" }}
          />
        </>
      ) : (
        <div className="absolute inset-0" style={{ backgroundColor: "var(--primary)" }} />
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <p
          className="text-sm uppercase tracking-[0.25em] mb-4 font-medium"
          style={{ color: "var(--accent)" }}
        >
          Specialty Coffee
        </p>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          style={{
            fontFamily: "var(--heading-font)",
            color: "var(--primary-foreground)",
          }}
        >
          {headline}
        </h1>
        {subheadline && (
          <p
            className="text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: "rgba(253, 250, 244, 0.85)" }}
          >
            {subheadline}
          </p>
        )}
        <a
          href={ctaHref}
          onClick={handleCtaClick}
          className="inline-block px-8 py-4 rounded-full font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style={{
            backgroundColor: "var(--accent)",
            color: "var(--accent-foreground)",
          }}
        >
          {ctaLabel}
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: "var(--primary-foreground)" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-8 animate-bounce"
          style={{ backgroundColor: "var(--primary-foreground)" }}
        />
      </div>
    </section>
  );
}
