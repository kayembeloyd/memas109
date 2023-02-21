import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icons from "../assets/icons/Icons";
import CustomButton from "./CustomButton";

export default function FilterBar({ children, style, title, onSearchPress }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <LinearGradient
      colors={["#fff", "#64AB72"]}
      style={{ ...style, borderRadius: 4, padding: 5 }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 5,
          paddingHorizontal: 10,
          paddingVertical: 10,
          backgroundColor: "#449354",
          borderRadius: 4,
          marginBottom: 5,
        }}
      >
        <TextInput
          placeholder={title}
          style={{ ...styles.defaultFont, flex: 1, height: "100%" }}
        />
        <TouchableOpacity
          style={{
            paddingHorizontal: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icons name="search" color="#000" />
        </TouchableOpacity>
      </View>

      <View style={{ padding: 5 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              flex: 1,
              alignItems: "center",
            }}
            onPress={() => {
              setExpanded(!expanded);
            }}
          >
            <Text style={{ ...styles.defaultFont, marginRight: 10 }}>
              Filter
            </Text>

            <Icons name={expanded ? "up" : "down"} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
            }}
          >
            <Icons name="add" color="#000" />
            <Text style={{ ...styles.defaultFont, marginLeft: 10 }}>
              Add Field
            </Text>
          </TouchableOpacity>
        </View>

        {expanded ? (
          <View style={{ paddingHorizontal: 5 }}>
            <ScrollView>{children}</ScrollView>

            <View style={{ alignItems: "flex-end" }}>
              <CustomButton
                style={{
                  marginTop: 8,
                  marginBottom: 8,
                  height: 42,
                  width: "30%",
                  maxWidth: 300,
                  backgroundColor: "#32B58C",
                }}
                title="search"
                onPress={() => {
                  setExpanded(false);
                  onSearchPress();
                }}
              />
            </View>
          </View>
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
