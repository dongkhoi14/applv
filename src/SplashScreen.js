import React from "react";
import { View,Text, Dimensions,Image, Button } from "react-native";
import { StyleSheet } from "react-native";

const SplashScreen = ()=>{
    return (
        <View style={styles.container}>
            
        
        <View style={styles.header}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={{fontSize:20}}>Trường Đại học Cần Thơ</Text>
        </View>
        <View style={styles.footer}>
        <Button title="Đăng nhập"/>
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
        flex:0,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:50,
        alignItems:'center',
        fontSize:10
    }
})
export default SplashScreen;

