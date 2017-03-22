import Expo from 'expo'
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import Root from './js/root'

class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Root />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#666',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff'
  }
})

Expo.registerRootComponent(App)
