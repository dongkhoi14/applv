import React ,{useState,useEffect,setTimeout} from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import LoginScreen from './src/login';
import SplashScreen from './src/SplashScreen';
import ClassList from './screen/class';

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
      <View>
        <ClassList />
      </View>
    );
   }
}
const styles=StyleSheet.create({
  container:{
      flex:1,
      alignItems:'stretch',
      justifyContent:'center',
      paddingLeft:16,
      paddingTop:16,
  },  
  
})
