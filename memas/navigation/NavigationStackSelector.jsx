import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import SignedInNavigationStack from "./SignedInNavigationStack";
import SignedOutNavigationStack from "./SignedOutNavigationStack";

export default function NavigationStackSelector() {
  const { userInfo, isSplashLoading } = useContext(AuthContext);
  return isSplashLoading ? null : userInfo ? (
    <SignedInNavigationStack />
  ) : (
    <SignedOutNavigationStack />
  );
}
