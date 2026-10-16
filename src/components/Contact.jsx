import { Check, Copy, FileText, Mail } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { CONTACT, RESUME_URL, SOCIALS } from "../constants";

const LINKS = [
  { label: "LinkedIn", url: SOCIALS.linkedin, Icon: FaLinkedin },
  { label: "GitHub", url: SOCIALS.github, Icon: FaGithub },
  { label: "LeetCode", url: SOCIALS.leetcode, Icon: SiLeetcode },
  { label: "X", url: SOCIALS.x, Icon: RiTwitterXLine },
];

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${CONTACT.email}`;
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 sm:px-12 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-signal/10 blur-3xl"
        />
        <div className="relative max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Building something with agents?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text/80">
            I&apos;m happy to talk about agentic systems, backend architecture or roles where I can do both. Email is
            the fastest way to reach me.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href={`mailto:${CONTACT.email}`} className="btn-primary px-6 py-3 text-base">
              <Mail size={18} aria-hidden="true" />
              Email me
            </a>
            <button type="button" onClick={copyEmail} className="btn-ghost px-5 py-3">
              {copied ? <Check size={16} className="text-signal" aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
              <span aria-live="polite">{copied ? "Copied" : CONTACT.email}</span>
            </button>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost px-5 py-3">
              <FileText size={16} aria-hidden="true" />
              Resume
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2">
            {LINKS.map(({ label, url, Icon }) => (
              <li key={label}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-white"
                >
                  <Icon size={16} aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="flex flex-col gap-2 py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <p>
          {CONTACT.location} · {CONTACT.phone}
        </p>
        <p>© {new Date().getFullYear()} Sagar Rajak</p>
      </footer>
    </div>
  );
}

export default Contact;
