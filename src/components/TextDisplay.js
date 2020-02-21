import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TextDisplay = props => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.labelStyle}>{props.label}</Text>
      <Text style={styles.textStye}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  labelStyle: {
    width: 100,
    fontWeight: 'bold'
  },
  textStyle: {
  }
})

export default TextDisplay