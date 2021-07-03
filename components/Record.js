import React,{ useState, useEffect } from 'react';
import { Image, StyleSheet, Text, Alert, View, FlatList, Button, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Record = (props) => {

  const [image, setImage] = React.useState([]);

  useEffect(() => { getData()}
           ,[])

  const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@picRecord')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setImage(data)
            console.log('just set Info, Name and Email')
          } else {
            console.log('just read a null value from Storage')
            setImage([])
          }
        } catch(e) {
          console.log("error in getData ")
          console.dir(e)
        }
  }

  const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@picRecord', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
        }
  }

  const clearAll = async () => {
        try {
          console.log('in clearData')
          await AsyncStorage.clear()
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
          // clear error
        }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const renderItem = ({item}) => {
    return (
      <SafeAreaView>
        <Image source={{uri: item.image}}> </Image>
      </SafeAreaView>
    )
  }

  return (
    <ImageBackground
      source={{uri:'https://image.freepik.com/free-photo/breathtaking-view-lake-mountains-mesmerizing-sky-with-aurora_181624-7949.jpg',}}
      style={styles.image}>
    <View style={styles.container}>
      <Text style={styles.headerText}> Add one picture of interesting paragraph/episode here!</Text>
      <Text style={styles.instructions}>Press the button below to add picture</Text>

      <Button
        onPress = {pickImage}
        style={styles.button}
        title={"Pick a photo"} />

      <Image
        source={{ uri: image }}
        style={{ width: 300,
                height: 200,
                marginTop: 20,
                marginBottom: 20,
                borderColor: "purple",
                borderWidth: 3, }} />
      <View style={{flexDirection:'row'}}>
        <Button
          onPress = {() => {
            setImage(image)
            storeData(image)
          }}
          color='#B421F2'
          title={"Store"} />

        <View style={styles.space} />

        <Button
          onPress = {() => {
            clearAll()
            Alert.alert('Simple Button pressed')
          }}
          color='purple'
          title={"Delete"} />
      </View>

    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructions: {
    color: '#fff',
    marginTop:10,
    fontWeight: 'bold',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    marginTop:10,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  headerText: {
    textAlign:'center',
    fontSize: 30,
    fontWeight: 'bold',
    padding:10,
    color: '#fff',
    fontFamily: "Comic Sans MS",
  },
  space: {
    width: 20,
    height: 20,
  },
});

export default Record;
