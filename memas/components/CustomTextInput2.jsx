import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icons from "../assets/icons/Icons";

export default function CustomTextInput2({ style, title, placeholder, icon }) {
  return (
    <View style={{ ...style, marginTop: 8 }}>
      <Text style={{ ...styles.defaultFont, marginBottom: 5 }}>{title}</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            height: 38,
            borderRadius: 4,
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
          }}
        >
          <TextInput
            placeholder={placeholder}
            style={{
              ...styles.defaultFont,
              paddingHorizontal: 10,
              flex: 1,
              height: "100%",
            }}
          />
        </View>

        {icon ? (
          <TouchableOpacity
            style={{
              marginHorizontal: 10,
              paddingHorizontal: 10,
              height: 38,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {icon}
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: "Comfortaa",
  },
});
