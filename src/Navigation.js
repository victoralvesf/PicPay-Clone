import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import Payment from "./pages/Payment";

import PayButton from "./components/PayButton";

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: "home",
  },
  Wallet: {
    lib: AntDesign,
    name: "creditcard",
  },
  Notifications: {
    lib: Ionicons,
    name: "ios-notifications-outline",
  },
  Settings: {
    lib: AntDesign,
    name: "setting",
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === "Payment") {
            return (
              <PayButton
                onPress={() => navigation.navigate("Payment")}
                focused={focused}
              />
            );
          }

          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#131418",
          borderTopColor: "rgba(255,255,255,0.2)",
        },
        activeTintColor: "#fff",
        inactiveTintColor: "#92929c",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Início",
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          title: "Carteira",
        }}
      />
      <Tab.Screen
        name="Payment"
        component={Payment}
        options={{
          title: "",
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={Payment}
        options={{
          title: "Notificações",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Payment}
        options={{
          title: "Ajustes",
        }}
      />
    </Tab.Navigator>
  );
}
