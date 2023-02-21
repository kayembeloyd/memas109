import React, { useContext, useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import Icons from "../assets/icons/Icons";
import Spinner from "react-native-loading-spinner-overlay";
import Menu from "../components/Menu";
import MenuItem from "../components/MenuItem";
import Header from "../components/Header";
import Card from "../components/Card";
import TextItem from "../components/TextItem";
import BottomNavButtons from "../components/BottomNavButtons";
import Dialog from "../components/Dialog";

export default function EquipmentView({ route, navigation }) {
  const equipment = route.params.equipment;

  const { isLoading, logout } = useContext(AuthContext);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const extraOptionsSeparator = { name: "|", color: "#000", separator: true };
  const extraOptions = [
    {
      key: 1,
      name: "Preventive Maintenance",
      screen: "Add Maintenance log",
      color: extraOptionsSeparator.color,
    },
    { key: 2, ...extraOptionsSeparator },
    {
      key: 3,
      name: "Corrective Maintenance",
      screen: "Add Maintenance log",
      color: extraOptionsSeparator.color,
    },
    { key: 4, ...extraOptionsSeparator },
    {
      key: 5,
      name: "Change Status",
      color: extraOptionsSeparator.color,
      action: () => setIsChangeStatusDialogVisible(true),
    },
    { key: 6, ...extraOptionsSeparator },
    {
      key: 7,
      name: "Set next maintenance date",
      screen: "",
      color: extraOptionsSeparator.color,
    },
    { key: 8, ...extraOptionsSeparator },
    {
      key: 9,
      name: "Maintenance logs",
      screen: "Maintenance Logs",
      color: extraOptionsSeparator.color,
    },
    { key: 10, ...extraOptionsSeparator },
    {
      key: 11,
      name: "Generate Report",
      screen: "Generate Report",
      color: extraOptionsSeparator.color,
    },
    { key: 12, ...extraOptionsSeparator },
    { key: 13, name: "Edit", screen: "Add Equipment", color: "#9A0000" },
    { key: 14, ...extraOptionsSeparator },
    { key: 15, name: "Remove", screen: "", color: "#9A0000" },
  ];

  const [isChangeStatusDialogVisible, setIsChangeStatusDialogVisible] =
    useState(false);

  useEffect(() => {
    navigation.setOptions({
      header: ({ navigation, route, options, back }) => {
        return (
          <Header
            title={equipment ? "Equipment name" : "No Equipment"}
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
          <MenuItem
            text="Perfome maintenance"
            onPress={() => setIsMenuVisible(false)}
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

        <Dialog
          title={"Change Status"}
          visible={isChangeStatusDialogVisible}
          onRequestClose={() => setIsChangeStatusDialogVisible(false)}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#32B58C",
              padding: 7,
              borderRadius: 4,
              marginHorizontal: 10,
            }}
          >
            <Text>Operational</Text>
          </TouchableOpacity>
        </Dialog>

        <ScrollView>
          <Card title={"Status"}>
            <View
              style={{
                backgroundColor: "#32B58C",
                padding: 7,
                borderRadius: 4,
              }}
            >
              <Text style={{ ...styles.defaultFont }}>Operational</Text>
            </View>
          </Card>

          <Card title={"General Information"}>
            <TextItem color="#000" text={"Name: Oxygen Concentrator"} />
            <TextItem color="#000" text={"Asset Tag: MJ01001"} />
            <TextItem color="#000" text={"Make: Canta"} />
            <TextItem color="#000" text={"Model: V8-NS-WS"} />
            <TextItem color="#000" text={"Serial Number: 34R344"} />
            <TextItem color="#000" text={"Department: NURSERY WARD"} />
            <TextItem color="#000" text={"Status: Operational"} />
            <TextItem
              color="#000"
              text={"Last Maintenance Date: 16 Feb 2023"}
            />
            <TextItem
              color="#000"
              text={"Next Maintenance Date: 16 Feb 2023"}
            />
            <TextItem color="#000" text={"Maintenance Service provider: CVB"} />
            <TextItem color="#000" text={"Installed on: 16 Feb 2023"} />
            <TextItem
              color="#000"
              text={"Expected life: 10 years (6 years remaining)"}
            />
          </Card>

          <Card title={"Manufacturer details"}>
            <TextItem color="#000" text={"Name: Oxygen Shagih"} />
            <TextItem color="#000" text={"Year of manufacture: 2012"} />
            <TextItem color="#000" text={"Batch No.: 214345"} />
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
