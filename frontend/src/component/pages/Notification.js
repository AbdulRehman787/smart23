import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
const data = [
  {
    text:"Your Order has been pickup"
  },
  {
    text:"Your Order has been Delivered"
  },
  {
    text:"lorem ipsum dolor sit amet, constructor"
  },
  {
    text:"lorem ipsum dolor sit amet, constructor"
  },
  {
    text:"lorem ipsum dolor sit amet, constructor"
  },
  {
    text:"lorem ipsum dolor sit amet, constructor"
  },
  {
    text:"lorem ipsum dolor sit amet, constructor"
  },
  {
    text:"lorem ipsum dolor sit amet, constructor"
  },
]
const Notification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text>Notification</Text>
        <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
      </View>
      {data.map((curelem,index)=>{
        return (
          <View>
            <Text style={styles.item}>{curelem.text}</Text>
          </View>
        );
      })}
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  container1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  }
})