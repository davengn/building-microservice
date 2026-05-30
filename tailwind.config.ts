import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,md,mdx}",
    "./components/**/*.{ts,tsx,md,mdx}",
    "./content/**/*.{md,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          pressed: "var(--color-primary-pressed)",
          deep: "var(--color-primary-deep)",
          foreground: "var(--color-on-primary)",
        },
        brand: {
          navy: "var(--color-brand-navy)",
          "navy-deep": "var(--color-brand-navy-deep)",
          "navy-mid": "var(--color-brand-navy-mid)",
          orange: "var(--color-brand-orange)",
          pink: "var(--color-brand-pink)",
          purple: "var(--color-brand-purple)",
          teal: "var(--color-brand-teal)",
          green: "var(--color-brand-green)",
          yellow: "var(--color-brand-yellow)",
        },
        canvas: "var(--color-canvas)",
        surface: {
          DEFAULT: "var(--color-surface)",
          soft: "var(--color-surface-soft)",
        },
        hairline: {
          DEFAULT: "var(--color-hairline)",
          soft: "var(--color-hairline-soft)",
          strong: "var(--color-hairline-strong)",
        },
        ink: {
          deep: "var(--color-ink-deep)",
          DEFAULT: "var(--color-ink)",
          charcoal: "var(--color-charcoal)",
          slate: "var(--color-slate)",
          steel: "var(--color-steel)",
          stone: "var(--color-stone)",
          muted: "var(--color-muted)",
        },
        tint: {
          peach: "var(--color-card-tint-peach)",
          rose: "var(--color-card-tint-rose)",
          mint: "var(--color-card-tint-mint)",
          lavender: "var(--color-card-tint-lavender)",
          sky: "var(--color-card-tint-sky)",
          yellow: "var(--color-card-tint-yellow)",
          "yellow-bold": "var(--color-card-tint-yellow-bold)",
          cream: "var(--color-card-tint-cream)",
          gray: "var(--color-card-tint-gray)",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-notion-sans)",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgb(15 15 15 / 0.04)",
        card: "0 4px 12px 0 rgb(15 15 15 / 0.08)",
        mockup: "0 24px 48px -8px rgb(15 15 15 / 0.20)",
      },
      maxWidth: {
        content: "1280px",
        reader: "76rem",
      },
    },
  },
  plugins: [],
};

export default config;
