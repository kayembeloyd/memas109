import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { getHeaderTitle } from "@react-navigation/elements";

import Dashboard from "../screens/Dashboard";
import Equipment from "../screens/Equipment";
import MaintenanceLogs from "../screens/MaintenanceLogs";
import MaintenanceSchedule from "../screens/MaintenanceSchedule";
import Reports from "../screens/Reports";
import AddEquipment from "../screens/AddEquipment";
import GenerateReport from "../screens/GenerateReport";
import AddSpareParts from "../screens/AddSpareParts";
import AboutMemas from "../screens/AboutMemas";
import SpareParts from "../screens/SpareParts";
import AddMaintenanceLog from "../screens/AddMaintenanceLog";

import EquipmentView from "../screens/EquipmentView";

import Icons from "../assets/icons/Icons";

import Header from "../components/Header";
import CustomDrawerContent from "../components/CustomDrawerContent";
import MaintenanceLogView from "../screens/MaintenanceLogView";
import SparePartView from "../screens/SparePartView";

const drawerNavigator = createDrawerNavigator();

export default function SignedInNavigationStack({ navigation }) {
  const drawerListItems = [
    [
      { key: 1, label: "Equipment", component: Equipment },
      { key: 2, label: "Maintenance Logs", component: MaintenanceLogs },
      { key: 3, label: "Maintenance Schedule", component: MaintenanceSchedule },
      { key: 4, label: "Consumables & Accessories", component: undefined },
      { key: 5, label: "Spare parts", component: SpareParts },
      { key: 6, label: "Reports", component: Reports },
    ],
    [
      { key: 7, label: "Add Equipment", component: AddEquipment },
      { key: 8, label: "Perform maintenance", component: undefined },
      { key: 9, label: "Generate Report", component: GenerateReport },
      { key: 10, label: "Add Spare parts", component: AddSpareParts },
      { key: 11, label: "Add Accessories", component: undefined },
    ],
    [
      { key: 12, label: "My Account", component: undefined },
      { key: 13, label: "About MEMAS", component: AboutMemas },
      { key: 14, label: "Help", component: undefined },
      { key: 15, label: "Logout", component: undefined },
    ],
  ];

  return (
    <drawerNavigator.Navigator
      backBehavior="history"
      drawerContent={(props) => (
        <CustomDrawerContent {...props} listItems={drawerListItems} />
      )}
      screenOptions={{
        headerMode: "screen",
        swipeEnabled: false,
        header: ({ navigation, route, options, back }) => {
          return (
            <Header
              title={getHeaderTitle(options, route.name)}
              navIcon={<Icons name="back" />}
              onNavIconPress={() => {
                navigation.goBack();
              }}
            />
          );
        },
      }}
    >
      <drawerNavigator.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          swipeEnabled: true,
          animationEnabled: true,
          header: ({ navigation, route, options, back }) => {
            return (
              <Header
                title={getHeaderTitle(options, route.name)}
                navIcon={<Icons name="menu" />}
                onNavIconPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            );
          },
        }}
      />

      {drawerListItems.map((listArray) => {
        return listArray.map((listItem) => {
          return listItem.component ? (
            <drawerNavigator.Screen
              key={listItem.key}
              name={listItem.label}
              component={listItem.component}
            />
          ) : null;
        });
      })}

      <drawerNavigator.Screen
        name={"Equipment View"}
        component={EquipmentView}
      />

      <drawerNavigator.Screen
        name={"Add Maintenance log"}
        component={AddMaintenanceLog}
      />

      <drawerNavigator.Screen
        name={"Maintenance Log View"}
        component={MaintenanceLogView}
      />

      <drawerNavigator.Screen
        name={"Spare Part View"}
        component={SparePartView}
      />
    </drawerNavigator.Navigator>
  );
}
