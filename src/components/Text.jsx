import { Text as NativeText, StyleSheet } from "react-native";
import { useMemo } from "react";

import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeHeading: {
    fontSize: theme.fontSizes.heading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = useMemo(() => {
    return [
      styles.text,
      color === "textSecondary" && styles.colorTextSecondary,
      color === "primary" && styles.colorPrimary,
      color === "white" && { color: theme.colors.white },
      fontSize === "subheading" && styles.fontSizeSubheading,
      fontSize === "heading" && styles.fontSizeHeading,
      fontWeight === "bold" && styles.fontWeightBold,
      style,
    ];
  }, [color, fontSize, fontWeight, style]);

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
