import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavTab from "./NavTab";
import ModifyPlan from "../screens/modifyPlan";
import viewUser from "../screens/viewUser";
const Stack = createNativeStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tabs" component={NavTab} />
            <Stack.Screen name="ModifyPlan" component={ModifyPlan} />
            <Stack.Screen name="ViewUserInfo" component={viewUser} />
            {/* Falta añadir el de usuario acá */}
        </Stack.Navigator>
    );
}