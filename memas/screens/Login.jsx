import React, { useContext, useState } from "react";
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import Icons from "../assets/icons/Icons";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { isLoading, login } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ flex: 1 }}>
      <Spinner visible={isLoading} />

      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ width: "80%", maxWidth: 600 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={{
                ...styles.textStyle,
                color: "#32B58C",
                fontSize: 40,
                marginBottom: 50,
                textAlign: "center",
              }}
            >
              MEMAS
            </Text>
            <View>
              <View style={{ marginBottom: 10 }}>
                <CustomTextInput
                  style={{ marginBottom: 8 }}
                  placeholder={"username"}
                  onChangeText={(t) => setUsername(t)}
                  value={username}
                />
                <CustomTextInput
                  style={{ marginBottom: 8 }}
                  placeholder="password"
                  secureTextEntry
                  onChangeText={(t) => setPassword(t)}
                  value={password}
                />
              </View>
              <View style={{ alignItems: "center" }}>
                <CustomButton
                  style={{
                    marginTop: 8,
                    marginBottom: 8,
                    height: 42,
                    width: "50%",
                    maxWidth: 300,
                    backgroundColor: "#32B58C",
                  }}
                  title="Login"
                  onPress={() => {
                    if (username != "" || password != "")
                      login(username, password);
                    else {
                      Platform.OS == "web"
                        ? alert("Complete All fields")
                        : Alert.alert("Error", "Complete all fields");
                    }
                  }}
                />
                <CustomButton
                  style={{
                    marginBottom: 8,
                    height: 42,
                    backgroundColor: "#64AB72",
                  }}
                  title="Help"
                  icon={<Icons name="help" />}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "Comfortaa",
  },
});
