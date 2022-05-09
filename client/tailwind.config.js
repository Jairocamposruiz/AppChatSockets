module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
    "./styles/theme.ts",
  ],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        "navbar": "4rem",
        "content": "calc(100vh - 4rem)",
      },
      width: {
        "message": "90%",
      }
    },
  },
  plugins: [],
}
