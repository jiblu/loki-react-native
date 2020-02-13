import {
  GET_USER,
  GET_USERS
} from '../actions/index'

const initialState = {
  user: '',
  users: [1, 2, 3]
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
        users: action.users
      }
    default:
      return state
  }
}