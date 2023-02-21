import React, { useContext, useEffect, useState } from "react";
import { SectionList, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { getHeaderTitle } from "@react-navigation/elements";
import Header from "../components/Header";
import { AuthContext } from "../context/AuthContext";
import Icons from "../assets/icons/Icons";
import MenuItem from "../components/MenuItem";
import Menu from "../components/Menu";
import MaintenanceLogCard from "../components/MaintenanceLogCard";
import FilterBar from "../components/FilterBar";
import FooterNavigator from "../components/FooterNavigator";
import CustomTextInput2 from "../components/CustomTextInput2";
import SpinnerInput from "../components/SpinnerInput";
import TextItem from "../components/TextItem";

export default function MaintenanceLogs({ navigation }) {
  const { isLoading, logout } = useContext(AuthContext);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const [maintenanceLogs, setMaintenanceLogs] = useState([
    {
      title: "21 Feb 2023",
      data: ["Pizza", "Burger", "Risotto"],
    },
    {
      title: "22 Feb 2023",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    },
    {
      title: "25 Feb 2023",
      data: ["Water", "Coke", "Beer"],
    },
    {
      title: "27 Feb 2023",
      data: ["Cheese Cake", "Ice Cream"],
    },
  ]);

  useEffect(() => {
    navigation.setOptions({
      header: ({ navigation, route, options, back }) => {
        return (
          <Header
            title={getHeaderTitle(options, route.name)}
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
    <View
      style={{
        maxWidth: 700,
        padding: 5,
        width: "100%",
        flex: 1,
        alignSelf: "center",
      }}
    >
      <View style={{ flex: 1, flexDirection: "column", marginHorizontal: 5 }}>
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

        <SectionList
          sections={maintenanceLogs}
          keyExtractor={(item, index) => item + index}
          stickySectionHeadersEnabled
          ListHeaderComponent={
            <FilterBar title={"Equipment"} search onSearchPress={() => {}}>
              <CustomTextInput2
                title="Enter Asset tag"
                placeholder={"e.g MJ01001"}
                icon={<Icons name="qr-code" color="#000" />}
              />

              <SpinnerInput title={"Department"} value="Select Department" />
              <SpinnerInput title={"Status"} value="Select status" />
            </FilterBar>
          }
          ListFooterComponent={<FooterNavigator />}
          renderSectionHeader={({ section: { title } }) => (
            <View
              style={{
                backgroundColor: "#fff",
              }}
            >
              <TextItem
                text={title}
                color="#000"
                style={{
                  backgroundColor: "#fff",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </View>
          )}
          renderItem={({ item }) => (
            <MaintenanceLogCard
              style={{ marginVertical: 5 }}
              onPress={() => {
                console.log("wiow");
                navigation.navigate("Maintenance Log View", {
                  maintenanceLog: item,
                });
              }}
            />
          )}
        />
      </View>
    </View>
  );
}
