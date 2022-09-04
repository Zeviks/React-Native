import React from 'react'
import {Text, StyleSheet} from 'react-native'

const ComponentScreens = () => {
    const styles = StyleSheet.create({
        text: {
          fontSize: 30,
          fontWeight: 'bold',
          color: 'dodgerblue',
          textAlign: 'center',
        },
      });

  return (
    <Text style={styles.text}>ComponentScreens</Text>
  )
}

export default ComponentScreens