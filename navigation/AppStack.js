import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavTab from "./NavTab";
const Stack = createNativeStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name="Tabs" component={NavTab} />

        </Stack.Navigator>
    );
}