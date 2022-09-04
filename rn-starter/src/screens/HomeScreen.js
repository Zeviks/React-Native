import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return <Text style={styles.text}>HomeScreen</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'dodgerblue',
    textAlign: 'center',
  },
});

export default HomeScreen;
