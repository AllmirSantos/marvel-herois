import React from "react";
import { StatusBar } from "expo-status-bar";
import { Home } from "./src/screens/home";
import { View } from "react-native";

export default function App() {
  return (
    <View>
      <StatusBar animated={true} style={"dark"} />
      <Home />
    </View>
  );
}
