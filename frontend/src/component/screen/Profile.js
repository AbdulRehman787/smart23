import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { signOut, getAuth } from 'firebase/auth';


const Profile = ({ navigation }) => {
  const [data, setData] = useState([])
  const auth = getAuth()

  const signout = () => {
    signOut(auth).then(() => {
      navigation.navigate("Login")
    }).catch((error) => {
      console.log(error)
    });
  }

  useEffect(() => {
    async function fetechData() {
      const res = await AsyncStorage.getItem("data");
      setData(JSON.parse(res));
    }
    fetechData()
  }, [])
  console.log(data)
  return (
    <View style={style.maincontainer}>
      <View style={style.container}>
        <View style={style.container1}>
          <Text style={style.head}>Profile</Text>
          <FontAwesomeIcon style={style.icon} icon={faCartShopping}></FontAwesomeIcon>
        </View>
        <View>
          <View style={style.name}>
            <Text style={style.headname}>Hi there {data.name}</Text>
            <Text style={style.signout} onPress={() => signout()}>Sign Out</Text>
          </View>
          <View style={style.def}>
            <Text style={style.defhead}>Name</Text>
            <Text style={style.deadheadmain}>{data.name}</Text>
          </View>
          <View style={style.def}>
            <Text style={style.defhead}>Email</Text>
            <Text style={style.deadheadmain}>{data.email}</Text>
          </View>
          <View style={style.def}>
            <Text style={style.defhead}>Phone Number</Text>
            <Text style={style.deadheadmain}>{data.phoneNo}</Text>
          </View>
          <View style={style.def}>
            <Text style={style.defhead}>Address</Text>
            <Text style={style.deadheadmain}>{data.address}</Text>
          </View>
          <View style={style.def}>
            <Text style={style.defhead}>Password</Text>
            <Text style={style.deadheadmain} >*********</Text>
          </View>
          <View style={style.def}>
            <Text style={style.defhead}>Confirm Password</Text>
            <Text style={style.deadheadmain}>*********</Text>
          </View>
        </View>
      </View></View>
  )
}

const style = StyleSheet.create({
  maincontainer: {
    backgroundColor: "#fff"
  },
  container: {
    width: "100%",
    marginVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  container1: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  head: {
    fontSize: 20,
  },
  icon: {
    fontSize: 20,
    marginTop: 8,
  },
  def: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: "#eeeeee",
    marginVertical: 5,
    paddingLeft: 20,
  },
  defhead: {
    fontSize: 12,
    fontWeight: 400,
    tintColor: 'gray',
  },
  deadheadmain: {
    fontSize: 16,
    fontWeight: 400,
  },
  name: {
    justifyContent: "center",
    textAlign: "center",
    marginVertical: 20,
  },
  headname: {
    fontSize: 22,
    fontWeight: 500,
  },
  signout: {
    fontSize: 18,
    tintColor: "#e0e0e0"
  }
})


export default Profile