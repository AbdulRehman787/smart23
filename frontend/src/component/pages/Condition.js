import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
const data = [
  {
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit dolorum beatae quia alias eveniet, ipsam accusantium aspernatur molestias perspiciatis unde doloribus, iusto quam quisquam sequi autem tempore voluptates, vel exercitationem!"
  },
  {
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit dolorum beatae quia alias eveniet, ipsam accusantium aspernatur molestias perspiciatis unde doloribus, iusto quam quisquam sequi autem tempore voluptates, vel exercitationem!"
  },
  {
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
 
]
const Condition = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text>Privacy and Policy</Text>
        <Image style={styles.img} source={require("../../../assets/edit.png")} />
        
      </View>
      {data.map((curelem,index)=>{
        return (
            <View>        
            <Text style={styles.item} id={index} ><span style={styles.list}>.</span>{curelem.text}</Text>
          </View>
        );
      })}
    </View>
  )
}

export default Condition

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
  },
  list: {
    marginRight: 10,
    color: "navy",
    fontWeight: "bold"
  },
  img:{
    width:20,
    height: 20
  }
})