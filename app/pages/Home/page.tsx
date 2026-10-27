import Link from "next/link";
import { HeroSlider, DestinationsSlider, TestimonialsSlider } from "./Sliders";
import "./Home.css";

const stats = [
  { value: "1,200+", label: "Students placed" },
  { value: "150+", label: "Partner universities" },
  { value: "20+", label: "Countries" },
  { value: "95%", label: "Visa success rate" },
];

const features = [
  { icon: "🎓", title: "University matching", text: "We shortlist programs that fit your grades, budget and career goals." },
  { icon: "💶", title: "Scholarship guidance", text: "We find funding options and help you apply with confidence." },
  { icon: "📄", title: "Application support", text: "Documents, motivation letters and deadlines handled with you." },
  { icon: "🛂", title: "Visa assistance", text: "Clear checklists and interview preparation for a smooth visa." },
  { icon: "🏠", title: "Housing and arrival", text: "Help finding accommodation and settling in before you land." },
  { icon: "💬", title: "One-to-one advisors", text: "A real person who answers your questions at every stage." },
];

const steps = [
  { n: "01", title: "Free consultation", text: "Tell us your goals and we map your options." },
  { n: "02", title: "Choose your program", text: "We shortlist universities and scholarships." },
  { n: "03", title: "Apply", text: "We prepare and submit your application." },
  { n: "04", title: "Visa and travel", text: "We guide your visa and prepare your departure." },
];

export default function HomePage() {
  return (
    <main className="home">
      <HeroSlider />

      {/* Stats */}
      <section className="stats">
        <div className="container stats__grid">
          {stats.map((s) => (
            <div key={s.label} className="stats__item">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Destinations */}
      <section className="section">
        <div className="container">
          <header className="section__head">
            <span className="section__eyebrow">Study destinations</span>
            <h2>Where do you want to study?</h2>
            <p>Explore popular countries and find the one that matches your plans.</p>
          </header>
          <DestinationsSlider />
        </div>
      </section>

      {/* Why us */}
      <section className="section section--alt">
        <div className="container">
          <header className="section__head">
            <span className="section__eyebrow">Why Strada Globale</span>
            <h2>Everything you need, in one place</h2>
            <p>We support you from the first question to your first day on campus.</p>
          </header>
          <div className="features">
            {features.map((f) => (
              <article key={f.title} className="features__card">
                <span className="features__icon" aria-hidden="true">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <header className="section__head">
            <span className="section__eyebrow">How it works</span>
            <h2>Four simple steps</h2>
          </header>
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.n} className="steps__item">
                <span className="steps__num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--alt">
        <div className="container">
          <header className="section__head">
            <span className="section__eyebrow">Student stories</span>
            <h2>What our students say</h2>
          </header>
          <TestimonialsSlider />
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container cta__inner">
          <h2>Ready to start your journey?</h2>
          <p>Book a free consultation and get a clear plan for your studies abroad.</p>
          <Link href="/contact" className="btn btn--light">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}