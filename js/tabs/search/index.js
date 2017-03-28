import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native'
import { Permissions, Location } from 'expo'

import Header from '../../../app/components/Header'
import Map from '../../../app/components/Map'
import Input from '../../../app/components/Input'

export default class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      spots: null
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
        let latitude = coords.latitude || 18.411178
        let longitude = coords.longitude || -66.072216
        return fetch(`http://localhost:3000/spots?location=true&latitude${latitude}&longitude=${longitude}`)
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
        <View>
          <Header />
        </View>
        <View style={styles.input}>
          <Input />
        </View>

        <View style={styles.mapa}>
          <Map />
        </View>

        <View style={styles.near}>
          <Text style={styles.txt}>NEAR</Text>
        </View>

        <View style={styles.rowOne}>
          <TouchableWithoutFeedback onPress={this._goToSpot}>
            <Text style={styles.imgPlaceholder}>Placeholder</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this._goToSpot}>
            <Text style={styles.imgPlaceholder}>Placeholder</Text>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.rowTwo}>
          <TouchableWithoutFeedback onPress={this._goToSpot}>
            <Text style={styles.imgPlaceholder}>Placeholder</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this._goToSpot}>
            <Text style={styles.imgPlaceholder}>Placeholder</Text>
          </TouchableWithoutFeedback>
          </View>
      </View>
    )
  }

  _goToSpot = () => {
    this.props.navigator.push('spot')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252839'
  },
  input: {
    flex: 1,
    justifyContent: 'center'
  },
  mapa: {
    flex: 4,
    paddingHorizontal: 5
  },
  near: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 5
  },
  txt: {
    color: '#B0F6E6',
    fontSize: 18
  },
  rowOne: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5
  },
  rowTwo: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5
  },
  imgPlaceholder: {
    height: Dimensions.get('window').height - 560,
    width: Dimensions.get('window').width - 195,
    backgroundColor: '#fff'
  }
})
