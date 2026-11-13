"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import "./Home.css";

const BASE = "https://labturnkey.in/img/custome-images-folder";

const NAV_LINKS = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Process", href: "#process", id: "process" },
  { label: "FAQ", href: "#faq", id: "faq" },
  { label: "Blog", href: "#blog", id: "blog" },
];

const SLIDES = [
  {
    tag: "Transforming Businesses Through Innovation",
    title: "Expert Turnkey Solutions for Your Business Needs",
    img: `${BASE}/index-12.webp`,
  },
  {
    tag: "Setting the Standard for Quality and Excellence",
    title: "ISO Certified and Committed to Delivering Exceptional Results",
    img: `${BASE}/index-13.webp`,
  },
  {
    tag: "Unlocking Your Business Potential",
    title: "Empowering You to Achieve Greater Heights",
    img: `${BASE}/index-14.webp`,
  },
];

const TYPED_WORDS = [
  "Modular Lab Furniture",
  "Fume Hoods",
  "Lab Benches",
  "Turnkey Laboratories",
  "Research Infrastructure",
];

// Fixed bubble config so server and client render the same markup
const BUBBLES = [
  { left: "6%", size: 18, delay: "0s", dur: "11s" },
  { left: "16%", size: 34, delay: "2s", dur: "14s" },
  { left: "28%", size: 14, delay: "5s", dur: "10s" },
  { left: "41%", size: 26, delay: "1s", dur: "13s" },
  { left: "55%", size: 40, delay: "4s", dur: "16s" },
  { left: "67%", size: 16, delay: "7s", dur: "11s" },
  { left: "78%", size: 30, delay: "3s", dur: "15s" },
  { left: "90%", size: 22, delay: "6s", dur: "12s" },
];

const STATS = [
  { end: 15, suffix: "+", label: "Years of Experience" },
  { end: 500, suffix: "+", label: "Projects Delivered" },
  { end: 200, suffix: "+", label: "Happy Clients" },
  { end: 100, suffix: "%", label: "Safety Compliance" },
];

const SERVICES = [
  {
    icon: "🧪",
    title: "Turnkey Laboratory Solutions",
    text: "A seamless experience from conceptualization to completion. Every aspect of your laboratory is meticulously planned, designed and executed to the highest industry standards.",
    cta: "View Specifications",
  },
  {
    icon: "🛠️",
    title: "Dedicated Support Services",
    text: "Prompt and professional assistance that keeps your laboratory running smoothly, so it is always operational when your research needs it.",
    cta: "Discover More",
  },
  {
    icon: "🛡️",
    title: "Strategic Planning and Safety",
    text: "Customized plans that prioritize safety and efficiency, creating a productive work environment that meets the highest industry standards.",
    cta: "Explore More",
  },
];

const PROJECTS = [
  {
    title: "Oleo Chemical Laboratory",
    text: "A state-of-the-art laboratory built for efficiency and compliance.",
    img: `${BASE}/webp (5).webp`,
  },
  {
    title: "Ayurvedic Pharmaceutical Laboratory",
    text: "A customized laboratory solution tailored to specific industry requirements.",
    img: `${BASE}/webp (2).webp`,
  },
  {
    title: "University Educational Laboratory",
    text: "A cutting-edge environment that fosters innovation and discovery.",
    img: `${BASE}/webp (1).webp`,
  },
  {
    title: "Research and Technology Laboratory",
    text: "Exceptional service and support for a research-driven facility.",
    img: `${BASE}/webp (4).webp`,
  },
  {
    title: "Chemical and Petroleum Processing Laboratory",
    text: "A compliant and efficient laboratory for complex industries.",
    img: `${BASE}/webp (3).webp`,
  },
];

const MISSION_POINTS = [
  "Customized Laboratory Solutions",
  "Expertise in Laboratory Design and Construction",
  "Commitment to Quality and Excellence",
  "Exceptional Customer Service and Support",
];

