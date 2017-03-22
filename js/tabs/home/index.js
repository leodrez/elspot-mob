import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

export default class Home extends Component {
  render () {
    return (
      <View style={styles.main}>
        <View style={styles.contOne}>
          <Text>Near</Text>
        </View>
        <View style={styles.contTwo}>
          <Text>Recently Added</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contOne: {
    flex: 2,
    backgroundColor: 'red'
  },
  contTwo: {
    flex: 2,
    backgroundColor: 'blue'
  }
})
