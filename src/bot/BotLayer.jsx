import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useCapabilities from "../os/useCapabilities";
import BotBubble from "./BotBubble";
import BotFallback from "./BotFallback";
import { useBotState } from "./botStore";
import useBotDirector, { STAGE } from "./useBotDirector";

// three.js and the model arrive in their own chunk, after first paint.
const BotStage = lazy(() => import("./BotStage"));

function useMediaQuery(query) {
  const [match, setMatch] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatch(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);
  return match;
}

function useIdle(enabled) {
  const [idle, setIdle] = useState(false);
  useEffect(() => {
    if (!enabled) return undefined;
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(() => setIdle(true), { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    }
    const t = setTimeout(() => setIdle(true), 600);
    return () => clearTimeout(t);
  }, [enabled]);
  return idle;
}

function bubbleStyle(spot, height) {
  const room = (px) => ({ maxWidth: Math.max(160, Math.min(260, px)) });
  if (spot.bubble === "up-left") return { right: -24, bottom: height + 4, ...room(spot.x + 8) };
  if (spot.bubble === "side-right") {
    const left = (STAGE.w * spot.scale) / 2 - 6;
    return { left, bottom: height * 0.42, ...room(window.innerWidth - spot.x - left - 16) };
  }
  return { left: -24, bottom: height + 4, ...room(window.innerWidth - spot.x - 8) };
}

function BotLayer() {
  const { pathname } = useLocation();
  const { focus } = useBotState();
  const caps = useCapabilities();
  const wide = useMediaQuery("(min-width: 768px)");
  const idle = useIdle(caps.canRun3D);
  const [ready, setReady] = useState(!caps.canRun3D);
  const onReady = useCallback(() => setReady(true), []);

  const { spot, moveMs, facing, act, open, line, onActionDone, onBotClick } = useBotDirector({
    pathname,
    focus,
    wide,
    reducedMotion: caps.reducedMotion,
  });

  if (!spot) return null;
  const height = STAGE.h * spot.scale;

  return (
    <div
      className="pointer-events-none left-0 top-0 z-40"
      style={{
        position: spot.mode,
        transform: `translate3d(${spot.x}px, ${spot.y}px, 0)`,
        transition: moveMs ? `transform ${moveMs}ms linear` : "none",
      }}
    >
      <div
        className={`absolute transition-[transform,opacity] duration-300 ${ready ? "opacity-100" : "opacity-0"}`}
        style={{
          width: STAGE.w,
          height: STAGE.h,
          left: -STAGE.w / 2,
          bottom: 0,
          transform: `scale(${spot.scale})`,
          transformOrigin: "50% 100%",
        }}
      >
        <span
          aria-hidden="true"
          className="absolute bottom-1 left-1/2 h-4 w-28 -translate-x-1/2 rounded-[50%] bg-phos/20 blur-md"
        />
        {caps.canRun3D ? (
          idle && (
            <Suspense fallback={null}>
              <BotStage
                action={act}
                facing={facing}
                onActionDone={onActionDone}
                onReady={onReady}
                touch={caps.touch}
              />
            </Suspense>
          )
        ) : (
          <BotFallback />
        )}
        <button
          type="button"
          onClick={onBotClick}
          aria-label="Ask the guide bot for a tip"
          className="pointer-events-auto absolute inset-x-12 bottom-2 top-6 cursor-pointer rounded-full"
        />
      </div>
      {ready && <BotBubble line={line} open={open && !moveMs} style={bubbleStyle(spot, height)} reducedMotion={caps.reducedMotion} />}
    </div>
  );
}

export default BotLayer;
