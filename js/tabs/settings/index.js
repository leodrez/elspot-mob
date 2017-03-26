import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet
} from 'react-native'

import Header from '../../../app/components/Header'

const onButtonPress = () => {
  Alert.alert('You have been logged out');
}

export default class Settings extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View>
          <Header />
        </View>

        <View style={styles.btn}>
          <Button
            onPress={onButtonPress}
            title='LOG OUT'
            color='#B0F6E6'
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252839'
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
