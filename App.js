import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import marvel from './assets/Marvel_logo.png'
const App = () => {


  const [selectedImage, setSelectedImage] = useState(null);
  let openImagePickerAsync = async () => {
    let permisionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permisionResult.granted === false) {
      alert('Permission to access Gallery is required');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync()
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri })

  }


  return (<View style={styles.container}>
    <Text style={styles.title} >Bienvenido</Text>
    <Image
      style={styles.image}
      source={{ uri: selectedImage !== null ? selectedImage.localUri : "https://img1.ak.crunchyroll.com/i/spire4/c2d679a5786f119998150d12c3cd91521516812991_large.jpg" }}
    />


    {/* <Button
      color="red"
      title="Iniciar Sesion"
      onPress={() => Alert.alert('hello')}
    /> */}
    <TouchableOpacity
      onPress={openImagePickerAsync}
      style={styles.button}>
      <Text style={styles.textbutton} >Subir Avatar</Text>
    </TouchableOpacity>

  </View>)


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292929"
  },
  title: { fontSize: 30, color: "#fff" },
  bar: { height: 100, margin: 50, backgroundColor: "#f00", width: 1000 },
  image: {
    height: 200, width: 200, marginTop: 20, borderRadius: 100, resizeMode: 'cover'
  },
  button: {
    marginTop: 20,
    backgroundColor: "blue",
    paddingVertical: 12,
    paddingHorizontal: 15,
    margin: 10,
    borderRadius: 10

  },
  textbutton: { color: "#fff", fontSize: 18 }
})

export default App;