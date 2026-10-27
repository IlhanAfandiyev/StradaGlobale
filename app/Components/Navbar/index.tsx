"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/study-destinations", label: "Study Destinations" },
  { to: "/programs", label: "Programs" },
  { to: "/scholarships", label: "Scholarships" },
  { to: "/admissions", label: "Admissions" },
  { to: "/about", label: "About Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="navbar__inner">
        <Link href="/" className="navbar__brand" onClick={close}>
          <Image
            src={logo}
            alt="Strada Globale"
            className="navbar__logo"
            priority
          />
        </Link>

        <button
          className={`navbar__toggle ${open ? "is-open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="navbar-menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="navbar-menu"
          className={`navbar__menu ${open ? "is-open" : ""}`}
        >
          {links.map(({ to, label }) => {
            const isActive =
              to === "/" ? pathname === "/" : pathname.startsWith(to);
            return (
              <Link
                key={to}
                href={to}
                onClick={close}
                className={`navbar__link ${isActive ? "is-active" : ""}`}
              >
                {label}
              </Link>
            );
          })}

          <Link href="/contact" className="navbar__cta" onClick={close}>
            Free Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}