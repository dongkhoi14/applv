import React from "react";
import { View,Text, Dimensions,Image, Button } from "react-native";
import { StyleSheet } from "react-native";

const LoginScreen = ()=>{
    return (
        <View style={styles.container}>
            
        
        <View style={styles.header}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={{fontSize:20}}>Trường Đại học Cần Thơ..</Text>
        </View>
        <View style={styles.footer}>
            

        </View>
        </View>
        

    )
}


const {height} = Dimensions.get("screen");
const h_logo = height* 0.2;
const styles = StyleSheet.create({
    container:{
        flex: 1,

        backgroundColor:'white'
    },
    header:{
        flex:2,
        justifyContent: 'center',
        alignItems:'center',
    },
    logo:{
        height : h_logo,
        width : h_logo

    },
    footer:{
        flex:1,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:130,
        paddingHorizontal:30,
        backgroundColor:'#2596BE',
        alignItems:'center',
    }
})
export default LoginScreen;

