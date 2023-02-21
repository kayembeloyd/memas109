import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function BottomNavButtons({ navigation, data }) {
  return (
    <View style={{ height: 50, backgroundColor: "#D9D9D9" }}>
      <ScrollView horizontal>
        <View style={{ flexDirection: "row" }}>
          {data.map((extraOption) => {
            return (
              <TouchableOpacity
                key={extraOption.key}
                style={styles.hScrollItem}
                disabled={extraOption.separator}
                onPress={() => {
                  extraOption.screen
                    ? navigation.navigate(extraOption.screen)
                    : extraOption.action
                    ? extraOption.action()
                    : null;
                }}
              >
                <Text
                  style={{
                    ...styles.defaultFont,
                    color: extraOption.color,
                  }}
                >
                  {extraOption.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  black: {
    color: "#000",
  },
  hScrollItem: {
    padding: 7,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  defaultFont: {
    fontFamily: "Comfortaa",
  },
});
