import React from "react";
import { StyleSheet } from "react-native";
import { Text, TouchableOpacity, View } from "react-native";
import Icons from "../assets/icons/Icons";

export default function SpinnerInput({ title, value, onPress }) {
  return (
    <View style={{ marginTop: 8 }}>
      {title ? (
        <Text style={{ ...styles.defaultFont, marginBottom: 5 }}>{title}</Text>
      ) : null}

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#32B58C",
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.1)",
            height: 38,
            borderRadius: 4,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flex: 1,
          }}
          onPress={onPress}
        >
          <Text style={{ ...styles.defaultFont, marginLeft: 20 }}>{value}</Text>
          <Icons name="down" color="#fff" style={{ marginRight: 20 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: "Comfortaa",
  },
});
