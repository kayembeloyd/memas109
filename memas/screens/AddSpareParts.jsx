import React, { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
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

export default function AddSpareParts({ navigation }) {
  const { isLoading, logout } = useContext(AuthContext);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      header: ({ navigation, route, options, back }) => {
        return (
          <Header
            title={"Add Equipment"}
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
        <Card title={"General Information"}>
          <CustomTextInput2 title="Spare part name" />
          <SpinnerInput title={"Select Equipment"} value="Not Set" />
        </Card>
        <Card title={"Technical Specification"}>
          <CustomTextInput2 title="Power rating" />
          <View style={{ alignItems: "flex-end" }}>
            <CustomButton
              style={{
                ...styles.buttonsStyle,
              }}
              title="Add Technical Specification"
            />
          </View>
        </Card>
        <Card title={"Purchase details"}>
          <CustomTextInput2 title="Purchase cost" />
          <View style={{ alignItems: "flex-end" }}>
            <CustomButton
              style={{
                ...styles.buttonsStyle,
              }}
              title="Add purchase detail"
            />
          </View>
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
  );
}

const styles = StyleSheet.create({
  buttonsStyle: {
    backgroundColor: "#32B58C",
    marginTop: 5,
  },
  defaultFont: {
    fontFamily: "Comfortaa",
  },
});
