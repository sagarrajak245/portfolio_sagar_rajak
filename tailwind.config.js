/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F1C",
        surface: "#121829",
        raised: "#182036",
        line: "#1F2740",
        text: "#E7E9F2",
        muted: "#8B92AB",
        signal: "#5CE1E6",
        violet: "#A78BFA",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "Inter", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
