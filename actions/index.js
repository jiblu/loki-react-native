import axios from 'axios'
import { unsplashSecretKey, unsplashAccessKey } from '../apiKeys'

const apiUrl = 'https://api.unsplash.com'

export const GET_USER = 'GET_USER'
export const GET_USERS = 'GET_USERS'

export const getUser = () => {
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
    return axios.get(`${apiUrl}/search/users?query=${user}`)
      .then(response => {
        dispatch({ type: GET_USERS, users: response.data })
      })
      .catch(error => {
        throw (error)
      })
  }
}