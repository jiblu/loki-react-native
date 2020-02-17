import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors } from '../themes/Index'

const FullScreen = props => {
  return (
    <View>
      <TouchableOpacity
        style={styles.cancelButtonStyle}
        onPress={props.onCancel}
      >
        <Text style={styles.cancelButtonTextStyle}>Cancel</Text>
      </TouchableOpacity>
      <Text>
        Test
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cancelButtonStyle: {
    backgroundColor: Colors.lightAccent,
    borderRadius: 10,
    padding: 10,
    width: '100%'
  },
  cancelButtonTextStyle: {
    textAlign: 'center',
    color: Colors.white
  }
})

export default FullScreen