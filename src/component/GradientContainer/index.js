import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const GradientContainer = ({
  colors,
  style,
  children,
  heightOne,
  widthOne,
  heightTwo,
  widthTwo,
}) => {
  return (
    <LinearGradient
      colors={colors}
      style={[styles.background, { height: heightOne, width: widthOne }]}
      start={{ x: 0, y: 1.3 }}
      end={{ x: 0, y: 0 }}
    >
      <LinearGradient
        colors={["#1C1C1C", "#1C1C1C", "#1C1C1C"]}
        style={[styles.button, { height: heightTwo, width: widthTwo }]}
      >
        {children}
      </LinearGradient>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    padding: 2,
    borderRadius: 20,
    height: 100,
    width: 102,
    marginHorizontal: 10,
  },
  button: {
    padding: 15,
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1.25,
    shadowRadius: 5.84,

    elevation: 5,
    height: 100,
    width: 100,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#fff",
  },
});

export default GradientContainer;
