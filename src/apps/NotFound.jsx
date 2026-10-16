import { Link, useLocation } from "react-router-dom";
import { APPS } from "../os/apps";

function NotFound() {
  const { pathname } = useLocation();
  return (
    <div className="mx-auto max-w-3xl px-4 pb-40 pt-16 sm:px-6">
      <p className="text-sm text-muted">
        <span className="text-phos">$</span> run {pathname}
      </p>
      <h1 className="glow mt-4 font-pixel text-5xl text-bright md:text-6xl">Process not found</h1>
      <p className="mt-4 font-sans text-[15px] leading-relaxed text-text/80">
        Nothing runs at <span className="font-mono text-bright">{pathname}</span>. It may have moved, or the link has a
        typo. These are the apps that do run:
      </p>
      <ul className="mt-8 border-t border-line">
        {APPS.map((app) => (
          <li key={app.id} className="border-b border-line">
            <Link
              to={app.path}
              className="flex items-baseline gap-4 px-2 py-3 text-[14px] transition-colors hover:bg-surface"
            >
              <span className="w-28 shrink-0 text-phos">{app.file}</span>
              <span className="text-text/80">{app.blurb}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/" className="btn-ghost mt-8">
        Back to the desktop
      </Link>
    </div>
  );
}

export default NotFound;
