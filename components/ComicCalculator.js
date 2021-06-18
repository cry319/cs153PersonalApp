import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";


const ComicCalculator = (props) => {
  const [num, setNum] = useState(0) //number of episodes read
  const [max, setMax] = useState(props.max) //max number of episodes
  const [rem, setRem] = useState(0) //remaining episodes for today

  return(
    <View style={styles.container}>
      <Text style={styles.header}>
         How many episodes to read today?
      </Text>
      <Text style={styles.subTitle}>
         Comics are fun, but don't spend all day reading them!
      </Text>

        <Text style={styles.generalText}>
           Initial maximum number of episodes set for today is: {props.max}
        </Text>

      <View style={{flexDirection: 'row'}}>
        <Text style={styles.generalText}>
          I have read
        </Text>
        <TextInput
            style={styles.textinput}
            placeholder="Enter here"
            onChangeText={text => {setNum(parseFloat(text))}}
          />
        <Text style={styles.generalText}>
            episodes today.
        </Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={styles.generalText}>
          Reset max number of episodes here:
        </Text>
        <TextInput
            style={styles.textinput}
            placeholder="Enter here"
            onChangeText={text => {setMax(parseFloat(text))}}
          />
      </View>

      <Button
          color='pink' title='Calculate Remaining Episodes for Today'
          onPress = {() =>
               setRem(max-num)}
        />

      <Text style={styles.textinput}>I can still read  {rem} episodes today </Text>
    </View>
  )
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#C9F9F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput:{
    fontSize:20,
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
    margin:20,
    color:'blue',
    alignItems: 'left',
    fontFamily: "Comic Sans MS",

  }
})

export default ComicCalculator;
