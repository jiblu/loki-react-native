import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import FullScreen from './FullScreen'
import SearchScreen from './SearchScreen'
import UserScreen from './UserScreen'
import { toggleScreen } from '../actions/index'

const ContentScreen = props => {
  const screen = props.currentScreen === 'FullScreen' ? <FullScreen /> :
    props.currentScreen === 'UserScreen' ? <UserScreen users={props.users} onCancel={() => props.toggleScreen('SearchScreen')}/> : <SearchScreen />
  return screen 
}

const mapStateToProps = state => {
  return {
    currentScreen: state.currentScreen,
    users: state.users
  }
}

const mapDispatchToProps = { toggleScreen }
export default connect(mapStateToProps, mapDispatchToProps)(ContentScreen)
