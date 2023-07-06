import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocation, faStar, faEuro, faPlus } from '@fortawesome/free-solid-svg-icons';
const OrderPage = ({navigation}) => {
    return (
        <View style={styles.maincontainer}>
            <View style={styles.container}>
                <Text style={styles.head}>MyOrder</Text>
            </View>
            <View style={styles.container1}>
                <Image style={styles.img} source={require('../../../assets/1 (1).jpg')} />
                <View>
                    <Text style={styles.head}>Smartwhip Silver</Text>
                    <Text style={styles.text}><FontAwesomeIcon style={styles.icon} icon={faStar} />4.9 <Text style={styles.text1}>(124 ratings)</Text> </Text>
                    <Text style={styles.cont}><FontAwesomeIcon style={styles.icon} icon={faLocation} />No 03, 4th   Lane London</Text>
                </View>

            </View>
            <View style={styles.container2}>
                <View style={styles.container2_1}>
                    <Text style={styles.head1}>Cream Deluxe</Text>
                    <Text style={styles.head2}><FontAwesomeIcon icon={faEuro} />16</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.container2_1}>
                    <Text style={styles.head1}>Cream Deluxe</Text>
                    <Text style={styles.head2}><FontAwesomeIcon icon={faEuro} />14</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.container2_1}>
                    <Text style={styles.head1}>Cream Deluxe</Text>
                    <Text style={styles.head2}><FontAwesomeIcon icon={faEuro} />17</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.container2_1}>
                    <Text style={styles.head1}>Cream Deluxe</Text>
                    <Text style={styles.head2}><FontAwesomeIcon icon={faEuro} />15</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.container2_1}>
                    <Text style={styles.head1}>Cream Deluxe</Text>
                    <Text style={styles.head2}><FontAwesomeIcon icon={faEuro} />8</Text>
                </View>
            </View>
            <View style={styles.container3}>
                <View style={styles.container2_1}>
                    <Text style={styles.head2}>Delivery Instructions</Text>
                    <Text style={styles.head3}><FontAwesomeIcon style={styles.icon} icon={faPlus} />Add Note</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.container2_1}>
                    <Text style={styles.head2}>Sub Total </Text>
                    <Text style={styles.head1}><FontAwesomeIcon style={styles.icon} icon={faEuro} />68</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.container2_1}>
                    <Text style={styles.head2}>Delivery Cost </Text>
                    <Text style={styles.head1}><FontAwesomeIcon style={styles.icon} icon={faEuro} />2</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.container2_1}>
                    <Text style={styles.head2}>Total </Text>
                    <Text style={styles.head1}><FontAwesomeIcon style={styles.icon} icon={faEuro} />70</Text>
                </View>
            </View>
            <View style={styles.container5}>
                <TouchableOpacity onPress={()=> navigation.navigate("Checkout")} style={styles.btn}><Text style={styles.textbtn}>Checkout</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default OrderPage

const styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: "#fff"
    },
    container: {
        marginVertical: 10,
        marginHorizontal: 20,

    },
    head: {
        fontSize: 22,
        fontWeight: 400,
        marginVertical: 5,
    },
    container1: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 10,
    },
    img: {
        width: 100,
        height: 100,
    },
    icon: {
        color: "navy",
    },
    text: {
        fontSize: 18,
        color: "navy",

    },
    text1: {
        color: "#ccc",
    },
    cont: {
        marginVertical: 10,
    },
    container2: {
        backgroundColor: "#f5f5f5",
        paddingVertical: 10,
        marginHorizontal: 10,
    },
    container2_1: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,


    },
    head1: {
        fontSize: 18,
        fontWeight: 300,
    },
    head2: {
        fontWeight: "bold"
    },
    line: {
        marginVertical: 10,
        marginHorizontal: 20,
        height: 1,
        backgroundColor: "gray",

    },
    container3: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
    head3: {
        color: "navy",
        marginTop: 10,
        justifyContent: "center"
    },
    btn: {
        padding: 12,
        backgroundColor: "navy",
        borderRadius: 25,
    },
    textbtn: {
        textAlign: "center",
        color: "#fff"
    },
    container5: {
        marginHorizontal: 20,
    }
})