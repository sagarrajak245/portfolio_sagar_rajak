import { lazy, Suspense, useCallback, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AppShell from "./os/AppShell";
import { BOOT_KEY } from "./os/apps";
import Boot from "./os/Boot";
import CrtOverlay from "./os/CrtOverlay";
import Desktop from "./os/Desktop";
import MenuBar from "./os/MenuBar";

const Placeholder = lazy(() => import("./apps/Placeholder"));

function readBooted() {
  try {
    return localStorage.getItem(BOOT_KEY) === "1";
  } catch {
    return false;
  }
}

function App() {
  const { pathname } = useLocation();
  // Boot only on a first visit that lands on the desktop; deep links skip it.
  const [booted, setBooted] = useState(() => pathname !== "/" || readBooted());

  const enter = useCallback(() => {
    setBooted(true);
    try {
      localStorage.setItem(BOOT_KEY, "1");
    } catch {
      /* private mode: boot again next time */
    }
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] bg-phos px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-14"
      >
        Skip to content
      </a>

      {booted ? (
        <>
          <MenuBar />
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Desktop />} />
              <Route element={<AppShell />}>
                <Route path="/agents" element={<Placeholder />} />
                <Route path="/projects" element={<Placeholder />} />
                <Route path="/profile" element={<Placeholder />} />
                <Route path="/contact" element={<Placeholder />} />
                <Route path="*" element={<Placeholder />} />
              </Route>
            </Routes>
          </Suspense>
        </>
      ) : (
        <Boot onEnter={enter} />
      )}

      <CrtOverlay />
    </>
  );
}

export default App;
