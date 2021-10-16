import React, { useState, useEffect, setTimeout } from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import LoginScreen from './src/login';
import SubjectsList from './screen/allSubject';
import StudentScreen from './screen/studentScreen';
import subjectDetailScreen from './screen/subjectDetail';
import DoAtt from './src/doAtt';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name="Student" component={StudentScreen} />
          <Stack.Screen name="SubjectsList" component={SubjectsList} />
          <Stack.Screen name="subjectDetailScreen" component={subjectDetailScreen} />
          <Stack.Screen name="DoAtt" component={DoAtt} />

        </Stack.Navigator>
      </NavigationContainer>
      //  <View>
      //    <DoAtt />
      //  </View>
    );
  }
}

