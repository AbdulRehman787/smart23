import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import { SelectList } from 'react-native-dropdown-select-list';
import axios from 'axios'
import { auth, db, storage } from '../config/fire'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from "firebase/firestore";

const GetDocuments = ({ navigation }) => {
    const [progress, setProgress] = useState(0)
    const [imageurl, setPicture] = useState()
    const [selected, setSelected] = useState([])
    const [image, setImage] = useState(null);
    const [error, seterror] = useState("")
    const data1 = [
        { key: "1", value: "Select Option" },
        { key: "2", value: "Driving Lisence" },
        { key: "3", value: "Passport " },
    ]

    const frontPickImage = async () => {
        

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        if (!result.canceled) {
            setImage(result.uri);

        }

    }


    useEffect(() => {
        const uploadImage = async () => {
            const blob = await new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.onload = function () {
                    resolve(xhr.response)
                }
                xhr.onerror = function () {
                    reject(new TypeError("Network request failed"))
                }
                xhr.responseType = "blob"
                xhr.open("GET", image, true)
                xhr.send(null)
            });


            const metadata = {
                contentType: 'image/jpeg'
            };

            // Upload file and metadata to the object 'images/mountains.jpg'
            const storageRef = ref(storage, 'Cateories/' + Date.now());
            const uploadTask = uploadBytesResumable(storageRef, blob, metadata);

            // Listen for state changes, errors, and completion of the upload.
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;
                        case 'storage/canceled':
                            // User canceled the upload
                            break;

                        // ...

                        case 'storage/unknown':
                            // Unknown error occurred, inspect error.serverResponse
                            break;
                    }
                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        setPicture(downloadURL)

                    });
                }
            );
        }

        if (image != null) {
            uploadImage()
            setImage(null)
        }
    }, [image])

    const getData = {
        name: selected,
        imageurl: imageurl,
    }
    const AddProduct = async () => {
        if (imageurl && selected) {
            const docRef = await addDoc(collection(db, "user"), {
                first: "Alan",
                middle: "Mathison",
                last: "Turing",
                born: 1912
              });


        }

        axios.post("http://localhost:8080/documents", imageurl)
            .then(res => console.log("Document Add"))
            .catch(err => console.log(err))
            console.log(getData)
    }







    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.head1}>Please Submit documents (driving lisence, identity card etc.)</Text>
                <Text onPress={() => frontPickImage()}> <Image style={styles.img1} source={require("../../../assets/1 (14).jpg")}></Image></Text>
            </View>
            <View>
                <SelectList
                    setSelected={(val) => setSelected(val)}
                    data={data1}
                    save="value"
                />
            </View>
            <View>
                <Text style={styles.head2}>Real Time tracking of your on the app once  you placed the order </Text>
                <Text style={styles.error}>{error}</Text>
                {progress ? <Text>{progress}</Text> : null}
            </View>
            <View>
                <TouchableOpacity onPress={() => AddProduct()} style={styles.btn}><Text style={styles.btn_head}>Submit</Text></TouchableOpacity>
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 30,
    },
    head1: {
        fontSize: 16,
        textAlign: "left",
        alignItems: "center",
        marginVertical: 20,
    },
    head2: {
        fontSize: 16,
        textAlign: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    btn: {
        backgroundColor: "navy",
        borderRadius: 50,
        padding: 15,
        borderWidth: 1,
        borderColor: "navy",
        marginVertical: 10,
    },
    btn_head: {
        textAlign: "center",
        color: "#fff"
    },
    img1: {
        width: "100%", height: 200, borderRadius: 10, marginVertical: 10,
    },
    error: {
        color: "red",
        fontSize: 14,
        fontWeight: 400,

    }
})

export default GetDocuments;
