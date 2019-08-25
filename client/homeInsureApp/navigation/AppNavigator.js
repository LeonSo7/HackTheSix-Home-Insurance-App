import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import AssetScreen from "../screens/AssetScreen";
import ClaimScreen from "../screens/ClaimsScreen";
<<<<<<< HEAD
import ExampleCamera from "../screens/ExampleCamera";
=======
import SystemsScreen from "../screens/SystemsScreen";
>>>>>>> bb424a1e1af47768bd29cba329e09772c8530372

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
<<<<<<< HEAD
      Login: {screen: LoginScreen},
      Main:  {screen: HomeScreen},
      Asset: {screen: AssetScreen},
      Claims : {screen: ClaimScreen},
      ExampleCamera: {screen: ExampleCamera}
=======
      Login: { screen: LoginScreen },
      Main: { screen: HomeScreen },
      Asset: { screen: AssetScreen },
      Claims: { screen: ClaimScreen },
      Systems: { screen: SystemsScreen }
>>>>>>> bb424a1e1af47768bd29cba329e09772c8530372
    },
    {
      initialRouteName: "Login"
    }
  )
);
