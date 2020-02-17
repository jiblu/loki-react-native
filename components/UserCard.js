import React from 'react'
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import TextDisplay from './TextDisplay'

const UserCard = props => {
  return (
    <TouchableOpacity
      style={styles.cardStyle}
      onPress={props.onDetail}
    >
      <Image
        source={{ uri: props.profileImage }}
        style={styles.profileImageStyle}
      />
      <View>
        {Object.keys(props.detail).map((item, i) => {
          return (
            <View key={i}>
              <TextDisplay
                label={item}
                text={props.detail[item]}
                key={i}
              />
            </View>
          )
        })}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 10,
    backgroundColor: Colors.light,
    borderRadius: 5,
    padding: 10
  },
  profileImageStyle: {
    width: 64,
    height: 64,
    marginRight: 10
  }
})

export default UserCard