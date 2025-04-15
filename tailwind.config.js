{import('tailwindcss').Config} 
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    corePlugins: {
      padding: true, // Ensure this isn't disabled
    },
    theme: {
      extend: {},
    },
    plugins: [],
  }
  