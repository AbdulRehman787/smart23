import React from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import {View, StyleSheet, Text} from 'react-native';

const ForgetPasswordotp = () => {
    return (
        <View style={styles.container}>
            <View>
            <Text style={styles.head1}>We have sent an OTP to your Mobile</Text>
            <Text style={styles.head2}>Please check your mobile number 071*****53 continue to reset your  password</Text>
            </View>
            <View style={styles.inputs}>
            <TextInput style={styles.input} placeholder='*'></TextInput>
            <TextInput style={styles.input} placeholder='*'></TextInput>
            <TextInput style={styles.input} placeholder='*'></TextInput>
            <TextInput style={styles.input} placeholder='*'></TextInput>
            </View>
            <View>
            <TouchableOpacity style={styles.btn}><Text style={styles.btn_head}>Next</Text></TouchableOpacity>
            </View>
            <View style={styles.head2}><Text>Didn't Recive? <Text style={styles.head2_1}>Click Here</Text> </Text></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical : 20,
        marginHorizontal: 30,
    },
     head1:{
        fontSize: 30,
        textAlign: "center",
        alignItems : "center",
     },
     head2: {
        textAlign: 'center',
        alignItems:"center",
        marginVertical: 10,
     },
     inputs: {
        flexDirection: "row",
        marginVertical: 10,
        justifyContent:"space-evenly",
     },
     input:{
        backgroundColor: "#ccc",
        padding: 10,
        textAlign:"center",
        borderRadius: 50,
     },
     btn: {
        backgroundColor: "navy",
        borderWidth: 1,
        borderColor: "navy",
        padding: 15,
        marginVertical: 10,
        borderRadius : 50,
     },
     btn_head:{
        color: "#fff",
        textAlign: "center",
     },
     head2:{
        textAlign: "center",
        alignItems :"center",
        marginVertical: 10,
     },
     head2_1:{
        color: "red",
        fontWeight: "bold",

     }
})

export default ForgetPasswordotp;
