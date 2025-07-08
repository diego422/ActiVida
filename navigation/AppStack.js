import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavTab from "./NavTab";
import ModifyPlan from "../screens/modifyPlan";
import viewUser from "../screens/viewUser";
import AwardsPage from "../screens/awards";
const Stack = createNativeStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tabs" component={NavTab} />
            <Stack.Screen name="ModifyPlan" component={ModifyPlan} />
            <Stack.Screen name="ViewUserInfo" component={viewUser} />
            <Stack.Screen name="awards" component={AwardsPage} />
            {/* Falta añadir el de usuario acá */}
        </Stack.Navigator>
    );
}