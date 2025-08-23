// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {extend: {
      colors: {
        // Left Column
        "eras-forest": "#697C6C",
        "eras-mint": "#B9D3B5",
        "eras-gold": "#D9BA80",
        "eras-peach": "#F5CA90",
        "eras-lavender": "#A793AA",
        "eras-lilac": "#C5AFC9",
        "eras-wine": "#6F454A",
        "eras-rose": "#8F545F",
        "eras-slate": "#83919D",
        "eras-sky": "#ACD3E5",

        // Right Column
        "eras-charcoal": "#423D41",
        "eras-stone": "#9D9698",
        "eras-mauve": "#AF8495",
        "eras-pink": "#C895AA",
        "eras-silver": "#BDBCB8",
        "eras-ash": "#D1CFC8",
        "eras-white": "#EDEEEF",
        "eras-copper": "#CB9F8F",
        "eras-navy": "#52596C",
        "eras-indigo": "#535769",
      },
    },},
  },
  plugins: [],
};
