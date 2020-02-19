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
    ? 'User Detail' : props.currentScreen === 'UserScreen'
      ? 'Users List' : 'Find Users'

  const screen = () => {
    switch (props.currentScreen) {
      case 'FullScreen':
        return (
          <FullScreen
            onCancel={() => props.toggleScreen('SearchScreen')}
            user={props.user}
          />
        )
      case 'UserScreen':
        return (
          <UserScreen
            users={props.users}
            onCancel={() => props.toggleScreen('SearchScreen')}
            onDetail={(userDetail) => props.toggleScreen('FullScreen', userDetail)}
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
    users: state.users,
    user: state.user
  }
}

const mapDispatchToProps = { toggleScreen }
export default connect(mapStateToProps, mapDispatchToProps)(ContentScreen)
