import { StyleSheet, Pressable } from "react-native";
import theme from "../theme";
import React from "react";

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
  },
});

const Button = ({ children, style, ...props }) => {
  const buttonStyle = [styles.button, style];

  return (
    <Pressable style={buttonStyle} {...props}>
      {React.cloneElement(children, {
        style: [children.props.style, styles.buttonText],
      })}
    </Pressable>
  );
};

export default Button;
