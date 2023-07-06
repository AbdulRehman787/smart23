import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { auth } from "../config/fire"
import { sendPasswordResetEmail } from 'firebase/auth';
const Forgetpassword = ({ navigation }) => {
    const [data, setData] = useState()
    const [values, setValues] = useState({
        email: "",
    })
    const handleSubmit = () => {
        axios.post("http://localhost:8080/forgetPassword" , values)
            .then((response) => {
                console.log(response.data)
            })
        console.log(values)
        sendPasswordResetEmail(auth, values.email)
            .then(() => {
                alert("Password email has sent successfully of your accound")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorMessage)
            });
    }
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.head1}>Reset Password</Text>
                <Text style={styles.head2}>Please enter your email to receive a link to create a new password via email </Text>
            </View>
            <View>
                <TextInput style={styles.input} placeholder='Email'
                    onChange={event => setValues((prev) => ({ ...prev, email: event.target.value }))}></TextInput>
            </View>
            <View>
                <TouchableOpacity onPress={handleSubmit} style={styles.btn}><Text style={styles.btn_head}>Send</Text></TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginVertical: 20,
    },
    container1: {
        textAlign: "center",
    },
    head1: {
        fontSize: 30,
        textAlign: "center"
    },
    head2: {
        fontSize: 16,
        textAlign: "center",
        alignItems: 'center',
        marginVertical: 10,

    },
    input: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 50,
        backgroundColor: "#ccc",
        marginVertical: 10,
    },
    btn: {
        backgroundColor: "navy",
        padding: 15,
        marginVertical: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "navy"
    },
    btn_head: {
        color: "#fff",
        textAlign: "center"
    },
    btn1: {
        padding: 15,
        backgroundColor: "#42a5f5",
        borderWidth: 1,
        borderColor: "#42a5f5",
        borderRadius: 50,
    }
})

export default Forgetpassword;
