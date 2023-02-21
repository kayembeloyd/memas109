import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TextItem({ style, color, text, subtext }) {
  return (
    <View
      style={{
        ...style,
        height: 38,
        width: "100%",
        marginVertical: 1,
        flexDirection: "row",
        paddingHorizontal: 10,
      }}
    >
      <Text
        style={{
          ...styles.defaultFont,
          color: color ? color : "#fff",
        }}
      >
        {text} <Text style={{ color: "#8c8c8c" }}>{subtext}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: "Comfortaa",
  },
});
