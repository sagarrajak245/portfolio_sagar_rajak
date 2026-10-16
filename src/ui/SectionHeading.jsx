/* eslint-disable react/prop-types */
export default function SectionHeading({ title, children }) {
  return (
    <header className="mb-12 max-w-2xl md:mb-16">
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{children}</p>}
    </header>
  );
}
