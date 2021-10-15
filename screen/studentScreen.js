import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';



export default function StudentScreen({ navigation, route }) {
    const { mssv, name, username, email } = route.params;
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getMSSV = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/auth/mssv', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "id": JSON.stringify(mssv)
                }),
            })
            const json = await response.json();
            console.log(json.mssv.id_lop);
            const r = await fetch('http://localhost:8000/api/auth/subject', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "id": json.mssv.id_lop
                }),
            })
            const j = await r.json();
            console.log(j.subject)
            setData(j.subject)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getMSSV();
    }, [])

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('subjectDetailScreen',{
                            "id":item.id,
                            "ten_hoc_phan":item.ten_hoc_phan
                        })}> 
                            <View style={styles.container1}>
                            <Text style={styles.title}> {item.ten_hoc_phan}</Text>
                            <Image source={require("../assets/n.png")} style={styles.classImage} />
                        </View>
                        </TouchableOpacity>

                    )}
                />
            )}

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

    container1: {
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: "#fff",
        elevation: 5,
        marginBottom: 16
    },
    classImage: {
        width: 100,
        height: 100,

    },
    title: {
        textTransform: 'uppercase',

    }
})