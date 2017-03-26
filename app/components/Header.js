import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet,
  View,
  Image
} from 'react-native'

export default class Header extends Component {
  render () {
    return (
      <View style={styles.header}>
        <View style={styles.container}>
          <Image source={require('../../assets/icons/ic_elspotpink.png')} />
        </View>
      </View>
    )
  }
}

AppRegistry.registerComponent('Header', () => Header)

const styles = StyleSheet.create({
  header: {
    height: 55
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDF5FA',
    paddingTop: 10
  }
})
