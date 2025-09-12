


// tailwind.config.js
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      keyframes: {
        fly: {
          "0%":   { transform: "translateX(0) translateY(0) rotate(0deg)" },
          "25%":  { transform: "translateX(80px) translateY(-40px) rotate(8deg)" },
          "50%":  { transform: "translateX(160px) translateY(-10px) rotate(-6deg)" },
          "75%":  { transform: "translateX(240px) translateY(-50px) rotate(10deg)" },
          "100%": { transform: "translateX(320px) translateY(0) rotate(0deg)" },
        },
      },
      animation: {
        fly: "fly 8s linear infinite",
        "fly-slow": "fly 12s linear infinite", // দ্বিতীয় প্লেনটা একটু ধীরগতি
      }
    }
  },
  plugins: [],
}
