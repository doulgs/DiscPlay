// In App.js in a new project

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../../screens/Home";
import { SignIn } from "../../screens/SignIn";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator>
      <Screen name="SingIn" component={SignIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
