"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

/* false on the server, true in the browser */
const subscribe = () => () => {};
function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}

/* ---------- Hero ---------- */

const heroSlides = [
  {
    eyebrow: "Study abroad, simplified",
    title: "Your future starts in a new country",
    text: "We guide you from choosing a university to landing at your new campus, with one team beside you the whole way.",
    cta: { label: "Free Consultation", href: "/contact" },
    secondary: { label: "Explore Destinations", href: "/study-destinations" },
  },
  {
    eyebrow: "Scholarships",
    title: "Find funding that fits your goals",
    text: "Many of our students study with full or partial scholarships. We help you find them and build a strong application.",
    cta: { label: "View Scholarships", href: "/scholarships" },
    secondary: { label: "Talk to an Advisor", href: "/contact" },
  },
  {
    eyebrow: "Admissions support",
    title: "From application to visa, we handle it with you",
    text: "Documents, deadlines, interviews and visa paperwork, all explained clearly so nothing gets missed.",
    cta: { label: "Start Admission", href: "/admissions" },
    secondary: { label: "Browse Programs", href: "/programs" },
  },
];

function HeroSlide({ s, index }: { s: (typeof heroSlides)[number]; index: number }) {
  return (
    <div className={`hero__slide hero__slide--${index + 1}`}>
      <div className="hero__shape hero__shape--a" />
      <div className="hero__shape hero__shape--b" />
      <div className="hero__content">
        <span className="hero__eyebrow">{s.eyebrow}</span>
        <h1 className="hero__title">{s.title}</h1>
        <p className="hero__text">{s.text}</p>
        <div className="hero__actions">
          <Link href={s.cta.href} className="btn btn--light">
            {s.cta.label}
          </Link>
          <Link href={s.secondary.href} className="btn btn--ghost">
            {s.secondary.label}
          </Link>
        </div>
      </div>
    </div>
  );
}

export function HeroSlider() {
  const mounted = useMounted();

  // Before the browser takes over, show the first slide as plain content
  if (!mounted) {
    return (
      <section className="hero" aria-label="Featured">
        <div className="hero__static">
          <HeroSlide s={heroSlides[0]} index={0} />
        </div>
      </section>
    );
  }

  return (
    <section className="hero" aria-label="Featured">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade, A11y]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={900}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
      >
        {heroSlides.map((s, i) => (
          <SwiperSlide key={s.title}>
            <HeroSlide s={s} index={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

/* ---------- Destinations ---------- */

const destinations = [
  { code: "IT", name: "Italy", text: "Historic universities, affordable tuition and regional scholarships." },
  { code: "UK", name: "United Kingdom", text: "World-ranked degrees, with shorter master's programs." },
  { code: "DE", name: "Germany", text: "Low or no tuition at public universities and strong engineering." },
  { code: "CA", name: "Canada", text: "Welcoming campuses and clear post-study work options." },
  { code: "US", name: "United States", text: "Huge choice of programs, research and campus life." },
  { code: "AU", name: "Australia", text: "Top universities and a great student lifestyle." },
];

export function DestinationsSlider() {
  const mounted = useMounted();

  if (!mounted) {
    return <div className="dest dest__placeholder" aria-hidden="true" />;
  }

  return (
    <div className="dest">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={20}
        slidesPerView={1.15}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          560: { slidesPerView: 2, spaceBetween: 20 },
          900: { slidesPerView: 3, spaceBetween: 24 },
          1200: { slidesPerView: 4, spaceBetween: 24 },
        }}
      >
        {destinations.map((d) => (
          <SwiperSlide key={d.code}>
            <article className="dest__card">
              <div className="dest__top">
                <span className="dest__code">{d.code}</span>
              </div>
              <div className="dest__body">
                <h3>{d.name}</h3>
                <p>{d.text}</p>
                <Link href="/study-destinations" className="dest__link">
                  Learn more &rarr;
                </Link>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

/* ---------- Testimonials ---------- */

const testimonials = [
  { name: "Sara M.", info: "Master's in Design, Italy", quote: "They explained every step of the application and visa, and I never felt lost. I got my offer in six weeks." },
  { name: "Ahmed K.", info: "Engineering, Germany", quote: "I did not think studying abroad was affordable until the team showed me my options. Best decision I made." },
  { name: "Lina R.", info: "Business, United Kingdom", quote: "Fast replies, honest advice, and real help with my scholarship essay. I recommend them to everyone." },
  { name: "Omar T.", info: "Computer Science, Canada", quote: "From picking a university to the airport pickup, everything was organized. My family felt at ease too." },
];

export function TestimonialsSlider() {
  const mounted = useMounted();

  if (!mounted) {
    return <div className="testi testi__placeholder" aria-hidden="true" />;
  }

  return (
    <div className="testi">
      <Swiper
        modules={[Pagination, Autoplay, A11y]}
        spaceBetween={24}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1100: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.name}>
            <figure className="testi__card">
              <div className="testi__stars" aria-label="5 out of 5 stars">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </div>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>
                <span className="testi__avatar">{t.name[0]}</span>
                <span>
                  <strong>{t.name}</strong>
                  <small>{t.info}</small>
                </span>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}