import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


export default function ClassList(props) {
    return (
        <View style={styles.container}>
            <Text> list</Text>
            <Image source={require("../assets/n.png")} style={styles.classImage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor:"#fff",
        elevation: 5,
        marginBottom:16
    },
    classImage: {
        width: 100,
        height: 100,

    }
})