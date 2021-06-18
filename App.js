import React, { useState } from "react";

import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Image, TextInput, Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import About from './components/About'
import ComicScreen from './components/ComicScreen'

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
          <Stack.Screen name="Introduction" component={IntroScreen} />
          <Stack.Screen name="MainTool" component={ToolScreen} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="ComicScreen" component={ComicScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Header text='Make Records of Your Favourite Comics Here!'/>
      <Button
        title="What does this app do?"
        onPress={() =>
          navigation.navigate('Introduction', { name: 'User' })
        }
      />

      <Button
        title="MainTool"
        color="red"
        onPress={() =>
          navigation.navigate('MainTool')
        }
      />


      <Button
        title="Comic Calculator"
        color="orange"
        onPress={() =>
          navigation.navigate('ComicScreen')
        }
      />

      <View style={{flexDirection:'row'}}>
        <Button
          title="About This App"
          color='green'
          onPress={() =>
            navigation.navigate('About')
          }
        />
        <Button
          title="Contact Us"
          color='pink'
          onPress={() =>
            navigation.navigate('About')
          }
        />
      </View>
    </View>
  );
};

const IntroScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s Comics Helper Tool!</Text>;
};


const ToolScreen = ({navigation,route}) => {
  return (
    <View style={styles.container}>
      <Header text='Explore the main tool' />

      <View style={styles.generalText}>
        <Text> Instruction: Type the name of the comics/cartoon, then hit "search" </Text>

      </View>

      <View style={styles.rowContainer}>
        <ComicSearch name="comic1" year="2020"/>
        <Button color='orange' title="SEARCH"/>
      </View>

    </View>
  );
}

const ComicSearch = (props) => {

  const [text, setText] = useState(props.name);

  return (
    <View>
      <Image
        source={{uri: "http://clipart-library.com/images/gieEkgzjT.png"}}
        style={{width: 120, height: 120}}
      />
      <View style={{flexDirection:'row'}}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
          }}
          onChangeText={text => {setText(text)}}
          defaultValue="Type here"
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection:'row',
  },
  columnContainer: {
    flexDirection: 'column',
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
  }
});
