/* eslint-disable react/prop-types */
import { ExternalLink } from "lucide-react";
import portrait from "../assets/sprofile2.webp";
import { ABOUT, ACHIEVEMENTS, HERO, SKILLS } from "../constants";

function Section({ title, command, children }) {
  return (
    <section className="mt-16">
      <h2 className="font-pixel text-2xl text-bright md:text-3xl">{title}</h2>
      <p className="mt-1 text-xs text-muted">
        <span className="text-phos">$</span> {command}
      </p>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function ProfileSys() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-40 pt-10 sm:px-6 md:pb-24">
      <header>
        <h1 className="glow font-pixel text-5xl text-bright md:text-6xl">Profile</h1>
        <p className="mt-3 text-sm text-muted">
          <span className="text-phos">$</span> cat profile.sys
        </p>
      </header>

      <div className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-10 md:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
        <div>
          <img
            src={portrait}
            alt={`Portrait of ${HERO.name}`}
            width={440}
            height={440}
            loading="lazy"
            decoding="async"
            className="aspect-square w-40 border border-phos/40 object-cover grayscale-[35%] md:w-full"
          />
          <dl className="mt-6 space-y-2 text-[13px]">
            {ABOUT.facts.map((f) => (
              <div key={f.label} className="flex items-baseline">
                <dt className="text-muted">{f.label}</dt>
                <span className="leader" aria-hidden="true" />
                <dd className="text-right text-bright">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="max-w-prose">
          <p className="text-lg text-bright">{HERO.role}</p>
          {ABOUT.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-4 font-sans text-[15px] leading-relaxed text-text/85">
              {p}
            </p>
          ))}
        </div>
      </div>

      <Section title="What I work on" command="ls ~/focus">
        <div className="grid gap-8 md:grid-cols-3">
          {ABOUT.focus.map((f) => (
            <div key={f.title} className="border-t border-phos/40 pt-4">
              <h3 className="text-[15px] text-bright">{f.title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-text/75">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Stack" command="pkg list --installed">
        <dl className="divide-y divide-line border-y border-line">
          {SKILLS.map((s) => (
            <div key={s.group} className="grid gap-2 py-4 md:grid-cols-[260px_minmax(0,1fr)] md:gap-6">
              <dt className="text-[13px] text-phos">{s.group}</dt>
              <dd>
                <ul className="flex flex-wrap gap-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="chip text-text/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Certificates and awards" command="ls ~/certs --sort=time">
        <ul className="divide-y divide-line border-y border-line">
          {ACHIEVEMENTS.map((a) => (
            <li key={a.title} className="grid gap-1 py-4 md:grid-cols-[4rem_minmax(0,1fr)_auto] md:items-baseline md:gap-6">
              <span className="text-[13px] text-muted">{a.year}</span>
              <div>
                <h3 className="text-[14px] text-bright">{a.title}</h3>
                <p className="mt-1 font-sans text-sm leading-relaxed text-text/70">{a.description}</p>
              </div>
              <a
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1.5 text-[13px] text-phos/80 hover:text-bright md:mt-0"
              >
                View certificate
                <ExternalLink size={13} aria-hidden="true" />
                <span className="sr-only">for {a.title} (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

export default ProfileSys;
