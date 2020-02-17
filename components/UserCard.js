import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import TextDisplay from './TextDisplay'

const UserCard = props => {
  return (
    <View style={styles.cardStyle}>
      {Object.keys(props.detail).map((item, i) => {
        return (
          <TextDisplay
            label={item}
            text={props.detail[item]}
            key={i}
          />
        )
      })}
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