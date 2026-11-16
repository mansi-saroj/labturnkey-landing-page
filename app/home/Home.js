"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import "./Home.css";

/* All details below are taken from https://chameza.in */
const COMPANY = {
  name: "Chameza Group",
  phone: "+91 8387997777",
  phoneHref: "tel:+918387997777",
  whatsapp:
    "https://wa.me/918387997777?text=Hello,%20I%20am%20interested%20in%20Lab%20Turnkey%20solutions%20and%20would%20like%20to%20discuss%20my%20queries.",
  email: "inquiry@chameza.in",
  address:
    "HO-Office 104 & 103, Raj Swastik CHS Ltd., Daulat Nagar Road No. 3, Post Office Lane, Maharashtra 400066",
  website: "https://chameza.in",
  facebook: "https://www.facebook.com/Chamezagroup/",
  instagram: "https://www.instagram.com/chameza.group/",
  linkedin: "https://in.linkedin.com/company/chameza",
  blog: "https://blog.chamezagroup.com/how-to-choose-the-right-laboratory-furniture-for-quality-and-compliance/",
};

const IMG = "https://chameza.in/custome-image/";
const img = (file) => encodeURI(`${IMG}${file}`);

const NAV = [
  { label: "Home", id: "home" },
  { label: "Expertise", id: "expertise" },
  { label: "Process", id: "process" },
  { label: "Turnkey", id: "turnkey" },
  { label: "Projects", id: "projects" },
  { label: "Why Us", id: "why" },
  { label: "Contact", id: "contact" },
];

const BADGES = [
  "ISO Certified Laboratory Furniture",
  "Fumehood Manufacturer",
  "In-House Manufacturing Excellence",
  "Expert Engineering Team",
];

const STATS = [
  { k: "1989", v: "Started manufacturing" },
  { k: "36+", v: "Years of expertise in manufacturing and project execution" },
  { k: "460+", v: "Professional and experienced staff" },
  { k: "2 Years", v: "Warranty on our products" },
];

const OFFERS = [
  {
    title: "Fume Hood Manufacturing",
    text: "High-quality fume hoods including acid-resistant, perchloric acid and custom designs for pharmaceutical, research and industrial laboratories.",
    img: "lab-fumehood.jpeg",
    cta: "Enquire about fume hoods",
  },
  {
    title: "Custom Laboratory Furniture",
    text: "Workbenches, storage solutions and modular systems, with customized designs for pharmaceutical, research and educational laboratories.",
    img: "labfuniture1.jpeg",
    cta: "Enquire about furniture",
  },
];

const PROCESS = [
  { n: "01", t: "Consultation and Planning", d: "We study your laboratory type, workflow and safety needs." },
  { n: "02", t: "Designing", d: "Layouts and engineering drawings tailored to your space." },
  { n: "03", t: "Material Selection", d: "Materials chosen for durability and chemical resistance." },
  { n: "04", t: "Manufacturing", d: "In-house fabrication of furniture and fume hoods." },
  { n: "05", t: "Quality Control", d: "Every unit is checked before it leaves our facility." },
  { n: "06", t: "Installation", d: "Site installation and handover by our team." },
];

const TURNKEY = [
  {
    tab: "Design & Build",
    title: "Designing your vision, building your future",
    text: "Our Design & Build service is an end-to-end solution, so your project is managed from initial concept to final completion.",
    img: "Design-and-Build.png",
    points: ["Consultation and Planning", "Design and Engineering", "Training and Support", "Equipment Procurement", "Installation and Commissioning"],
  },
  {
    tab: "Civil Work",
    title: "Strong foundations for lasting success",
    text: "We handle civil works covering all aspects of building infrastructure and structural components.",
    img: "Lab-civilwork.png",
    points: ["Laboratory Partitions & Flooring", "False Ceiling & Customized Carpentry", "Conference Rooms & Modular Office Furniture", "Workspace Branding", "Doors, Windows & Painting"],
  },
  {
    tab: "Electrical",
    title: "Powering your facility",
    text: "Installation, maintenance and optimization of complete electrical systems for your laboratory.",
    img: "MEP-Lab.png",
    points: ["UPS and Main Electric Panel", "Distribution Panel", "Miniature Circuit Breakers (MCBs)", "Power and Control Wiring & Cabling", "Trunking, Conduiting & Lighting"],
  },
  {
    tab: "HVAC",
    title: "Optimal temperature and air quality",
    text: "HVAC services designed for the specific needs of laboratories and other controlled environments.",
    img: "HVAC-lab.jpeg",
    points: ["AHU Design and Installation", "Supply and Return Ducts", "Outdoor and Indoor Units", "GI Ducting for Special Environments", "VAV Systems and Diffusers"],
  },
  {
    tab: "Utility Piping",
    title: "Piping that flows with precision",
    text: "Utility piping tailored to your facility, durable, compliant and built for performance and safety.",
    img: "Utility-piping.jpeg",
    points: ["Gas Piping Systems", "Water and Deionized (DI) Water Piping", "Chemical Waste and Drainage Piping", "Specialty Gas and Compressed Air Piping", "Vacuum and Steam Piping"],
  },
  {
    tab: "Fire & Safety",
    title: "Safety you can trust when it matters most",
    text: "Design, installation and maintenance of comprehensive fire safety systems.",
    img: "FAS-system.jpeg",
    points: ["Fire Alarm Panel and Hooter System", "Sprinkler Systems", "Access Control and Smoke Detection", "Fire Safety Compliance and Certification", "PA System, CCTV and Surveillance"],
  },
];

