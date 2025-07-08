import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavTab from "./NavTab";
import ModifyPlan from "../screens/modifyPlan";
import ViewUser from "../screens/viewUser";
import AwardsPage from "../screens/awards";
import EditExercise from "../screens/editExercise";
import AddExercise from "../screens/addExercise";
const Stack = createNativeStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tabs" component={NavTab} />
            <Stack.Screen name="ModifyPlan" component={ModifyPlan} />
            <Stack.Screen name="EditExercise" component={EditExercise} />
            <Stack.Screen name="AddExercise" component={AddExercise} />
            <Stack.Screen name="ViewUserInfo" component={ViewUser} />
            <Stack.Screen name="awards" component={AwardsPage} />
            {/* Falta añadir el de usuario acá */}
        </Stack.Navigator>
    );
}