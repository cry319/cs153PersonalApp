import React, { useState, useEffect }  from 'react';
import { ImageBackground, SafeAreaView, ScrollView, View, Button,
         FlatList, TouchableOpacity, StyleSheet, Text, TextInput, StatusBar } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Card from './Card'

const ReadingList = (props) => {
  const [readingTitle,setReadingTitle] = useState("")
  const [episodeNum, setEpisodeNum] = useState("")
  const [readDate,setReadDate] = useState('')
  const [currendDate,setCurrentDate] = useState('')
  const [comment,setComment] = useState("")
  const [records,setRecords]= useState([])

  useEffect(() => {
    var date = new Date().getDate()
    var month = new Date().getMonth()+1
    var year = new Date().getFullYear()
    setCurrentDate(
      month+'/'+date+'/'+year
    )
    getData()}
           ,[])

  const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@reading_list')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setRecords(data)
            console.log('just set Info, Name and Email')
          } else {
            console.log('just read a null value from Storage')
            setRecords([])
          }
        } catch(e) {
          console.log("error in getData ")
          console.dir(e)
        }
  }

  const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@reading_list', jsonValue)
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

  const renderReadingItem = ({item}) => {
    return (
      <SafeAreaView>
        <Card>
          <Text> {item.readDate} </Text>
          <Text> finished {item.readingTitle} at ep# {item.episodeNum} </Text>
          <Text> Comment: {item.comment} </Text>
        </Card>
      </SafeAreaView>
    )
  }

  return (
    <ImageBackground
      source={{uri:'https://image.freepik.com/free-vector/winter-background-with-pastel-color-brushes-leaves_220290-42.jpg',}}
      style={styles.image}>

    <View style={styles.container}>
      <Text style={styles.headerText}> Reading List </Text>

      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Date here"
          onChangeText={text => {
               setReadDate(text);
             }}
          value = {readDate}
        />
      </View>

      <View>
        <Button
            color='#9124BF' title='USE CURRENT DATE?'
            onPress = {() => {
              setReadDate(currendDate)
          }}
         />
      </View>

      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Enter title of the book/comic/magzine and episode number here"
          onChangeText={text => {
               setReadingTitle(text);
             }}
          value = {readingTitle}
        />
      </View>

      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Enter episode number here"
          onChangeText={text => {
               setEpisodeNum(text);
             }}
          value = {episodeNum}
        />
      </View>

      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your comment/short notes"
          onChangeText={text => {
               setComment(text);
             }}
          value = {comment}
        />
      </View>

      <View>
        <Button
           title={"store"}
           color="#BB68BE"
           onPress = {() => {
             const newRecords =
               records.concat(
                 {'readDate':readDate,
                  'readingTitle':readingTitle,
                  'episodeNum': episodeNum,
                  'comment':comment,
               })
             setRecords(newRecords)
             storeData(newRecords)
             setReadingTitle("")
             setReadDate("")
             setEpisodeNum("")
             setComment("")
           }}
           />
         <Button
            color='purple' title='Clear memory'
            onPress = {() => {
            clearAll()
          }}
         />
      </View>

      <SafeAreaView>
        <FlatList
          data={records}
          renderItem={renderReadingItem}
        />
      </SafeAreaView>

    </View>
</ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
  itemWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  comments:{
    justifyContent:'left',
    fontSize: 10,
    fontFamily: "Comic Sans MS",
  },
  textInput: {
    fontSize: 10,
    margin: 3,
    height: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  headerText: {
    textAlign:'center',
    backgroundColor:'#DFCAE8',
    fontSize: 15,
    padding:10,
    color: '#B421F2',
    fontFamily: "Comic Sans MS",
  },
  recordItems:{
    border:'thin solid black',
    margin: 5,
  },

});


export default ReadingList;
