import { defineConfig } from "vite-plugin-windicss"
import plugin from "windicss/plugin"

export default defineConfig({
  extract: {
    include: ["index.html", "src/**/*.{vue, ts, md}"],
  },
  darkMode: "class",
  theme: {
    minHeight: {
      prose: "40ch",
    },
    extend: {
      colors: {
        // The colors was inspired from kirito's elucidator sword color
        elucidator: {
          "50": "#f6f7f9",
          "100": "#edeff2",
          "200": "#e1e4ea",
          "300": "#c3c9d5",
          "400": "#a5adc0",
          "500": "#828da6",
          "600": "#63708c",
          "700": "#4e586e",
          "800": "#3f475a",
          "900": "#313745",
        },
        // The colors was inspired from kirito's dark repulser sword color
        "dark-repulser": {
          "50": "#FFE6BB",
          "100": "#FFE6BB",
          "200": "#FFCD78",
          "300": "#FFBF52",
          "400": "#F79D00",
          "500": "#F39A00",
          "600": "#E39000",
          "700": "#CD8200",
          "800": "#AA6C00",
          "900": "#593800",
        },
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        h1: {
          // @ts-expect-error
          fontSize: theme("fontSize.2xl"),
          // @ts-expect-error
          fontWeight: theme("fontWeight.bold"),
        },
        h2: {
          // @ts-expect-error
          fontSize: theme("fontSize.xl"),
          // @ts-expect-error
          fontWeight: theme("fontWeight.bold"),
        },
        h3: {
          // @ts-expect-error
          fontSize: theme("fontSize.lg"),
          // @ts-expect-error
          fontWeight: theme("fontWeight.bold"),
        },
        h4: {
          // @ts-expect-error
          fontSize: theme("fontSize.lg"),
          // @ts-expect-error
          fontWeight: theme("fontWeight.bold"),
        },
        h5: {
          // @ts-expect-error
          fontSize: theme("fontSize.lg"),
          // @ts-expect-error
          fontWeight: theme("fontWeight.bold"),
        },
        h6: {
          // @ts-expect-error
          fontSize: theme("fontSize.lg"),
          // @ts-expect-error
          fontWeight: theme("fontWeight.bold"),
        },
      })
    }),
  ],
})
