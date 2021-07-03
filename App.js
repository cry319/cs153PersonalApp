import React, { useState } from "react";

import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Image, TextInput, Button, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import About from './components/About'
import ReadingCalculator from './components/ReadingCalculator'
import ReadingList from './components/ReadingList'
import Record from './components/Record'

const Stack = createStackNavigator();

const Header = (props) => {
  return (
    <View>
      <Text style={styles.helloText}>
      {props.text}
      </Text>
    </View>
    )
}

export default function App () {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Welcome!' }}
          />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="ReadingCalculator" component={ReadingCalculator} />
          <Stack.Screen name="ReadingList" component={ReadingList} />
          <Stack.Screen name="Record" component={Record} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{uri:'https://image.freepik.com/free-vector/winter-background-with-pastel-color-brushes-leaves_220290-42.jpg',}}
      style={styles.image}>
    <View style={styles.container}>
    <Header text='Explore Reading Function Here'/>

      <View style={styles.space} />

      <Button
        title="Reading Calculator"
        color="orange"
        onPress={() =>
          navigation.navigate('ReadingCalculator')
        }
      />

      <View style={styles.space} />

      <Button
        title="Reading History Memo"
        color="purple"
        onPress={() =>
          navigation.navigate('ReadingList')
        }
      />

      <View style={styles.space} />

      <Button
        title="Favorite Record"
        color="navy"
        onPress={() =>
          navigation.navigate('Record')
        }
      />

      <View style={styles.space} />

      <View style={{flexDirection:'row'}}>
        <Button
          title="About This App"
          color='green'
          onPress={() =>
            navigation.navigate('About')
          }
        />
      </View>
    </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  space: {
    width: 20,
    height: 20,
  },
  helloText: {
    fontSize: 48,
    color: 'green',
    flexDirection:'column',
    alignItems: 'center',
  },
  generalText:{
    fontSize: 30,
    color: 'black',
    alignItems: 'left',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
