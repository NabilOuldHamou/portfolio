/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  purge: ["./src/**/*.svelte"],
  darkMode: true,
  theme: {
    extend: {
      colors: {
        'dark-charcoal-gray': '#111111',
        'white-smoke': '#efefef',
        'accent': '#f9f871',
        'lighter-gray': '#333333',
      },
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace']
      }
    }
  },
  plugins: []
};