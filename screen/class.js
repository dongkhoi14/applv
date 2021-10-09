import React from 'react';
import { View, Image,Text, StyleSheet } from 'react-native';


export default function ClassList(props){
    return(
        <View style={styles.container}>
            <Text> lisy</Text>
            <Image source={require("../assets/n.png")} style={styles.classImage}/>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        alignItems: 'center',
        padding:16,
        shadowColor:"#000",
        shadowOpacity:0.3,
        shadowOffset:{width:0,height:0},
        shadowRadius:10,
        margin:16

        
    },  
    classImage:{
        width:200,
        height:200,

    }
})