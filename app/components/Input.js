import React, { Component } from 'react'
import {
  AppRegistry,
  TextInput,
  StyleSheet,
  Dimensions
} from 'react-native'

export default class Input extends Component {
  constructor (props) {
    super (props)
    this.state = { text: 'Location' }
  }

  render () {
    return (
        <TextInput style={styles.txtInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
    )
  }
}

const styles = StyleSheet.create({
  txtInput: {
    height: 30,
    width: Dimensions.get('window').width - 50,
    borderColor: '#E0106D',
    borderWidth: 1,
    alignSelf: 'center',
    color: '#fff',
    textAlign: 'center'
  }
})

AppRegistry.registerComponent('Input', () => Input)
