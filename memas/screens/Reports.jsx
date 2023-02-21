import React, { useContext, useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import Header from "../components/Header";
import { AuthContext } from "../context/AuthContext";
import Icons from "../assets/icons/Icons";
import MenuItem from "../components/MenuItem";
import Menu from "../components/Menu";
import FilterBar from "../components/FilterBar";
import FooterNavigator from "../components/FooterNavigator";
import BottomNavButtons from "../components/BottomNavButtons";
import ReportCard from "../components/ReportCard";

export default function Reports({ navigation }) {
  const { isLoading, logout } = useContext(AuthContext);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const [reports, setReports] = useState([
    { key: 1 },
    { key: 2 },
    { key: 3 },
    { key: 4 },
    { key: 5 },
    { key: 6 },
    { key: 7 },
    { key: 8 },
    { key: 9 },
    { key: 10 },
    { key: 11 },
    { key: 12 },
    { key: 13 },
    { key: 14 },
    { key: 15 },
    { key: 16 },
  ]);

  const extraOptionsSeparator = { name: "|", color: "#000", separator: true };
  const extraOptions = [
    {
      key: 1,
      name: "Generate Report",
      color: extraOptionsSeparator.color,
    },
    { key: 2, ...extraOptionsSeparator },
    { key: 15, name: "Remove Selected", color: "#9A0000" },
  ];

  useEffect(() => {
    navigation.setOptions({
      header: ({ navigation, route, options, back }) => {
        return (
          <Header
            title={"Reports"}
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

        <View style={{ flex: 1, flexDirection: "column", marginHorizontal: 5 }}>
          <FlatList
            data={reports}
            ListHeaderComponent={
              <FilterBar
                title={"Search reports"}
                search
                onSearchPress={() => {}}
              ></FilterBar>
            }
            ListFooterComponent={<FooterNavigator />}
            renderItem={({ item }) => (
              <ReportCard style={{ marginVertical: 5 }} onPress={() => {}} />
            )}
          />
        </View>
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
