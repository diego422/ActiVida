import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text, View } from "react-native";

import Challenges from "../screens/challenges";
import Home from "../screens/home";
import Plan from "../screens/plan";
import Progress from "../screens/progress";

import HomeIcon from "../assets/homeNav.png";
import PlanIcon from "../assets/planNav.png";
import ChallengesIcon from "../assets/challengesNav.png";
import ProgressIcon from "../assets/progressNav.png";

const Tab = createBottomTabNavigator();

export default function NavTab() {
  const icons = {
    Inicio: HomeIcon,
    Plan: PlanIcon,
    Retos: ChallengesIcon,
    Progreso: ProgressIcon,
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "#F5F4F4",
          borderTopWidth: 0,
          height: 70,
          paddingTop: 5,
        },
        tabBarLabel: ({ focused, color }) => (
          <Text
            style={{
              color: focused ? "#7D9270" : "#000",
              fontWeight: "bold",
              fontSize: 12,
              marginTop: -5,
            }}
          >
            {route.name}
          </Text>
        ),
        tabBarIcon: ({ focused, size }) => (
          <Image
            source={icons[route.name]}
            style={{
              width: 26,
              height: 26,
              tintColor: focused ? "#7D9270" : "#000",
            }}
            resizeMode="contain"
          />
        ),
      })}
    >
      <Tab.Screen name="Inicio" component={Home} />
      <Tab.Screen name="Plan" component={Plan} />
      <Tab.Screen name="Retos" component={Challenges} />
      <Tab.Screen name="Progreso" component={Progress} />
    </Tab.Navigator>
  );
}
