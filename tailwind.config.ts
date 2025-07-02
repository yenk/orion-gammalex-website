import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // GammaLex Brand Colors - Sage Green, Terracotta Clay, Dark Bronze
        sage: {
          50: "#f6f8f6",
          100: "#e8ede8",
          200: "#d1dbd1",
          300: "#afc0af",
          400: "#87a087",
          500: "#6b8a6b", // Primary sage green
          600: "#557055",
          700: "#465a46",
          800: "#3a4a3a",
          900: "#323e32",
        },
        terracotta: {
          50: "#fdf6f3",
          100: "#fbeae3",
          200: "#f6d4c7",
          300: "#efb59e",
          400: "#e68d6f",
          500: "#dc6b47", // Primary terracotta clay
          600: "#cd5233",
          700: "#ab4129",
          800: "#8a3626",
          900: "#702f24",
        },
        bronze: {
          50: "#f7f5f3",
          100: "#ede8e3",
          200: "#ddd2c7",
          300: "#c7b5a3",
          400: "#b0947c",
          500: "#9d7c5f", // Primary dark bronze
          600: "#8f6b53",
          700: "#775746",
          800: "#62493d",
          900: "#513d33",
        },
        charcoal: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d", // Primary charcoal
        },
        'gammalex-blue': '#1877FF',
        'gammalex-orange': '#FF8800',
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
        satoshi: ["Satoshi", "system-ui", "sans-serif"],
      },
      fontSize: {
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
