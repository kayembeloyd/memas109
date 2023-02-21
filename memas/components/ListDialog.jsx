import React, { useEffect, useState } from "react";
import { ScrollView, Text, useWindowDimensions } from "react-native";
import {
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Icons from "../assets/icons/Icons";
import SelectableItem from "./SelectableItem";

export default function ListDialog({
  title,
  visible,
  data,
  actionButtonsComponent,
  onRequestClose,
}) {
  const { height } = useWindowDimensions();

  const [list, setList] = useState([]);

  useEffect(() => {
    if (data.length > 0)
      if (data[0].checked) setList(data);
      else {
        const newState = [];

        for (const listItem of data) {
          newState.push({
            key: listItem.key,
            name: listItem.name,
            checked: false,
          });
        }

        setList(newState);
      }
  }, [data]);

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
              backgroundColor: "#fff",
              shadowColor: "#000",
              shadowRadius: 5,
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

            <ScrollView>
              {list.map((listItem) => {
                return (
                  <SelectableItem
                    key={listItem.key}
                    text={listItem.name}
                    checked={listItem.checked}
                    onPress={() => {
                      setList((oldState) => {
                        const newState = [...oldState];

                        if (listItem.key == 1)
                          if (!listItem.checked)
                            for (let i = 0; i < newState.length; i++)
                              newState[i].checked = true;
                          else
                            for (let i = 0; i < newState.length; i++)
                              newState[i].checked = false;
                        else {
                          newState[listItem.key - 1].checked =
                            !newState[listItem.key - 1].checked;

                          newState[0].checked = false;
                        }

                        return newState;
                      });
                    }}
                  />
                );
              })}
            </ScrollView>

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
