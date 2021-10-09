import React from "react";
import { View, Text, Dimensions, Image, SafeAreaView, TextInput, StatusBar, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";



const userInfo = {username:"admin", password:"admin"};
class LoginScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }
    render(){
        return (
            <View style={styles.container}>
            <View>
                <Image source={require("../assets/logo.png")} style={styles.logo} />

            </View>
            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Account."
                    placeholderTextColor="#003f5c"
                    onChangeText={(username) =>this.setState({username})}
                    value={this.state.username}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={this._login}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

        </View>

        );
        
    }
    _login = async () =>{
        if (userInfo.username != "" && userInfo.password !=""){
            await fetch('http://127.0.0.1:8000/api/auth/login',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    "username": this.state.username,
                    "password":this.state.password
                }),
            }).then(function (response){
                alert("Dang nhap thanh cong!")
                return response.json();
            }).then(data => console.log(data))
        }else{
            alert("not ok");
        }
    }
}
  


const { height } = Dimensions.get("screen");
const h_logo = height * 0.3;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: h_logo,
        width: h_logo,
        marginBottom: 40

    },
    inputView: {
        backgroundColor: "#24b5e4",
        borderRadius: 30,
        width: "80%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#24b5e3",
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
    },



})
export default LoginScreen;

