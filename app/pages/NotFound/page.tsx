import Link from "next/link";
import "./not-found.css";

export default function NotFound() {
  return (
    <main className="notfound">
      <div className="notfound__content">
        <svg
          className="notfound__plane"
          viewBox="0 0 120 60"
          aria-hidden="true"
        >
          <path
            className="notfound__trail"
            d="M2 52 C 30 52, 40 20, 78 24"
            fill="none"
            strokeWidth="2"
            strokeDasharray="4 6"
            strokeLinecap="round"
          />
          <path
            className="notfound__plane-shape"
            d="M118 22 L92 14 L82 2 L78 3 L84 16 L70 18 L64 12 L61 13 L65 22 L61 31 L64 32 L70 26 L84 28 L78 41 L82 42 L92 30 Z"
          />
        </svg>

        <p className="notfound__code">404</p>
        <h1 className="notfound__title">Looks like you took a wrong turn</h1>
        <p className="notfound__text">
          The page you are looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on the road to your study abroad journey.
        </p>

        <div className="notfound__actions">
          <Link href="/" className="notfound__btn notfound__btn--primary">
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="notfound__btn notfound__btn--outline"
          >
            Free Consultation
          </Link>
        </div>

        <div className="notfound__links">
          <span>Popular pages:</span>
          <Link href="/study-destinations">Study Destinations</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/scholarships">Scholarships</Link>
        </div>
      </div>
    </main>
  );
}