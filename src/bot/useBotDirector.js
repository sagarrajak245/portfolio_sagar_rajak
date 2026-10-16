import { useCallback, useEffect, useRef, useState } from "react";
import { BOT_LINES } from "../constants/bot";
import { APPS } from "../os/apps";

export const STAGE = { w: 200, h: 240 };

const TURN = Math.PI / 2;
const BUBBLE_MS = 7000;

// Where the bot should stand. `x` is the centre of its feet, `y` the floor
// line, both in px; `mode` says whether that's relative to the viewport or
// the document (the mobile desktop scrolls, so the bot scrolls with it).
function computeSpot(pathname, focus, wide) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  if (pathname === "/") {
    const anchor = document.getElementById("bot-anchor")?.getBoundingClientRect();
    if (!wide) {
      if (!anchor) return null;
      return {
        key: "home",
        mode: "absolute",
        x: anchor.left + 64 + window.scrollX,
        y: anchor.bottom + window.scrollY,
        scale: 0.55,
        bubble: "side-right",
        gesture: "Wave",
      };
    }

    // On wide screens the bot walks a floor line under the name and only
    // moves sideways, to the column of whichever app is in focus.
    if (!anchor) return null;
    const floor = Math.min(anchor.top + 215, vh - 8);
    const home = {
      key: "home",
      mode: "fixed",
      x: anchor.left + anchor.width / 2,
      y: floor,
      scale: 0.8,
      bubble: "side-right",
      gesture: "Wave",
    };
    const app = focus && APPS.find((a) => a.id === focus);
    if (!app) return home;

    const left = app.corner.endsWith("l");
    const twin = document.querySelector(`[data-app="${left ? "profile" : "contact"}"]`)?.getBoundingClientRect();
    if (!twin) return home;
    return {
      ...home,
      key: app.id,
      x: left ? twin.right + 120 : twin.left - 120,
      bubble: left ? "up-left" : "up-right",
      gesture: "Yes",
    };
  }

  return {
    key: "dock",
    mode: "fixed",
    x: vw - (wide ? 84 : 52),
    y: vh - 10,
    scale: wide ? 0.5 : 0.38,
    bubble: "up-left",
    gesture: "ThumbsUp",
  };
}

function lineFor(pathname, focus, tip) {
  if (pathname === "/") return focus ? BOT_LINES.apps[focus] : BOT_LINES.greet;
  const tips = BOT_LINES.routes[pathname];
  return tips ? tips[tip % tips.length] : BOT_LINES.lost;
}

// The bot's state machine: idle -> walk to a spot -> arrival gesture -> idle.
// Leaving the desktop docks it in the corner, where clicks cycle tips.
export default function useBotDirector({ pathname, focus, wide, reducedMotion }) {
  const [spot, setSpot] = useState(null);
  const [moveMs, setMoveMs] = useState(0);
  const [facing, setFacing] = useState(0);
  const [act, setAct] = useState({ id: 0, clip: "Idle", once: false });
  const [tip, setTip] = useState(0);
  const [open, setOpen] = useState(true);
  const [layout, setLayout] = useState(0);
  const prevRef = useRef(null);
  const idRef = useRef(0);

  const play = useCallback((clip, once = true) => {
    idRef.current += 1;
    setAct({ id: idRef.current, clip, once });
  }, []);

  // Re-measure when the viewport changes or web fonts swap in.
  useEffect(() => {
    let raf = 0;
    const bump = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setLayout((n) => n + 1));
    };
    window.addEventListener("resize", bump);
    document.fonts?.ready.then(bump);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", bump);
    };
  }, []);

  useEffect(() => {
    setSpot(computeSpot(pathname, focus, wide));
  }, [pathname, focus, wide, layout]);

  // Walk to each new spot, then gesture on arrival. The arrival timer lives
  // in a ref so a re-measure of the same spot doesn't cancel a walk.
  const walkRef = useRef(0);
  useEffect(() => () => clearTimeout(walkRef.current), []);
  useEffect(() => {
    if (!spot) return;
    const prev = prevRef.current;
    prevRef.current = spot;
    if (prev && prev.key === spot.key) return;

    clearTimeout(walkRef.current);
    const arrive = () => {
      setMoveMs(0);
      setFacing(0);
      play(spot.gesture);
    };
    const dx = prev ? spot.x - prev.x : 0;
    const dist = prev ? Math.hypot(dx, spot.y - prev.y) : 0;
    if (!prev || reducedMotion || prev.mode !== spot.mode || dist < 24) {
      arrive();
      return;
    }

    const ms = Math.round(Math.min(1600, Math.max(400, dist * 2)));
    setMoveMs(ms);
    setFacing(dx >= 0 ? TURN : -TURN);
    play("Walking", false);
    walkRef.current = setTimeout(arrive, ms);
  }, [spot, reducedMotion, play]);

  // In apps the bubble pops up on arrival and tucks away after a while.
  useEffect(() => {
    setTip(0);
    setOpen(true);
  }, [pathname]);

  useEffect(() => {
    if (!open || pathname === "/") return undefined;
    const t = setTimeout(() => setOpen(false), BUBBLE_MS);
    return () => clearTimeout(t);
  }, [open, tip, pathname]);

  const onActionDone = useCallback(
    (id) => {
      if (id === idRef.current) play("Idle", false);
    },
    [play]
  );

  const onBotClick = useCallback(() => {
    if (pathname === "/") {
      play("Wave");
      setOpen(true);
      return;
    }
    if (open) setTip((n) => n + 1);
    setOpen(true);
    play("Yes");
  }, [pathname, open, play]);

  return {
    spot,
    moveMs,
    facing,
    act,
    open,
    line: lineFor(pathname, focus, tip),
    onActionDone,
    onBotClick,
  };
}
