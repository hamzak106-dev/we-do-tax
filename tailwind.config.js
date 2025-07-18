// tailwind.config.js
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}", // if using Next.js app directory
    ],
    theme: {
      extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.6) 100%)',
        },
      },
    },
    plugins: [],
  };
  