const PROJECTS = [
  { cat: "Furniture", t: "Laboratory with White Island Bench and Glass Partition Enclosures", f: "labfuniture2.jpeg" },
  { cat: "Furniture", t: "Island Workbenches with Blue Cabinets and Black Worktops", f: "labfuniture3.jpeg" },
  { cat: "Fumehoods", t: "Fume Hood Workstation with Blue and White Storage Cabinets", f: "Fumehood-bluewhite.jpeg" },
  { cat: "Furniture", t: "Wall-Mounted Benches with Blue and White Cabinets", f: "labfuniture6.jpeg" },
  { cat: "Furniture", t: "Workbenches with Drawer Units and Wall Cabinets", f: "labfuniture7.jpeg" },
  { cat: "Furniture", t: "Island Bench with Blue Drawers and White Upper Cabinets", f: "labfuniture4.jpeg" },
  { cat: "Fumehoods", t: "Modern Laboratory with Navy Blue Cabinets and White Island Bench", f: "lab-fumehood.jpeg" },
  { cat: "Fumehoods", t: "Corner Workstation with White Cabinets and Navy Upper Storage", f: "lab hood.jpeg" },
  { cat: "Fumehoods", t: "Triple Bay Fume Hood System with White Base Cabinets", f: "fumelabhood.jpeg" },
  { cat: "Furniture", t: "Central Island Bench with Overhead Service Bridges", f: "labfuniture1.jpeg" },
  { cat: "Furniture", t: "Workbench with Fume Hood and White Storage Cabinets", f: "Benchtop-fumehood.jpeg" },
  { cat: "Fumehoods", t: "Wall Bench with Built-in Fume Hood and White Cabinetry", f: "fumehood-chameza.jpeg" },
];

const WHY = [
  { t: "2 Years Warranty", d: "We stand behind our products with a 2-year warranty." },
  { t: "Latest Technologies", d: "Modern technologies applied to the needs of today's laboratories." },
  { t: "High-Quality Designs", d: "Designs built around the specific demands of your laboratory." },
  { t: "Transparent Pricing", d: "Competitive cost structures with no hidden fees." },
  { t: "Professional Team", d: "Experts dedicated to meeting the highest standards." },
  { t: "One Roof Execution", d: "Design, manufacturing and installation under one roof." },
];

