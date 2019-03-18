const colors = {
  "blue-dark": "#064872",
  grey: "#6e7d95",
  "grey-light": "#f1f5f8",
  white: "#ffffff",
  teal: "#2ad9c2",
  "teal-light": "#00ebcb",
  smoke: "rgba(0, 0, 0, 0.25)"
};

module.exports = {
  colors,
  screens: {
    lg: "992px",
    xl: "1200px"
  },
  fonts: {
    sans: [
      "system-ui",
      "BlinkMacSystemFont",
      "-apple-system",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif"
    ],
    serif: [
      "Constantia",
      "Lucida Bright",
      "Lucidabright",
      "Lucida Serif",
      "Lucida",
      "DejaVu Serif",
      "Bitstream Vera Serif",
      "Liberation Serif",
      "Georgia",
      "serif"
    ],
    mono: [
      "Menlo",
      "Monaco",
      "Consolas",
      "Liberation Mono",
      "Courier New",
      "monospace"
    ]
  },
  textSizes: {
    xs: ".75rem", // 12px
    sm: ".875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem" // 48px
  },
  fontWeights: {
    light: 300,
    normal: 400,
    bold: 700
  },
  leading: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    loose: 2
  },
  tracking: {
    tight: "-0.05em",
    normal: "0",
    wide: "0.05em"
  },
  textColors: colors,
  backgroundColors: colors,
  backgroundSize: {
    auto: "auto",
    cover: "cover",
    contain: "contain"
  },
  borderWidths: {
    default: "1px",
    "0": "0",
    "2": "2px",
    "4": "4px",
    "8": "8px"
  },
  borderColors: global.Object.assign({ default: colors.teal }, colors),
  borderRadius: {
    none: "0",
    sm: ".125rem",
    default: ".25rem",
    lg: ".5rem",
    full: "9999px"
  },
  width: {
    auto: "auto",
    px: "1px",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "24": "6rem",
    "32": "8rem",
    "48": "12rem",
    "64": "16rem",
    "1/2": "50%",
    "1/3": "33.33333%",
    "2/3": "66.66667%",
    "1/4": "25%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.66667%",
    "5/6": "83.33333%",
    full: "100%",
    screen: "100vw"
  },
  height: {
    auto: "auto",
    px: "1px",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "24": "6rem",
    "32": "8rem",
    "48": "12rem",
    "64": "16rem",
    full: "100%",
    screen: "100vh"
  },
  minWidth: {
    "0": "0",
    full: "100%"
  },
  minHeight: {
    "0": "0",
    full: "100%",
    screen: "100vh"
  },
  maxWidth: {
    xs: "20rem",
    sm: "30rem",
    md: "40rem",
    lg: "50rem",
    xl: "60rem",
    "2xl": "70rem",
    "3xl": "80rem",
    "4xl": "90rem",
    "5xl": "100rem",
    full: "100%"
  },
  maxHeight: {
    full: "100%",
    screen: "100vh"
  },
  padding: {
    px: "1px",
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "6": "1.5rem",
    "8": "2rem"
  },
  margin: {
    auto: "auto",
    px: "1px",
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "6": "1.5rem",
    "8": "2rem"
  },
  negativeMargin: {
    px: "1px",
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "6": "1.5rem",
    "8": "2rem"
  },
  shadows: {
    default: "0 2px 4px 0 rgba(0,0,0,0.10)",
    md: "0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)",
    lg: "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none"
  },
  zIndex: {
    auto: "auto",
    "0": 0,
    "10": 10,
    "20": 20,
    "30": 30,
    "40": 40,
    "50": 50
  },
  opacity: {
    "0": "0",
    "25": ".25",
    "50": ".5",
    "75": ".75",
    "100": "1"
  },
  svgFill: {
    current: "currentColor"
  },
  svgStroke: {
    current: "currentColor"
  },
  modules: {
    appearance: [],
    backgroundAttachment: [],
    backgroundColors: ["hover"],
    backgroundPosition: [],
    backgroundRepeat: [],
    backgroundSize: [],
    borderColors: ["hover"],
    borderRadius: [],
    borderStyle: [],
    borderWidths: [],
    cursor: [],
    display: ["responsive"],
    flexbox: ["responsive"],
    float: ["responsive"],
    fonts: [],
    fontWeights: ["hover"],
    height: ["responsive"],
    leading: [],
    lists: [],
    margin: ["responsive"],
    maxHeight: ["responsive"],
    maxWidth: ["responsive"],
    minHeight: ["responsive"],
    minWidth: ["responsive"],
    negativeMargin: ["responsive"],
    opacity: false,
    overflow: ["responsive"],
    padding: ["responsive"],
    pointerEvents: [],
    position: ["responsive"],
    resize: false,
    shadows: [],
    svgFill: [],
    svgStroke: [],
    textAlign: ["responsive"],
    textColors: ["hover"],
    textSizes: ["responsive"],
    textStyle: ["hover"],
    tracking: [],
    userSelect: false,
    verticalAlign: [],
    visibility: [],
    whitespace: ["responsive"],
    width: ["responsive"],
    zIndex: ["responsive"]
  },
  plugins: [
    require("tailwindcss/plugins/container")({
      // center: true,
      // padding: '1rem',
    })
  ],
  options: {
    prefix: "",
    important: false,
    separator: ":"
  }
};
