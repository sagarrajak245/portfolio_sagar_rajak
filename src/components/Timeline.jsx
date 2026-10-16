import { TIMELINE } from "../constants";
import SectionHeading from "../ui/SectionHeading";

const Timeline = () => {
  return (
    <div className="section pb-12 md:pb-16">
      <SectionHeading title="Journey">
        From an AI & Data Science classroom to a founding engineering team, most recent first.
      </SectionHeading>

      <ol className="relative ml-1 border-l border-line">
        {TIMELINE.map((e, i) => (
          <li key={`${e.year}-${e.title}`} className="relative grid gap-1 pb-10 pl-8 last:pb-0 md:grid-cols-[90px_1fr] md:gap-8">
            <span
              aria-hidden="true"
              className={`absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full ring-4 ring-ink ${
                i === 1 ? "bg-signal" : "bg-[#3A4566]"
              }`}
            />
            <p className="font-display text-lg font-semibold text-muted">{e.year}</p>
            <div>
              <h3 className="text-lg font-semibold text-white">{e.title}</h3>
              <p className="text-sm text-signal/90">{e.place}</p>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">{e.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
