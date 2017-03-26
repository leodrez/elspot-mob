import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet
} from 'react-native'

import { MapView } from 'expo'

export default class Map extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  }

  render() {
    return (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 18.466333,
            longitude: -66.105721,
            latitudeDelta: 1.0,
            longitudeDelta: 0.9,
          }}
        />
    )
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
})

AppRegistry.registerComponent('Map', () => Map)
