import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './src/reducers/index'
import thunk from 'redux-thunk'
import Header from './src/components/Header'
import { View, Text } from 'react-native'
import ContentScreen from './src/containers/ContentScreen'

const store = createStore(reducer, applyMiddleware(thunk))
const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Header />
        <ContentScreen />
      </View>
    </Provider>
  )
}

export default App
