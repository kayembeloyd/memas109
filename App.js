import React, { useCallback } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import "react-native-gesture-handler";

import { AuthProvider } from "./memas/context/AuthContext";
import NavigationStackSelector from "./memas/navigation/NavigationStackSelector";

export default function App() {
  const [fontsLoaded] = useFonts({
    Comfortaa: require("./memas/assets/fonts/Comfortaa/Comfortaa-VariableFont_wght.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <AuthProvider>
      <SafeAreaView style={styles.safeAreaView} onLayout={onLayoutRootView}>
        <StatusBar backgroundColor="#388E3C" />

        <NavigationContainer>
          <NavigationStackSelector />
        </NavigationContainer>
      </SafeAreaView>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    height: "100%",
    backgroundColor: "#fff",
  },
});
