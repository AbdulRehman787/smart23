import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native'
import { auth } from '../config/fire'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import AsyncStorage from '@react-native-community/async-storage'


const Signup = () => {
    const [data, setData] = useState([])
    const navigation = useNavigation()
    const [error, setError] = useState("")
    const [registration, setRegistration] = useState("")
    const [passwordmatch, setpasswordmatch] = useState("")
    const [errmsg, setErrorMsg] = useState()
    const [newerrmsg, setNewErrorMsg] = useState()
    const [submitbuttondisabled, setSubmitbuttondisabled] = useState(false)
    const [error1, seterror1] = useState('')

    const [isRegistered, setIsRegistered] = useState(false);

    const [values, setValues] = useState({
        name: "",
        email: "",
        phoneNo: "",
        address: "",
        password: "",
        cpassword: "",
    })


    const handleSubmit = () => {
        if (!values.name || !values.email || !values.phoneNo || !values.address || !values.password || !values.cpassword) {
            setError("Please Fill All data")
            if (values.email === data.email) {
                console.log("Email Match")
            }

        }
        else {
            if (values.password === values.cpassword) {
                if (values.email === data.email) {
                    setNewErrorMsg("Email is already registered")
                }
                else if (values.password.length > 8) {
                    seterror1("Password length should be more than 8")
                }
                else {
                    axios.post("http://localhost:8080/register", values)
                        .then((response) => {
                            if (response.data.message) {
                                setRegistration(response.data.message)
                            }
                            else {
                                if (values.email == "admin@gmail.com" || values.password == "123456") {
                                    navigation.navigate("AdminNavbar")
                                }
                                navigation.navigate("Verify")
                                AsyncStorage.setItem("data", JSON.stringify(values))
                            }
                        })
                        .then(res => console.log("Data Submited"))
                        .catch(err => console.log(err))

                }

            }
            else if (values.password != values.cpassword) {
                setpasswordmatch("Password dont match")
            }
        }

        console.log(values)


        setErrorMsg("")
        setSubmitbuttondisabled(true)
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(res => {
                setSubmitbuttondisabled(false)
                const user = res.user;
                updateProfile(user, {
                    displayName: values.name
                })
                if (!values) {
                    alert("Hello World")
                }

            })
            .catch(err => {
                setErrorMsg(err.message)
                setSubmitbuttondisabled(false)

            })
    }
    return (

        <View style={style.container1}>
            <ScrollView>
                <View style={style.textStyle}>
                    <Text style={style.heading1} >SignUp</Text>
                    <Text style={style.heading2}>Add Your Details to signup </Text>
                </View>
                <View>
                    <TextInput style={style.input} placeholder='Name'
                        onChange={event => setValues((prev) => ({ ...prev, name: event.target.value }))} />
                    <TextInput style={style.input} placeholder='Email'
                        onChange={event => setValues((prev) => ({ ...prev, email: event.target.value }))} />
                    <TextInput style={style.input} placeholder='Phone No'
                        onChange={event => setValues((prev) => ({ ...prev, phoneNo: event.target.value }))} />
                    <TextInput style={style.input} placeholder='Address'
                        onChange={event => setValues((prev) => ({ ...prev, address: event.target.value }))} />
                    <TextInput style={style.input} secureTextEntry={true} placeholder='Password'
                        onChange={event => setValues((prev) => ({ ...prev, password: event.target.value }))} />
                    <TextInput style={style.input} secureTextEntry={true} placeholder='Confirm Password'
                        onChange={event => setValues((prev) => ({ ...prev, cpassword: event.target.value }))} />
                </View>
                <View>
                    <Text style={style.error}>{error}</Text>
                    <Text style={style.error}>{errmsg}</Text>
                    <Text style={style.error}>{newerrmsg}</Text>
                    <Text style={style.error}>{error1}</Text>
                    {isRegistered && <p style={style.error}>Email is already registered.</p>}
                </View>

                <View>

                    <Text style={style.error}>{passwordmatch}</Text>
                    <TouchableOpacity style={style.button3} onPress={handleSubmit}><Text style={style.textbtn}>Signup</Text></TouchableOpacity>
                </View>
                <View>
                    <Text style={style.heading2}>Already have a Account? <Text style={style.pageNavigate} onPress={() => navigation.navigate("Login")}>Login</Text></Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Signup

const style = StyleSheet.create({
    container1: {
        width: "100%",
        padding: 20,
    },
    textStyle: {
        width: "100%",
        textAlign: "center",
    },
    heading1: {
        fontSize: 32,
        fontWeight: 500,
        color: "#616161",
        textAlign: "center",
        marginBottom: 20,
    },
    heading2: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: 400,
        color: "#9E9E9E",
        marginBottom: 40,
        marginTop: 10,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#E0E0E0",
        borderRadius: 50,
        marginBottom: 20,
    },
    button3: {
        borderRadius: 50,
        padding: 10,
        backgroundColor: "navy"
    },
    textbtn: {
        textAlign: "center",
        color: "#fff"
    },
    pageNavigate: {
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