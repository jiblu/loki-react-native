import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TextDisplay = props => {
  return (
    <View>
      <Text>{props.label}</Text>
      <Text>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default TextDisplay