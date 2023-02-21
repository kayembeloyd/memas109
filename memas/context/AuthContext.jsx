import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSplashLoading, setIsSplashLoading] = useState(false);

  const login = (username, password) => {
    setIsLoading(true);

    // Server request simulation
    setTimeout(() => {
      let userInfo = {
        token: "UEI32R08H43IBFBFAKRIO3G4FOIU2809YR7O32I4QFBRO7A834",
        username: username,
      };

      setUserInfo(userInfo);
      AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));

      setIsLoading(false);
    }, 3000);
  };

  const logout = () => {
    setIsLoading(true);

    // Server request simulation
    setTimeout(() => {
      setUserInfo(null);
      AsyncStorage.removeItem("userInfo");
      setIsLoading(false);
    }, 3000);
  };

  const isLoggedIn = async () => {
    try {
      setIsSplashLoading(true);
      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);

      userInfo ? setUserInfo(userInfo) : null;

      setIsSplashLoading(false);
    } catch (e) {
      setIsSplashLoading(false);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoading, login, userInfo, logout, isSplashLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
