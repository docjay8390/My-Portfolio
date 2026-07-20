"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Proof", href: "#proof" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const proofPoints = [
  {
    value: "IT",
    label: "Operations mindset",
    detail: "User support, troubleshooting, documentation, and calm handoffs.",
  },
  {
    value: "UX",
    label: "Design judgment",
    detail: "Figma workflows, responsive layouts, and practical visual QA.",
  },
  {
    value: "WEB",
    label: "Build capability",
    detail: "HTML, CSS, JavaScript, Bootstrap, and Tailwind-powered interfaces.",
  },
];

const roleFit = [
  "Reliable full-time teammate with hands-on IT Officer experience.",
  "Turns vague problems into clear steps, evidence, and repeatable fixes.",
  "Balances technical support, frontend craft, and visual communication.",
  "Comfortable learning independently and explaining work to nontechnical users.",
];

const skills = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap", "Responsive UI"],
  },
  {
    title: "IT Support",
    items: ["Troubleshooting", "User support", "Ticket triage", "Device setup", "Documentation", "Handoffs"],
  },
  {
    title: "Design",
    items: ["Figma", "Wireframes", "Prototypes", "Photoshop", "Visual QA", "Video editing"],
  },
  {
    title: "Professional",
    items: ["Clear communication", "Self-learning", "Process thinking", "Time ownership", "Adaptability", "Team support"],
  },
];

const services = [
  {
    title: "IT Support & Operations",
    summary:
      "Structured troubleshooting for users, devices, access issues, documentation, and support follow-through.",
    evidence: "Best for IT Officer, Helpdesk, Junior System Support, and Operations roles.",
  },
  {
    title: "Responsive Web Development",
    summary:
      "Clean frontend builds with readable HTML, CSS, JavaScript, Tailwind, and Bootstrap foundations.",
    evidence: "Built for recruiter scanning, mobile review, and interviewer discussion.",
  },
  {
    title: "UI/UX Prototyping",
    summary:
      "Figma-first design thinking for layouts, flows, content hierarchy, and handoff-ready interfaces.",
    evidence: "Shows both creative judgment and practical implementation awareness.",
  },
  {
    title: "Creative Production",
    summary:
      "Photoshop and video editing skills that help explain technical work with polished visual support.",
    evidence: "Useful for documentation, training material, and internal communication.",
  },
];

const projects = [
  {
    title: "RazorVibe Responsive Build",
    type: "Web Development",
    description:
      "A responsive web activity focused on device-friendly layout, clear sections, and accessible browsing across screen sizes.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    href: "https://docjay8390.github.io/Activity-RazorVibe-3/",
    signal: "Live project",
  },
  {
    title: "FoodTiger Restaurant Prototype",
    type: "UI/UX Design",
    description:
      "A restaurant concept prototype built in Figma, centered on menu discovery, reservation flow, and user-friendly visual hierarchy.",
    stack: ["Figma", "Prototype", "UX Flow", "Visual Design"],
    href: "https://www.figma.com/proto/W3aziDeXwFprGtKKBOcVtZ/Untitled?type=design&node-id=1-2&t=JxvkvJmMq7mKYxib-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2",
    signal: "Design evidence",
  },
  {
    title: "Portfolio Interface Concept",
    type: "Personal Brand",
    description:
      "A portfolio concept exploring visual polish, page structure, mobile readiness, and a professional presentation for hiring conversations.",
    stack: ["Figma", "Layout", "Branding", "Frontend Planning"],
    href: "https://www.figma.com/proto/17mNNwXU26mT7a9KNAUmNu/Untitled?type=design&node-id=1-2&t=DhnAcI48LfEpiYbi-0&scaling=min-zoom&page-id=0%3A1",
    signal: "Presentation work",
  },
];

const certificates = [
  {
    name: "Share Data",
    focus: "Communicating data clearly and responsibly.",
  },
  {
    name: "Study Workflow",
    focus: "Learning process, analysis habits, and continuous improvement.",
  },
  {
    name: "Process Data",
    focus: "Organizing information into usable, decision-ready output.",
  },
];

