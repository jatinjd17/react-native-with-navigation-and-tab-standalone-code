import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import { Text, View } from "react-native";
import Tabs from "./navigation/tabs";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tabs />
    </NavigationContainer>
  );
}
