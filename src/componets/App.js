import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './screens/MainScreen';
import AddToDoTask from '../componets/screens/ToDos/addToDask/index';

const App = () => {

  const Tab = createBottomTabNavigator()

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="mainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="addToDos"
          component={AddToDoTask}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
