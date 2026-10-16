import { useLocation } from "react-router-dom";
import { appForPath } from "../os/apps";

// Stand-in window body until the real app lands in phase 3.
function Placeholder() {
  const app = appForPath(useLocation().pathname);
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h1 className="glow font-pixel text-5xl text-bright md:text-7xl">{app?.title ?? "Process not found"}</h1>
      <p className="mt-4 text-muted">{app?.blurb ?? "Nothing runs at this address."}</p>
    </div>
  );
}

export default Placeholder;