const PROCESS = [
  {
    no: "01",
    title: "Collaborative Design & Planning",
    text: "We work closely with you to understand your laboratory's unique requirements and create a customized design that optimizes space, safety and workflow.",
    img: `${BASE}/design.webp`,
  },
  {
    no: "02",
    title: "Material Selection & Quality Assurance",
    text: "We source high-quality materials that meet stringent safety standards, ensuring durability, chemical resistance and regulatory compliance.",
    img: `${BASE}/process-01.webp`,
  },
  {
    no: "03",
    title: "Precision Manufacturing & Installation",
    text: "Our skilled craftsmen manufacture and install your laboratory furniture with care, minimizing downtime and maximizing productivity.",
    img: `${BASE}/lab16.webp`,
  },
];

const OFFERINGS = [
  { img: `${BASE}/is1.webp`, sub: "Customizing Lab Layouts", title: "Laboratory Design & Planning" },
  { img: `${BASE}/is2.webp`, sub: "Sourcing the Best Tools", title: "Equipment Procurement & Installation" },
  { img: `${BASE}/is3 (1).webp`, sub: "Ensuring Standards", title: "Regulatory Compliance & Certification" },
  { img: `${BASE}/is3.webp`, sub: "Upskilling Teams", title: "Staff Training & Support" },
  { img: `${BASE}/is4.webp`, sub: "Streamlining Operations", title: "System Integration & Automation" },
  { img: `${BASE}/is5.webp`, sub: "Sustaining Excellence", title: "Maintenance & Upgrades" },
];

const CLIENT_LOGOS = [1, 2, 3, 4, 5].map((n) => `${BASE}/${n}.webp`);

const FAQS = [
  {
    q: "What types of laboratory furniture do you specialize in?",
    a: "Our expertise spans a wide range of laboratory furniture, including ergonomic workstations, fume hoods, storage solutions and custom designs tailored to the unique needs of your laboratory.",
  },
  {
    q: "How do I initiate a custom laboratory design project?",
    a: "Simply contact our team with your project requirements, and we will work closely with you to create a bespoke laboratory design that meets your specific needs and enhances your research capabilities.",
  },
  {
    q: "Do your products meet international safety standards?",
    a: "Yes, our laboratory furniture is designed and manufactured to meet or exceed international safety standards, ensuring a safe and compliant working environment for your researchers and staff.",
  },
];

const TESTIMONIALS = [
  {
    name: "Pranav",
    role: "CEO & Founder",
    img: `${BASE}/avatar-08.webp`,
    text: "We were impressed by the company's commitment to sustainability and eco-friendly practices. Their lab furniture met our high standards and aligned with our values.",
  },
  {
    name: "Shreya",
    role: "Lab Manager",
    img: `${BASE}/avatar-11.webp`,
    text: "Their dedication to understanding our unique needs and providing tailored solutions has been instrumental in our lab's success. A true long-term partner.",
  },
  {
    name: "Santosh",
    role: "Research Scientist",
    img: `${BASE}/avatar-16.webp`,
    text: "Exceptional customer service and support. From the initial consultation to post-installation, they have been responsive, knowledgeable and dedicated.",
  },
];

const BLOGS = [
  {
    date: "23 Jun, 2023",
    title: "Unlocking the Potential of Lab Furniture: Strategies for Success",
    img: `${BASE}/blogbg.webp`,
  },
  {
    date: "20 Jun, 2023",
    title: "The Future of Lab Design: Trends and Innovations to Watch",
    img: `${BASE}/blogbg1.webp`,
  },
  {
    date: "18 Jun, 2023",
    title: "The Benefits of Partnering with a Turnkey Lab Project Company",
    img: `${BASE}/blogbg2.webp`,
  },
];

const MARQUEE_WORDS = [
  "Excellence in Service",
  "Unwavering Commitment to Quality",
  "Customer-Centric Approach",
  "Regulatory Compliance",
  "Sustainable Practices",
  "Innovative Solutions",
  "Unshakeable Integrity",
];

