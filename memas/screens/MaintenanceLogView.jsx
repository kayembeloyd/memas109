import React, { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import Header from "../components/Header";
import { AuthContext } from "../context/AuthContext";
import Icons from "../assets/icons/Icons";
import MenuItem from "../components/MenuItem";
import Menu from "../components/Menu";
import TextItem from "../components/TextItem";
import EquipmentCard from "../components/EquipmentCard";
import Card from "../components/Card";
import { Text } from "react-native";

export default function MaintenanceLogView({ route, navigation }) {
  const maintenanceLog = route.params.maintenanceLog;

  const { isLoading, logout } = useContext(AuthContext);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      header: ({ navigation, route, options, back }) => {
        return (
          <Header
            title={maintenanceLog ? "Maintenance Log" : "No Maintenance Log"}
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

        <ScrollView>
          <View style={{ width: "100%", alignItems: "center" }}>
            <Text style={{ ...styles.defaultFont, color: "#000" }}>
              20 OCtober 2023
            </Text>
            <Text style={{ ...styles.defaultFont, color: "#000" }}>
              done by: Lloyd Kayembe
            </Text>
          </View>

          <View>
            <EquipmentCard
              style={{ marginVertical: 5 }}
              onPress={() => {
                navigation.navigate("Equipment View", { equipment: {} });
              }}
            />
          </View>

          <Card title={"Maintenance Information"}>
            <TextItem
              color={"#000"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies ut dui in pretium. Mauris at finibus quam, vel commodo massa. Quisque mattis nulla et elit ullamcorper dignissim. Duis urna arcu"
              }
            />
            <TextItem color={"#000"} text={"Cost"} subtext={"MK2,300"} />

            <Card title="Spare parts used">
              <TextItem
                color="#000"
                text={"Bacterial filter"}
                subtext={"Cost: MK 2000"}
              />
            </Card>

            <Card title="Maintenance data">
              <TextItem
                color="#000"
                text={"Oxygen concentration:"}
                subtext={"90%"}
              />
            </Card>
          </Card>

          <Card title="TOTAL COST">
            <TextItem color="#000" text={"MK3,000"} />
          </Card>
        </ScrollView>
      </View>
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
