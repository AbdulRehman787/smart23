import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const BottomNavbar = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={() => navigation.navigate("Menu")}>
                <Image style={styles.img} source={require('../../../assets/window.png')} />
                <Text>Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={() => navigation.navigate("Offer")}>
                <Image style={styles.img} source={require('../../../assets/shopping-bag.png')} />
                <Text>Offer</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={() => navigation.navigate("Homes")}>
                <Image style={styles.img} source={require('../../../assets/home.png')} />
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={() => navigation.navigate("Profile")}>
                <Image style={styles.img} source={require('../../../assets/user.png')} />
                <Text>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={() => navigation.navigate("More")}>
                <Image style={styles.img} source={require('../../../assets/menu-bar.png')} />
                <Text>More</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottomNavbar

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 45,
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 10,
        width: "100%"
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