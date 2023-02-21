import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icons from "../assets/icons/Icons";

export default function CustomDrawerContent({ navigation, listItems }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 50,
          width: "100%",
          backgroundColor: "#32B58C",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#32B5AA",
            height: "100%",
            width: 50,
            justifyContent: "center",
            marginRight: 10,
          }}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          <Icons name="close" />
        </TouchableOpacity>

        <Text
          style={{
            fontFamily: "Comfortaa",
            color: "#fff",
            fontSize: 18,
          }}
        >
          MEMAS 109
        </Text>
      </View>

      <ScrollView style={{ paddingHorizontal: 10 }}>
        {listItems.map((listArray) => {
          return (
            <View key={listArray[0].key} style={{ marginVertical: 10 }}>
              {listArray.map((listItem) => {
                return (
                  <TouchableOpacity
                    key={listItem.key}
                    style={{
                      height: 46,
                      width: "100%",
                      marginVertical: 2,
                      flexDirection: "row",
                      alignItems: "center",
                      paddingHorizontal: 10,
                    }}
                    onPress={() => {
                      listItem.component
                        ? navigation.navigate(listItem.label)
                        : listItem.screen
                        ? navigation.navigate(listItem.screen)
                        : null;
                    }}
                  >
                    <Text style={{ fontSIze: 16, fontFamily: "Comfortaa" }}>
                      {listItem.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
