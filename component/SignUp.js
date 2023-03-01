import React, { useState, createRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const handleSubmit = async () => {

        var nameValid = false;

        if (name.length == 0) {
            setNameError("Name is required")
        } else {
            setNameError("");
            nameValid = true;
        }


        var emailValid = false;
        if (email.length == 0) {
            setEmailError("Email is required");
        }
        else if (email.length < 6) {
            
            setEmailError("Email should be minimum 6 characters");
        }
        else {
            setEmailError("")
            emailValid = true
        }


        var passwordValid = false;
        if (password.length == 0) {
            setPasswordError("Password is required");
        }
        else if (password.length < 6) {
            setPasswordError("Password should be minimum 6 characters");
        }
        else {
            setPasswordError("")
            passwordValid = true
        }

        if (emailValid && passwordValid) {
            Alert.alert('Email: ' + email + '\nPassword: ' + password);
            setName("");
            setEmail("");
            setPassword("");
        }

        Alert.alert("Register Successfully")

        await AsyncStorage.setItem("name", "Raj Kamal");

    }
   
    return (
        <>
            <View style={styles.mainContainer}>
                <Text style={styles.mainHeader}>SignUp Form</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.labels}>Enter your Name</Text>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter name..."
                        placeholderTextColor="#8b9cb5"
                        value={name}
                        onChangeText={text => setName({ text })}
                    />
                    {name.length > 0 &&
                        <Text>{nameError}</Text>
                    }
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.labels}>Enter your Email</Text>
                    <TextInput
                        style={styles.inputStyle}
                        name="useremail"
                        placeholder='Enter email...'
                        placeholderTextColor="#8b9cb5"
                        value={email}
                        onChangeText={text => setEmail({ text })}
                    />
                    {email.length > 0 &&
                        <Text>{emailError}</Text>
                    }
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.labels}>Enter your Password</Text>
                    <TextInput
                        style={styles.inputStyle}
                        name="userpassword"
                        placeholder='Enter password...'
                        placeholderTextColor="#8b9cb5"
                        vlaue={password}
                        onChangeText={text => setPassword({ text })}
                    />
                    {password.length > 0 &&

                        <Text>{passwordError}</Text>
                    }
                </View>


                <TouchableOpacity
                    disabled
                    style={styles.buttonstyle}>
                    <Text style={styles.inputButton} onPress={handleSubmit}>Register</Text>
                </TouchableOpacity>

                <View style={styles.inputsignup}>
                    <Text style={styles.signuphere}>OR</Text>
                    <TouchableOpacity>
                        <Text style={styles.signupbutton} onPress={() => navigation.navigate("Login")} >Login</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </>

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
        fontWeight: 700,
        letterSpacing: 2
    },
    labels1: {
        maginTop: 3
    }
})
export default SignUp;