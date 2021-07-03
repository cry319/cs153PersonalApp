import React, { useState, useEffect }  from 'react';
import { SafeAreaView, ScrollView, View,
         FlatList, StyleSheet, Text, TextInput, Image } from 'react-native';

export default function Card (props) {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.cardContent}>
        {props.children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardWrapper:{
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    shadowOffset:{width: 1, height: 1},
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 20,
  },
  cardContent:{
    borderColor: '#55BCF6',
    borderWidth: 1,
    borderRadius: 10,
  }
});
