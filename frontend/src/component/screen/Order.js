import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEuro } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { SelectList } from 'react-native-dropdown-select-list'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Order = async ({ navigation }) => {
    const [getData, setGetData] = useState([])
    const [count, setCount] = useState(1)
    const [selected, setSelected] = useState([]);
    const data = [
        { key: '1', value: 'Small Size', },
        { key: '2', value: 'Medium Size' },
        { key: '3', value: 'Large Size' },
        { key: '4', value: 'Xl large Size' },
    ]

    


    return (
        <View>
            <View style={styles.container}>
                <ImageBackground style={styles.img} source={require('../../../assets/uibubble.jpg')} />
            </View>
            <View style={styles.container1}>
                <View style={styles.main_container}>
                    <View>
                        <Text style={styles.head1}>Smartwhip Silver</Text>
                        <Text><FontAwesomeIcon icon={faStar} style={styles.head2} /> <FontAwesomeIcon style={styles.head2} icon={faStar} /> <FontAwesomeIcon style={styles.head2} icon={faStar} /> <FontAwesomeIcon style={styles.head2} icon={faStar} /> <Image source={require('../../../assets/star.png')} style={{ width: 15, height: 15, }} /></Text>
                        <Text style={styles.head2}>4 Star Ratings</Text>
                    </View>
                    <View style={styles.container1_1}>
                        <Text style={styles.head1}> <FontAwesomeIcon style={styles.icon} icon={faEuro} />
                            .750</Text>
                        <Text style={styles.head3}>/per Portion</Text>
                    </View>
                </View>
                <View style={styles.container1_2}>
                    <Text style={styles.head4_1}>Description</Text>
                    <Text style={styles.head4}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam pariatur dignissimos, </Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.container1_3}>
                    <Text style={styles.head4_1}>Customize your Order</Text>
                    <View>
                        <View style={{ marginTop: 10, }}>
                            <SelectList
                                setSelected={(val) => setSelected(val)}
                                data={data}
                                save="value"
                            />
                        </View>
                        <View style={{ marginTop: 10, }}>
                            <SelectList
                                setSelected={(val) => setSelected(val)}
                                data={data}
                                save="value"
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.container1_4}>
                    <View>
                        <Text style={styles.head4_1}>Number of Portions</Text>
                    </View>
                    <View style={styles.container1_4_1}>
                        <TouchableOpacity style={styles.btn} onPress={() =>
                            (count > 0 ? setCount(count - 1) : setCount(0))}><Text style={styles.textbtn}>-</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.mainbtn}><Text style={styles.mainbtntext}>{count}</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={() => setCount(count + 1)}><Text style={styles.textbtn}>+</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container1_5}>
                    <View style={styles.backdes}></View>
                    <View style={styles.container2}>
                        <View style={styles.text}>
                            <Text style={styles.texthead1}>Total Price  </Text>
                            <Text style={styles.texthead}>Lb {count * 750} <FontAwesomeIcon icon={faEuro} /> </Text>
                            <TouchableOpacity onPress={() => navigation.navigate("OrderPage")} style={styles.btn1}> <Text style={styles.textbtn}><FontAwesomeIcon style={{ color: "#fff" }} icon={faShoppingCart} />Add to Cart  </Text></TouchableOpacity>
                        </View>
                        <View style={styles.icon1}>
                            <Image style={{ width: 20, height: 20, }} source={require('../../../assets/shopping-cart.png')} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Order

const styles = StyleSheet.create({
    container: {
        height: 300,
    },
    img: {
        width: "auto",
        height: 330,
        position: "relative",
    },
    container1: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingVertical: 10,
        marginTop: -20,
        paddingHorizontal: 20,
    },
    main_container: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    head1: {
        fontSize: 32,
        fontWeight: 400,
        tintColor: "gray",
    },
    head2: {
        color: "navy",
        fontWeight: "400",
    },
    container1_1: {
        marginTop: 30,
    },
    icon: {
        height: 25,
    },
    head3: {
        fontWeight: 400,
        fontSize: 16,
    },
    container1_2: {
        marginVertical: 10,
    },
    head4_1: {
        fontSize: 16,
        fontWeight: 500,
    },
    head4: {
        color: "#ccc",
    },
    line: {
        height: 1,
        backgroundColor: 'lightgray',
    },
    container1_3: {
        marginVertical: 10,
    },
    container1_4: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    container1_4_1: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    btn: {
        width: 50,
        height: 30,
        backgroundColor: "navy",
        borderColor: "navy",
        borderWidth: 1,
        borderRadius: 50,
        justifyContent: "center"
    },
    textbtn: {
        textAlign: "center",
        color: "#fff"
    },
    mainbtn: {
        borderWidth: 1,
        borderColor: 'navy',
        width: 50,
        height: 30,
        borderRadius: 50,
        marginHorizontal: 5,
        justifyContent: "center"

    },
    mainbtntext: {
        textAlign: "center",
        color: "navy",
    },
    container1_5: {
        flexDirection: 'row',
        width: "100%"
    },
    backdes: {
        backgroundColor: "navy",
        width: 100,
        height: 130,
        position: 'absolute',
        borderBottomRightRadius: 50,
        borderTopRightRadius: 50,
        paddingVertical: 20,
    },


    container2: {
        width: "85%",
        marginVertical: 10,
        flexDirection: 'row',
        padding: 10,
        alignItems: "center",
        backgroundColor: "#fff",
        marginLeft: 50,
        marginRight: 20,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: "center",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.23,
        shadowRadius: 12.81,
        elevation: 16
    },

    img1: {
        width: 50,
        height: 50,
        borderRadius: 50,

    },
    text: {
        textAlign: "center",
        marginLeft: 100,
        justifyContent: 'center',
    },
    texthead: {
        fontSize: 26,
        fontWeight: 400,
    },
    texthead1: {
        fontSize: 16,
        fontWeight: 400,
    },
    icon1: {
        marginLeft: 'auto',
        marginRight: -30,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 50,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.23,
        shadowRadius: 12.81,
        elevation: 16
    },
    backimg1: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.21,
        shadowRadius: 8.19,
        elevation: 11,
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: -30,
        backgroundColor: "#fff",
    },
    btn1: {
        backgroundColor: "navy",
        borderRadius: 25,
        padding: 8,
        justifyContent: "center",
    }
})