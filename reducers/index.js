import {
  GET_USER,
  GET_USERS,
  TOGGLE_SCREEN
} from '../actions/index'

const initialState = {
  user: '',
  users: [],
  currentScreen: 'SearchScreen'
}

export default function rootReducer (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.user
      }
    case GET_USERS:
      return {
        ...state,
        users: action.users,
        currentScreen: 'UserScreen'
      }
    case TOGGLE_SCREEN:
      return {
        ...state,
        currentScreen: action.currentScreen,
        user: action.user
      }
    default:
      return state
  }
}