import { useSyncExternalStore } from "react";

// Tiny shared store so the desktop and the apps can talk to the bot without
// threading props through the router. `focus` is the desktop app in focus;
// `say` is a one-off line an app wants spoken, tagged with the page it was
// said on so it never leaks onto the next route.
let state = { focus: null, say: null };
const listeners = new Set();
let sayId = 0;

function set(next) {
  state = { ...state, ...next };
  listeners.forEach((fn) => fn());
}

export const botStore = {
  get: () => state,
  subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  },
  focus(appId) {
    if (state.focus !== appId) set({ focus: appId });
  },
  say(text) {
    sayId += 1;
    set({ say: text ? { text, path: window.location.pathname, id: sayId } : null });
  },
};

export function useBotState() {
  return useSyncExternalStore(botStore.subscribe, botStore.get);
}
