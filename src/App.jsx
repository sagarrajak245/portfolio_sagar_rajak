import { lazy, Suspense, useCallback, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import BotLayer from "./bot/BotLayer";
import AppShell from "./os/AppShell";
import { BOOT_KEY } from "./os/apps";
import Boot from "./os/Boot";
import CrtOverlay from "./os/CrtOverlay";
import Desktop from "./os/Desktop";
import MenuBar from "./os/MenuBar";

const AgentsLog = lazy(() => import("./apps/AgentsLog"));
const ProjectsVol = lazy(() => import("./apps/ProjectsVol"));
const ProfileSys = lazy(() => import("./apps/ProfileSys"));
const ContactApp = lazy(() => import("./apps/ContactApp"));
const NotFound = lazy(() => import("./apps/NotFound"));

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
                <Route path="/agents" element={<AgentsLog />} />
                <Route path="/projects" element={<ProjectsVol />} />
                <Route path="/profile" element={<ProfileSys />} />
                <Route path="/contact" element={<ContactApp />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
          <BotLayer />
        </>
      ) : (
        <Boot onEnter={enter} />
      )}

      <CrtOverlay />
    </>
  );
}

export default App;
