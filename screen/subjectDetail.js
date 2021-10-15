import React ,{useEffect,useState}from "react";
import {View,Text,ActivityIndicator,FlatList,TouchableOpacity,StyleSheet,Image} from 'react-native';

export default function subjectDetailScreen({navigation, route}){
    const {id,ten_hoc_phan} = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const getAtt = async ()=>{
        try {
            const response = await fetch('http://localhost:8000/api/auth/att', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "id": JSON.stringify(id)
                }),
            })
            const json = await response.json();
            console.log(json);
            setData(json.att)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }
    }
    useEffect(()=>{
        getAtt();
    },[])
    return(
        <View>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id.toString() }
                    renderItem={({ item }) => (
                       
                            <View style={styles.container1}>
                            <Text style={styles.title}> {item.id} {item.ngay_diem_danh}</Text>
                            <Image source={require("../assets/n.png")} style={styles.classImage} />
                        </View>

                    )}
                    inverted
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