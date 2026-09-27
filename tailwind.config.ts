import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E01020",
          "red-dark": "#B00D1A",
          "red-light": "#FF1A2E",
          black: "#080808",
          "gray-900": "#111111",
          "gray-800": "#1A1A1A",
          "gray-700": "#242424",
          "gray-600": "#2E2E2E",
          silver: "#9BA3AF",
          "silver-light": "#C9D1DC",
          white: "#F8F8F8",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        apple: ["-apple-system", "BlinkMacSystemFont", '"SF Pro Display"', '"Segoe UI"', "Roboto", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #E01020 0%, #B00D1A 100%)",
        "dark-gradient": "linear-gradient(180deg, #111111 0%, #080808 100%)",
        "hero-gradient":
          "radial-gradient(ellipse at 70% 50%, rgba(224,16,32,0.12) 0%, transparent 60%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(26,26,26,0.9) 0%, rgba(17,17,17,0.95) 100%)",
        "red-glow":
          "radial-gradient(ellipse at center, rgba(224,16,32,0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        "brand-red": "0 0 30px rgba(224,16,32,0.2)",
        "brand-red-sm": "0 0 12px rgba(224,16,32,0.15)",
        card: "0 4px 24px rgba(0,0,0,0.4)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.6)",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "scroll-left": "scroll-left 30s linear infinite",
        "scroll-left-slow": "scroll-left 50s linear infinite",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 2s infinite linear",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
