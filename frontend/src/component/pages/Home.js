import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
    return (
        <View style={style.container}>
            <View style={style.container1}>
                <Text style={style.heading1}>Discover the best foods from over 1,000 {'\n'}resturant and fast delivery to your doorstep</Text>
            </View>
            <View style={style.buttons}>
                <TouchableOpacity style={style.buttons1} onPress={()=> navigation.navigate("Login") }><Text style={style.head2}>Login</Text></TouchableOpacity>
                <TouchableOpacity style={style.buttons2} onPress={()=> navigation.navigate("Signup")}><Text style={style.head3}>Create Account</Text></TouchableOpacity>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    container1: {
        marginVertical: 20,
    },
    heading1: {
        textAlign: "center",
        alignItems: "center",
        fontSize: 16,
        fontWeight: 300,
        
    },
    buttons: {
        marginHorizontal: 40,
    },
    buttons1: {
        backgroundColor : "navy",
        padding: 15,
        color: "white",
        borderRadius: 25,
        marginVertical: 10,
    },
     buttons2 :{
        borderColor : "navy",
        borderWidth: 1,
        backgroundColor: "white",
        color: "navy",
        borderRadius: 25,
        padding: 15,
        textAlign: "center"
    },
    head2 :{
        color: '#fff',
        textAlign: "center"
    },
    head3: {
        textAlign: "center"
    }

})

export default Home