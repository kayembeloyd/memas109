import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

export default function CustomButton({ style, title, icon, onPress }) {
  return (
    <TouchableOpacity
      style={{
        ...style,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        paddingHorizontal: 10,
        flexDirection: "row",
        height: 36,
      }}
      onPress={onPress}
    >
      {icon ? <View style={{ marginRight: 15 }}>{icon}</View> : null}

      <Text
        style={{
          fontFamily: "Comfortaa",
          color: style.color ? style.color : "#fff",
          textAlign: "center",
          fontSize: 16,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