function ContactForm({ id }) {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const subject = encodeURIComponent(`Project enquiry from ${f.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${f.get("name")}\nPhone: ${f.get("phone")}\nEmail: ${f.get("email")}\nInterested in: ${f.get("type")}\n\n${f.get("message")}`
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
      <select id={`${id}-type`} name="type" defaultValue="Turnkey laboratory" aria-label="Interested in">
        <option>Turnkey laboratory</option>
        <option>Laboratory furniture</option>
        <option>Fume hoods</option>
        <option>Storage solutions</option>
        <option>Other</option>
      </select>
      <textarea id={`${id}-msg`} name="message" rows={4} placeholder="Tell us about your laboratory *" required />
      <button type="submit" className="cz-btn cz-btn--primary">Book Consultation</button>
      {status && <p className="cz-form-status" role="status">{status}</p>}
    </form>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // Header shadow and active menu link
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

  // Escape closes menu and lightbox; large screens close the menu
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setLightbox(null);
      }
    };
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
  }, [filter]);

  useEffect(() => {
    document.body.style.overflow = menuOpen || lightbox !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, lightbox]);

  const close = () => setMenuOpen(false);
  const shown = PROJECTS.filter((p) => filter === "All" || p.cat === filter);
  const t = TURNKEY[tab];

  return (
    <div className="cz-root">
      {/* Top strip */}
      <div className="cz-topbar">
        <div className="cz-container cz-topbar-inner">
          <span>{BADGES[0]} &middot; {BADGES[1]}</span>
          <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
        </div>
      </div>

      {/* Header */}
      <header className={`cz-header ${scrolled ? "cz-header--scrolled" : ""}`}>
        <div className="cz-container cz-header-inner">
          <a href="#home" className="cz-brand" onClick={close}>
            <img src="https://chameza.in/images/chamezalogojpg.jpg" alt="Chameza Enterprises logo" />
          </a>
          <nav className={`cz-nav ${menuOpen ? "cz-nav--open" : ""}`} aria-label="Main">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className={activeId === n.id ? "cz-active" : ""} onClick={close}>
                {n.label}
              </a>
            ))}
            <a href="#contact" className="cz-btn cz-btn--primary cz-nav-cta" onClick={close}>Book Consult</a>
          </nav>
          <button className="cz-burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            <span /><span /><span />
          </button>
        </div>
      </header>
      {menuOpen && <div className="cz-backdrop" onClick={close} />}

      {/* Hero */}
      <section
        id="home"
        className="cz-hero"
        style={{
          backgroundImage: `linear-gradient(110deg, rgba(8,24,44,.95) 35%, rgba(8,24,44,.55)), url("${img("lab-fumehood.jpeg")}")`,
        }}
      >
        <div className="cz-container cz-hero-inner">
          <span className="cz-eyebrow cz-eyebrow--light">Since 1989 &middot; Laboratory Furniture Manufacturer</span>
          <h1>One Stop Solution for <em>Complete Laboratory Setup</em></h1>
          <p>
            From design to installation, we provide comprehensive turnkey laboratory solutions with 36+ years of
            expertise in manufacturing and project execution.
          </p>
          <div className="cz-hero-actions">
            <a href="#contact" className="cz-btn cz-btn--primary">Get Started</a>
            <a href="#projects" className="cz-btn cz-btn--ghost">View Our Projects</a>
          </div>
          <ul className="cz-badges">
            {BADGES.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="cz-facts">
        <div className="cz-container cz-facts-grid">
          {STATS.map((s) => (
            <div key={s.k} className="cz-fact">
              <strong>{s.k}</strong>
              <span>{s.v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="cz-section">
        <div className="cz-container">
          <div className="cz-heading cz-reveal">
            <span className="cz-eyebrow">Our Expertise</span>
            <h2>Engineering excellence delivered under one roof</h2>
            <p>
              Every project reflects our dedication to precision engineering, robust manufacturing practices and
              client-focused execution, ensuring reliable, future-ready solutions across industries.
            </p>
          </div>
          <div className="cz-grid cz-grid--2">
            {OFFERS.map((o, i) => (
              <article key={o.title} className="cz-offer cz-reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <img src={img(o.img)} alt={o.title} loading="lazy" />
                <div className="cz-offer-body">
                  <h3>{o.title}</h3>
                  <p>{o.text}</p>
                  <a href="#contact" className="cz-link">{o.cta} &rarr;</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="cz-section cz-section--dark">
        <div className="cz-container">
          <div className="cz-heading cz-heading--light cz-reveal">
            <span className="cz-eyebrow cz-eyebrow--light">Our Working Process</span>
            <h2>Furniture tailored to the laboratory environment</h2>
            <p>This process ensures functionality, safety and compliance with industry standards.</p>
          </div>
          <ol className="cz-steps">
            {PROCESS.map((s, i) => (
              <li key={s.n} className="cz-step cz-reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <span>{s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Turnkey */}
      <section id="turnkey" className="cz-section">
        <div className="cz-container">
          <div className="cz-heading cz-reveal">
            <span className="cz-eyebrow">Turnkey Services</span>
            <h2>Every discipline of a laboratory project, handled by one team</h2>
          </div>
          <div className="cz-tabs" role="tablist">
            {TURNKEY.map((x, i) => (
              <button key={x.tab} role="tab" aria-selected={tab === i} className={tab === i ? "cz-tab cz-tab--on" : "cz-tab"} onClick={() => setTab(i)}>
                {x.tab}
              </button>
            ))}
          </div>
          <div className="cz-tab-panel" key={t.tab}>
            <img src={img(t.img)} alt={t.title} loading="lazy" />
            <div>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
              <ul>{t.points.map((p) => <li key={p}>{p}</li>)}</ul>
              <a href="#contact" className="cz-btn cz-btn--primary">Discuss this scope</a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="cz-section cz-section--alt">
        <div className="cz-container">
          <div className="cz-heading cz-reveal">
            <span className="cz-eyebrow">Case Studies</span>
            <h2>Our latest laboratory furniture and fume hood installations</h2>
          </div>
          <div className="cz-tabs">
            {["All", "Furniture", "Fumehoods"].map((c) => (
              <button key={c} className={filter === c ? "cz-tab cz-tab--on" : "cz-tab"} onClick={() => setFilter(c)}>
                {c === "Furniture" ? "Lab Furniture" : c}
              </button>
            ))}
          </div>
          <div className="cz-gallery">
            {shown.map((p) => (
              <button key={p.f} className="cz-shot cz-reveal" onClick={() => setLightbox(p)} aria-label={`Open ${p.t}`}>
                <img src={img(p.f)} alt={p.t} loading="lazy" />
                <span><small>{p.cat === "Furniture" ? "Lab Furniture" : "Fumehoods"}</small>{p.t}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="cz-section">
        <div className="cz-container cz-split">
          <div className="cz-reveal">
            <span className="cz-eyebrow">Why Choose Us</span>
            <h2>Built on 36+ years of manufacturing experience</h2>
            <p className="cz-lead">
              Chameza Group has been manufacturing since 1989. Our in-house production and engineering team take a
              laboratory from consultation to commissioning.
            </p>
            <a href="#contact" className="cz-btn cz-btn--primary">Book Consult</a>
          </div>
          <div className="cz-why">
            {WHY.map((w, i) => (
              <div key={w.t} className="cz-why-item cz-reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="cz-section cz-section--alt cz-insight">
        <div className="cz-container cz-insight-inner cz-reveal">
          <img src={img("right-choice-of furniture.jpeg")} alt="How to choose the right furniture for your laboratory" loading="lazy" />
          <div>
            <span className="cz-eyebrow">Latest Laboratory Insights &middot; Jan 08, 2026</span>
            <h3>How To Choose The Right Furniture For Your Laboratory</h3>
            <p>
              Durability, chemical resistance, ergonomic design and compliance with laboratory safety standards are
              the key factors to weigh when selecting laboratory furniture.
            </p>
            <a href={COMPANY.blog} target="_blank" rel="noreferrer" className="cz-link">Read the full article &rarr;</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="cz-section cz-contact">
        <div className="cz-container cz-contact-grid">
          <div className="cz-reveal">
            <span className="cz-eyebrow cz-eyebrow--light">Talk to Our Experts</span>
            <h2>Planning a laboratory? Let&apos;s discuss your project</h2>
            <ul className="cz-contact-list">
              <li><b>Head Office</b>{COMPANY.address}</li>
              <li><b>Phone / WhatsApp</b><a href={COMPANY.phoneHref}>{COMPANY.phone}</a></li>
              <li><b>Email</b><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
              <li><b>Follow Us</b>
                <span className="cz-social">
                  <a href={COMPANY.facebook} target="_blank" rel="noreferrer">Facebook</a>
                  <a href={COMPANY.instagram} target="_blank" rel="noreferrer">Instagram</a>
                  <a href={COMPANY.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                </span>
              </li>
            </ul>
          </div>
          <div className="cz-contact-card cz-reveal">
            <h3>Book a Consultation</h3>
            <ContactForm id="main" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="cz-footer">
        <div className="cz-container cz-footer-grid">
          <div>
            <img src="https://chameza.in/custome-image/chameza-logo-white.png" alt="Chameza" />
            <p>Leading manufacturer of laboratory furniture, fume hood systems and storage solutions, with turnkey laboratory execution.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            {NAV.map((n) => <a key={n.id} href={`#${n.id}`}>{n.label}</a>)}
          </div>
          <div>
            <h4>Contact</h4>
            <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            <a href={COMPANY.website} target="_blank" rel="noreferrer">chameza.in</a>
          </div>
        </div>
        <div className="cz-footer-bottom">
          <div className="cz-container">&copy; {year} {COMPANY.name}. All rights reserved.</div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" className="cz-wa" aria-label="Chat on WhatsApp">
        WhatsApp
      </a>

      {/* Lightbox */}
      {lightbox && (
        <div className="cz-lightbox" onClick={() => setLightbox(null)}>
          <figure onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setLightbox(null)} aria-label="Close">&times;</button>
            <img src={img(lightbox.f)} alt={lightbox.t} />
            <figcaption>{lightbox.t}</figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}