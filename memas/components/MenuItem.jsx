import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MenuItem({ text, onPress }) {
  return (
    <TouchableOpacity
      style={{
        height: 46,
        width: "100%",
        marginVertical: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        backgroundColor: "#F2F2F2",
      }}
      onPress={onPress}
    >
      <Text style={{ ...styles.defaultFont }}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: "Comfortaa",
  },
});
