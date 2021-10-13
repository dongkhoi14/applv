import React ,{useState,useEffect,setTimeout} from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import LoginScreen from './src/login';
import SplashScreen from './src/SplashScreen';
import ClassList from './screen/class';
import RootStackScreen from './src/RootStack';
import StudentScreen from './screen/studentScreen';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      classList:[
        {"id":1},
        {"id":2},
        {"id":3}
      ]
    };
  }
  render(){
    const {classList} =  this.state;
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name="Student" component={StudentScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
   }
}

