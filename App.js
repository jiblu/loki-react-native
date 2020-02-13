import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/index'
import thunk from 'redux-thunk'
import Header from './components/Header'
import { View, Text } from 'react-native'
import SearchScreen from './containers/SearchScreen'

const store = createStore(reducer, applyMiddleware(thunk))
const App = () => {
  console.log('blah')
  console.log(process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY)
  return (
    <Provider store={store}>
      <View>
        <Header />
        <SearchScreen />
      </View>
    </Provider>
  )
}

export default App
