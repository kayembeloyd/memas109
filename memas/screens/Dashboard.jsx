import React, { useContext, useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { getHeaderTitle } from "@react-navigation/elements";
import Spinner from "react-native-loading-spinner-overlay";

import { AuthContext } from "../context/AuthContext";

import Card from "../components/Card";
import Header from "../components/Header";
import MaintenanceScheduleCard from "../components/MaintenanceScheduleCard";
import Menu from "../components/Menu";
import MenuItem from "../components/MenuItem";
import CustomButton from "../components/CustomButton";
import TextItem from "../components/TextItem";
import FilterBar from "../components/FilterBar";
import CustomTextInput2 from "../components/CustomTextInput2";
import SpinnerInput from "../components/SpinnerInput";
import EquipmentCard from "../components/EquipmentCard";

import Icons from "../assets/icons/Icons";
import ListDialog from "../components/ListDialog";
import SelectableItem from "../components/SelectableItem";

export default function Dashboard({ navigation }) {
  const { isLoading, logout } = useContext(AuthContext);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isDepartmentListDialogVisible, setIsDepartmentListDialogVisible] =
    useState(false);

  const [brokenEquipment, setBrokenEquipment] = useState([
    { key: 1 },
    { key: 2 },
    { key: 3 },
  ]);

  const [maintenanceSchedules, setMaintenanceSchedules] = useState([
    { key: 1 },
    { key: 2 },
    { key: 3 },
  ]);

  const [departments, setDepartments] = useState([
    { key: 1, name: "All" },
    { key: 2, name: "Maternity" },
    { key: 3, name: "Labor" },
    { key: 4, name: "Radiology" },
    { key: 5, name: "Loboratory" },
  ]);

  useEffect(() => {
    navigation.setOptions({
      header: ({ navigation, route, options, back }) => {
        return (
          <Header
            title={getHeaderTitle(options, route.name)}
            navIcon={<Icons name="menu" />}
            onNavIconPress={() => {
              navigation.toggleDrawer();
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
      style={{ maxWidth: 700, width: "100%", flex: 1, alignSelf: "center" }}
    >
      <Spinner visible={isLoading} />

      <Menu
        visible={isMenuVisible}
        onRequestClose={() => setIsMenuVisible(false)}
        actionButtonsComponent={() => {}}
      >
        <MenuItem
          text="My Account"
          onPress={() => {
            setIsMenuVisible(false);
          }}
        />
        <MenuItem
          text="Logout"
          onPress={() => {
            setIsMenuVisible(false);
            logout();
          }}
        />
      </Menu>

      <ListDialog
        title="Departments"
        visible={isDepartmentListDialogVisible}
        onRequestClose={() => setIsDepartmentListDialogVisible(false)}
        data={departments}
      />
      <ScrollView>
        <Card
          title="Maintenance Schedule"
          subtitle="14 Feb 2023"
          style={{ margin: 5 }}
          showMore
        >
          {maintenanceSchedules.map((maintenanceSchedule) => {
            return (
              <MaintenanceScheduleCard
                key={maintenanceSchedule.key}
                style={{ marginVertical: 5 }}
              />
            );
          })}
        </Card>

        <Card title="Actions" style={{ margin: 5 }}>
          <View
            style={{
              ...styles.buttonsCardStyle,
            }}
          >
            <CustomButton
              title="Add Equipment"
              style={{ ...styles.buttonStyle }}
              onPress={() => {
                navigation.navigate("Add Equipment");
              }}
            />
            <CustomButton
              title="Add Consumables"
              style={{ ...styles.buttonStyle }}
            />
            <CustomButton
              title="Add Spare parts"
              style={{ ...styles.buttonStyle }}
              onPress={() => {
                navigation.navigate("Add Spare parts");
              }}
            />
          </View>

          <View
            style={{
              ...styles.buttonsCardStyle,
            }}
          >
            <CustomButton
              title="Perfom maintenance"
              style={{ ...styles.buttonStyle }}
              onPress={() => navigation.navigate("Add Maintenance log")}
            />
            <CustomButton
              title="Generate Report"
              style={{ ...styles.buttonStyle }}
              onPress={() => {
                navigation.navigate("Generate Report");
              }}
            />
          </View>
        </Card>

        <Card title="Summary" style={{ margin: 5 }}>
          <View
            style={{
              ...styles.buttonsCardStyle,
            }}
          >
            <TextItem text="Number of PPM Conducted" subtext="245" />
            <TextItem text="Number of CM Conducted" subtext="245" />
            <TextItem text="Number of spare parts used" subtext="245" />
          </View>

          <TextItem
            text="Pie Chart showing Working equipment vs Broken equipment"
            subtext="graph.import('')"
          />

          <TextItem
            text="Graph showing number of corrective maintenance done monthly"
            subtext="graph.import('')"
          />
        </Card>

        <Card showMore style={{ margin: 5 }}>
          <FilterBar
            title="Broken equipment"
            onSearchPress={() => {
              navigation.navigate("Equipment");
            }}
          >
            <CustomTextInput2
              title="Enter Asset tag"
              placeholder={"e.g MJ01001"}
              icon={<Icons name="qr-code" color="#000" />}
            />

            <SpinnerInput
              title={"Department"}
              value="Select Department"
              onPress={() => setIsDepartmentListDialogVisible(true)}
            />
            <SpinnerInput title={"Status"} value="Broken" />
          </FilterBar>

          <Card style={{ margin: 5 }}>
            {brokenEquipment.map((eq) => {
              return (
                <EquipmentCard key={eq.key} style={{ marginVertical: 5 }} />
              );
            })}
          </Card>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: "80%",
    maxWidth: 300,
    backgroundColor: "#32B58C",
    marginBottom: 8,
  },

  buttonsCardStyle: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#449354",
    paddingTop: 8,
    marginBottom: 12,
    borderRadius: 4,
  },

  defaultFont: {
    fontFamily: "Comfortaa",
  },
});
