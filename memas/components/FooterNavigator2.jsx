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
            previous overdue
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.touchableStyles,
            alignItems: "flex-end",
          }}
        >
          <Text style={{ ...styles.defaultFont }}>page 1</Text>
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
    justifyContent: "center",
  },
});
