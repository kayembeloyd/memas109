import React from "react";
import { ScrollView, Text, useWindowDimensions } from "react-native";
import {
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Icons from "../assets/icons/Icons";

export default function Dialog({
  title,
  visible,
  children,
  actionButtonsComponent,
  onRequestClose,
}) {
  const { height } = useWindowDimensions();

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onRequestClose}
    >
      <Pressable
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          alignItems: "center",
        }}
        onPress={onRequestClose}
      >
        <Pressable
          style={{
            position: "absolute",
            top: 56,
            width: "100%",
            maxWidth: 700,
            paddingHorizontal: 20,
            flex: 1,
          }}
        >
          <View
            style={{
              backgroundColor: "#73B380",
              shadowColor: "#000",
              shadowRadius: 5,
              paddingVertical: 20,
              maxHeight: height - 56 - 56,
              borderRadius: 10,
            }}
          >
            <View
              style={{
                height: 48,
                paddingHorizontal: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ ...styles.defaultFont }}>{title}</Text>

              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    ...styles.iconButtonStyle,
                  }}
                  onPress={onRequestClose}
                >
                  <Icons name="close" color="#000" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    ...styles.iconButtonStyle,
                  }}
                  onPress={onRequestClose}
                >
                  <Icons name="done" color="#000" />
                </TouchableOpacity>
              </View>
            </View>

            <ScrollView>{children}</ScrollView>

            {actionButtonsComponent ? actionButtonsComponent() : null}
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: "Comfortaa",
  },

  iconButtonStyle: {
    height: 48,
    width: 48,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
