import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  StyleSheet
} from 'react-native'

import { ImagePicker } from 'expo'

import Header from '../../../app/components/Header'
import Input from '../../../app/components/Input'

export default class Add extends Component {
  componentDidMount () {
    console.log('Mounted')
  }

  _launchCamera () {
    console.log('pic')
    ImagePicker.launchCameraAsync()
      .then(data => {
        console.log(data)
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

        <View style={styles.addwrapper}>
          <View style={styles.add}>
            <TouchableWithoutFeedback onPress={this._launchCamera}>
              <Image source={require('../../../assets/icons/ic_add_a_photo.png')} />
            </TouchableWithoutFeedback>
          </View>
        </View>

        <View style={styles.inpwrapper}>
        <View style={styles.txtwrapper}>
          <Text style={styles.txt}>Location:</Text>
        </View>
          <View style={styles.inp}>
            <Input />
          </View>

          <View style={styles.txtwrapper}>
            <Text style={styles.txt}>Category:</Text>
          </View>
          <View style={styles.inp}>
            <Input />
          </View>

          <View style={styles.txtwrapper}>
            <Text style={styles.txt}>Sketchyness:</Text>
          </View>
          <View style={styles.inp}>
            <Input />
          </View>

          <View style={styles.txtwrapper}>
            <Text style={styles.txt}>Availability:</Text>
          </View>
          <View style={styles.inp}>
            <Input />
          </View>
        </View>
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
  inp: {
    flex: 2,
    justifyContent: 'space-around'
  }
})
