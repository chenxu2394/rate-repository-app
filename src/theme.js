import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e", // black
    textSecondary: "#586069", // grey
    primary: "#0366d6", // blue
    mainBackground: "#e1e4e8", // light grey
    red: "#d73a4a", // red
    white: "#ffffff", // white
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 20,
  },
  fonts: Platform.select({
    android: "Roboto",
    ios: "Arial",
    default: "System",
  }),
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
