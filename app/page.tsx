"use client";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  COMPLETE PORTFOLIO — single file
 *  Sections: Nav · Home · About · Work · Blog · Contact · Footer
 *
 *  ALSO REQUIRED in your repo (not auto-generated here):
 *    app/layout.tsx   ← wrap children, import globals.css
 *    app/globals.css  ← @tailwind directives + Google Font import (see bottom)
 *    postcss.config.js
 *    tsconfig.json
 *
 *  Google Fonts needed (add to globals.css @import):
 *    Playfair Display: 300,400,400i,500
 *    Outfit: 300,400,500
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// ─── Tiny helpers ─────────────────────────────────────────────────────────────

/** Fade-in when scrolled into view */
function Reveal({
  children,
  delay = 0,
  y = 22,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Stagger wrapper — children animate in sequence */
function Stagger({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.11 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerChild({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden:  { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = ["Home", "About", "Work", "Blog", "Contact"];

const WORK = [
  {
    id: "01",
    title: "Fintech Dashboard",
    category: "Product Design · 2024",
    desc: "Rebuilt the core workflow of a B2B payments tool, cutting task time by 28% and halving support tickets.",
    tags: ["Research", "Systems", "Mobile"],
    color: "#1E2A20",
  },
  {
    id: "02",
    title: "Health & Wellness App",
    category: "UX Research · 2024",
    desc: "End-to-end UX for a personal health tracker — from diary studies through to a polished iOS prototype.",
    tags: ["Research", "iOS", "Prototyping"],
    color: "#1C1E2A",
  },
  {
    id: "03",
    title: "Brand Design System",
    category: "Design Systems · 2023",
    desc: "A scalable multi-brand token architecture spanning 120+ components across four product lines.",
    tags: ["Figma", "Tokens", "Docs"],
    color: "#2A1C1C",
  },
  {
    id: "04",
    title: "E-commerce Checkout",
    category: "Conversion · 2023",
    desc: "Collapsed a seven-step checkout into a single focused flow, lifting conversion by 19% in a controlled A/B test.",
    tags: ["A/B Testing", "Web", "Analytics"],
    color: "#1E1C2A",
  },
];

const BLOG_POSTS = [
  {
    slug: "ux-research-non-negotiable",
    title: "Why UX research is non-negotiable, even under tight deadlines",
    date: "May 2025",
    read: "6 min",
    tag: "Research",
  },
  {
    slug: "designing-systems-not-screens",
    title: "Designing systems, not screens",
    date: "Mar 2025",
    read: "8 min",
    tag: "Systems",
  },
  {
    slug: "problem-with-personas",
    title: "The problem with personas (and what to use instead)",
    date: "Jan 2025",
    read: "5 min",
    tag: "JTBD",
  },
  {
    slug: "craft-in-ux",
    title: "On craft in UX design",
    date: "Nov 2024",
    read: "4 min",
    tag: "Thinking",
  },
];

const SKILLS = [
  "UX Research",
  "Interaction Design",
  "Design Systems",
  "Usability Testing",
  "Prototyping",
  "Information Architecture",
  "Visual Design",
  "Workshop Facilitation",
];

const SOCIALS = [
  { label: "LinkedIn", href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "Read.cv", href: "#" },
];

// ─── Navigation ───────────────────────────────────────────────────────────────

function Nav({ active, onNav }: { active: string; onNav: (s: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (section: string) => {
    onNav(section);
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-canvas/90 backdrop-blur-lg border-b border-ivory/5" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
          {/* Wordmark */}
          <button
            onClick={() => go("Home")}
            className="font-display text-xl font-light tracking-tighter text-ivory hover:text-rose transition-colors duration-300"
          >
            Your Name
          </button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.slice(1).map((link) => (
              <button
                key={link}
                onClick={() => go(link)}
                className={`font-body text-2xs tracking-widest uppercase transition-colors duration-300 relative group ${
                  active === link ? "text-rose" : "text-muted hover:text-ivory"
                }`}
              >
                {link}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-rose transition-all duration-300 ${
                    active === link ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Burger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block h-px w-5 bg-ivory transition-all duration-300 origin-center ${
                  menuOpen && i === 0 ? "rotate-45 translate-y-[7px]" :
                  menuOpen && i === 1 ? "opacity-0 scale-x-0" :
                  menuOpen && i === 2 ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            ))}
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-canvas flex flex-col justify-center items-center gap-8 md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                onClick={() => go(link)}
                className={`font-display text-5xl font-light tracking-tightest ${
                  active === link ? "text-rose" : "text-ivory"
                }`}
              >
                {link}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Section: Home ────────────────────────────────────────────────────────────

function SectionHome({ onNav }: { onNav: (s: string) => void }) {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13, delayChildren: 0.25 } },
  };
  const item = {
    hidden:  { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="Home"
      className="relative min-h-screen flex flex-col justify-end pb-20 md:pb-32 pt-36 px-6 md:px-12 max-w-7xl mx-auto"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-rose/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-rose/4 blur-[100px]" />
      </div>

      <motion.div variants={container} initial="hidden" animate="visible" className="max-w-5xl relative">
        <motion.p variants={item} className="font-body text-2xs tracking-widest uppercase text-rose mb-8">
          UX Designer · Based in Lagos
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-6xl md:text-8xl lg:text-[7.5rem] font-light leading-[0.91] tracking-tightest text-ivory mb-6"
        >
          Designing with
          <br />
          <em className="italic text-muted">intention</em>
          <br />
          &amp; clarity.
        </motion.h1>

        <motion.p
          variants={item}
          className="font-body text-base md:text-lg text-muted max-w-md leading-relaxed mb-12"
        >
          I craft digital experiences that feel effortless — grounded in research,
          refined through iteration.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4">
          <button
            onClick={() => onNav("Work")}
            className="group inline-flex items-center gap-3 font-body text-2xs tracking-widest uppercase bg-rose text-canvas px-8 py-4 hover:bg-ivory transition-colors duration-300"
          >
            View Work
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
          <button
            onClick={() => onNav("Contact")}
            className="inline-flex items-center gap-3 font-body text-2xs tracking-widest uppercase border border-ivory/20 text-ivory px-8 py-4 hover:border-rose hover:text-rose transition-all duration-300"
          >
            Get in Touch
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll nudge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 right-6 md:right-12 hidden md:flex flex-col items-center gap-2"
      >
        <span className="font-body text-2xs tracking-widest uppercase text-muted -rotate-90 origin-center mb-1">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="text-rose text-xs"
        >↓</motion.span>
      </motion.div>
    </section>
  );
}

// ─── Divider ──────────────────────────────────────────────────────────────────

function Divider() {
  return <div className="max-w-7xl mx-auto px-6 md:px-12"><div className="h-px bg-ivory/8" /></div>;
}

// ─── Section: About ───────────────────────────────────────────────────────────

function SectionAbout() {
  return (
    <section id="About" className="max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-40">
      <Reveal>
        <p className="font-body text-2xs tracking-widest uppercase text-rose mb-8">About</p>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tightest leading-[0.94] max-w-3xl text-ivory mb-16">
          I bridge complexity
          <br />
          <em className="italic text-muted">and</em> clarity.
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* Bio */}
        <Reveal delay={0.1}>
          <p className="font-body text-base md:text-lg text-ivory leading-relaxed mb-6">
            With a background in psychology and product design, I help teams build things people actually
            want to use. My work sits at the intersection of rigorous research and considered craft.
          </p>
          <p className="font-body text-base text-muted leading-relaxed mb-6">
            I start by listening — spending disproportionate time in discovery, because the quality of
            your output is entirely determined by the quality of your inputs. Then I move fast:
            sketching, testing, iterating, and refining until the experience feels inevitable.
          </p>
          <p className="font-body text-base text-muted leading-relaxed">
            Outside of work: typography obsessive, golden-hour photographer, slow-reading fiction.
          </p>
        </Reveal>

        {/* Right column */}
        <Reveal delay={0.2}>
          {/* Skills */}
          <div className="mb-10">
            <p className="font-body text-2xs tracking-widest uppercase text-muted mb-4">Specialities</p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <span
                  key={s}
                  className="font-body text-2xs tracking-widest uppercase text-muted border border-ivory/10 px-3 py-2 hover:border-rose hover:text-rose transition-all duration-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Quick facts */}
          {[
            { label: "Tools", value: "Figma, FigJam, Framer, Notion, Miro" },
            { label: "Education", value: "B.Sc. Psychology — University of Lagos" },
            { label: "Available for", value: "Freelance & full-time, from July 2025" },
          ].map(({ label, value }) => (
            <div key={label} className="border-t border-ivory/8 py-5">
              <p className="font-body text-2xs tracking-widest uppercase text-rose mb-1">{label}</p>
              <p className="font-body text-sm text-muted">{value}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

// ─── Section: Work ────────────────────────────────────────────────────────────

function SectionWork() {
  return (
    <section id="Work" className="max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-40">
      <Reveal>
        <p className="font-body text-2xs tracking-widest uppercase text-rose mb-8">Selected Work</p>
        <h2 className="font-display text-4xl md:text-6xl font-light tracking-tightest leading-[0.94] text-ivory mb-20">
          Projects &{" "}
          <em className="italic text-muted">Case Studies</em>
        </h2>
      </Reveal>

      <Stagger className="space-y-4">
        {WORK.map((project) => (
          <StaggerChild key={project.id}>
            <div className="group border border-ivory/8 hover:border-rose/30 transition-colors duration-500 cursor-pointer">
              <div
                className="p-8 md:p-10 grid md:grid-cols-12 gap-6 items-center transition-colors duration-500"
                style={{ backgroundColor: "transparent" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = project.color)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                {/* Number */}
                <div className="md:col-span-1">
                  <p className="font-body text-2xs tracking-widest text-muted">{project.id}</p>
                </div>

                {/* Title + desc */}
                <div className="md:col-span-5">
                  <p className="font-body text-2xs tracking-widest uppercase text-muted mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-light tracking-tighter text-ivory group-hover:text-rose transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="md:col-span-4 font-body text-sm text-muted leading-relaxed">
                  {project.desc}
                </p>

                {/* Arrow */}
                <div className="md:col-span-2 flex justify-end">
                  <span className="font-body text-muted group-hover:text-rose group-hover:translate-x-2 transition-all duration-300 text-xl">
                    →
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="px-8 md:px-10 pb-6 flex gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="font-body text-2xs tracking-widest uppercase text-muted border border-ivory/8 px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </StaggerChild>
        ))}
      </Stagger>
    </section>
  );
}

// ─── Marquee strip ────────────────────────────────────────────────────────────

function Marquee() {
  return (
    <div className="border-y border-ivory/8 py-5 overflow-hidden bg-surface">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="flex gap-16 whitespace-nowrap"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="font-display text-2xl md:text-3xl font-light italic text-muted/60 shrink-0">
            UX Design · Research · Prototyping · Strategy · Systems ·&nbsp;
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Section: Blog ────────────────────────────────────────────────────────────

function SectionBlog() {
  return (
    <section id="Blog" className="max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-40">
      <Reveal>
        <p className="font-body text-2xs tracking-widest uppercase text-rose mb-8">Blog</p>
        <h2 className="font-display text-4xl md:text-6xl font-light tracking-tightest leading-[0.94] text-ivory mb-20">
          Writing &{" "}
          <em className="italic text-muted">Thinking</em>
        </h2>
      </Reveal>

      <Stagger className="space-y-0">
        {BLOG_POSTS.map((post) => (
          <StaggerChild key={post.slug}>
            <div className="group py-8 border-t border-ivory/8 hover:border-rose/20 transition-colors duration-300 cursor-pointer">
              <div className="grid md:grid-cols-12 gap-4 items-start">
                {/* Date */}
                <div className="md:col-span-2">
                  <p className="font-body text-xs text-muted">{post.date}</p>
                  <p className="font-body text-xs text-muted/50">{post.read} read</p>
                </div>

                {/* Title */}
                <div className="md:col-span-7">
                  <h3 className="font-display text-xl md:text-2xl font-light tracking-tight text-ivory group-hover:text-rose transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>
                </div>

                {/* Tag + arrow */}
                <div className="md:col-span-3 flex items-center justify-end gap-4">
                  <span className="font-body text-2xs tracking-widest uppercase text-muted border border-ivory/10 px-3 py-1">
                    {post.tag}
                  </span>
                  <span className="text-muted group-hover:text-rose group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </div>
              </div>
            </div>
          </StaggerChild>
        ))}
      </Stagger>
    </section>
  );
}

// ─── Section: Contact ─────────────────────────────────────────────────────────

function SectionContact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // ↓ Replace with Formspree / Resend / your handler
    await new Promise((res) => setTimeout(res, 1200));
    setStatus("sent");
  };

  return (
    <section id="Contact" className="max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-40">
      <Reveal>
        <p className="font-body text-2xs tracking-widest uppercase text-rose mb-8">Contact</p>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tightest leading-[0.94] text-ivory max-w-2xl mb-20">
          Let's make something{" "}
          <em className="italic text-muted">great</em> together.
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-20 md:gap-32">
        {/* Form */}
        <Reveal delay={0.1}>
          {status === "sent" ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="py-10"
            >
              <p className="font-display text-4xl font-light text-rose mb-3">Message received.</p>
              <p className="font-body text-base text-muted">
                Thank you — I'll reply within 2 business days.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {[
                { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label className="block font-body text-2xs tracking-widest uppercase text-muted mb-2" htmlFor={id}>
                    {label}
                  </label>
                  <input
                    id={id}
                    name={id}
                    type={type}
                    required
                    placeholder={placeholder}
                    value={(form as any)[id]}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-ivory/15 py-3 font-body text-base text-ivory placeholder:text-muted/40 focus:outline-none focus:border-rose transition-colors duration-300"
                  />
                </div>
              ))}

              <div>
                <label className="block font-body text-2xs tracking-widest uppercase text-muted mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project…"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-ivory/15 py-3 font-body text-base text-ivory placeholder:text-muted/40 focus:outline-none focus:border-rose transition-colors duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 font-body text-2xs tracking-widest uppercase bg-rose text-canvas px-10 py-4 hover:bg-ivory transition-colors duration-300 disabled:opacity-50"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-3 h-3 border border-canvas/30 border-t-canvas rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  "Send Message →"
                )}
              </motion.button>
            </form>
          )}
        </Reveal>

        {/* Right col */}
        <Reveal delay={0.2} className="space-y-14">
          <div>
            <p className="font-body text-2xs tracking-widest uppercase text-muted mb-3">Direct</p>
            <a
              href="mailto:hello@yourname.com"
              className="font-display text-3xl md:text-4xl font-light text-ivory hover:text-rose transition-colors duration-300 tracking-tighter"
            >
              hello@yourname.com
            </a>
          </div>

          <div>
            <p className="font-body text-2xs tracking-widest uppercase text-muted mb-3">Availability</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <p className="font-body text-sm text-muted">Available for freelance from July 2025</p>
            </div>
          </div>

          <div>
            <p className="font-body text-2xs tracking-widest uppercase text-muted mb-5">Find me on</p>
            <div className="space-y-0">
              {SOCIALS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-4 border-b border-ivory/8 hover:border-rose/30 transition-colors duration-300"
                >
                  <span className="font-body text-base text-muted group-hover:text-ivory transition-colors duration-300">
                    {label}
                  </span>
                  <span className="text-muted group-hover:text-rose group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer({ onNav }: { onNav: (s: string) => void }) {
  return (
    <footer className="border-t border-ivory/8 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <button
          onClick={() => onNav("Home")}
          className="font-display text-xl font-light text-ivory hover:text-rose transition-colors duration-300 tracking-tighter"
        >
          Your Name
        </button>
        <p className="font-body text-xs text-muted tracking-widest uppercase">
          © {new Date().getFullYear()} · UX Designer · Lagos
        </p>
        <div className="flex gap-6">
          {SOCIALS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-2xs tracking-widest uppercase text-muted hover:text-rose transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Root page ────────────────────────────────────────────────────────────────

export default function Page() {
  const [activeSection, setActiveSection] = useState("Home");

  // Smooth-scroll to section
  const scrollTo = (section: string) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Highlight nav item as user scrolls
  useEffect(() => {
    const sections = NAV_LINKS.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((s) => observer.observe(s!));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-canvas text-ivory min-h-screen" style={{ fontFamily: "var(--font-body)" }}>
      <Nav active={activeSection} onNav={scrollTo} />

      <SectionHome onNav={scrollTo} />
      <Divider />
      <SectionAbout />
      <Divider />
      <SectionWork />
      <Marquee />
      <SectionBlog />
      <Divider />
      <SectionContact />
      <Footer onNav={scrollTo} />
    </div>
  );
}

/*
 ──────────────────────────────────────────────────────────────────────────────
  ALSO CREATE THESE FILES (copy-paste ready):
 ──────────────────────────────────────────────────────────────────────────────

  ① app/layout.tsx
  ─────────────────
  import type { Metadata } from "next";
  import "./globals.css";
  export const metadata: Metadata = {
    title: "Your Name — UX Designer",
    description: "UX Designer crafting intentional, human-centred digital experiences.",
  };
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }


  ② app/globals.css
  ──────────────────
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Outfit:wght@300;400;500&display=swap');
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  :root {
    --font-display: 'Playfair Display';
    --font-body: 'Outfit';
  }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { background: #0E0D0B; }
  ::selection { background: #C9907A; color: #0E0D0B; }
  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: #0E0D0B; }
  ::-webkit-scrollbar-thumb { background: #C9907A; }


  ③ postcss.config.js
  ─────────────────────
  module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } };


  ④ tsconfig.json — standard Next.js tsconfig (next CLI generates this for you)
 ──────────────────────────────────────────────────────────────────────────────
*/
