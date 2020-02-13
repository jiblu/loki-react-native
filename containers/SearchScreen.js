import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { getUsers } from '../actions'
import { Colors } from '../themes/Index'
import Header from '../components/Header'

class SearchScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: ''
    }
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleUpdate (user) {
    this.setState({
      user: user
    })
  }

  handleSearch () {
    getUsers(this.state.user)
  }

  render ()  {
    return (
      <View style={styles.screenStyle}>
        <Text style={styles.screenTextStyle}>Find Users</Text>
        <View style={styles.inputContainerStyle}>
          <TextInput
            placeholder='User'
            style={styles.inputStyle}
            onBlur={Keyboard.dismiss}
            onChangeText={this.handleUpdate}
            value={this.state.user}
          />
          <TouchableOpacity
            style={styles.searchButtonStyle}
            onPress={this.handleSearch}
          >
            <Text style={styles.searchButtonTextStyle}>
              Search
            </Text>
          </TouchableOpacity>
          <Text>
            {JSON.stringify(this.props.users)}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screenStyle: {
    margin: 10
  },
  inputStyle: {
    backgroundColor: Colors.light,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: '100%'
  },
  inputContainerStyle: {
    alignItems: 'center'
  },
  searchButtonStyle: {
    backgroundColor: Colors.lightAccent,
    borderRadius: 10,
    padding: 10,
    width: '100%'
  },
  searchButtonTextStyle: {
    textAlign: 'center',
    color: Colors.white
  },
  screenTextStyle: {
    color: Colors.lightAccent,
    fontSize: 15
  }
})

const mapStateToProps = state => {
  return {
    users: state.users
  }
}
const mapDispatchToProps = { getUsers }

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)
