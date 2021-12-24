import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from '../Home';
import LogInScreen from '../LogIn';
import SettingsScreen from '../Settings';
import ToDosListScreens from '../ToDos';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SvgIcons from '../../assets/svgImaged';

const MainScreen = () => {
  const Tab = createBottomTabNavigator()
  return (
      <Tab.Navigator
        screenOptions={({route})=>({
          tabBarIcon:({focused, color, size})=>{

            let iconName;
            if(route.name === "Home"){
              iconName = focused
              return <SvgIcons iconType={"home"}/>
            }else if (route.name === "LogIn"){
              iconName = focused
              return <SvgIcons iconType={"logIn"}/>
            }else if(route.name === "Settings"){
              iconName = focused
              return <SvgIcons iconType={"settings"}/>
            }else if(route.name === "Add ToDos"){
              iconName = focused
              return <SvgIcons iconType={"toDos"}/>
            }
            
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor: "tomato",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Add ToDos" component={ToDosListScreens}/>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
        <Tab.Screen name="LogIn" component={LogInScreen}/>
      </Tab.Navigator>
  );
};

export default MainScreen;
