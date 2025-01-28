/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
         textprimary: "#FCD34D",
         textsecondary: "#9CA3AF",
         primaryBackground: "black",
         secondaryBackground: "#02060F",
         primaryYellow: "#FCD34D",
      },
      screens: {
         "3xl": "1700px",
      },
      spacing: {
         97: "26rem",
         98: "38rem",
         99: "30rem",
         100: "32rem",
         101: "34rem",
         102: "36rem",
      },
      backgroundImage: {
         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
         "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
         ProfileAnimate: "ProfileAnimate 3s infinite",
         slideBottom: "slideBottom 1s ease forwards",
         slideTop: "slideTop 1s ease forwards",
         slideRight: "slideRight 2s  ease forwards",
         fadeIn: "fadeIn 0.5s ease-in-out forwards",
         fadeOut: "fadeOut 0.2s ease-in-out forwards",
      },
      keyframes: {
         spin: {
            to: {
               transform: "rotate(360deg)",
            },
         },
         ping: {
            "75%, 100%": {
               transform: "scale(2)",
               opacity: "0",
            },
         },
         pulse: {
            "50%": {
               opacity: ".5",
            },
         },
         bounce: {
            "0%, 100%": {
               transform: "translateY(-25%)",
               animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
            },
            "50%": {
               transform: "none",
               animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
            },
         },

         ProfileAnimate: {
            "0%, 100%": {
               transform: "translateY(-5%)",
               animationTimingFunction: "linear",
            },
            "50%": {
               transform: "none",
               animationTimingFunction: "linear",
            },
         },

         slideBottom: {
            "0%": {
               transform: "translateY(-50px)",
               opacity: "0",
               animationTimingFunction: "ease-in",
            },
            "100%": {
               transform: "translateY(0px)",
               opacity: "1",
               animationTimingFunction: "ease-in",
            },
         },

         slideTop: {
            "0%": {
               transform: "translateY(50px)",
               opacity: "0",
               animationTimingFunction: "ease-in",
            },
            "100%": {
               transform: "translateY(0px)",
               opacity: "1",
               animationTimingFunction: "ease-in",
            },
         },

         slideRight: {
            "0%": {
               width: "0%",
               animationTimingFunction: "ease-in",
            },
            "100%": {
               animationTimingFunction: "ease-in",
            },
         },
         fadeIn: {
            "0%": { opacity: "0", visibility: "hidden" },
            "100%": { opacity: "1", visibility: "visible" },
         },
         fadeOut: {
            "0%": { opacity: "1", visibility: "visible" },
            "100%": { opacity: "0", visibility: "hidden" },
         },
      },

      transitionProperty: {
         "opacity-visibility": "opacity, visibility",
      },
      transitionDuration: {
         "500": "500ms",
      },
      transitionTimingFunction: {
         "ease-in-out": "ease-in-out",
      },
      opacity: {
         "0": "0",
         "100": "1",
      },
      visibility: {
         visible: "visible",
         invisible: "hidden",
      },
   },
  },
  plugins: [],
};
