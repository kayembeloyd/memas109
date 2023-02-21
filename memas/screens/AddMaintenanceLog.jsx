import React, { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
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
import CustomTextInput2 from "../components/CustomTextInput2";
import SpinnerInput from "../components/SpinnerInput";
import CustomButton from "../components/CustomButton";

export default function AddMaintenanceLog({ navigation }) {
  const { isLoading, logout } = useContext(AuthContext);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      header: ({ navigation, route, options, back }) => {
        return (
          <Header
            title={"Add Maintenance Log"}
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
          <View>
            <EquipmentCard
              style={{ marginVertical: 5 }}
              onPress={() => {
                navigation.navigate("Equipment View", { equipment: {} });
              }}
            />
          </View>

          <Card title="Status">
            <TouchableOpacity
              style={{
                backgroundColor: "#32B58C",
                padding: 7,
                borderRadius: 4,
                marginHorizontal: 10,
              }}
            >
              <Text style={{ ...styles.defaultFont }}>Operational</Text>
            </TouchableOpacity>
          </Card>

          <Card title={"Maintenance Information"}>
            <CustomTextInput2 title="General Description" />
            <CustomTextInput2 title="Maintenance cost" />
            <SpinnerInput title={"Maintenance Type"} value="Not Set" />
          </Card>

          <Card title={"Spare parts"}>
            <SpinnerInput title={"Spare part 1"} value="Not Set" />
            <View style={{ alignItems: "flex-end" }}>
              <CustomButton
                style={{
                  ...styles.buttonsStyle,
                }}
                title="Add Spare part"
              />
            </View>
          </Card>

          <Card title={"Maintenance data"}>
            <CustomTextInput2 title="Oxygen concentration" />
            <CustomTextInput2 title="Pressure" />

            <View style={{ alignItems: "flex-end" }}>
              <CustomButton
                style={{
                  ...styles.buttonsStyle,
                }}
                title="Add Data"
              />
            </View>
          </Card>

          <Card title="TOTAL COST">
            <TextItem color="#000" text={"MK3,000"} />
          </Card>

          <View
            style={{
              alignItems: "flex-end",
              marginVertical: 10,
              paddingHorizontal: 20,
            }}
          >
            <CustomButton
              style={{
                ...styles.buttonsStyle,
              }}
              title="SAVE"
            />
          </View>
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
  buttonsStyle: {
    backgroundColor: "#32B58C",
    marginTop: 5,
  },
});
