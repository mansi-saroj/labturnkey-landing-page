"use client";

import { useEffect, useRef, useState } from "react";
import "./Home.css";

/* Company details (phone, email, address, years, team size, warranty) are the
   facts published on the official Chameza website. All design, text and
   artwork on this page are original. */
const COMPANY = {
  name: "Chameza Group",
  phone: "+91 8387997777",
  phoneHref: "tel:+918387997777",
  whatsapp:
    "https://wa.me/918387997777?text=Hello,%20I%20would%20like%20to%20discuss%20a%20laboratory%20project.",
  email: "inquiry@chameza.in",
  address:
    "HO-Office 104 & 103, Raj Swastik CHS Ltd., Daulat Nagar Road No. 3, Post Office Lane, Maharashtra 400066",
  facebook: "https://www.facebook.com/Chamezagroup/",
  instagram: "https://www.instagram.com/chameza.group/",
  linkedin: "https://in.linkedin.com/company/chameza",
};

/* Optional: add your own project photos here, e.g.
   { src: "/projects/lab-1.jpg", title: "Pharma QC laboratory", tag: "Lab Furniture" }
   Put the image files in the /public/projects folder. The gallery section
   stays hidden while this list is empty. */
const PHOTOS = [];

const NAV = [
  { label: "Home", id: "home" },
  { label: "Products", id: "products" },
  { label: "Turnkey", id: "turnkey" },
  { label: "Process", id: "process" },
  { label: "Industries", id: "industries" },
  { label: "Why Us", id: "why" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

const STATS = [
  { end: 1989, label: "Manufacturing since", plain: true },
  { end: 36, suffix: "+", label: "Years of experience" },
  { end: 460, suffix: "+", label: "Professionals on the team" },
  { end: 2, suffix: " Yr", label: "Product warranty" },
];

const PRODUCTS = [
  { icon: "bench", title: "Laboratory Furniture", text: "Workbenches, island and wall benches, and modular systems made to suit each laboratory." },
  { icon: "hood", title: "Fume Hoods", text: "Acid-resistant, perchloric acid and custom fume hoods for pharmaceutical, research and industrial work." },
  { icon: "cabinet", title: "Storage and Cabinets", text: "Lockers, cabinets and storage solutions that keep materials organised and accessible." },
  { icon: "mobile", title: "Mobile Laboratories", text: "Compact, relocatable laboratory units for work that has to happen on site." },
  { icon: "tools", title: "Tools and Accessories", text: "Fittings and accessories that complete a working laboratory." },
  { icon: "plan", title: "Turnkey Setups", text: "Complete laboratories delivered under one scope, from planning to commissioning." },
];

const TURNKEY = [
  { tab: "Design and Build", icon: "plan", head: "One plan, one team, one handover", text: "We manage the project from first concept to final completion so you deal with a single accountable partner.", points: ["Consultation and planning", "Design and engineering", "Equipment procurement", "Installation and commissioning", "Training and support"] },
  { tab: "Civil Work", icon: "wall", head: "The structure your laboratory stands on", text: "Building infrastructure and interior works prepared to laboratory requirements.", points: ["Laboratory partitions and flooring", "False ceiling and custom carpentry", "Doors, windows and painting", "Conference rooms and modular office furniture", "Workspace branding"] },
  { tab: "Electrical", icon: "bolt", head: "Reliable power for sensitive work", text: "Installation, maintenance and optimisation of the electrical systems a laboratory depends on.", points: ["UPS and main electric panel", "Distribution panels and MCBs", "Power and control wiring", "Cabling, trunking and conduits", "Lighting"] },
  { tab: "HVAC", icon: "fan", head: "Controlled air, controlled results", text: "Ventilation and air handling designed around the needs of laboratories and controlled spaces.", points: ["AHU design and installation", "Supply and return ducts", "Indoor and outdoor units", "GI ducting for special environments", "VAV systems and diffusers"] },
  { tab: "Utility Piping", icon: "pipe", head: "Every utility delivered to the bench", text: "Piping built for durability, compliance and safe performance.", points: ["Gas piping systems", "Water and DI water piping", "Chemical waste and drainage", "Specialty gas and compressed air", "Vacuum and steam piping"] },
  { tab: "Fire and Safety", icon: "shield", head: "Protection designed in from day one", text: "Design, installation and upkeep of complete fire safety systems.", points: ["Fire alarm panel and hooter", "Sprinkler systems", "Smoke detection and access control", "Safety compliance and certification", "PA system and CCTV"] },
];

const PROCESS = [
  { t: "Consultation and Planning", d: "We listen first: lab type, workflow, safety needs and budget." },
  { t: "Designing", d: "Layouts and engineering drawings shaped around your space." },
  { t: "Material Selection", d: "Surfaces and materials matched to the chemicals and loads they will face." },
  { t: "Manufacturing", d: "Fabrication in our own manufacturing set-up." },
  { t: "Quality Control", d: "Each item is inspected before it leaves for site." },
  { t: "Installation", d: "Site installation and handover by our own team." },
];

const INDUSTRIES = [
  { t: "Pharmaceutical", d: "QC, QA and R&D laboratories." },
  { t: "Research", d: "Institutes and company research facilities." },
  { t: "Medical", d: "Clinical and healthcare laboratories." },
  { t: "Educational", d: "School, college and university science labs." },
  { t: "Industrial", d: "Testing and process laboratories in plants." },
];

const WHY = [
  { t: "Experience since 1989", d: "More than three decades of manufacturing and project execution." },
  { t: "Manufacturing in-house", d: "Control over quality, timelines and custom sizes." },
  { t: "Engineering depth", d: "Civil, electrical, HVAC, piping and fire safety handled together." },
  { t: "Two-year warranty", d: "Our products come with a 2-year warranty." },
  { t: "Transparent pricing", d: "Clear cost structures without hidden charges." },
  { t: "Single point of contact", d: "One team answers for the whole project." },
];

const FAQS = [
  { q: "Do you manufacture the furniture and fume hoods yourselves?", a: "Yes. Chameza has in-house manufacturing, which lets us control quality and build to custom dimensions." },
  { q: "Which fume hoods do you make?", a: "We make acid-resistant fume hoods, perchloric acid fume hoods and custom designs for pharmaceutical, research and industrial laboratories." },
  { q: "Can you handle a complete laboratory, not just furniture?", a: "Yes. Our turnkey scope covers design, civil work, electrical, HVAC, utility piping and fire safety, along with the furniture itself." },
  { q: "What warranty do your products carry?", a: "Our products carry a 2-year warranty." },
  { q: "How do I start a project with you?", a: "Call or message us on WhatsApp, or send the enquiry form below. We will schedule a consultation to understand your requirement." },
];

/* Simple original line icons */
function Icon({ name }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  const shapes = {
    bench: <><rect x="3" y="9" width="18" height="4" rx="1" /><path d="M5 13v7M19 13v7M9 13v5h6v-5" /></>,
    hood: <><path d="M5 20V8l3-4h8l3 4v12" /><rect x="8" y="10" width="8" height="6" /><path d="M5 20h14" /></>,
    cabinet: <><rect x="5" y="3" width="14" height="18" rx="1" /><path d="M12 3v18M9 11v2M15 11v2" /></>,
    mobile: <><rect x="2" y="7" width="15" height="9" rx="1" /><path d="M17 10h3l2 3v3h-5" /><circle cx="7" cy="18" r="2" /><circle cx="18" cy="18" r="2" /></>,
    tools: <><path d="M14 6l4-3 3 3-3 4M3 21l9-9M12 12l3 3" /></>,
    plan: <><rect x="3" y="3" width="18" height="18" rx="1" /><path d="M3 10h8M11 3v18M15 14h6" /></>,
    wall: <><rect x="3" y="4" width="18" height="16" /><path d="M3 12h18M9 4v8M15 12v8" /></>,
    bolt: <><path d="M13 2L4 14h7l-1 8 9-12h-7z" /></>,
    fan: <><circle cx="12" cy="12" r="2" /><path d="M12 10c0-4 3-6 5-4s0 5-5 4zM14 12c4 0 6 3 4 5s-5 0-4-5zM12 14c0 4-3 6-5 4s0-5 5-4zM10 12c-4 0-6-3-4-5s5 0 4 5z" /></>,
    pipe: <><path d="M3 8h9a3 3 0 013 3v10M3 8v0M15 21h6M9 4h6" /></>,
    shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></>,
  };
  return <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" {...p}>{shapes[name]}</svg>;
}

/* Original hero artwork: front view of a fume hood workstation */
function HeroArt() {
  return (
    <svg className="cz-art" viewBox="0 0 440 400" role="img" aria-label="Illustration of a laboratory fume hood workstation">
      <defs>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7fd6e8" stopOpacity=".5" />
          <stop offset="1" stopColor="#7fd6e8" stopOpacity=".12" />
        </linearGradient>
      </defs>
      <rect x="20" y="40" width="400" height="320" rx="18" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.2)" />
      <path d="M90 60h150l20 30v10H70V90z" fill="#1b3a5c" stroke="#8fb3d6" strokeWidth="2" />
      <rect x="70" y="100" width="190" height="120" fill="#10263f" stroke="#8fb3d6" strokeWidth="2" />
      <rect x="80" y="110" width="170" height="100" fill="url(#glass)" stroke="#bfe6f2" />
      <path d="M90 200l40-80M140 200l60-86" stroke="#fff" strokeOpacity=".35" strokeWidth="3" />
      <rect x="60" y="220" width="210" height="14" fill="#e8892b" />
      <rect x="66" y="234" width="198" height="106" fill="#183452" stroke="#8fb3d6" strokeWidth="2" />
      <path d="M165 234v106M115 270v8M215 270v8" stroke="#8fb3d6" strokeWidth="3" />
      <rect x="290" y="150" width="100" height="14" fill="#e8892b" />
      <rect x="296" y="164" width="88" height="176" fill="#183452" stroke="#8fb3d6" strokeWidth="2" />
      <path d="M340 164v176M296 224h88M296 282h88" stroke="#8fb3d6" strokeWidth="2" />
      <path d="M318 120h44v30h-44z M330 96h20v24h-20z" fill="rgba(143,230,240,.25)" stroke="#bfe6f2" />
      <circle cx="340" cy="132" r="3" fill="#e8892b" />
      <path d="M150 62c0-14 10-14 10-28M180 62c0-14 10-14 10-28" stroke="#9fe0ee" strokeOpacity=".7" strokeWidth="2" fill="none" strokeLinecap="round" />
      <rect x="40" y="340" width="360" height="8" rx="4" fill="#0d2038" />
    </svg>
  );
}

function Counter({ end, suffix = "", plain }) {
  const [v, setV] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let frame;
    const io = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (now) => {
        const p = Math.min((now - t0) / 1600, 1);
        setV(Math.floor((1 - Math.pow(1 - p, 3)) * end));
        if (p < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(node);
    return () => { io.disconnect(); cancelAnimationFrame(frame); };
  }, [end]);
  return <span ref={ref}>{plain ? v : v}{suffix}</span>;
}

function ContactForm() {
  const [status, setStatus] = useState("");
  const onSubmit = (e) => {
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
    <form className="cz-form" onSubmit={onSubmit}>
      <div className="cz-row">
        <input name="name" type="text" placeholder="Your name *" required aria-label="Your name" />
        <input name="phone" type="tel" placeholder="Phone number *" required aria-label="Phone number" />
      </div>
      <input name="email" type="email" placeholder="Email address *" required aria-label="Email address" />
      <select name="type" defaultValue="Turnkey laboratory" aria-label="Interested in">
        <option>Turnkey laboratory</option>
        <option>Laboratory furniture</option>
        <option>Fume hoods</option>
        <option>Storage and cabinets</option>
        <option>Mobile laboratory</option>
        <option>Other</option>
      </select>
      <textarea name="message" rows={4} placeholder="Tell us about your laboratory *" required aria-label="Message" />
      <button type="submit" className="cz-btn cz-btn--primary">Request a Consultation</button>
      {status && <p className="cz-status" role="status">{status}</p>}
    </form>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [year, setYear] = useState(2026);

  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      setShowTop(window.scrollY > 700);
      let cur = "home";
      NAV.forEach((n) => {
        const el = document.getElementById(n.id);
        if (el && el.getBoundingClientRect().top <= 150) cur = n.id;
      });
      setActiveId(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    const onResize = () => window.innerWidth > 960 && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("resize", onResize); };
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("cz-in"); io.unobserve(en.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll(".cz-reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);
  const t = TURNKEY[tab];

  return (
    <div className="cz-root">
      <header className={`cz-header ${scrolled ? "cz-header--s" : ""}`}>
        <div className="cz-wrap cz-header-in">
          <a href="#home" className="cz-logo" onClick={close} aria-label="Chameza Group home">
            <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
              <rect width="40" height="40" rx="9" fill="#0a1d33" />
              <path d="M26 13a9 9 0 100 14" fill="none" stroke="#e8892b" strokeWidth="4" strokeLinecap="round" />
              <circle cx="27" cy="20" r="2.4" fill="#7fd6e8" />
            </svg>
            <span><b>CHAMEZA</b><i>GROUP</i></span>
          </a>
          <nav className={`cz-nav ${menuOpen ? "cz-nav--o" : ""}`} aria-label="Main">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className={activeId === n.id ? "on" : ""} onClick={close}>{n.label}</a>
            ))}
            <a href="#contact" className="cz-btn cz-btn--primary cz-nav-cta" onClick={close}>Get a Quote</a>
          </nav>
          <button className={`cz-burger ${menuOpen ? "x" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            <span /><span /><span />
          </button>
        </div>
      </header>
      {menuOpen && <div className="cz-backdrop" onClick={close} />}

      {/* Hero */}
      <section id="home" className="cz-hero">
        <div className="cz-gridbg" aria-hidden="true" />
        <div className="cz-wrap cz-hero-in">
          <div>
            <span className="cz-eyebrow cz-eyebrow--l">Laboratory Furniture &middot; Fume Hoods &middot; Turnkey Labs</span>
            <h1>Laboratories built with <em>engineering precision</em>, from first drawing to final handover.</h1>
            <p>
              Chameza Group designs, manufactures and installs laboratory furniture, fume hoods and complete
              turnkey facilities, backed by manufacturing experience that began in 1989.
            </p>
            <div className="cz-actions">
              <a href="#contact" className="cz-btn cz-btn--primary">Plan Your Laboratory</a>
              <a href="#turnkey" className="cz-btn cz-btn--ghost">Explore Turnkey Scope</a>
            </div>
            <ul className="cz-chips">
              <li>ISO certified laboratory furniture</li>
              <li>In-house manufacturing</li>
              <li>Expert engineering team</li>
            </ul>
          </div>
          <HeroArt />
        </div>
      </section>

      {/* Stats */}
      <section className="cz-stats">
        <div className="cz-wrap cz-stats-grid">
          {STATS.map((s) => (
            <div key={s.label} className="cz-stat">
              <strong><Counter end={s.end} suffix={s.suffix} plain={s.plain} /></strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="cz-sec">
        <div className="cz-wrap">
          <div className="cz-head cz-reveal">
            <span className="cz-eyebrow">What We Make</span>
            <h2>Everything a working laboratory needs</h2>
            <p>From a single fume hood to a fully equipped facility, each product is built to the demands of laboratory use.</p>
          </div>
          <div className="cz-grid cz-g3">
            {PRODUCTS.map((p, i) => (
              <article key={p.title} className="cz-card cz-reveal" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                <span className="cz-ico"><Icon name={p.icon} /></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <a href="#contact" className="cz-link">Enquire &rarr;</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Turnkey */}
      <section id="turnkey" className="cz-sec cz-sec--dark">
        <div className="cz-wrap">
          <div className="cz-head cz-head--l cz-reveal">
            <span className="cz-eyebrow cz-eyebrow--l">Turnkey Services</span>
            <h2>One partner for every discipline in your project</h2>
          </div>
          <div className="cz-tabs" role="tablist" aria-label="Turnkey services">
            {TURNKEY.map((x, i) => (
              <button key={x.tab} role="tab" aria-selected={tab === i} className={tab === i ? "on" : ""} onClick={() => setTab(i)}>
                <Icon name={x.icon} /> <span>{x.tab}</span>
              </button>
            ))}
          </div>
          <div className="cz-panel" key={t.tab} role="tabpanel">
            <div>
              <h3>{t.head}</h3>
              <p>{t.text}</p>
              <a href="#contact" className="cz-btn cz-btn--primary">Discuss This Scope</a>
            </div>
            <ul>{t.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="cz-sec">
        <div className="cz-wrap">
          <div className="cz-head cz-reveal">
            <span className="cz-eyebrow">How We Work</span>
            <h2>A clear six-step path from enquiry to installation</h2>
          </div>
          <ol className="cz-steps">
            {PROCESS.map((s, i) => (
              <li key={s.t} className="cz-reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <b>{String(i + 1).padStart(2, "0")}</b>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="cz-sec cz-sec--alt">
        <div className="cz-wrap">
          <div className="cz-head cz-reveal">
            <span className="cz-eyebrow">Industries</span>
            <h2>Laboratories we build for</h2>
          </div>
          <div className="cz-ind">
            {INDUSTRIES.map((x, i) => (
              <div key={x.t} className="cz-reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <h3>{x.t}</h3>
                <p>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional photo gallery, hidden until PHOTOS has items */}
      {PHOTOS.length > 0 && (
        <section className="cz-sec">
          <div className="cz-wrap">
            <div className="cz-head cz-reveal">
              <span className="cz-eyebrow">Our Work</span>
              <h2>Completed installations</h2>
            </div>
            <div className="cz-grid cz-g3">
              {PHOTOS.map((p) => (
                // eslint-disable-next-line @next/next/no-img-element
                <figure key={p.src} className="cz-photo cz-reveal">
                  <img src={p.src} alt={p.title} loading="lazy" />
                  <figcaption><small>{p.tag}</small>{p.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why */}
      <section id="why" className="cz-sec">
        <div className="cz-wrap cz-split">
          <div className="cz-reveal">
            <span className="cz-eyebrow">Why Chameza</span>
            <h2>Manufacturing roots. Engineering mindset.</h2>
            <p className="cz-lead">
              Since 1989 we have built furniture the hard way: in steel, to tolerance, to last. Today that same
              discipline runs through every laboratory we deliver.
            </p>
            <a href="#contact" className="cz-btn cz-btn--primary">Talk to Our Team</a>
          </div>
          <div className="cz-why">
            {WHY.map((w, i) => (
              <div key={w.t} className="cz-reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="cz-sec cz-sec--alt">
        <div className="cz-wrap cz-faqwrap">
          <div className="cz-head cz-reveal">
            <span className="cz-eyebrow">FAQ</span>
            <h2>Questions we hear often</h2>
          </div>
          <div className="cz-faq">
            {FAQS.map((f, i) => (
              <div key={f.q} className={`cz-faq-i ${openFaq === i ? "open" : ""}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}>
                  <span>{f.q}</span><i aria-hidden="true">+</i>
                </button>
                <div className="cz-faq-b"><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="cz-sec cz-contact">
        <div className="cz-wrap cz-cgrid">
          <div className="cz-reveal">
            <span className="cz-eyebrow cz-eyebrow--l">Start a Project</span>
            <h2>Tell us what your laboratory needs to do</h2>
            <ul className="cz-clist">
              <li><b>Head Office</b>{COMPANY.address}</li>
              <li><b>Phone and WhatsApp</b><a href={COMPANY.phoneHref}>{COMPANY.phone}</a></li>
              <li><b>Email</b><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
              <li><b>Follow</b>
                <span className="cz-soc">
                  <a href={COMPANY.facebook} target="_blank" rel="noreferrer">Facebook</a>
                  <a href={COMPANY.instagram} target="_blank" rel="noreferrer">Instagram</a>
                  <a href={COMPANY.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                </span>
              </li>
            </ul>
          </div>
          <div className="cz-ccard cz-reveal">
            <h3>Request a Consultation</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="cz-foot">
        <div className="cz-wrap cz-foot-in">
          <span>&copy; {year} {COMPANY.name}. All rights reserved.</span>
          <span>Laboratory Furniture &middot; Fume Hoods &middot; Turnkey Laboratories</span>
        </div>
      </footer>

      <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" className="cz-wa" aria-label="Chat on WhatsApp">WhatsApp</a>
      <button className={`cz-top ${showTop ? "show" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">&uarr;</button>
    </div>
  );
}