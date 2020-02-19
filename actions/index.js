import axios from 'axios'
import keys from '../apiKeys.js'

const apiUrl = 'https://api.unsplash.com'

export const GET_USER = 'GET_USER'
export const GET_USERS = 'GET_USERS'
export const TOGGLE_SCREEN = 'TOGGLE_SCREEN'

// when clicking on user card save to store
export const getUser = (username) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}`)
      .then(response => {
        dispatch({ type: GET_USER, user: response.data })
      })
      .catch(error => {
        throw (error)
      })
  }
}

export const getUsers = (user) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/search/users?client_id=${keys.unsplashAccessKey}&query=${user}`)
      .then(response => {
        dispatch({ type: GET_USERS, users: response.data.results })
      })
      .catch(error => {
        console.log(`error: ${error} _ ${apiUrl}/search/users?client_id=${unsplashAccessKey}&query=${user}`)
      })
  }
}

export const toggleScreen = (screen, userData) => {
  return { type: TOGGLE_SCREEN, currentScreen: screen, user: userData }
}
