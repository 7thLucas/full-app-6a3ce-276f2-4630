import { useConfigurables } from "~/modules/configurables";

export function GallerySection() {
  const { config, loading } = useConfigurables();

  if (loading) return null;

  const showGallery = config?.showGallerySection ?? true;
  if (!showGallery) return null;

  const gallerySection = config?.gallerySection;
  const heading    = gallerySection?.heading    ?? "Our Space";
  const subheading = gallerySection?.subheading ?? "";
  const images     = config?.galleryImages      ?? [];

  if (images.length === 0) return null;

  return (
    <section
      id="gallery"
      className="py-24"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-sm uppercase tracking-[0.2em] font-semibold mb-3"
            style={{ color: "var(--accent)" }}
          >
            Ambiance
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

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="break-inside-avoid overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
