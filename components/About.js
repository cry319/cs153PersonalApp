import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements'

export default function About({route,navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> About this App </Text>
      <View style={styles.leftAllignment}>
        <Text style={styles.generalText}>Use this function to record your reading history!</Text>
        <Text style={styles.generalText}>Created by Ruyi Cai</Text>
      </View>
      <View>
        <Button title="Go Home"
            onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
    padding:20,
  },
  rowContainer: {
    flexDirection:'row',
  },
  columnContainer: {
    flexDirection: 'column',
  },
  headerText: {
    fontSize: 40,
    color: 'blue'
  },
  leftAllignment: {
    alignItems: 'left',
  },
  generalText:{
    fontSize: 20,
    color: 'black',
  }
});
