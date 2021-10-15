import React ,{useState,useEffect,setTimeout} from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import LoginScreen from './src/login';
import SubjectsList from './screen/allSubject';
import StudentScreen from './screen/studentScreen';
import subjectDetailScreen from './screen/subjectDetail';
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
          <Stack.Screen name = "SubjectsList" component={SubjectsList} />
          <Stack.Screen name = "subjectDetailScreen" component={subjectDetailScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    );
   }
}

