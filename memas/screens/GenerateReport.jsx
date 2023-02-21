import React, { useContext, useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import Icons from "../assets/icons/Icons";
import Card from "../components/Card";
import Header from "../components/Header";
import Menu from "../components/Menu";
import MenuItem from "../components/MenuItem";
import CustomTextInput2 from "../components/CustomTextInput2";
import SpinnerInput from "../components/SpinnerInput";
import CustomButton from "../components/CustomButton";
import { AuthContext } from "../context/AuthContext";
import TextItem from "../components/TextItem";

export default function GenerateReport({ navigation }) {
  const { isLoading, logout } = useContext(AuthContext);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      header: ({ navigation, route, options, back }) => {
        return (
          <Header
            title={"Generate Report"}
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
        <Card title={"Report parameters"}>
          <CustomTextInput2 title={"Report title"} />
          <SpinnerInput title={"Report for"} />
          <SpinnerInput />
          <View style={{ alignItems: "flex-end" }}>
            <CustomButton
              style={{
                ...styles.buttonsStyle,
              }}
              title="Add field"
            />
          </View>
        </Card>

        <Card title={"Report preview"}>
          <TextItem color="#000" text={"Monthly report: May 2023"} />
          <TextItem color="#000" text={"Equipments"} />
          <TextItem color="#000" text={"All Departments"} />
          <View
            style={{
              ...styles.buttonsCardStyle,
              backgroundColor: "#9747FF",
            }}
          >
            <TextItem color="#000" text="EQUIPMENT RISK ASSESMENT" />
            <TextItem text="16 Score - LOW RISK" />
          </View>

          <TextItem
            text="Pie Chart showing Working equipment vs Broken equipment"
            subtext="graph.import('')"
          />

          <View
            style={{ ...styles.buttonsCardStyle, backgroundColor: "#3C7847" }}
          >
            <TextItem color="#000" text="Equipment Cost" />
            <TextItem text="Running Cost" subtext={"MK23,000 per month"} />
            <TextItem text="Total maintenance cost" subtext={"MK420"} />

            <View style={{ width: "100%" }}>
              <View
                style={{
                  ...styles.buttonsCardStyle,
                  backgroundColor: "#64AB72",
                  flex: 1,
                  margin: 10,
                }}
              >
                <TextItem text={"Spare parts inventory"} />
                <TextItem text={"Bacterial Filter"} subtext={"Cost: MK2,420"} />
                <View style={{ width: "100%", alignItems: "flex-end" }}>
                  <TouchableOpacity
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row",
                      marginRight: 8,
                      marginBottom: 10,
                    }}
                  >
                    <Text
                      style={{
                        ...styles.defaultFont,
                        color: "#fff",
                        marginRight: 5,
                      }}
                    >
                      More...
                    </Text>
                    <Icons name="down" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <TextItem text="Total Cost" subtext={"M23,420"} />
          </View>

          <TextItem
            text="Pie Chart showing Working equipment vs Broken equipment"
            subtext="graph.import('')"
          />
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsStyle: {
    backgroundColor: "#32B58C",
    marginTop: 5,
  },
  buttonsCardStyle: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 8,
    borderRadius: 4,
  },
  defaultFont: {
    fontFamily: "Comfortaa",
  },
});
