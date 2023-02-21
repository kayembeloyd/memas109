import React from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
  useWindowDimensions,
} from "react-native";
import Icons from "../assets/icons/Icons";

export default function Menu({
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
          backgroundColor: "rgba(0, 0, 0, 0)",
          alignItems: "center",
        }}
        onPress={onRequestClose}
      >
        <Pressable
          style={{
            position: "absolute",
            top: 10,
            right: 5,
            width: "100%",
            maxWidth: 250,
            paddingHorizontal: 20,
            flex: 1,
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              paddingVertical: 5,
              borderRadius: 4,
            }}
          >
            <ScrollView>{children}</ScrollView>

            {actionButtonsComponent()}
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({});
