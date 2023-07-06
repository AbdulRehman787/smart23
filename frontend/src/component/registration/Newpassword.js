import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const Newpassword = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.head1}>New Password</Text>
                <Text style={styles.head2}>Please enter Your email to recive a link to create a new password with email</Text>
            </View>
            <View style={styles.inputs}>
                <TextInput style={styles.input} placeholder='New Password'></TextInput>
                <TextInput style={styles.input} placeholder='Confirm  Password'></TextInput>
            </View>
            <View>
                <TouchableOpacity onPress={()=> navigation.navigate("Verify")} style={styles.btn}><Text style={styles.btn_head}>Next</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 30,
    },
    head1: {
        fontSize: 30,
        textAlign: "center",
        marginVertical: 10,
    },
    head2: {
        textAlign: "center",
        fontSize: 16,
    },
    inputs: {
        marginTop: 20,
    },
    input: {
        borderColor: "#ccc",
        borderWidth: 1,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderRadius: 50,
        padding: 12,
    },
    btn: {
        backgroundColor: "navy",
        padding: 15,
        marginVertical: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "navy",
    },
    btn_head: {
        color: "#fff",
        textAlign: "center"
    },
})

export default Newpassword;
