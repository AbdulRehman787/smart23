import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import BottomNavbar from './BottomNavbar';

const data = [
  {
    id: 0,
    img: require("../../../assets/1 (1).jpg"),
    price: 50,
    name: "Smartwhip Silver",
    img1: require("../../../assets/1 (2).jpg"),
    price1: 40,
    name1: "shawer"
  },
  {
    id: 1,
    img: require("../../../assets/1 (3).jpg"),
    price: 50,
    name: "Smartwhip Silver",
    img1: require("../../../assets/1 (4).jpg"),
    price1: 40,
    name1: "shawer"
  },
  {
    id: 2,
    img: require("../../../assets/1 (5).jpg"),
    price: 50,
    name: "Smartwhip Silver",
    img1: require("../../../assets/1 (6).jpg"),
    price1: 40,
    name1: "shawer"
  },

  {
    id: 3,
    img: require("../../../assets/1 (7).jpg"),
    price: 50,
    name: "Smartwhip Silver",
    img1: require("../../../assets/1 (8).jpg"),
    price1: 40,
    name1: "shawer"
  },

  {
    id: 4,
    img: require("../../../assets/1 (9).jpg"),
    price: 50,
    name: "Smartwhip Silver",
    img1: require("../../../assets/1 (10).jpg"),
    price1: 40,
    name1: "shawer"
  },
  {
    id: 5,
    img: require("../../../assets/1 (11).jpg"),
    price: 50,
    name: "Smartwhip Silver",
    img1: require("../../../assets/1 (12).jpg"),
    price1: 40,
    name1: "shawer"
  },
  {
    id: 6,
    img: require("../../../assets/1 (13).jpg"),
    price: 50,
    name: "Smartwhip Silver",
    img1: require("../../../assets/1 (18).jpg"),
    price1: 40,
    name1: "shawer"
  },
  {
    id: 7,
    img: require("../../../assets/1 (15).jpg"),
    price: 50,
    name: "Smartwhip Silver",
    img1: require("../../../assets/1 (16).jpg"),
    price1: 40,
    name1: "shawer"
  },
  {
    id: 8,
    img: require("../../../assets/1 (17).jpg"),
    price: 50,
    name: "Smartwhip Silver",

    img1: require("../../../assets/1 (1).jpg"),
    price1: 40,
    name1: "shawer"
  },


]


const Menu = ({ navigation }) => {

  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleProductSelect = (productId) => {
    const selectedProduct = data.find((product) => product.id === productId);
    setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, selectedProduct]);
  };
  return (
    <View>
      <View style={styles.container1}>
        <Text style={styles.head}>Menu</Text>
        <Text style={styles.icon}><FontAwesomeIcon style={styles.iconw} icon={faCartShopping} /></Text>
      </View>
      <View>
        <TextInput style={styles.input} placeholder='Search Food'></TextInput>
      </View>
      <View>
        <View style={styles.container2}>
          <View style={styles.backdes1}></View>
          <View style={styles.backdes2}></View>
        </View>


        <View style={styles.container3}>

          <View style={styles.container}>
            {data.map((curelem) => (
              <View style={styles.container3_1} key={curelem.id}>
                <View style={styles.container3_1_1} >
                  <Text onPress={() => { navigation.navigate("Order") }}>
                    <Image source={curelem.img} style={styles.img1} />
                  </Text>
                </View>
                <View style={styles.container3_1_1}>
                  <Text onPress={() => { navigation.navigate("Order") }}>
                    <Image source={curelem.img1} style={styles.img1} />
                  </Text>
                </View>
              </View>
            ))}


            <View>
              <BottomNavbar />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  head: {
    fontSize: 18,
  },
  icon: {
    marginLeft: 'auto'
  },
  iconw: {
    fontSize: 18,
  },
  input: {
    marginHorizontal: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: "#ccc",
    borderRadius: 25,
    marginBottom: 20,
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  backdes1: {
    backgroundColor: "navy",
    width: 100,
    height: 500,
    position: 'relative',
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    paddingVertical: 20,
  },
  backdes2: {
    backgroundColor: "navy",
    width: 100,
    height: 500,
    position: 'relative',
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    paddingVertical: 20,
  },
  container3: {
    marginTop: -485,
    flexDirection: "row",
    marginHorizontal: 20,
  },

  container3_1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    width: "100%"
  },
  container3_1_1: {
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 10,
    width: "48%",
    marginLeft: 10,
  },
  container3_1_2: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 10,
    marginLeft: 20,
    textAlign: "center"
  },
  img1: {
    width: 130,
    height: 110,
    borderRadius: 20,
  },
  container: {
    padding: 10,

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: "scroll"
  },
  productContainer: {
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default Menu;
