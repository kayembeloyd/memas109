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
import Dialog from "../components/Dialog";

export default function AddEquipment({ navigation }) {
  const { isLoading, logout } = useContext(AuthContext);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isAddingFieldDialogVisible, setIsAddingFieldDialogVisible] =
    useState(false);

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

  const openAddFieldDialog = (fieldType) => {
    setIsAddingFieldDialogVisible(true);
  };

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

      <Dialog
        title="Add Custom Field"
        visible={isAddingFieldDialogVisible}
        onRequestClose={() => setIsAddingFieldDialogVisible(false)}
      >
        <CustomTextInput2
          style={{ marginHorizontal: 20 }}
          placeholder={"title"}
        />
        <CustomTextInput2 style={{ marginHorizontal: 20 }} />
      </Dialog>

      <ScrollView>
        <Card title={"General Information"}>
          <CustomTextInput2 title="Name:" />
          <CustomTextInput2 title="Asset tag" />
          <CustomTextInput2 title="Make" />
          <CustomTextInput2 title="Model" />
          <CustomTextInput2 title="Serial Number" />
          <SpinnerInput title={"Department Allocated"} value="Not Set" />
          <SpinnerInput title={"Condition"} value="Not Set" />
          <SpinnerInput title={"Last maintenance date:"} value="Not Set" />
          <CustomTextInput2 title="Maintenance service provider" />
          <SpinnerInput title={"Installed on"} value="Not Set" />
          <CustomTextInput2 title="Expected life:" />
        </Card>
        <Card title={"Technical Specification"}>
          <CustomTextInput2 title="Power rating" />
          <View style={{ alignItems: "flex-end" }}>
            <CustomButton
              style={{
                ...styles.buttonsStyle,
              }}
              title="Add Technical Specification"
              onPress={() => {
                openAddFieldDialog("technicalSpecification");
              }}
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
              onPress={() => {
                openAddFieldDialog("purchaseDetail");
              }}
            />
          </View>
        </Card>
        <Card title={"Manufacturer details"}>
          <CustomTextInput2 title="Name of manufacturer" />
          <SpinnerInput title={"Year of manufacturer"} value="Not Set" />
          <CustomTextInput2 title="Batch No:" />
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
