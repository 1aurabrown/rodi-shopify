
const spacing = {
  // Theme-specific spacing
  // Add here

  'announcement': 'var(--announcement-bar-height)',
  'header': 'var(--header-height)',
  'screen-less-header': 'var(--screen-less-header)',
  'screen-less-announcement': 'var(--screen-less-announcement)',
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
  theme: {
    colors: {
      'transparent': 'transparent',
      'white': '#ffff',
      'black': "#333333",
      'current': 'currentColor'
    },
    fontSize: {
      paragraph: ["0.8125rem", { lineHeight: "1.6em" }],
      default: ["0.8125rem", { lineHeight: "initial" }],
      uppercase: ["0.8125rem", { lineHeight: "initial", letterSpacing: "-0.02em" }],
    },
    fontFamily: {
      figtree: ['Figtree', 'sans-serif']
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

