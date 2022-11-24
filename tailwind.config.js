
const spacing = {
  // Theme-specific spacing
  // Add here

  'announcement': 'var(--announcement-bar-height)',
  'header': 'var(--header-height)',
  'screen-less-header': 'var(--screen-less-header)',
  // General spacing
  // Add more granular measurements as needed
  'thin': '.125rem',
  // Relative to current font size
  '3rel': '0.75em',
  '6rel': '1.5em',
   // fractions
  '1/2': 100.0 * 1/2 + '%',
  '1/3': 100.0 * 1/3 + '%',
  '2/3': 100.0 * 2/3 + '%',
  '1/4': 100.0 * 1/4 + '%',
  '2/4': 100.0 * 2/4 + '%',
  '3/4': 100.0 * 3/4 + '%',
  '1/6': 100.0 * 1/6 + '%',
  '2/6': 100.0 * 2/6 + '%',
  '3/6': 100.0 * 3/6 + '%',
  '4/6': 100.0 * 4/6 + '%',
  '5/6': 100.0 * 5/6 + '%',
  '1/8': 100.0 * 1/8 + '%',
  '2/8': 100.0 * 2/8 + '%',
  '3/8': 100.0 * 3/8 + '%',
  '4/8': 100.0 * 4/8 + '%',
  '5/8': 100.0 * 5/8 + '%',
  '6/8': 100.0 * 6/8 + '%',
  '7/8': 100.0 * 7/8 + '%',
  // percents
  '0-per': '0%',
  '5-per': '5%',
  '10-per': '10%',
  '15-per': '15%',
  '20-per': '20%',
  '25-per': '25%',
  '30-per': '30%',
  '35-per': '35%',
  '40-per': '40%',
  '45-per': '45%',
  '50-per': '50%',
  '55-per': '55%',
  '60-per': '60%',
  '65-per': '65%',
  '70-per': '70%',
  '75-per': '75%',
  '80-per': '80%',
  '85-per': '85%',
  '90-per': '90%',
  '95-per': '95%',
};

for (let i = 0; i < 101; i++) {
  spacing[i] = `${i/4.000}rem`
}


module.exports = {
  content: ["./**/*.{liquid,svg,js}"],
  mode: 'jit',
  plugins: [],
  safelist: [{ pattern: /junip/ }],
  theme: {
    colors: {
      'transparent': 'transparent',
      'black': '#000000',
      'white': '#ffff',
      'current': 'currentColor',
      'blue': '#0400AA',
      'light-blue': '#8CC0F4',
      'gold': '#FFC022',
      'red': '#FF0013',
      'orange': '#FF8B0D',
      'pink':'#FFE1F1',
      'lavender': '#E7C7F6',
      'violet': '#9028CF',
      'green': '#037719',
      'lime': '#CFE503',
      'product-primary': '#8CC0F4',
      'product-secondary': '#FFC022',
    },
    fontSize: {
      h1: ["3.875rem", {lineHeight: "1.1", letterSpacing: '-0.03rem', fontWeight: '700'}], // 62
      h2: ["3rem", {lineHeight: "1.1", letterSpacing: '-0.02rem', fontWeight: '700'}], // 48
      h3: ["2.5rem", {lineHeight: "1.1", letterSpacing: '-0.02rem', fontWeight: '700'}], // 40
      h4: ["2rem", {lineHeight: "1.1", letterSpacing: '-0.02rem', fontWeight: '700'}], // 32
      h5: ["1.5rem", {lineHeight: "1.1", letterSpacing: '-0.02rem', fontWeight: '700'}],// 24
      h6: ["1.25rem", {lineHeight: "1.1", letterSpacing: '-0.02rem', fontWeight: '700'}],// 20
      h7: ["1rem", {lineHeight: "1.1", letterSpacing: '-0.01rem', fontWeight: '700'}],// 16

      "h2-emphasis": ["2.8125rem", {lineHeight: "1", letterSpacing: '-0.03rem', fontWeight: 'normal'}],
      "h4-emphasis": ["2rem", {lineHeight: "1", letterSpacing: '-0.02rem', fontWeight: 'normal'}],
      "h5-emphasis": ["1.5rem", {lineHeight: "1", letterSpacing: '-0.02rem', fontWeight: 'normal'}],

      button: ["2.8125rem", {lineHeight: "1", letterSpacing: '0',}], // 45

      "body-lg-emphasized": ["1.25rem", {lineHeight: "1.4", fontWeight: '700', letterSpacing: '-0.02rem'}], // 20
      "body-lg": ["1.25rem", {lineHeight: "1.4", fontWeight: 'normal', letterSpacing: '-0.01rem'}], // 20

      "body-md-emphasized": ["1rem", {lineHeight: "1.4", fontWeight: '700', letterSpacing: '-0.01rem'}], //16
      "body-md": ["1rem", {lineHeight: "1.4", fontWeight: 'normal',  letterSpacing: '0'}], //16

      "body-sm-emphasized": ["0.875rem", {lineHeight: "1.4", fontWeight: '700', letterSpacing: '-0.01rem'}], //14
      "body-sm": ["0.875rem", {lineHeight: "1.4", fontWeight: 'normal', letterSpacing: '0'}], //16

    },
    fontFamily: {
      nordic: ['PTF Nordic Round', 'sans-serif'],
      hw: ['HW Left', 'sans-serif'],
    },
    letterSpacing: {
      3: "-0.03rem",
      2: "-0.02rem",
      1: "-0.01rem",
      none: "0"
    },
    lineHeight: {
      body: "1.4",
      medium: "1.1",
      heading: "1",
      tight: ".9"
    },
    extend: {
      spacing: spacing,
      borderWidth: {
        '6': '6px'
      },
      gridTemplateColumns: {
        // Simple 15 column grid
        '15': 'repeat(15, minmax(0, 1fr))'
      }
    }
  }
}

