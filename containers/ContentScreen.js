import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../themes/Index'
import FullScreen from './FullScreen'
import SearchScreen from './SearchScreen'
import UserScreen from './UserScreen'
import { toggleScreen } from '../actions/index'

// const Screen = props => {

// }


const ContentScreen = props => {
  const screenTitle = props.currentScreen === 'FullScreen'
    ? 'All Users' : props.currentScreen === 'UserScreen'
      ? 'User Detail' : 'Find Users'

  const screen = () => {
    switch (props.currentScreen) {
      case 'FullScreen':
        return (
          <FullScreen
            onCancel={() => props.toggleScreen('SearchScreen')}
          />
        )
      case 'UserScreen':
        return (
          <UserScreen
            users={props.users}
            onCancel={() => props.toggleScreen('SearchScreen')}
            onDetail={() => props.toggleScreen('FullScreen')}
          />
        )
      default:
        return (
          <SearchScreen
          />
        )
    }
  }

  return (
    <View style={styles.screenStyle}>
      <Text style={styles.titleStyle}>
        {screenTitle}
      </Text>
      {screen()}
    </View>
  )
}

const styles = StyleSheet.create({
  screenStyle: {
    margin: 10
  },
  titleStyle: {
    color: Colors.lightAccent,
    fontSize: 15,
    paddingBottom: 10
  }
})

const mapStateToProps = state => {
  return {
    currentScreen: state.currentScreen,
    users: state.users
  }
}

const mapDispatchToProps = { toggleScreen }
export default connect(mapStateToProps, mapDispatchToProps)(ContentScreen)
