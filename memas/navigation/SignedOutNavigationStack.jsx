import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getHeaderTitle } from "@react-navigation/elements";

import Login from "../screens/Login";
import Header from "../components/Header";

const stackNavigator = createNativeStackNavigator();

export default function SignedOutNavigationStack({ navigation }) {
  return (
    <stackNavigator.Navigator>
      <stackNavigator.Screen
        name="Login"
        component={Login}
        options={{
          header: ({ navigation, route, options, back }) => {
            const title = getHeaderTitle(options, route.name);
            const menuList = {
              about: "About",
              help: "Help",
            };
            return <Header title={title} menuList={menuList} />;
          },
        }}
      />
    </stackNavigator.Navigator>
  );
}
