import { useConfigurables } from "~/modules/configurables";

function MapPinIcon() {
  return (
    <svg
      className="w-5 h-5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="w-5 h-5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg
      className="w-5 h-5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="w-5 h-5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function ContactSection() {
  const { config, loading } = useConfigurables();

  if (loading) {
    return (
      <section
        id="visit"
        className="py-24"
        style={{ backgroundColor: "var(--muted)" }}
      />
    );
  }

  const contact      = config?.contact;
  const heading      = contact?.heading      ?? "Find Us";
  const address      = contact?.address      ?? "";
  const phone        = contact?.phone        ?? "";
  const email        = contact?.email        ?? "";
  const mapEmbedUrl  = contact?.mapEmbedUrl  ?? "";
  const hours        = config?.businessHours ?? [];
  const showMap      = config?.showMapEmbed  ?? false;

  return (
    <section
      id="visit"
      className="py-24"
      style={{ backgroundColor: "var(--muted)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-sm uppercase tracking-[0.2em] font-semibold mb-3"
            style={{ color: "var(--accent)" }}
          >
            Come Visit
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{
              fontFamily: "var(--heading-font)",
              color: "var(--foreground)",
            }}
          >
            {heading}
          </h2>
        </div>

        <div className={`grid grid-cols-1 ${showMap && mapEmbedUrl ? "lg:grid-cols-2" : ""} gap-12`}>
          {/* Contact Info + Hours */}
          <div className="space-y-10">
            {/* Contact details */}
            <div className="space-y-5">
              <h3
                className="text-lg font-semibold mb-4"
                style={{
                  fontFamily: "var(--heading-font)",
                  color: "var(--foreground)",
                }}
              >
                Get In Touch
              </h3>
              {address && (
                <div className="flex items-start gap-4">
                  <span style={{ color: "var(--primary)" }}>
                    <MapPinIcon />
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {address}
                  </p>
                </div>
              )}
              {phone && (
                <div className="flex items-center gap-4">
                  <span style={{ color: "var(--primary)" }}>
                    <PhoneIcon />
                  </span>
                  <a
                    href={`tel:${phone}`}
                    className="text-sm hover:underline"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {phone}
                  </a>
                </div>
              )}
              {email && (
                <div className="flex items-center gap-4">
                  <span style={{ color: "var(--primary)" }}>
                    <EnvelopeIcon />
                  </span>
                  <a
                    href={`mailto:${email}`}
                    className="text-sm hover:underline"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {email}
                  </a>
                </div>
              )}
            </div>

            {/* Hours */}
            {hours.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span style={{ color: "var(--primary)" }}>
                    <ClockIcon />
                  </span>
                  <h3
                    className="text-lg font-semibold"
                    style={{
                      fontFamily: "var(--heading-font)",
                      color: "var(--foreground)",
                    }}
                  >
                    Hours
                  </h3>
                </div>
                <div
                  className="rounded-xl overflow-hidden border"
                  style={{ borderColor: "var(--border)" }}
                >
                  {hours.map((row, index) => (
                    <div
                      key={index}
                      className={`flex justify-between px-5 py-3 text-sm ${
                        index % 2 === 0 ? "" : ""
                      }`}
                      style={{
                        backgroundColor: index % 2 === 0 ? "var(--card)" : "var(--background)",
                        color: "var(--card-foreground)",
                      }}
                    >
                      <span className="font-medium">{row.days}</span>
                      <span style={{ color: "var(--muted-foreground)" }}>{row.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Map Embed */}
          {showMap && mapEmbedUrl && (
            <div className="rounded-2xl overflow-hidden shadow-md h-96 lg:h-auto">
              <iframe
                src={mapEmbedUrl}
                title="Brew & Co Location"
                className="w-full h-full min-h-80"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
