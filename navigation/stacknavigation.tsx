import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import Home from "../pages/Home";
import Favourites from "../pages/Favourites";
import Profile from "../pages/Profile";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#e32f45",
        },
        headerTitle: (
          props // App Logo
        ) => (
          <View style={{ flexDirection: "row" }}>
            {/* <Image
              style={{ width: 30, height: 30 }}
              source={require("../assets/icons/pricedroplogo.png")}
              resizeMode="contain"
            /> */}
            <Text
              style={{
                marginTop: 5,
                marginLeft: 5,
                fontWeight: "bold",
                color: "white",
              }}
            >
              PriceDrop
            </Text>
          </View>
        ),
        headerTitleStyle: { flex: 1, textAlign: "center" },
      }}
    >
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
};

const FavouritesStackNavigatior = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#e32f45",
        },
        headerTitle: (
          props // App Logo
        ) => (
          <View style={{ flexDirection: "row" }}>
            {/* <Image
                  style={{ width: 30, height: 30 }}
                  source={require("../assets/icons/pricedroplogo.png")}
                  resizeMode="contain"
                /> */}
            <Text
              style={{
                marginTop: 5,
                marginLeft: 5,
                fontWeight: "bold",
                color: "white",
              }}
            >
              PriceDrop
            </Text>
          </View>
        ),
        headerTitleStyle: { flex: 1, textAlign: "center" },
      }}
    >
      <Stack.Screen name="favourites" component={Favourites} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#e32f45",
        },
        headerTitle: (
          props // App Logo
        ) => (
          <View style={{ flexDirection: "row" }}>
            {/* <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../assets/icons/pricedroplogo.png")}
                      resizeMode="contain"
                    /> */}
            <Text
              style={{
                marginTop: 5,
                marginLeft: 5,
                fontWeight: "bold",
                color: "white",
              }}
            >
              PriceDrop
            </Text>
          </View>
        ),
        headerTitleStyle: { flex: 1, textAlign: "center" },
      }}
    >
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
};

export { HomeStackNavigator, FavouritesStackNavigatior, ProfileStackNavigator };
