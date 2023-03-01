import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState("");
    const [checkValidEmail, setCheckValidEmail] = useState(false);

   useEffect( async()=>{
   const name=await AsyncStorage.getItem('name');
   console.log('Print data....')
   console.log(name)
   },[])
   
    const handleEmail = (text) => {

    };

    const handlePassword = (value) => {

    }

    const handleLogin = () => {

        Alert.alert("login successfully")

    }
    console.log(email)
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Login Form</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter your Email</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={email}
                    placeholder="Enter email..."
                    placeholderTextColor="#8b9cb5"
                    onChangeText={text => handleEmail({ text })}
                />

                <View style={styles.inputContainer}>
                    <Text style={styles.labels}>Enter your Password</Text>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter password..."
                        placeholderTextColor="#8b9cb5"
                        onChangeText={text => handlePassword({ text })}
                    // value={password}
                    />
                </View>
            </View>

            <TouchableOpacity
                style={styles.buttonstyle}
                onPress={() => handleLogin()}>
                <Text style={styles.inputButton}>Login</Text>
            </TouchableOpacity>


            <View style={styles.inputsignup}>
                <Text style={styles.signuphere}>OR</Text>
                <TouchableOpacity>
                    <Text style={styles.signupbutton} onPress={() => navigation.navigate("SignUp")} >SignUp</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 30,
        paddingTop: 30,
        backgroundColor: "#fff",
        textAlign: "center",
        display: "flex",

    },
    inputContainer: {
        marginTop: 20,
    },
    mainHeader: {
        fontSize: 50,
        color: "orange",
        textAlign: "center",
        fontWeight: 700,

    },
    labels: {
        fontSize: 21,
        color: "black",
        marginTop: 1,
        marginBottom: 5,
        lineHeight: 25,
        fontWeight: 900
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: "black",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 4,
        fontSize: 18,
        marginTop: 2
    },

    buttonstyle: {
        backgroundColor: "orange",
        padding: 16,
        borderRadius: 13,
        marginTop: 22,

    },
    inputButton: {
        color: "#fff",
        fontSize: 24,
        textAlign: "center",
        backgroundColor: "orange",
        fontWeight: 900,
        letterSpacing: 2
    },
    signup: {
        color: "blue",
        fontSize: 30,
        marginBottom: 30,
        textAlign: "center",

    },
    signuphere: {
        marginTop: 10,
        fontSize: 25,
        color: "black",
        fontWeight: 600,
        textAlign: "center"
    },
    signupbutton: {
        backgroundColor: "blue",
        textAlign: "center",
        padding: 16,
        fontSize: 24,
        borderRadius: 13,
        color: "white",
        marginTop: 10,
        fontWeight: 900,
        letterSpacing: 2
    }
})
export default Login;