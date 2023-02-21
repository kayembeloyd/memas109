import React from "react";
import { TouchableOpacity } from "react-native";
import Icons from "../assets/icons/Icons";
import TextItem from "./TextItem";

export default function SelectableItem({ onPress, text, checked }) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
      }}
      onPress={onPress}
    >
      <Icons name={checked ? "box-checked" : "box-unchecked"} color="#000" />
      <TextItem text={text} color="#000" />
    </TouchableOpacity>
  );
}
