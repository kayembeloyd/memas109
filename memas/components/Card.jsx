import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icons from "../assets/icons/Icons";

export default function Card({ children, style, title, subtitle, showMore }) {
  return (
    <LinearGradient
      colors={["#fff", "#64AB72"]}
      style={{ ...style, borderRadius: 4, padding: 5, marginVertical: 15 }}
    >
      {title ? (
        <View style={{ marginBottom: 5 }}>
          <Text style={{ ...styles.defaultFont }}>
            {title}
            <Text style={{ color: "#8C8C8C" }}>{subtitle}</Text>
          </Text>
        </View>
      ) : null}

      <View style={{ padding: 5 }}>{children}</View>
      <View style={{ alignItems: "flex-end" }}>
        {showMore ? (
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginRight: 8,
            }}
          >
            <Text
              style={{ ...styles.defaultFont, color: "#fff", marginRight: 5 }}
            >
              More...
            </Text>
            <Icons name="down" />
          </TouchableOpacity>
        ) : null}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: "Comfortaa",
  },
});
