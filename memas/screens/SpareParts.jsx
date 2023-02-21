import React, { useContext, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { getHeaderTitle } from "@react-navigation/elements";
import Header from "../components/Header";
import { AuthContext } from "../context/AuthContext";
import Icons from "../assets/icons/Icons";
import MenuItem from "../components/MenuItem";
import Menu from "../components/Menu";
import FilterBar from "../components/FilterBar";
import FooterNavigator from "../components/FooterNavigator";
import SparePartCard from "../components/SparePartCard";

export default function SpareParts({ navigation }) {
  const { isLoading, logout } = useContext(AuthContext);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const [spareparts, setSpareParts] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
    { id: 17 },
    { id: 18 },
    { id: 19 },
    { id: 20 },
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
        width: "100%",
        height: "100%",
        alignSelf: "center",
      }}
    >
      <Spinner visible={isLoading} />

      <Menu
        visible={isMenuVisible}
        onRequestClose={() => setIsMenuVisible(false)}
        actionButtonsComponent={() => {}}
      >
        <MenuItem
          text="Add Spare parts"
          onPress={() => {
            setIsMenuVisible(false);
            navigation.navigate("Add Spare parts");
          }}
        />
        <MenuItem
          text="Generate Report"
          onPress={() => setIsMenuVisible(false)}
        />
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
          data={spareparts}
          ListHeaderComponent={
            <FilterBar title={"Spare parts"} search onSearchPress={() => {}} />
          }
          ListFooterComponent={<FooterNavigator />}
          renderItem={({ item }) => (
            <SparePartCard
              style={{ marginVertical: 5 }}
              onPress={() => {
                navigation.navigate("Spare Part View", { sparePart: item });
              }}
            />
          )}
        />
      </View>
    </View>
  );
}
