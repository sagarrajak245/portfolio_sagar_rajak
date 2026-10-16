import { useSyncExternalStore } from "react";

// Tiny shared store so the desktop can tell the bot which app is in focus
// without threading props through the router.
let state = { focus: null };
const listeners = new Set();

export const botStore = {
  get: () => state,
  subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  },
  focus(appId) {
    if (state.focus === appId) return;
    state = { ...state, focus: appId };
    listeners.forEach((fn) => fn());
  },
};

export function useBotState() {
  return useSyncExternalStore(botStore.subscribe, botStore.get);
}
