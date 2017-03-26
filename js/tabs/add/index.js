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
          <TouchableWithoutFeedback onPress={this._launchCamera}>
            <Text>Take a Pic</Text>
          </TouchableWithoutFeedback>
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
