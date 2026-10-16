import { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import BotLayer from "./bot/BotLayer";
import AppShell from "./os/AppShell";
import { BOOT_KEY } from "./os/apps";
import Boot from "./os/Boot";
import CrtOverlay from "./os/CrtOverlay";
import Desktop from "./os/Desktop";
import MenuBar from "./os/MenuBar";
import { sound } from "./os/sound";

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
    sound.play("boot");
    setBooted(true);
    try {
      localStorage.setItem(BOOT_KEY, "1");
    } catch {
      /* private mode: boot again next time */
    }
  }, []);

  // Opening an app chirps up, going home chirps down. Not on the first render.
  const prevPath = useRef(pathname);
  useEffect(() => {
    if (prevPath.current === pathname) return;
    sound.play(pathname === "/" ? "close" : "open");
    prevPath.current = pathname;
  }, [pathname]);

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
            {/* Each screen powers on like a CRT. Clip-path, not transform, so
                the bot's layout measurements stay true mid-animation. */}
            <div key={pathname} className="animate-power-on">
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
            </div>
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
