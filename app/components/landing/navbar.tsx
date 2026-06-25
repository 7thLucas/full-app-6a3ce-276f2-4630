"use client";

import { useState, useEffect } from "react";
import { useConfigurables } from "~/modules/configurables";

const NAV_LINKS = [
  { label: "About",   href: "#about" },
  { label: "Menu",    href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit",   href: "#visit" },
];

export function Navbar() {
  const { config, loading } = useConfigurables();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const appName = !loading ? (config?.appName ?? "Brew & Co 123") : "Brew & Co 123";
  const logoUrl = !loading ? (config?.logoUrl ?? "") : "";

  function handleNavClick(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
      style={{ backgroundColor: "var(--navbar-background)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-2 text-primary-foreground font-bold text-xl tracking-wide"
            style={{ color: "var(--primary-foreground)" }}
          >
            {logoUrl ? (
              <img src={logoUrl} alt={appName} className="h-8 w-auto" />
            ) : (
              <span
                className="text-xl font-bold"
                style={{
                  fontFamily: "var(--heading-font)",
                  color: "var(--primary-foreground)",
                }}
              >
                {appName}
              </span>
            )}
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium transition-colors duration-200 hover:opacity-80"
                style={{ color: "var(--primary-foreground)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              style={{ backgroundColor: "var(--primary-foreground)" }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              style={{ backgroundColor: "var(--primary-foreground)" }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              style={{ backgroundColor: "var(--primary-foreground)" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            backgroundColor: "var(--navbar-background)",
            borderColor: "var(--sidebar-border)",
          }}
        >
          <div className="px-4 py-3 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium transition-colors duration-200 hover:opacity-80"
                style={{ color: "var(--primary-foreground)" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
