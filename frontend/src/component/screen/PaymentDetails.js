import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-community/async-storage';
const PaymentDetails = ({ navigation }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetechData() {
      const res = await AsyncStorage.getItem("card");
      setData(JSON.parse(res));
    }
    fetechData()
  }, [])
  console.log(data)
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <Text >Payment Details</Text>
        <FontAwesomeIcon icon={faShoppingCart} />
      </View>
      <View>
        <Text style={styles.head}>Customize your payment method</Text>
      </View>
      <View style={styles.line}></View>
      <View>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("AddPayment")}><Text style={styles.btntext}><FontAwesomeIcon icon={faPlus} />Add Credit/Debit Card</Text></TouchableOpacity>
      </View>
    </View>

  )
}

export default PaymentDetails

const styles = StyleSheet.create({
  maincontainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  head: {
    fontSize: 22,
    fontWeight: 400,
    marginVertical: 10,
  },
  line: {
    height: 1,
    backgroundColor: "#ccc"
  },
  btn: {
    backgroundColor: "navy",
    padding: 8,
    borderRadius: 25,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  btntext: {
    textAlign: "center",
    color: "#fff"
  }
})