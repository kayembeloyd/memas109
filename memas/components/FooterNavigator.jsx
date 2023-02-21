import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Card from "./Card";

export default function FooterNavigator() {
  return (
    <Card>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 10,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            ...styles.touchableStyles,
          }}
        >
          <Text style={{ ...styles.defaultFont, color: "#3D4FF0" }}>
            Previous
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.touchableStyles,
          }}
        >
          <Text style={{ ...styles.defaultFont }}>page 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ ...styles.touchableStyles }}>
          <Text style={{ ...styles.defaultFont, color: "#3D4FF0" }}>Next</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: "Comfortaa",
  },

  touchableStyles: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
