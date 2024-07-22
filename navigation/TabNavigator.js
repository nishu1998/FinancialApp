import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import StackNavigator from "./StackNavigator";
import Summary from "../components/Summary";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Transactions") {
            iconName = "list";
          } else if (route.name === "Summary") {
            iconName = "information-circle";
          }
          return <Ionicons name={iconName} color={color} size={size} />;
        },
        tabBarLabel: () => null,
        tabBarActiveTintColor: "#42a5f5",
        tabBarInactiveTintColor: "#90a4ae",
        tabBarStyle: { backgroundColor: "#f5f5f5", borderTopWidth: 0 },
      })}
    >
      <Tab.Screen
        name="Transactions"
        component={StackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Summary"
        component={Summary}
        // options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
