import React from 'react';
import {View, StyleSheet,Text,Image} from 'react-native';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
const More = ({navigation}) => {
    return (
        <View style={styles.conatiner}>
        <View style={styles.maincontainer}>
            <View style={styles.container1}>
            <Text style={styles.head}>More</Text>
            <FontAwesomeIcon style={styles.icon} icon={faCartShopping}></FontAwesomeIcon>
            </View>
           
            
            <View style={styles.container2}>
            <View style={styles.img}>
            <Image style={styles.img1} source={require('../../../assets/income.png')}></Image>
            </View>
            <View style={styles.text}>
            <Text style={styles.texthead}>Payment Details</Text>
            </View>
            <View style={styles.icon1}>
            <FontAwesomeIcon icon={faGreaterThan}></FontAwesomeIcon>
            </View>
            </View>
            <View style={styles.container2}>
            <View style={styles.img}>
            <Image style={styles.img1} source={require('../../../assets/shopping-bag.png')}></Image>
            </View>
            <View style={styles.text}>
            <Text style={styles.texthead}>My Order</Text>
            </View>
            <View style={styles.icon1}>
            <FontAwesomeIcon icon={faGreaterThan}></FontAwesomeIcon>
            </View>
            </View>
            <View style={styles.container2}>
            <View style={styles.img} >
            <Image style={styles.img1} source={require('../../../assets/notification.png')}></Image>
            </View>
            <View style={styles.text}>
            <Text style={styles.texthead} >Notification</Text>
            </View>
            <View style={styles.icon1}>
            <Text onPress={()=> navigation.navigate("Notification")}>
            <FontAwesomeIcon icon={faGreaterThan}></FontAwesomeIcon>
            
            </Text>
            </View>
            </View>
            <View style={styles.container2}>
            <View style={styles.img}>
            <Image style={styles.img1} source={require('../../../assets/email.png')}></Image>
            </View>
            <View style={styles.text}>
            <Text  style={styles.texthead}>Inbox</Text>
            </View>
            <View style={styles.icon1}>
            <FontAwesomeIcon icon={faGreaterThan}></FontAwesomeIcon>
            </View>
            </View>
            <View style={styles.container2}>
            <View style={styles.img}>
            <Image style={styles.img1} source={require('../../../assets/edit.png')}></Image>
            </View>
            <View style={styles.text}>
            <Text style={styles.texthead}>Terms and Conditions</Text>
            </View>
            <View style={styles.icon1}>
            <Text onPress={()=>navigation.navigate('Condition')}>
            <FontAwesomeIcon icon={faGreaterThan}></FontAwesomeIcon>
            </Text> </View>
            </View>
            <View style={styles.container2}>
            <View style={styles.img}>
            <Image style={styles.img1} source={require('../../../assets/email.png')}></Image>
            </View>
            <View style={styles.text}>
            <Text style={styles.texthead}>Privacy and Policy  </Text>
            </View>
            <View style={styles.icon1}>
            <Text onPress={()=> navigation.navigate("Privacy")}>
            <FontAwesomeIcon icon={faGreaterThan}></FontAwesomeIcon>
            
            </Text>
            </View>
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    conatiner:{
       
        backgroundColor: "#fff",
    },
    maincontainer:{
        marginHorizontal: 20,
    },
    container1:{
        flexDirection: 'row',
        marginVertical: 10,
    },
    head:{
        fontSize: 30,
        fontWeight: 400,
        marginTop: -5,
    },
    icon:{
        marginLeft: 'auto',
        fontSize: 20,
        height: 30,
        fontWeight: 300,
    },
    container2:{
        marginVertical: 5,
        flexDirection: 'row',
        height: 80,
        padding:10,
        alignItems:"center",
        backgroundColor: "#eeeeee",
        borderRadius: 5,
    },
    img:{
        width:60,
        height: 60,
        alignItems: 'center',
        justifyContent:"center",
        backgroundColor:"#e0e0e0",
        borderRadius: 50,
    },
    img1:{
        width: 40,
        height: 40,
    },
    text:{
        marginLeft: 20,
    },
    texthead:{
        fontSize: 12,
        fontWeight: 500,
    },
    icon1:{
        marginLeft: "auto",
        marginRight: -25,
        padding: 5,
        backgroundColor:"#eeeeee",
        borderRadius: 50,
    }
    
})

export default More;
