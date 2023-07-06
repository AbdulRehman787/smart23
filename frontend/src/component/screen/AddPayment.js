import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AsyncStorage from '@react-native-community/async-storage'
const AddPayment = ({ navigation }) => {
    const [err, setError] = useState()
    const [values, setValues] = useState({
        cardNumber: "",
        mm: "",
        yy: "",
    })
    const addCard = () => {
        if (!values.mm || !values.yy || !values.cardNumber) {
            setError("Please Fill all data")
        }
        else {
            AsyncStorage.setItem("card", JSON.stringify(values))
            navigation.navigate("PaymentDetails")
        }
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text>Add Credit/Debit Card</Text>
                <FontAwesomeIcon icon={faShoppingCart} />
            </View>
            <View style={styles.line}> </View>

            <View style={styles.container1}>
                <TextInput placeholder='Card Number' style={styles.input}
                    onChange={event => setValues((prev) => ({ ...prev, cardNumber: event.target.value }))}  ></TextInput>
                <View style={styles.container1_1}>
                    <Text>Expiry</Text>
                    <TextInput placeholder='MM' style={styles.input1}
                        onChange={event => setValues((prev) => ({ ...prev, mm: event.target.value }))}  ></TextInput>
                    <TextInput placeholder='YY' style={styles.input1}
                        onChange={event => setValues((prev) => ({ ...prev, yy: event.target.value }))} ></TextInput>
                </View>
                <TextInput placeholder='Security Code' style={styles.input}></TextInput>
                <TextInput placeholder='First Name' style={styles.input}></TextInput>
                <TextInput placeholder='Last Name' style={styles.input}></TextInput>
            </View>
            <View>
                <Text style={styles.err}>{err}</Text>
                <TouchableOpacity onPress={addCard} style={styles.btn}><Text style={styles.textbtn}><FontAwesomeIcon style={{ color: "#fff", marginTop: 5, }} icon={faPlus} />Add Card</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default AddPayment

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 20,
    },
    container: {
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    line: {
        height: 1,
        backgroundColor: "#ccc",
        marginVertical: 10,
    },
    input: {
        padding: 15,
        backgroundColor: "#ccc",
        borderRadius: 25,
        marginVertical: 10,
    },
    container1_1: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    input1: {
        width: 100,
        backgroundColor: "#ccc",
        padding: 15,
        marginLeft: 10,
        borderRadius: 25,
    },
    btn: {
        backgroundColor: "navy",
        padding: 15,
        borderRadius: 25,
    },
    textbtn: {
        textAlign: "center",
        color: "#fff"
    },
    err: {
        color: "red",
        fontSize: 14,
    }
})