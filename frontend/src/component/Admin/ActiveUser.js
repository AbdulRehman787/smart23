import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from "axios"
const ActiveUser = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/register')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])
    console.log(data)
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.head}>ActiveUser</Text>
            </View>
        </View>
    )
}

export default ActiveUser

const styles = StyleSheet.create({})