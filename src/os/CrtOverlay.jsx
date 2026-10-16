import useReducedMotion from "../ui/useReducedMotion";

// Scanlines, vignette and a faint flicker over everything. Pure CSS, no
// pointer events, so it costs one composited layer.
function CrtOverlay() {
  const reduced = useReducedMotion();
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-50">
      <div
        className={`absolute inset-0 ${reduced ? "" : "animate-flicker"}`}
        style={{
          background:
            "repeating-linear-gradient(to bottom, rgba(0,0,0,0.22) 0px, rgba(0,0,0,0.22) 1px, transparent 1px, transparent 3px)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)" }}
      />
      <div className="absolute inset-0 hidden rounded-[22px] shadow-[0_0_0_14px_#03050A] md:block" />
    </div>
  );
}

export default CrtOverlay;
