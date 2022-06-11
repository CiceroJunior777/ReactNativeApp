import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

// You can import from local files
import Login from "./pages/login/Login";
import Home from './pages/home/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName = "Login">
    <Stack.Screen name = "Login" component = {Login} />
    <Stack.Screen name = "Home" component = {Home} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}