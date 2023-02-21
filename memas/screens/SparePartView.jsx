import React, { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import Header from "../components/Header";
import { AuthContext } from "../context/AuthContext";
import Icons from "../assets/icons/Icons";
import MenuItem from "../components/MenuItem";
import Menu from "../components/Menu";
import TextItem from "../components/TextItem";
import Card from "../components/Card";
import BottomNavButtons from "../components/BottomNavButtons";

export default function SparePartView({ route, navigation }) {
  const sparePart = route.params.sparePart;

  const { isLoading, logout } = useContext(AuthContext);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const extraOptionsSeparator = { name: "|", color: "#000", separator: true };
  const extraOptions = [
    {
      key: 1,
      name: "Use Spare part",
      screen: "Add Maintenance log",
      color: extraOptionsSeparator.color,
    },
    { key: 2, ...extraOptionsSeparator },
    {
      key: 5,
      name: "Add more parts",
      color: extraOptionsSeparator.color,
    },
    { key: 6, ...extraOptionsSeparator },
    { key: 13, name: "Edit", screen: "Add Equipment", color: "#9A0000" },
    { key: 14, ...extraOptionsSeparator },
    { key: 15, name: "Remove", screen: "", color: "#9A0000" },
  ];

  useEffect(() => {
    navigation.setOptions({
      header: ({ navigation, route, options, back }) => {
        return (
          <Header
            title={sparePart ? "Spare part" : "No Spare part"}
            navIcon={<Icons name="back" />}
            onNavIconPress={() => {
              navigation.goBack();
            }}
            onMenuPress={() => {
              setIsMenuVisible(true);
            }}
          />
        );
      },
    });
  }, [navigation]);

  return (
    <View style={{ width: "100%", flex: 1, alignSelf: "center" }}>
      <View
        style={{ maxWidth: 700, width: "100%", flex: 1, alignSelf: "center" }}
      >
        <Spinner visible={isLoading} />

        <Menu
          visible={isMenuVisible}
          onRequestClose={() => setIsMenuVisible(false)}
          actionButtonsComponent={() => {}}
        >
          <MenuItem text="My Account" onPress={() => setIsMenuVisible(false)} />
          <MenuItem
            text="Logout"
            onPress={() => {
              setIsMenuVisible(false);
              logout();
            }}
          />
        </Menu>

        <ScrollView>
          <Card title={"Quantity"}>
            <TextItem text={"4"} />
          </Card>

          <Card title={"Total Cost"}>
            <TextItem text={"MK 343,554"} />
          </Card>
        </ScrollView>
      </View>
      <BottomNavButtons navigation={navigation} data={extraOptions} />
    </View>
  );
}

const styles = StyleSheet.create({
  black: {
    color: "#000",
  },
  defaultFont: {
    fontFamily: "Comfortaa",
  },
});
