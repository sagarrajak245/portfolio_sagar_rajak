import { AnimatePresence, motion } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { RESUME_URL } from "../constants";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "timeline", label: "Journey" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["hero", ...NAV_ITEMS.map((i) => i.id), "achievements"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Certifications sit inside the journey part of the page.
  const current = active === "achievements" ? "timeline" : active;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-colors duration-300 ${
          scrolled || isOpen ? "border-line bg-ink/80 backdrop-blur-md" : "border-transparent"
        }`}
      >
        <a href="#hero" className="font-display text-lg font-semibold tracking-tight text-white">
          Sagar Rajak
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={current === item.id ? "true" : undefined}
                className={`relative block rounded-lg px-3 py-1.5 text-sm transition-colors ${
                  current === item.id ? "text-white" : "text-muted hover:text-white"
                }`}
              >
                {current === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-lg bg-raised"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                {item.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost px-4 py-1.5">
              <FileText size={14} aria-hidden="true" />
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((o) => !o)}
          className="rounded-lg p-2 text-white md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl border border-line bg-ink/95 p-2 backdrop-blur-md md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm ${
                    current === item.id ? "bg-raised text-white" : "text-muted"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-signal"
              >
                <FileText size={14} aria-hidden="true" />
                Resume
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
