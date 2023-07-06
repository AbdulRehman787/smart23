import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Checkout = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.head}>Checkout</Text>
            <View style={styles.container1}>
                <Text style={styles.head1}>Delivery Address</Text>
                <Text style={styles.head}>No 03, 4th Lane ,{"\n"}London</Text>
            </View>
        </View>
    )
}

export default Checkout

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 20,
    },
    head: {
        fontSize: 22,
        fontWeight: 400,
    },
    container1: {
        marginVertical: 10,
    },
    head1: {
        fontSize: 16,
        color: "#ccc",
    },
})