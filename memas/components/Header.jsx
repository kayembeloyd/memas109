import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icons from "../assets/icons/Icons";

export default function Header({
  title,
  navIcon,
  onNavIconPress,
  onMenuPress,
}) {
  return (
    <View
      style={{
        height: 50,
        width: "100%",
        backgroundColor: "#32B58C",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: "100%",
        }}
      >
        {navIcon ? (
          <TouchableOpacity
            style={{
              paddingHorizontal: 15,
              marginRight: 10,
              height: "100%",
              justifyContent: "center",
            }}
            onPress={onNavIconPress}
          >
            {navIcon}
          </TouchableOpacity>
        ) : null}
        <Text
          style={{
            ...styles.textStyle,
            color: "#fff",
            fontSize: 18,
          }}
        >
          {title}
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#32B5AA",
          height: "100%",
          width: 50,
          justifyContent: "center",
        }}
        onPress={onMenuPress}
      >
        <Icons name="more" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "Comfortaa",
  },
});
