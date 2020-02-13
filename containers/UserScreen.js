import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors } from '../themes/Index'


const UserScreen = props => {
  return (
    <View>
      <Text>User Screen</Text>
      <TouchableOpacity
        style={styles.cancelButtonStyle}
        onPress={props.onCancel}
      >
        <Text style={styles.cancelButtonTextStyle}>Cancel</Text>
      </TouchableOpacity>
      <Text>{JSON.stringify(props.users)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screenStyle: {
    margin: 10
  },
  inputStyle: {
    backgroundColor: Colors.light,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: '100%'
  },
  inputContainerStyle: {
    alignItems: 'center'
  },
  cancelButtonStyle: {
    backgroundColor: Colors.lightAccent,
    borderRadius: 10,
    padding: 10,
    width: '100%'
  },
  cancelButtonTextStyle: {
    textAlign: 'center',
    color: Colors.white
  },
  screenTextStyle: {
    color: Colors.lightAccent,
    fontSize: 15
  }
})

export default UserScreen