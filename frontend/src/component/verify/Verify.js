import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const Verify = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.img1} source={require("../../../assets/1 (9).jpg")}></Image>
            </View>
            <View>

                <Text style={styles.head1}>Please Verify you are 18+</Text>
                <Text style={styles.head2}>Real Time tracking of your food on the app once you placed the order</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("GetDocuments")} style={styles.btn}><Text style={styles.btn_head}>Verify</Text></TouchableOpacity>
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
        fontSize: 26,
        fontWeight: 400,
        textAlign: "center",
    },
    head2: {
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 20,
    },
    btn: {
        backgroundColor: "navy",
        borderRadius: 50,
        padding: 15,
        borderWidth: 1,
        borderColor: "navy"
    },
    btn_head: {
        fontSize: 16,
        color: 'white',
        textAlign: "center"
    },
    img1: {
        resizeMode: "cover",
        width: "100%",
        height: 300,
        borderRadius: 10,
        marginVertical: 10,
    }

})

export default Verify;
