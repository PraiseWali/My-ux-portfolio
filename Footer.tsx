import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/10 mt-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="font-body text-xs tracking-widest uppercase text-ink-muted">
          © {year} Your Name
        </p>
        <div className="flex items-center gap-8">
          {[
            { href: "https://linkedin.com", label: "LinkedIn" },
            { href: "https://twitter.com", label: "Twitter" },
            { href: "https://dribbble.com", label: "Dribbble" },
            { href: "mailto:hello@yourname.com", label: "Email" },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="font-body text-xs tracking-widest uppercase text-ink-muted hover:text-accent transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
