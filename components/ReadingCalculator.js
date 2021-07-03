import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, ImageBackground } from "react-native";


const ComicCalculator = () => {
  const [num, setNum] = useState(0) //number of episodes read
  const [max, setMax] = useState(20) //max number of episodes
  const [rem, setRem] = useState(0) //remaining episodes for today

  return(
    <ImageBackground
      source={{uri:'https://image.freepik.com/free-vector/winter-background-with-pastel-color-brushes-leaves_220290-42.jpg',}}
      style={styles.image}>
    <View style={styles.container}>
      <Text style={styles.header}>
         How many episodes to read today?
      </Text>

      <View style={styles.space} />

      <Text style={styles.subTitle}>
         Initial maximum number of episodes set for today is: {max}
      </Text>

      <View style={{flexDirection: 'row'}}>
        <Text style={styles.generalText}> I have read </Text>
        <View style={styles.space} />
        <TextInput
            style={styles.textinput}
            placeholder="Enter here"
            onChangeText={text => {setNum(parseFloat(text))}}
          />
        <View style={styles.space} />
        <Text style={styles.generalText}>
            episodes today.
        </Text>

      </View>
      <View style={styles.space} />
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.generalText}>
          Set max number of episodes here:
        </Text>
        <View style={styles.space} />
        <TextInput
            style={styles.textinput}
            placeholder="Enter here"
            onChangeText={text => {setMax(parseFloat(text))}}
          />
      </View>

      <View style={styles.space} />

      <Button
          color='#3DE691' title='Calculate Remaining Episodes for Today'
          onPress = {() =>
               setRem(max-num)}
        />

      <Text style={styles.header}>I can still read  {rem} episodes today </Text>
    </View>
    </ImageBackground>
  )
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 20,
    margin: 12,
    height: 40,
    borderWidth: 1,
  },
  header: {
    fontSize:30,
    fontFamily: "Comic Sans MS",
    color:'purple',
    fontWeight: "bold",
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  generalText:{
    fontSize: 20,
    color: 'black',
  },
  subTitle: {
    fontSize: 20,
    marginBottom: 15,
    marginTop: 15,
    color:'#9C3DE6',
    alignItems: 'left',
    fontFamily: "Comic Sans MS",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  space: {
    width: 20,
    height: 10,
  },
})

export default ComicCalculator;
