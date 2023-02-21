import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AboutMemas() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ ...styles.defaultFont }}>Memas v109</Text>
      <Text style={{ ...styles.defaultFont }}>memas-web.000webhosapp.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: "Comfortaa",
  },
});
