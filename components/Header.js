import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../themes/Index'

const Header = props => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.textStyle}>Loki User App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerStyle: {
    width: '100%',
    backgroundColor: Colors.light,
    paddingTop: 50,
    padding: 10
  },
  textStyle: {
    textAlign: 'center'
  }
})

export default Header
