import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import AssetScreen from "../screens/AssetScreen";
import ClaimScreen from "../screens/ClaimsScreen";
import ExampleCamera from "../screens/ExampleCamera";

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Login: {screen: LoginScreen},
      Main:  {screen: HomeScreen},
      Asset: {screen: AssetScreen},
      Claims : {screen: ClaimScreen},
      ExampleCamera: {screen: ExampleCamera}
    },
    {
      initialRouteName: "Login"
    }
  )
);
