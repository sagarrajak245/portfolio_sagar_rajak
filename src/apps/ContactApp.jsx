import { Check, Copy, FileText, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { botStore } from "../bot/botStore";
import { sound } from "../os/sound";
import { CONTACT, RESUME_URL, SOCIALS } from "../constants";

const CHANNELS = [
  { label: "LinkedIn", handle: "Sagar Rajak", url: SOCIALS.linkedin, Icon: FaLinkedin },
  { label: "GitHub", handle: "sagarrajak245", url: SOCIALS.github, Icon: FaGithub },
  { label: "LeetCode", handle: "sagarrajak245", url: SOCIALS.leetcode, Icon: SiLeetcode },
  { label: "X", handle: "@Sagar00043", url: SOCIALS.x, Icon: RiTwitterXLine },
];

function ContactApp() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      sound.play("select");
      botStore.say("Copied. Paste it into your mail app and he'll get it.");
    } catch {
      window.location.href = `mailto:${CONTACT.email}`;
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 pb-40 pt-10 sm:px-6 md:pb-24">
      <header>
        <h1 className="glow font-pixel text-5xl text-bright md:text-6xl">Contact</h1>
        <p className="mt-3 text-sm text-muted">
          <span className="text-phos">$</span> ./contact.app --open
        </p>
      </header>

      <div className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-12 md:grid-cols-[minmax(0,1fr)_360px]">
        <div className="max-w-xl">
          <p className="text-2xl leading-snug text-bright md:text-3xl">Building something with agents?</p>
          <p className="mt-4 font-sans text-[15px] leading-relaxed text-text/80">
            I&apos;m happy to talk about agentic systems, backend architecture, or roles where I can do both. Email is
            the fastest way to reach me.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${CONTACT.email}`} className="btn-primary px-5 py-3 text-base">
              <Mail size={18} aria-hidden="true" />
              Email me
            </a>
            <button type="button" onClick={copyEmail} className="btn-ghost px-4 py-3">
              {copied ? (
                <Check size={16} className="text-phos" aria-hidden="true" />
              ) : (
                <Copy size={16} aria-hidden="true" />
              )}
              <span aria-live="polite">{copied ? "Copied" : CONTACT.email}</span>
            </button>
          </div>

          <dl className="mt-10 space-y-2 text-[13px]">
            <div className="flex items-baseline">
              <dt className="text-muted">Based in</dt>
              <span className="leader" aria-hidden="true" />
              <dd className="text-bright">{CONTACT.location}</dd>
            </div>
            <div className="flex items-baseline">
              <dt className="text-muted">Phone</dt>
              <span className="leader" aria-hidden="true" />
              <dd>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="text-bright hover:text-phos">
                  {CONTACT.phone}
                </a>
              </dd>
            </div>
            <div className="flex items-baseline">
              <dt className="text-muted">Résumé</dt>
              <span className="leader" aria-hidden="true" />
              <dd>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-bright hover:text-phos"
                >
                  <FileText size={14} aria-hidden="true" />
                  Open PDF
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <section aria-labelledby="elsewhere">
          <h2 id="elsewhere" className="text-sm text-muted">
            Elsewhere
          </h2>
          <ul className="mt-3 border-t border-line">
            {CHANNELS.map(({ label, handle, url, Icon }) => (
              <li key={label} className="border-b border-line">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-2 py-3 text-[14px] text-text/85 transition-colors hover:bg-surface hover:text-bright"
                >
                  <Icon size={16} aria-hidden="true" className="text-phos/80 group-hover:text-phos" />
                  <span>{label}</span>
                  <span className="ml-auto text-[13px] text-muted group-hover:text-text">{handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default ContactApp;
