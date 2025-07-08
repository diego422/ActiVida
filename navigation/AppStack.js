import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavTab from "./NavTab";
import ModifyPlan from "../screens/modifyPlan";
import viewUser from "../screens/viewUser";
import AwardsPage from "../screens/awards";
import EditExercise from "../screens/EditExercise";
import AddExercise from "../screens/AddExercise";
const Stack = createNativeStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tabs" component={NavTab} />
            <Stack.Screen name="ModifyPlan" component={ModifyPlan} />
            <Stack.Screen name="EditExercise" component={EditExercise} />
            <Stack.Screen name="AddExercise" component={AddExercise} />
            <Stack.Screen name="ViewUserInfo" component={viewUser} />
            <Stack.Screen name="awards" component={AwardsPage} />
            {/* Falta añadir el de usuario acá */}
        </Stack.Navigator>
    );
}