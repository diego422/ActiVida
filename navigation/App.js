// import 'react-native-gesture-handler;'

import { createStackNavigator } from '@react-navigation/stack';
import LogIn from '../screens/logIn';
import Home from '../screens/home';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="logIn" component={LogIn} options={{headerShown: false}}/>
        <Stack.Screen name="home" component={Home} />
        {/* options={{headerShown: false}}   añadir eso despues de "Home" en la linea de arriba*/}
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
} 
