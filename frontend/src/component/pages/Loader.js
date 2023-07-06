import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'

const Loader = ({ navigation }) => {
    const changePage = () => {
        navigation.navigate('Home')
    }
    useEffect(() => {
        changePage()
    }, [5000])
    return (
        <View>
            <Text>Hello Loader</Text>
        </View>
    )
}

export default Loader

const styles = StyleSheet.create({
    img: {
        width: "100%",
        height: "100%"
    }
})