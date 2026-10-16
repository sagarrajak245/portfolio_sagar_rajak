/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Cyan-phosphor CRT palette
        ink: "#070B14",
        surface: "#0C1322",
        raised: "#111A2E",
        line: "#16213A",
        text: "#D6ECF0",
        muted: "#7C8AAA",
        bright: "#E8FBFC",
        phos: "#7FF3F7",
        signal: "#5CE1E6",
        violet: "#A78BFA",
      },
      fontFamily: {
        pixel: ['"Pixelify Sans"', '"JetBrains Mono"', "monospace"],
        display: ['"Pixelify Sans"', '"JetBrains Mono"', "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        blink: { "0%, 49%": { opacity: "1" }, "50%, 100%": { opacity: "0" } },
        flicker: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0.94" } },
        "power-on": {
          "0%": { clipPath: "inset(50% 48% 50% 48%)", filter: "brightness(3)" },
          "35%": { clipPath: "inset(49.6% 0 49.6% 0)", filter: "brightness(2.4)" },
          "100%": { clipPath: "inset(0 0 0 0)", filter: "brightness(1)" },
        },
      },
      animation: {
        blink: "blink 1.1s steps(1) infinite",
        flicker: "flicker 0.12s infinite",
        "power-on": "power-on 420ms cubic-bezier(0.2, 0.7, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
