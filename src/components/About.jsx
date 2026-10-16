import portrait from "../assets/sprofile2.png";
import { ABOUT } from "../constants";
import SectionHeading from "../ui/SectionHeading";

function About() {
  return (
    <div className="section">
      <SectionHeading title="About">
        Agents are only as reliable as the systems they run on. I work on both.
      </SectionHeading>

      <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <img
            src={portrait}
            alt="Portrait of Sagar Rajak"
            width="500"
            height="500"
            loading="lazy"
            className="aspect-square w-48 rounded-2xl border border-line object-cover sm:w-56 lg:w-full"
          />
          <dl className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm lg:grid-cols-1">
            {ABOUT.facts.map((f) => (
              <div key={f.label}>
                <dt className="text-muted">{f.label}</dt>
                <dd className="mt-0.5 text-text">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <div className="max-w-prose space-y-5 text-lg leading-relaxed text-text/85">
            {ABOUT.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {ABOUT.focus.map((f) => (
              <div key={f.title} className="bg-surface p-6">
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