const plan = [
  {
    label: "First 30 days",
    text: "Learn systems, document recurring issues, understand escalation rules, and build trust with users.",
  },
  {
    label: "Days 31-60",
    text: "Improve support templates, identify avoidable repeat tickets, and contribute frontend or documentation fixes.",
  },
  {
    label: "Days 61-90",
    text: "Own small improvements end to end, share measurable outcomes, and become a dependable point person.",
  },
];

const socials = [
  { label: "GitHub", href: "https://github.com/docjay8390" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100009836075204" },
  { label: "Instagram", href: "https://www.instagram.com/itsdjfrnndo/" },
  { label: "X", href: "https://twitter.com/xxdjfrnndo" },
];

const brief =
  "Bernie Fernando is an IT Officer at Charoen Pokphand Foods Philippines Corporation with frontend, UI/UX, Photoshop, and video editing skills. Portfolio proof includes responsive web work, Figma prototypes, certifications, and a practical 30/60/90 day plan for IT support and junior web roles.";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initialTheme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : prefersLight ? "light" : "dark";
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--header)] backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Primary navigation">
          <a href="#home" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">BF</span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-sm font-semibold">Bernie Fernando</span>
              <span className="block text-xs text-[var(--muted)]">IT Officer + Web Developer</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="icon-button" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
              {theme === "dark" ? "Light" : "Dark"}
            </button>
            <button className="menu-button lg:hidden" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-menu">
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div id="mobile-menu" className="border-t border-[var(--border)] bg-[var(--surface)] px-5 py-3 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-1">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="mobile-link" onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <div id="content">
        <section id="home" className="hero-section mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-20">
          <div className="flex flex-col justify-center">
            <p className="eyebrow">Hi, I&apos;m Bernie</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
              Bernie Fernando
            </h1>
            <p className="mt-4 text-2xl font-semibold text-[var(--accent-strong)] sm:text-3xl">
              IT Officer + Junior Web Developer
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              I help people solve technical problems, keep support work organized, and build clean responsive web interfaces. I&apos;m currently an IT Officer at Charoen Pokphand Foods Philippines Corporation, growing toward frontend and UI/UX roles.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="primary-button" href="#projects">
                View project proof
              </a>
              <a className="secondary-button" href="/Bernie-Fernando-Resume.md" download>
                Download resume
              </a>
              <button className="secondary-button" type="button" onClick={copyBrief}>
                {copied ? "Brief copied" : "Copy interview brief"}
              </button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <article className="metric-card" key={point.label}>
                  <strong>{point.value}</strong>
                  <span>{point.label}</span>
                  <p>{point.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="personal-hero" aria-label="Bernie Fernando profile introduction">
            <div className="portrait-frame">
              <img src="/profile.png" alt="Bernie Fernando portrait" />
            </div>
            <div className="hero-signature">
              <span>Bernie S. Fernando</span>
              <strong>IT Officer</strong>
              <p>Support operations, responsive websites, and UI/UX prototypes.</p>
            </div>
            <div className="hero-tags" aria-label="Primary skills">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Tailwind</span>
              <span>Figma</span>
            </div>
          </div>
        </section>

        <section id="proof" className="section-band">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="section-heading">
              <p className="eyebrow">Why interviewers should keep reading</p>
              <h2>Proof before promises.</h2>
              <p>
                This portfolio now leads with credible signals: current IT experience, specific skill areas, public work, certificates, and a practical first-90-days plan.
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {roleFit.map((item) => (
                <article className="proof-card" key={item}>
                  <span aria-hidden="true" />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="section-heading">
            <p className="eyebrow">Technical stack</p>
            <h2>Built for support roles, junior web roles, and hybrid IT teams.</h2>
            <p>
              The skill set is organized so HR can scan quickly and technical interviewers can ask deeper follow-up questions.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {skills.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span className="skill-pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-band">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="section-heading">
              <p className="eyebrow">Experience</p>
              <h2>IT support with creative execution.</h2>
              <p>
                Bernie brings the rare mix interviewers like to see: user-facing support, practical frontend delivery, and enough design skill to communicate work clearly.
              </p>
            </div>
            <div className="timeline">
              <article className="timeline-item">
                <span>Current</span>
                <div>
                  <h3>IT Officer</h3>
                  <p>Charoen Pokphand Foods Philippines Corporation</p>
                  <ul>
                    <li>Supports users and technology workflows with a troubleshooting-first mindset.</li>
                    <li>Communicates fixes in clear language and documents repeatable steps.</li>
                    <li>Connects operational support experience with frontend and UI/UX practice.</li>
                  </ul>
                </div>
              </article>
              <article className="timeline-item">
                <span>Growth</span>
                <div>
                  <h3>Junior Web Developer + UI/UX Designer</h3>
                  <p>Self-directed portfolio projects</p>
                  <ul>
                    <li>Builds responsive pages with HTML, CSS, JavaScript, Bootstrap, and Tailwind.</li>
                    <li>Creates Figma prototypes that focus on hierarchy, flow, and mobile usability.</li>
                    <li>Uses Photoshop and video editing to strengthen presentation and documentation.</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Clear offers, practical outcomes.</h2>
            <p>
              The original services were rebuilt into professional, interview-friendly capabilities that match real IT and frontend work.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <span>{service.evidence}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-band">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="section-heading">
              <p className="eyebrow">Recent work</p>
              <h2>Projects that give interviewers something concrete to discuss.</h2>
              <p>
                Each project card now highlights the role, the evidence, and the stack instead of burying the link inside a long paragraph.
              </p>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div>
                    <span className="project-signal">{project.signal}</span>
                    <h3>{project.title}</h3>
                    <p className="project-type">{project.type}</p>
                    <p>{project.description}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span className="skill-pill" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                    Open evidence
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="certificates" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="section-heading">
            <p className="eyebrow">Certificates</p>
            <h2>Learning signals without visual clutter.</h2>
            <p>
              Certificates are presented as clean evidence cards. Add the official issuer details later and this section will already be ready for HR review.
            </p>
          </div>
          <div className="certificate-panel">
            <div className="certificate-tabs" role="tablist" aria-label="Certificates">
              {certificates.map((certificate, index) => (
                <button
                  key={certificate.name}
                  type="button"
                  role="tab"
                  aria-selected={activeCertificate === index}
                  className={activeCertificate === index ? "active" : ""}
                  onClick={() => setActiveCertificate(index)}
                >
                  {certificate.name}
                </button>
              ))}
            </div>
            <article className="certificate-card">
              <p>Certificate focus</p>
              <h3>{certificates[activeCertificate].name}</h3>
              <span>{certificates[activeCertificate].focus}</span>
            </article>
          </div>
        </section>

        <section className="section-band">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="section-heading">
              <p className="eyebrow">Hiring signal</p>
              <h2>A practical first 90 days.</h2>
              <p>
                This section helps interviewers imagine Bernie already inside the team, learning systems and improving support quality step by step.
              </p>
            </div>
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {plan.map((item) => (
                <article className="plan-card" key={item.label}>
                  <span>{item.label}</span>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="contact-panel">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Ready for IT support, junior frontend, and UI/UX conversations.</h2>
              <p>
                Review the proof links, download the resume summary, or open a social profile to start the next conversation.
              </p>
            </div>
            <div className="contact-actions">
              <a className="primary-button" href="https://github.com/docjay8390" target="_blank" rel="noreferrer">
                View GitHub
              </a>
              <a className="secondary-button" href="/Bernie-Fernando-Resume.md" download>
                Download resume
              </a>
            </div>
          </div>
          <footer className="mt-10 flex flex-col gap-5 border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
            <p>(c) 2026 Bernie S. Fernando. Built with Next, Tailwind CSS, and Sites.</p>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="footer-link">
                  {social.label}
                </a>
              ))}
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
