import React, { useEffect } from "react";
import { Text, View, StyleSheet, Image } from 'react-native';
import ClassList from "./class";



export default function StudentScreen({ navigation, route }) {
    const { mssv, name, username, email } = route.params;
    const getMSSV = async () => {
        try {
            await fetch('http://localhost:8000/api/auth/mssv', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id":JSON.stringify(mssv)
            }),
        }).then(function (response){
            return response.json();
        }).then(data=> console.log(data))
        } catch (error) {
         console.error(error)   
        }
    }
    useEffect(()=>{
        getMSSV();
    },[])
    return (
        <View style={styles.container}>

            <Text>{data.mssv.mssv}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        backgroundColor: "#fff",
        paddingTop: 10,
        paddingLeft: 16,
        paddingRight: 16,

    },
    classImage: {
        width: 100,
        height: 100,

    }
})