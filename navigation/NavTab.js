import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

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
        tabBarActiveTintColor: "#1E90FF",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: {
          backgroundColor: "#222",
          borderTopColor: "#333",
        },
        tabBarIcon: ({ color, size }) => (
          <Image
            source={icons[route.name]}
            style={{
              width: size,
              height: size,
              tintColor: color,
            }}
            resizeMode="contain"
          />
        ),
      })}
    >
      <Tab.Screen name="Inicio" component={Home} />
      {/* <Tab.Screen name="Plan" component={Plan} /> */}
      <Tab.Screen name="Retos" component={Challenges} />
      {/* <Tab.Screen name="Progreso" component={Progress} /> */}
    </Tab.Navigator>
  );
}
