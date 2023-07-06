import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { auth } from "../config/fire"
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

WebBrowser.maybeCompleteAuthSession();


const Login = ({ navigation }) => {

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.replace("Menu")
            }
            if (user.email === "admin@gmail.com" ||  user.password === "123456") {
                navigation.navigate("AdminNavbar")
            }
            else {

            }
        })
    }, [])


    const [user, setUser] = useState(null);

    const [token, setToken] = useState("");
    const [userInfo, setUserInfo] = useState(null);


    const [request, response, promptAsync] = Facebook.useAuthRequest({
        clientId: "780436490305495",
    });

    if (request) {
        console.log(
            "You need to add this url to your authorized redirect urls on your Facebook app: " +
            request.redirectUri
        );
    }

    useEffect(() => {
        if (response && response.type === "success" && response.authentication) {
            (async () => {
                const userInfoResponse = await fetch(
                    `https://graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id,name,picture.type(large)`
                );
                const userInfo = await userInfoResponse.json();
                setUser(userInfo);
            })();
        }
    }, [response]);

    const handlePressAsync = async () => {
        const result = await promptAsync();
        if (result.type !== "success") {
            alert("Uh oh, something went wrong");
            return;
        }
    };

    const [errmsg, setErrorMsg] = useState()
    const [submitbuttondisabled, setSubmitbuttondisabled] = useState(false)
    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const handleSubmit = () => {
        if (values.email == "admin@gmail.com" || values.password == "123456") {
            navigation.navigate("AdminNavbar")
        }
        axios.post("http://localhost:8080/login", values)
            .then((response) => {
                console.log(response.data)
            })
        setErrorMsg("")
        setSubmitbuttondisabled(true)
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then(res => {
                setSubmitbuttondisabled(false)
                navigation.navigate("Menu")
            })
            .catch(err => {
                setErrorMsg(err.message)
                setSubmitbuttondisabled(false)
            })
        console.log(values)
    }

    const [req, resp, proAsync] = Google.useAuthRequest({
        androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
        iosClientId: '342364292565-1mahf96bccvb2fk5pba7ahldokd6mmns.apps.googleusercontent.com',
        webClientId: "342364292565-497j950a3nbni4tf83nbbj6i214ikfld.apps.googleusercontent.com",
    });

    useEffect(() => {
        if (resp?.type === "success") {
            setToken(resp.authentication.accessToken);
            getUserInfo();
        }
    }, [resp, token]);

    const getUserInfo = async () => {
        try {
            const response = await fetch(
                "https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            const user = await response.json();
            setUserInfo(user);
        } catch (error) {
            // Add your own error handler here
            console.log(error)
        }
    };


    return (
        <View style={styles.container1}>
            <View style={styles.container2}>
                <Text style={styles.head1}>Login</Text>
                <Text style={styles.head2}>Add your details to login</Text>
            </View>
            <View style={styles.input}>
                <TextInput style={styles.input1} placeholder='Enter Email'
                    onChange={event => setValues((prev) => ({ ...prev, email: event.target.value }))} ></TextInput>
                <TextInput style={styles.input1} placeholder='Enter password' secureTextEntry
                    onChange={event => setValues((prev) => ({ ...prev, password: event.target.value }))}></TextInput>
            </View>
            <View>
                <Text style={styles.error}>{errmsg}</Text>
                <TouchableOpacity style={styles.buttons} onPress={handleSubmit}><Text style={styles.head3}>Login</Text></TouchableOpacity>
            </View>
            <View style={styles.head4}>
                <Text style={styles.head5} onPress={() => navigation.navigate("Forgetpassword")}>Forget Your Password</Text>
            </View>
            <View style={styles.head6}>
                <Text style={styles.head5} >Or login with</Text>
            </View>
            <View style={styles.morebtn}>
                <TouchableOpacity style={styles.btn1} onPress={handlePressAsync}><Text style={styles.head3}>Login with Facebook</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn2} onPress={promptAsync}><Text style={styles.head3}>Login with Google</Text></TouchableOpacity>
            </View>
            <View style={styles.head7} ><Text style={styles.head7_1}>Dont have an account ? <Text style={styles.head7_2} onPress={() => navigation.navigate("Signup")}>Signup</Text> </Text></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container1: {
        marginVertical: 20,
        textAlign: "center",
    },
    container2: {
        textAlign: "center",
        alignItems: "center",
    },
    head1: {
        fontSize: 36,
        fontWeight: 400,
        color: "#808080",
    },
    head2: {
        fontSize: 20,
        fontWeight: 300,
        marginVertical: 10,
    },
    input: {
        marginHorizontal: 30,
        marginVertical: 20,
    },
    input1: {
        backgroundColor: "#cfcfcf",
        marginVertical: 10,
        padding: 15,
        height: 55,
        borderRadius: 25,
    },
    buttons: {
        backgroundColor: "navy",
        padding: 15,
        borderRadius: 25,
        marginHorizontal: 30,
    },
    head3: {
        textAlign: "center",
        color: "#fff",
    },
    head4: {
        marginVertical: 20,
        textAlign: "center",
    },
    head5: {
        color: "#757575",
        textAlign: "center",
    },
    head6: {
        color: "#c8c8c8",
    },
    morebtn: {
        marginHorizontal: 30,
        marginVertical: 10,
    },
    btn1: {
        backgroundColor: "#42a5f5",
        padding: 15,
        borderRadius: 25,
        color: "#fff",
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#42a5f5"
    },
    btn2: {
        backgroundColor: "#d84315",
        padding: 15,
        borderRadius: 25,
        color: "#fff",
        marginVertical: 10,
        borderColor: "#d84315"

    },
    head7: {
        marginHorizontal: 30,
    },
    head7_1: {
        textAlign: "center",
    },
    head7_2: {
        color: "red",
        fontWeight: "bold"
    },
    error: {
        color: "red",
        textAlign: "center",
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 400,

    }
})

export default Login;
