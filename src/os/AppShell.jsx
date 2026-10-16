import { useEffect, useRef } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { HERO } from "../constants";
import { appForPath } from "./apps";

// Full-screen window for one app: a path bar, Esc back to the desktop, and
// focus moved to the window so keyboard and screen-reader users land in it.
function AppShell() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const app = appForPath(pathname);
  const mainRef = useRef(null);

  useEffect(() => {
    document.title = app ? `${app.title} · ${HERO.name}` : `Not found · ${HERO.name}`;
    mainRef.current?.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }, [app]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") navigate("/");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate]);

  return (
    <div className="min-h-[100svh] pt-11">
      <div className="sticky top-11 z-20 flex h-9 items-center border-b border-phos/30 bg-ink/90 px-4 text-xs backdrop-blur-sm">
        <Link to="/" className="text-phos/70 hover:text-bright">
          ~/desktop
        </Link>
        <span className="mx-2 text-muted">/</span>
        <span className="text-bright">{app?.file ?? "404.exe"}</span>
        <Link to="/" className="ml-auto text-phos/70 hover:text-bright">
          <span className="hidden sm:inline">esc · </span>back to desktop
        </Link>
      </div>
      <main id="main" ref={mainRef} tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
    </div>
  );
}

export default AppShell;
