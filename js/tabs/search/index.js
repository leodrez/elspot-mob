import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  ListView,
  TouchableWithoutFeedback,
  Image
} from 'react-native'
import { Permissions, Location, MapView } from 'expo'

export default class Search extends Component {
  constructor (props) {
    super(props)    
    this.state = {
      loading: false,
      spots: []
    }

  }

  componentDidMount () {
    Permissions.getAsync(Permissions.LOCATION)
      .then(result => {
        if (result.status === 'granted') {
          return Location.getCurrentPositionAsync()
        }
        return Promise.resolve()
      })
      .then(coords => {
        // Default to Parque Luis Muñoz Marín if no location is granted
        // let latitude = coords.latitude || 18.411178
        // let longitude = coords.longitude || -66.072216
        // return fetch(`http://localhost:3000/spots?location=true&latitude${latitude}&longitude=${longitude}`)
        return Promise.resolve(['row1', 'row2', 'row2'])
      })
      .then(data => {
        this.setState({
          loading: false,
          spots: data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Image source={require('../../../assets/icons/ic_elspotpink.png')} />
          </View>
        </View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 18.466333,
            longitude: -66.105721,
            latitudeDelta: 1.0,
            longitudeDelta: 0.9,
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252839'
  },
  headerContainer: {
    height: 55,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDF5FA',
    paddingTop: 10
  },
  map: {
    flex: 1
  }
})
