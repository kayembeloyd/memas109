import React from "react";
import { TextInput, View } from "react-native";

export default function CustomTextInput({
  placeholder,
  secureTextEntry,
  style,
  onChangeText,
  value,
}) {
  return (
    <View style={{ ...style, borderBottomWidth: 1 }}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={{ padding: 10, fontSize: 18, fontFamily: "Comfortaa" }}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}
