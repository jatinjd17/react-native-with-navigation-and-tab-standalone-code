import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import {
  FavouritesStackNavigatior,
  HomeStackNavigator,
  ProfileStackNavigator,
} from "./stacknavigation";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 5,
          left: 15,
          right: 15,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          unmountOnBlur: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 5,
              }}
            >
              {/* <Image
            source={require("../assets/icons/home.png")}
            resizeMode="contain"
            style={{
              width: 37,
              height: 37,
              //   tintColor: "#e32f95",
              tintColor: focused ? "#e32f45" : "#748c94",
            }}
          /> */}
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                Deals
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Favourites"
        component={FavouritesStackNavigatior}
        options={{
          unmountOnBlur: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 5,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                {/* <Image
                  source={require("../assets/icons/fk2.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    //   tintColor: "#e32f95",
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                /> */}
                {/* <Image
                  source={require("../assets/icons/amazon.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    //   tintColor: "#e32f95",
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                /> */}
              </View>
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                Favourites
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          unmountOnBlur: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 5,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                {/* <Image
                  source={require("../assets/icons/fk2.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    //   tintColor: "#e32f95",
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                />
                <Image
                  source={require("../assets/icons/amazon.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    //   tintColor: "#e32f95",
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                /> */}
              </View>
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 2,
  },
});

export default Tabs;
