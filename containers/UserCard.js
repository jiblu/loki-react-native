import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const UserCard = props => {
  return (
    <View style={styles.cardStyle} >
      <Text>{props.username}</Text>
      <Text>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardStyle: {
    margin: 10,
    backgroundColor: Colors.light,
    borderRadius: 5,
    padding: 10
  }
})

export default UserCard