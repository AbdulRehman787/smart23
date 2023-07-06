import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const AdminNavbar = ({ navigation }) => {
    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={() => navigation.navigate("AddProduct")}>
                <Image style={styles.img} source={require('../../../assets/window.png')} />
                <Text>Add Product</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={() => navigation.navigate("CheckOrder")}>
                <Image style={styles.img} source={require('../../../assets/shopping-bag.png')} />
                <Text>Check Order</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={() => navigation.navigate("ActiveUser")}>
                <Image style={styles.img} source={require('../../../assets/user.png')} />
                <Text>ActiveUser</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={() => navigation.navigate("CheckUser")}>
                <Image style={styles.img} source={require('../../../assets/menu-bar.png')} />
                <Text>CheckUser</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AdminNavbar

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 45,
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 10,
    },
    img: {
        width: 20,
        height: 20,
    },
    ButtonStyle: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
    }
})