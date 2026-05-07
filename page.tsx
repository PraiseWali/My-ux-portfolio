"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";

const featuredWork = [
  {
    id: "fintech-redesign",
    title: "Fintech Redesign",
    category: "Product Design · 2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    accent: "#C8A96E",
  },
  {
    id: "health-app",
    title: "Health App",
    category: "UX Research · 2024",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    accent: "#A8B9C8",
  },
  {
    id: "brand-system",
    title: "Brand System",
    category: "Design Systems · 2023",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    accent: "#B8C8A8",
  },
];

const heroVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Home() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col justify-end pb-20 md:pb-28 pt-32 md:pt-40 px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          <motion.p
            variants={heroItem}
            className="font-body text-xs tracking-widest uppercase text-accent mb-8"
          >
            UX Designer based in Lagos
          </motion.p>

          <motion.h1
            variants={heroItem}
            className="font-display text-6xl md:text-8xl lg:text-[108px] font-light leading-[0.92] tracking-tightest text-ink mb-8"
          >
            Designing with
            <br />
            <em className="italic text-ink-muted">intention</em> &amp;
            <br />
            clarity.
          </motion.h1>

          <motion.div
            variants={heroItem}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-12"
          >
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 font-body text-xs tracking-widest uppercase text-ink border border-ink px-8 py-4 hover:bg-ink hover:text-cream transition-all duration-400"
            >
              View Work
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/about"
              className="font-body text-xs tracking-widest uppercase text-ink-muted hover:text-accent transition-colors duration-300"
            >
              About Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-10 right-12 hidden md:flex flex-col items-center gap-2"
        >
          <span className="font-body text-2xs tracking-widest uppercase text-ink-muted rotate-90 origin-center">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="text-accent text-sm"
          >
            ↓
          </motion.span>
        </motion.div>
      </section>

      {/* Thin divider */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="h-px bg-ink/10" />
      </div>

      {/* ─── Selected Work ────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-28 md:py-36">
        <FadeIn>
          <div className="flex items-end justify-between mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tightest">
              Selected Work
            </h2>
            <Link
              href="/work"
              className="hidden sm:inline font-body text-xs tracking-widest uppercase text-ink-muted hover:text-accent transition-colors duration-300"
            >
              All Projects →
            </Link>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {featuredWork.map((project) => (
            <StaggerItem key={project.id}>
              <Link href={`/work/${project.id}`} className="group block">
                <div className="overflow-hidden aspect-[4/3] mb-5 bg-ink/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-light tracking-tighter mb-1 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="font-body text-xs tracking-wide text-ink-muted uppercase">
                      {project.category}
                    </p>
                  </div>
                  <span className="font-body text-ink-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 mt-1">
                    →
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ─── Marquee strip ────────────────────────────────────── */}
      <div className="border-y border-ink/10 py-5 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-display text-2xl md:text-3xl font-light italic text-ink-muted shrink-0"
            >
              UX Design · Research · Strategy · Systems ·&nbsp;
            </span>
          ))}
        </motion.div>
      </div>

      {/* ─── About teaser ─────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 md:py-44 grid md:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <p className="font-body text-xs tracking-widest uppercase text-accent mb-6">
            About
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.08] tracking-tightest">
            I bridge the gap between complexity and clarity.
          </h2>
        </FadeIn>
        <FadeIn delay={0.18}>
          <p className="font-body text-base text-ink-muted leading-relaxed mb-8">
            With a background in product design and UX research, I help teams
            build products that feel effortless. My process centres on deep user
            empathy, iterative prototyping, and evidence-based decisions.
          </p>
          <Link
            href="/about"
            className="font-body text-xs tracking-widest uppercase text-ink border-b border-ink pb-0.5 hover:border-accent hover:text-accent transition-all duration-300"
          >
            More about me →
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
