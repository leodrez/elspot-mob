import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  StyleSheet,
  TextInput
} from 'react-native'

import { ImagePicker, Permissions, Location } from 'expo'

export default class Add extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      location: null,
      locationCaptured: false,
      category: '',
      sketchyness: '',
      availability: ''
    }
  }

  _launchCamera () {
    Permissions.getAsync(Permissions.CAMERA)
      .then(result => {
        if (result.status === 'granted') {
          return ImagePicker.launchCameraAsync()
        }
      })
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  _captureLocation () {
    Permissions.getAsync(Permissions.LOCATION)
      .then(result => {
        console.log(result)
        if (result.status === 'granted') {
          return Location.getCurrentPositionAsync()
        }
        return Promise.resolve()
      })
      .then(coords => {
        console.log(coords)
        if (coords) {
          this.setState({
          location: {
            lat: coords.latitude,
            lon: coords.longitude
          },
          locationCaptured: true
        })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  _createSpot () {
    
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Image source={require('../../../assets/icons/ic_elspotpink.png')} />
          </View>
        </View>
        <View style={styles.addwrapper}>
          <View style={styles.add}>
            <TouchableWithoutFeedback onPress={this._launchCamera}>
              <Image source={require('../../../assets/icons/ic_add_a_photo.png')} />
            </TouchableWithoutFeedback>
          </View>
        </View>

          <View style={styles.txtwrapper}>
            <Text style={styles.txt}>Location:</Text>
          </View>
          <View style={styles.field}>
            {
              this.state.locationCaptured ?
              <View style={styles.btn}>
                <Text textAlign='center' style={{color: 'green'}}>Captured!</Text>
              </View> :
              <TouchableWithoutFeedback onPress={this._captureLocation.bind(this)}>
                <View style={styles.btn}>
                  <Text textAlign='center' style={{color: '#B0F6E6'}}>Capture Location</Text>
                </View>
              </TouchableWithoutFeedback>
            }
            
          </View>

          <View style={styles.txtwrapper}>
            <Text style={styles.txt}>Category:</Text>
          </View>
          <View style={styles.inp}>
            <TextInput/>
          </View>

          <View style={styles.txtwrapper}>
            <Text style={styles.txt}>Sketchyness:</Text>
          </View>
          <View style={{ borderBottomWidth: 1, borderBottomColor: 'white'}}>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              onChangeText={(text) => this.setState({ category: text })}
              value={this.state.category}
            />
          </View>

          <View style={styles.txtwrapper}>
            <Text style={styles.txt}>Availability:</Text>
          </View>
          <View style={styles.inp}>
            <TextInput/>
          </View>
          <TouchableWithoutFeedback>
            <View>
              <Text>
                Create Spot
              </Text>
            </View>
          </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
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
  addwrapper: {
    flex: 2,
    paddingHorizontal: 5,
    paddingTop: 10
  },
  add: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtwrapper: {
    flex: 1,
    paddingLeft: 5,
    justifyContent: 'center'
  },
  txt: {
    color: '#B0F6E6',
    fontSize: 14
  },
  inpwrapper: {
    flex: 3
  },
  input: {
    height: 25,
    width: Dimensions.get('window').width - 15,
    color: 'white'
  },
  field: {
    width: Dimensions.get('window').width,
    height: 50,
    padding: 5
  },
  btn: {
    backgroundColor: '#E0106D',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