/* Counts up from 0 to `end` when the element scrolls into view */
function Counter({ end, suffix }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let frame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration = 1800;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.floor(eased * end));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

function ContactForm({ id, compact }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo only: connect this to your API / email service
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <form className={`lt-form ${compact ? "lt-form--compact" : ""}`} onSubmit={handleSubmit}>
      <div className="lt-form-row">
        <input id={`${id}-name`} type="text" placeholder="Your Name *" required />
        <input id={`${id}-email`} type="email" placeholder="Your Email *" required />
      </div>
      <input id={`${id}-phone`} type="tel" placeholder="Your Number *" required />
      <textarea id={`${id}-msg`} rows={compact ? 3 : 5} placeholder="Message *" required />
      <button type="submit" className="lt-btn lt-btn--primary lt-btn--block">
        Send Message
      </button>
      {sent && <p className="lt-form-success">Thank you! Our team will contact you shortly.</p>}
    </form>
  );
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [typed, setTyped] = useState("");
  // Year is set after mount to avoid reading the current time during prerender
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // Page loader
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 900);
    return () => clearTimeout(timer);
  }, []);

  // Scroll progress, header shadow, back-to-top and active menu link
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (y / max) * 100 : 0);
      setScrolled(y > 40);
      setShowTop(y > 600);

      let current = "home";
      NAV_LINKS.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= 140) current = link.id;
      });
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hero slider autoplay
  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 6500);
    return () => clearInterval(timer);
  }, []);

  // Typewriter effect
  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const type = () => {
      const word = TYPED_WORDS[wordIndex];
      if (!deleting) {
        charIndex += 1;
        setTyped(word.slice(0, charIndex));
        if (charIndex === word.length) {
          deleting = true;
          timer = setTimeout(type, 1600);
          return;
        }
        timer = setTimeout(type, 75);
      } else {
        charIndex -= 1;
        setTyped(word.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % TYPED_WORDS.length;
          timer = setTimeout(type, 400);
          return;
        }
        timer = setTimeout(type, 38);
      }
    };

    timer = setTimeout(type, 900);
    return () => clearTimeout(timer);
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const items = document.querySelectorAll(".lt-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("lt-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // 3D tilt on cards (only on devices that support hover)
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;

    const onMove = (e) => {
      const card = e.target.closest(".lt-tilt");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--ry", `${x * 10}deg`);
      card.style.setProperty("--rx", `${-y * 10}deg`);
    };
    const onLeave = (e) => {
      const card = e.target.closest && e.target.closest(".lt-tilt");
      if (!card) return;
      card.style.setProperty("--ry", "0deg");
      card.style.setProperty("--rx", "0deg");
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseout", onLeave);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseout", onLeave);
    };
  }, []);

  // Lock body scroll when mobile menu, popup or loader is open
  useEffect(() => {
    document.body.style.overflow = menuOpen || popupOpen || !loaded ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, popupOpen, loaded]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="lt-root">
      {/* ===== Loader ===== */}
      <div className={`lt-loader ${loaded ? "lt-loader--hide" : ""}`}>
        <div className="lt-flask">
          <span className="lt-flask-liquid" />
        </div>
        <p>Preparing your laboratory...</p>
      </div>

      {/* ===== Scroll progress ===== */}
      <div className="lt-progress" style={{ width: `${progress}%` }} />

      {/* ===== Top bar ===== */}
      <div className="lt-topbar">
        <div className="lt-container lt-topbar-inner">
          <span>📍 Bangalore, India</span>
          <a href="tel:+918387997777">📞 (+91) 8387997777</a>
        </div>
      </div>

      {/* ===== Header ===== */}
      <header className={`lt-header ${scrolled ? "lt-header--scrolled" : ""}`}>
        <div className="lt-container lt-header-inner">
          <a href="#home" className="lt-logo" onClick={closeMenu}>
            <img src={`${BASE}/labturnkey-logo.webp`} alt="Labturnkey Logo" />
          </a>

          <nav className={`lt-nav ${menuOpen ? "lt-nav--open" : ""}`}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={activeId === link.id ? "lt-active" : ""}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="lt-btn lt-btn--primary lt-nav-cta" onClick={closeMenu}>
              Get a Quote
            </a>
          </nav>

          <button
            className={`lt-burger ${menuOpen ? "lt-burger--open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      {menuOpen && <div className="lt-backdrop" onClick={closeMenu} />}

      {/* ===== Hero slider ===== */}
      <section id="home" className="lt-hero">
        {SLIDES.map((s, i) => (
          <div
            key={s.title}
            className={`lt-slide ${i === slide ? "lt-slide--active" : ""}`}
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(5,20,50,.9), rgba(0,90,200,.55)), url("${s.img}")`,
            }}
          >
            <div className="lt-container lt-slide-content">
              <span className="lt-eyebrow lt-eyebrow--light">{s.tag}</span>
              <h1>{s.title}</h1>
              <p className="lt-typed">
                We specialize in: <b>{typed}</b>
                <i className="lt-caret" />
              </p>
              <div className="lt-hero-actions">
                <a href="#contact" className="lt-btn lt-btn--primary">Get Started</a>
                <a href="#services" className="lt-btn lt-btn--ghost">Our Services</a>
              </div>
            </div>
          </div>
        ))}

        {/* Floating bubbles */}
        <div className="lt-bubbles" aria-hidden="true">
          {BUBBLES.map((b, i) => (
            <span
              key={i}
              style={{
                left: b.left,
                width: b.size,
                height: b.size,
                animationDelay: b.delay,
                animationDuration: b.dur,
              }}
            />
          ))}
        </div>

        <div className="lt-dots">
          {SLIDES.map((s, i) => (
            <button
              key={s.title}
              className={i === slide ? "lt-dot lt-dot--active" : "lt-dot"}
              onClick={() => setSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <a href="#services" className="lt-scroll-hint" aria-label="Scroll down">
          <span />
        </a>
      </section>

      {/* ===== Stats ===== */}
      <section className="lt-stats">
        <div className="lt-container lt-stats-grid lt-reveal lt-zoom">
          {STATS.map((s) => (
            <div key={s.label} className="lt-stat">
              <strong>
                <Counter end={s.end} suffix={s.suffix} />
              </strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Services ===== */}
      <section id="services" className="lt-section">
        <div className="lt-container">
          <div className="lt-heading lt-reveal">
            <span className="lt-eyebrow">Our Expertise</span>
            <h2>Comprehensive Solutions for Laboratory Excellence</h2>
          </div>
          <div className="lt-grid lt-grid--3">
            {SERVICES.map((s, i) => (
              <article
                key={s.title}
                className="lt-card lt-tilt lt-reveal"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="lt-card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a href="#contact" className="lt-link">{s.cta} →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Projects ===== */}
      <section id="projects" className="lt-section lt-section--alt">
        <div className="lt-container">
          <div className="lt-heading lt-reveal">
            <span className="lt-eyebrow">Our Portfolio</span>
            <h2>Transforming Laboratories Through Innovation</h2>
          </div>
          <div className="lt-projects">
            {PROJECTS.map((p, i) => (
              <article
                key={p.title}
                className={`lt-project lt-reveal lt-zoom ${i === 0 ? "lt-project--wide" : ""}`}
                style={{ transitionDelay: `${(i % 3) * 100}ms` }}
              >
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="lt-project-info">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Mission ===== */}
      <section className="lt-section">
        <div className="lt-container lt-split">
          <div className="lt-split-media lt-reveal lt-from-left">
            <img src={`${BASE}/thump3.webp`} alt="Laboratory furniture" loading="lazy" />
            <img src={`${BASE}/why-choose-02.webp`} alt="Laboratory installation" loading="lazy" />
            <div className="lt-badge">ISO<br />Certified</div>
          </div>
          <div className="lt-split-text lt-reveal lt-from-right">
            <span className="lt-eyebrow">Our Mission</span>
            <h2>Transforming Laboratories Through Innovation and Excellence</h2>
            <p>
              We are dedicated to providing high-quality laboratory solutions that meet the unique needs of our
              clients. Our team is committed to delivering exceptional service, ensuring that every client achieves
              their goals.
            </p>
            <ul className="lt-checks">
              {MISSION_POINTS.map((m, i) => (
                <li key={m} style={{ "--i": i }}>{m}</li>
              ))}
            </ul>
            <a href="#contact" className="lt-btn lt-btn--primary">Talk to an Expert</a>
          </div>
        </div>
      </section>

      {/* ===== Call to action band ===== */}
      <section className="lt-cta">
        <div className="lt-container lt-cta-inner lt-reveal">
          <div>
            <span className="lt-eyebrow lt-eyebrow--light">Get in Touch</span>
            <h2>Crafting spaces where science thrives and innovation flourishes</h2>
          </div>
          <div className="lt-cta-actions">
            <a href="tel:+918387997777" className="lt-btn lt-btn--light">📞 (+91) 8387997777</a>
            <button className="lt-btn lt-btn--ghost" onClick={() => setPopupOpen(true)}>
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* ===== Process ===== */}
      <section id="process" className="lt-section">
        <div className="lt-container">
          <div className="lt-heading lt-reveal">
            <span className="lt-eyebrow">Our Workflow</span>
            <h2>Expertly Crafted Laboratory Solutions</h2>
          </div>
          <div className="lt-grid lt-grid--3 lt-process">
            {PROCESS.map((p, i) => (
              <article
                key={p.no}
                className="lt-step lt-reveal"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="lt-step-img">
                  <img src={p.img} alt={p.title} loading="lazy" />
                  <span className="lt-step-no">{p.no}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Offerings ===== */}
      <section className="lt-section lt-section--alt">
        <div className="lt-container">
          <div className="lt-heading lt-reveal">
            <span className="lt-eyebrow">Comprehensive Lab Solutions</span>
            <h2>Empowering Laboratories with Turnkey Expertise</h2>
          </div>
          <div className="lt-grid lt-grid--3">
            {OFFERINGS.map((o, i) => (
              <a
                href="#contact"
                key={o.title}
                className="lt-offer lt-reveal lt-zoom"
                style={{ transitionDelay: `${(i % 3) * 100}ms` }}
              >
                <img src={o.img} alt={o.title} loading="lazy" />
                <div className="lt-offer-overlay">
                  <span>{o.sub}</span>
                  <h3>{o.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Clients ===== */}
      <section className="lt-section lt-section--tight">
        <div className="lt-container">
          <div className="lt-heading lt-reveal">
            <span className="lt-eyebrow">Our Partners</span>
            <h2>Our Valued Clients and Partners</h2>
          </div>
        </div>
        <div className="lt-logos">
          <div className="lt-logos-track">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((src, i) => (
              <div className="lt-logo-item" key={i}>
                <img src={src} alt="Client logo" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="lt-section lt-section--alt">
        <div className="lt-container lt-split">
          <div className="lt-split-text lt-reveal lt-from-left">
            <span className="lt-eyebrow">Our Story</span>
            <h2>Empowering Scientific Discovery through Innovative Laboratory Solutions</h2>
            <div className="lt-faq">
              {FAQS.map((f, i) => (
                <div key={f.q} className={`lt-faq-item ${openFaq === i ? "lt-faq-item--open" : ""}`}>
                  <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                    <span>{i + 1}. {f.q}</span>
                    <i>{openFaq === i ? "−" : "+"}</i>
                  </button>
                  <div className="lt-faq-body">
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lt-split-media lt-reveal lt-from-right">
            <img src={`${BASE}/why-choose-01.webp`} alt="Laboratory design" loading="lazy" />
            <img src={`${BASE}/thump4.webp`} alt="Laboratory workspace" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="lt-section lt-contact">
        <div className="lt-container lt-contact-grid">
          <div className="lt-contact-info lt-reveal lt-from-left">
            <span className="lt-eyebrow lt-eyebrow--light">Send Us a Message</span>
            <h2>Let&apos;s build your dream laboratory together</h2>
            <p>
              Share your requirements and our experts will get back to you with a customized plan, design and quote.
            </p>
            <ul>
              <li>📞 <a href="tel:+918387997777">(+91) 8387997777</a></li>
              <li>📍 Bangalore, Karnataka, India</li>
              <li>🌐 <a href="https://labturnkey.in" target="_blank" rel="noreferrer">labturnkey.in</a></li>
            </ul>
          </div>
          <div className="lt-contact-card lt-reveal lt-from-right">
            <h3>Send Us Message</h3>
            <ContactForm id="main" />
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="lt-section">
        <div className="lt-container">
          <div className="lt-heading lt-reveal">
            <span className="lt-eyebrow">What Our Clients Say</span>
            <h2>Our Experience and Professionalism</h2>
          </div>
          <div className="lt-grid lt-grid--3">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={t.name}
                className="lt-testimonial lt-tilt lt-reveal"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="lt-stars">★★★★★</div>
                <blockquote>{t.text}</blockquote>
                <figcaption>
                  <img src={t.img} alt={t.name} loading="lazy" />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Marquee ===== */}
      <div className="lt-marquee">
        <div className="lt-marquee-track">
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((w, i) => (
            <span key={i}>{w}</span>
          ))}
        </div>
      </div>

      {/* ===== Blog ===== */}
      <section id="blog" className="lt-section">
        <div className="lt-container">
          <div className="lt-heading lt-reveal">
            <span className="lt-eyebrow">Our Blog</span>
            <h2>Stay Up-to-Date with Our Latest Insights</h2>
          </div>
          <div className="lt-grid lt-grid--3">
            {BLOGS.map((b, i) => (
              <article
                key={b.title}
                className="lt-blog lt-reveal"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="lt-blog-img">
                  <img src={b.img} alt={b.title} loading="lazy" />
                </div>
                <div className="lt-blog-body">
                  <time>{b.date}</time>
                  <h3>{b.title}</h3>
                  <a href="#blog" className="lt-link">Read More →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="lt-footer">
        <div className="lt-container lt-footer-grid">
          <div>
            <img src={`${BASE}/labturnkey-logo.webp`} alt="Labturnkey" className="lt-footer-logo" />
            <p>
              Designing, manufacturing and installing high-quality, durable and safe furniture solutions for
              laboratories across pharmaceuticals, research, education and industry.
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>
          <div>
            <h4>Services</h4>
            <a href="#services">Turnkey Solutions</a>
            <a href="#services">Support Services</a>
            <a href="#services">Planning and Safety</a>
            <a href="#process">Our Workflow</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="tel:+918387997777">(+91) 8387997777</a>
            <span>Bangalore, Karnataka, India</span>
            <a href="https://labturnkey.in" target="_blank" rel="noreferrer">labturnkey.in</a>
          </div>
        </div>
        <div className="lt-footer-bottom">
          <div className="lt-container">© {year} Labturnkey. All rights reserved.</div>
        </div>
      </footer>

      {/* ===== Floating buttons ===== */}
      <a href="tel:+918387997777" className="lt-float-call" aria-label="Call us">📞</a>
      <button
        className={`lt-top ${showTop ? "lt-top--show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        ↑
      </button>

      {/* ===== Brochure popup ===== */}
      {popupOpen && (
        <div className="lt-popup" onClick={() => setPopupOpen(false)}>
          <div className="lt-popup-box" onClick={(e) => e.stopPropagation()}>
            <button className="lt-popup-close" onClick={() => setPopupOpen(false)} aria-label="Close">×</button>
            <h3>Download Our Brochure</h3>
            <p>Enter your details to receive our comprehensive laboratory solutions brochure.</p>
            <ContactForm id="popup" compact />
          </div>
        </div>
      )}
    </div>
  );
}