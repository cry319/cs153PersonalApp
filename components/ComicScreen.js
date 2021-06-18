import React, { useState } from "react";
import {View,StyleSheet} from 'react-native';
import ComicCalculator from './ComicCalculator';


const ComicScreen = () => {
  return (
    <View style={styles.container}>
      <ComicCalculator max={20} />
    </View>
  );
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#C9F9F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ComicScreen;
