"use client";

import { useEffect, useState } from "react";
import "./Home.css";

/* ------------------------------------------------------------------
   COMPANY DETAILS - verify these with the company before submitting.
   Only the fields marked VERIFIED were confirmed from public listings.
------------------------------------------------------------------- */
const COMPANY = {
  name: "Chameza Group",
  short: "CHAMEZA",
  tagline: "Laboratory Furniture & Turnkey Lab Infrastructure",
  city: "Borivali West, Mumbai, Maharashtra 400103, India", // VERIFIED (public listing)
  phone: "+91 00000 00000", // TODO: replace with the real number
  phoneHref: "tel:+910000000000", // TODO: replace
  email: "info@chameza.in", // TODO: confirm the real email
  website: "https://chameza.in", // VERIFIED
  heritage: "Backed by Vishal Steel Products, a metal and office furniture manufacturer since 1989.", // VERIFIED
};

const NAV = [
  { label: "Home", id: "home" },
  { label: "Capabilities", id: "capabilities" },
  { label: "Products", id: "products" },
  { label: "Industries", id: "industries" },
  { label: "Process", id: "process" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const FACTS = [
  { k: "1989", v: "Group heritage in metal furniture manufacturing" },
  { k: "Design to Handover", v: "One accountable team for the full lab scope" },
  { k: "Made in India", v: "Manufactured and supplied from Mumbai" },
  { k: "Safety First", v: "Built around ventilation, chemical resistance and workflow" },
];

const CAPABILITIES = [
  {
    n: "01",
    title: "Laboratory Planning & Design",
    text: "Space planning, bench layouts, utility routing and ventilation planning, prepared as drawings before anything is built.",
    points: ["Layout and workflow study", "Service points: power, water, gas", "Drawings for client approval"],
  },
  {
    n: "02",
    title: "In-house Manufacturing",
    text: "Laboratory furniture and fume hoods fabricated from steel and engineered materials, with a manufacturing background that goes back to 1989.",
    points: ["Steel fabrication", "Worktops and sinks by application", "Custom sizes and modules"],
  },
  {
    n: "03",
    title: "Installation & Commissioning",
    text: "Site installation, utility integration and handover handled by a single coordinated team to keep timelines predictable.",
    points: ["Site coordination", "Utility integration", "Final inspection and handover"],
  },
  {
    n: "04",
    title: "After-sales Support",
    text: "Service, modifications and expansion support after handover, so the laboratory keeps working as your research grows.",
    points: ["Maintenance support", "Layout modifications", "Spare and replacement parts"],
  },
];

const PRODUCTS = [
  { title: "Modular Laboratory Furniture", text: "Wall benches, island benches and workstations in configurable modules.", tag: "Furniture" },
  { title: "Fume Hoods", text: "Fume hoods and ventilation-ready work areas for safe handling of chemicals.", tag: "Safety" },
  { title: "Storage Systems", text: "Cabinets, drawers and chemical and file storage units for organised labs.", tag: "Storage" },
  { title: "Worktops & Sinks", text: "Worktop and sink options selected for the chemical and heat exposure of the lab.", tag: "Surfaces" },
  { title: "Turnkey Lab Setups", text: "Complete laboratory fit-outs from concept to handover under one scope.", tag: "Turnkey" },
  { title: "Office & Pharma Furniture", text: "Metal and office furniture and pharma products from the same manufacturing group.", tag: "Group" },
];

const INDUSTRIES = [
  { title: "Research & Development", text: "Labs for institutes and company R&D teams." },
  { title: "Pharmaceutical & QC", text: "Quality control and analytical laboratories." },
  { title: "Medical & Clinical", text: "Diagnostic and healthcare laboratory spaces." },
  { title: "Education", text: "College, university and school science laboratories." },
  { title: "Industrial", text: "Testing and process laboratories inside plants." },
];

const PROCESS = [
  { n: "1", t: "Requirement Study", d: "We understand your lab type, workflow, safety needs and budget." },
  { n: "2", t: "Design & Drawings", d: "Layouts and utility plans are shared for approval." },
  { n: "3", t: "Manufacturing", d: "Furniture and fume hoods are fabricated to the approved drawings." },
  { n: "4", t: "Installation", d: "Site installation with utility integration and inspection." },
  { n: "5", t: "Handover & Support", d: "Handover with ongoing service and expansion support." },
];

const STANDARDS = [
  "Chemical-resistant surfaces matched to the application",
  "Ventilation and fume extraction planned with the layout",
  "Ergonomic bench heights and clear working clearances",
  "Utility points placed for safe access and easy servicing",
  "Layouts that allow future expansion",
];

function ContactForm({ id }) {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const subject = encodeURIComponent(`Project enquiry from ${f.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${f.get("name")}\nPhone: ${f.get("phone")}\nEmail: ${f.get("email")}\nProject type: ${f.get("type")}\n\n${f.get("message")}`
    );
    // Opens the visitor's mail app. Replace with an API call when a backend is available.
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    setStatus("Your mail app is opening with the enquiry details.");
    e.target.reset();
  };

  return (
    <form className="cz-form" onSubmit={handleSubmit}>
      <div className="cz-form-row">
        <input id={`${id}-name`} name="name" type="text" placeholder="Your name *" required />
        <input id={`${id}-phone`} name="phone" type="tel" placeholder="Phone number *" required />
      </div>
      <input id={`${id}-email`} name="email" type="email" placeholder="Email address *" required />
      <select id={`${id}-type`} name="type" defaultValue="Turnkey laboratory" aria-label="Project type">
        <option>Turnkey laboratory</option>
        <option>Laboratory furniture</option>
        <option>Fume hoods</option>
        <option>Storage systems</option>
        <option>Other</option>
      </select>
      <textarea id={`${id}-msg`} name="message" rows={4} placeholder="Tell us about your laboratory (size, location, use) *" required />
      <button type="submit" className="cz-btn cz-btn--primary">Request a Quote</button>
      {status && <p className="cz-form-status" role="status">{status}</p>}
    </form>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // Header state and active link
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      let current = "home";
      NAV.forEach((n) => {
        const el = document.getElementById(n.id);
        if (el && el.getBoundingClientRect().top <= 140) current = n.id;
      });
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on Escape or when the screen becomes large
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    const onResize = () => window.innerWidth > 900 && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("cz-in");
            observer.unobserve(en.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".cz-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <div className="cz-root">
      {/* Header */}
      <header className={`cz-header ${scrolled ? "cz-header--scrolled" : ""}`}>
        <div className="cz-container cz-header-inner">
          <a href="#home" className="cz-brand" onClick={close}>
            <span className="cz-brand-mark">C</span>
            <span>
              <strong>{COMPANY.short}</strong>
              <small>GROUP</small>
            </span>
          </a>
          <nav className={`cz-nav ${menuOpen ? "cz-nav--open" : ""}`} aria-label="Main">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className={activeId === n.id ? "cz-active" : ""} onClick={close}>
                {n.label}
              </a>
            ))}
            <a href="#contact" className="cz-btn cz-btn--primary cz-nav-cta" onClick={close}>
              Get a Quote
            </a>
          </nav>
          <button
            className="cz-burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>
      {menuOpen && <div className="cz-backdrop" onClick={close} />}

      {/* Hero */}
      <section id="home" className="cz-hero">
        <div className="cz-grid-bg" aria-hidden="true" />
        <div className="cz-container cz-hero-inner">
          <div className="cz-hero-text">
            <span className="cz-eyebrow">Mumbai &middot; Laboratory Furniture Manufacturer</span>
            <h1>
              Laboratories engineered <em>end to end</em> &mdash; furniture, fume hoods and turnkey infrastructure.
            </h1>
            <p>
              {COMPANY.name} designs, manufactures and installs laboratory furniture, fume hoods and complete
              turnkey laboratory setups for research, pharmaceutical, medical, educational and industrial facilities.
            </p>
            <div className="cz-hero-actions">
              <a href="#contact" className="cz-btn cz-btn--primary">Request a Quote</a>
              <a href="#capabilities" className="cz-btn cz-btn--ghost">Our Capabilities</a>
            </div>
          </div>

          {/* CSS-drawn laboratory layout plan, no external images */}
          <div className="cz-plan" aria-hidden="true">
            <div className="cz-plan-title">LAB LAYOUT &middot; PLAN VIEW</div>
            <div className="cz-plan-room">
              <span className="cz-plan-hood">FH-01</span>
              <span className="cz-plan-hood cz-plan-hood--b">FH-02</span>
              <span className="cz-plan-island">ISLAND BENCH</span>
              <span className="cz-plan-island cz-plan-island--b">ISLAND BENCH</span>
              <span className="cz-plan-wall">WALL BENCH</span>
              <span className="cz-plan-store">STORAGE</span>
              <i className="cz-plan-door" />
            </div>
            <div className="cz-plan-foot">Design &rarr; Manufacture &rarr; Install</div>
          </div>
        </div>
      </section>

      {/* Facts strip */}
      <section className="cz-facts">
        <div className="cz-container cz-facts-grid">
          {FACTS.map((f) => (
            <div key={f.k} className="cz-fact">
              <strong>{f.k}</strong>
              <span>{f.v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="cz-section">
        <div className="cz-container">
          <div className="cz-heading cz-reveal">
            <span className="cz-eyebrow">Engineering Capabilities</span>
            <h2>One team from first drawing to final handover</h2>
            <p>Turnkey means a single accountable partner for design, fabrication, installation and support.</p>
          </div>
          <div className="cz-grid cz-grid--2">
            {CAPABILITIES.map((c, i) => (
              <article key={c.n} className="cz-card cz-reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="cz-card-no">{c.n}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <ul>
                  {c.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="cz-section cz-section--alt">
        <div className="cz-container">
          <div className="cz-heading cz-reveal">
            <span className="cz-eyebrow">Products &amp; Systems</span>
            <h2>Laboratory furniture and safety systems</h2>
          </div>
          <div className="cz-grid cz-grid--3">
            {PRODUCTS.map((p, i) => (
              <article key={p.title} className="cz-product cz-reveal" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                <span className="cz-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <a href="#contact" className="cz-link">Enquire &rarr;</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="cz-section">
        <div className="cz-container">
          <div className="cz-heading cz-reveal">
            <span className="cz-eyebrow">Industries We Serve</span>
            <h2>Laboratories for every sector</h2>
          </div>
          <div className="cz-industries">
            {INDUSTRIES.map((x, i) => (
              <div key={x.title} className="cz-industry cz-reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="cz-section cz-section--dark">
        <div className="cz-container">
          <div className="cz-heading cz-heading--light cz-reveal">
            <span className="cz-eyebrow cz-eyebrow--light">Project Process</span>
            <h2>A clear path from enquiry to handover</h2>
          </div>
          <ol className="cz-steps">
            {PROCESS.map((s, i) => (
              <li key={s.n} className="cz-step cz-reveal" style={{ transitionDelay: `${i * 90}ms` }}>
                <span>{s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Standards + About */}
      <section id="about" className="cz-section">
        <div className="cz-container cz-split">
          <div className="cz-reveal">
            <span className="cz-eyebrow">About {COMPANY.name}</span>
            <h2>Manufacturing roots, laboratory focus</h2>
            <p className="cz-lead">{COMPANY.heritage}</p>
            <p>
              Chameza Enterprises was started as a new venture to bring that metal fabrication experience to
              laboratory solutions, alongside economical office furniture and pharma products. Today the group
              supplies laboratory furniture, fume hoods and turnkey design services to research, medical and
              industrial facilities.
            </p>
            <a href="#contact" className="cz-btn cz-btn--primary">Discuss Your Project</a>
          </div>
          <div className="cz-standards cz-reveal">
            <h3>Design principles on every project</h3>
            <ul>
              {STANDARDS.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="cz-section cz-contact">
        <div className="cz-container cz-contact-grid">
          <div className="cz-reveal">
            <span className="cz-eyebrow cz-eyebrow--light">Contact</span>
            <h2>Tell us about your laboratory</h2>
            <p>Share your requirement and our team will respond with a suitable layout approach and quotation.</p>
            <ul className="cz-contact-list">
              <li><b>Address</b>{COMPANY.city}</li>
              <li><b>Phone</b><a href={COMPANY.phoneHref}>{COMPANY.phone}</a></li>
              <li><b>Email</b><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
              <li><b>Website</b><a href={COMPANY.website} target="_blank" rel="noreferrer">chameza.in</a></li>
            </ul>
          </div>
          <div className="cz-contact-card cz-reveal">
            <h3>Request a Quote</h3>
            <ContactForm id="main" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="cz-footer">
        <div className="cz-container cz-footer-inner">
          <span>&copy; {year} {COMPANY.name}. All rights reserved.</span>
          <span>{COMPANY.tagline}</span>
        </div>
      </footer>
    </div>
  );
}