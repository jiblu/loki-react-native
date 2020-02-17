import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors } from '../themes/Index'
import UserCard from '../components/UserCard'

const UserScreen = props => {
  return (
    <View>
      <TouchableOpacity
        style={styles.cancelButtonStyle}
        onPress={props.onCancel}
      >
        <Text style={styles.cancelButtonTextStyle}>Cancel</Text>
      </TouchableOpacity>
      <ScrollView>
        {props.users.map((user, i) => {
          const detailObject = {
            Username: user.username,
            Name: user.name
          }
          return (
            <UserCard
              profileImage={user.profile_image.medium}
              detail={detailObject}
              key={i}
              onDetail={() => props.onDetail()}
            />
          )
        })}
      </ScrollView>
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

export default UserScreen