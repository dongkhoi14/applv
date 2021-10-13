import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./login";
import SplashScreen from "./SplashScreen";
import StudentScreen from "../screen/studentScreen";
const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => {
    return (
        <RootStack.Navigator headerMode='none' >
            <RootStack.Screen name="LoginScreen" component={LoginScreen} />
            <RootStack.Screen name="StudentScreen" component={StudentScreen} />

        </RootStack.Navigator>
    );
};

export default RootStackScreen;