import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import axios from 'axios'

const CheckUser = () => {
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState()
  const [deleted, setdeleted] = useState()

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/register');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  const approveUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8080/users/${userId}/approve`, {
        method: 'PUT',

      });
      setNewUser(users.filter((user) => user.id !== userId));
      if (response.ok) {
        setMessage('User approved successfully.');
      } else {
        setMessage('Error approving user.');
      }
    } catch (error) {
      console.error('Error approving user: ', error);
      setMessage('Error approving user.');
    }
    axios.post("http://localhost:8080/activeUser", newUser)
      .then(res => console.log("database Connected"))
      .catch(err => console.log(err))
    console.log(newUser)
  };

  const deleteUser = async (id) => {
    fetch(`http://localhost:8080/users/${id}`, {
      method: 'DELETE',
    })
    setdeleted(users.filter((user) => user.id !== userId))
      .then(response => response.json())

      .then(data => {
        setdeleted(data.success)
        if (data.success) {
          console.log(deleted)
          console.log('User account deleted successfully');
          // Perform any necessary actions after deletion
        } else {
          console.log('Failed to delete user account');
        }
      })
      .catch(error => {
        console.error('Something went wrong');
        console.error(error);
        console.log(deleted)
      });

  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.head}>CheckUser</Text>
        <FontAwesomeIcon icon={faUser} />
      </View>

      <View style={styles.container1}>
        {users && users.map((curelem, index) => {
          return (
            <View key={index} style={styles.container2}>
              <View style={styles.container2_1}>
                <Text>{curelem.name}</Text>
                <Text>{curelem.email}</Text>
              </View>
              <View style={styles.container2_1}>
                <Text onPress={() => approveUser(curelem.id)} >
                  <FontAwesomeIcon style={styles.icon} icon={faCheck} />
                </Text>
                <Text onPress={() => deleteUser(curelem.id)}>
                  <FontAwesomeIcon style={styles.icon1} icon={faTrash} />
                </Text>
              </View>
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default CheckUser

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
  },
  head: {
    fontSize: 22,
    fontWeight: 400,

  },
  container1: {
    marginVertical: 10,
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  container2_1: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  icon: {
    color: "navy",
    padding: 5,
    borderWidth: 1,
    borderColor: "navy",
    marginLeft: 10,
  },
  icon1: {
    color: "red",
    padding: 5,
    borderWidth: 1,
    borderColor: "navy",
  },
})