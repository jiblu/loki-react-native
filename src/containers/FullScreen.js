import React from 'react'
import { Image, Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Colors } from '../themes/Index'
import TextDisplay from '../components/TextDisplay'

const FullScreen = props => {
  return (
    <View>
      <TouchableOpacity
        style={styles.cancelButtonStyle}
        onPress={props.onCancel}
      >
        <Text style={styles.cancelButtonTextStyle}>Cancel</Text>
      </TouchableOpacity>
      <View style={styles.profileRowStyle}>
        <Image
          source={{ uri: props.user.profile_image.large }}
          style={styles.profileImageStyle}
        />
        <View style={styles.rightRowStyle}>
          <TextDisplay
            label='Username'
            text={props.user.username}
          />
          <TextDisplay
            label='Name'
            text={props.user.name}
          />
          <TextDisplay
            label='Likes'
            text={props.user.total_likes}
          />
          <TextDisplay
            label='Photos'
            text={props.user.total_photos}
          />
          <TextDisplay
            label='Collections'
            text={props.user.total_collections}
          />
        </View>
      </View>
      <ScrollView>
        <Text>
          Photos
        </Text>
        <View>
          {props.user.photos.map((photo, i) => {
            return (
              <View key={i}>
                <Image
                  source={{ uri: photo.urls.thumb }}
                  style={styles.smallImageStyle}
                />
                <Text>
                  {JSON.stringify(photo)}
                </Text>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  profileRowStyle: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  rightRowStyle: {
    marginLeft: 10,
    marginRight: 10
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
  profileImageStyle: {
    width: 128,
    height: 128,
    borderRadius: 10
  },
  smallImageStyle: {
    width: 80,
    height: 80 
  }
})

export default FullScreen