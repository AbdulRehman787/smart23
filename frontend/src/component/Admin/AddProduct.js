import React, { useState } from 'react';
import { View, TextInput, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { db, storage } from '../config/fire';
import { collection } from 'firebase/firestore';
import { ref, child } from 'firebase/storage';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const addProduct = async () => {
    const response = await fetch(image);
    const blob = await response.blob();
    const imageName = Date.now().toString();
    const ref = storage.ref().child(`images/${imageName}`);
    await ref.push(blob);

    const imageUrl = await ref.getDownloadURL();

    const product = {
      name,
      price,
      imageUrl,
    };

    await addProductToFirestore(product);

    setName('');
    setPrice('');
    setImage(null);
  };

  const addProductToFirestore = async (product) => {
    try {
      await db.collection('products').add(product);
    } catch (error) {
      console.error('Error adding product to Firestore: ', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Product Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Product Price"
        value={price}
        onChangeText={setPrice}
      />
      <Button title="Select Image" onPress={selectImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <Button title="Add Product" onPress={addProduct} />
    </View>
  );
};

export default AddProduct;