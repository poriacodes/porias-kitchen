module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      margin: {
        320: "320px",
      },
      width: {
        150: "150px",
        190: "190px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        80: "80px",
        150: "150px",
        225: "225px",
        300: "300px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      colors: {
        primary: "#0E9E2C",
        cardOverlay: "rgba(256,256,256,0.9)",
        lighttextGray: "#ffffff",
        card: "rgba(256,256,256,0.4)",
        headingColor: "#1bc23e",
        textColor: "#ffffff",
        activeText: "#D6230A",
        gradientBg: "rgba(116, 249, 105,0.4)",
        whiteAlpha: "rgba(255,255,255,0.2)",
        cardColor: "#f5f5f5",
        cartBg: "#282a2c",
        cartNumBg: "#1bc23e",
        cartItem: "#2e3033",
        cartTotal: "#343739",
        primaryColor:"#1bc23e",
        rowBg: "rgba(80, 200, 120, 0.1)",
        rowBg2: "rgba(128, 255, 114, 0.3)",
    
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};