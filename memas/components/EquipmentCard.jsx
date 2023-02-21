import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function EquipmentCard({ style, onPress }) {
  return (
    <TouchableOpacity
      style={{
        ...style,
        backgroundColor: "#449354",
        borderRadius: 4,
        padding: 8,
      }}
      onPress={onPress}
    >
      <Text style={{ ...styles.defaultFont }}>
        Oxygen Concentrator (MJ01004)
      </Text>
      <Text style={{ ...styles.defaultFont }}>Female Ward</Text>
      <Text style={{ ...styles.defaultFont }}>PPM</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: "Comfortaa",
    color: "#fff",
    marginVertical: 2,
  },
});
