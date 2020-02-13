import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import FullScreen from './FullScreen'
import SearchScreen from './SearchScreen'
import UserScreen from './UserScreen'

const ContentScreen = props => {
  const screen = props.currentScreen === 'FullScreen' ? <FullScreen /> :
    props.currentScreen === 'UserScreen' ? <UserScreen users={props.users} /> : <SearchScreen />
  return screen 
}

const mapStateToProps = state => {
  return {
    currentScreen: state.currentScreen,
    users: state.users
  }
}
export default connect(mapStateToProps)(ContentScreen)
